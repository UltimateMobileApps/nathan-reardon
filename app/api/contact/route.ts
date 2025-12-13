import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import xss from 'xss';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// HTML escape function for additional safety
function escapeHtml(text: string): string {
    const map: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Sanitize function that escapes HTML and removes dangerous content
function sanitizeInput(input: string): string {
    if (!input || typeof input !== 'string') {
        return '';
    }
    // First escape HTML entities
    const escaped = escapeHtml(input);
    // Then use xss library for additional sanitization
    return xss(escaped, {
        whiteList: {}, // No HTML tags allowed
        stripIgnoreTag: true,
        stripIgnoreTagBody: ['script']
    });
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, company, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Sanitize all user inputs to prevent XSS attacks
        const sanitizedName = sanitizeInput(name);
        const sanitizedEmail = sanitizeInput(email);
        const sanitizedCompany = company ? sanitizeInput(company) : '';
        const sanitizedSubject = sanitizeInput(subject);
        const sanitizedMessage = sanitizeInput(message);

        // Validate that sanitized inputs are not empty (after sanitization)
        if (!sanitizedName || !sanitizedEmail || !sanitizedSubject || !sanitizedMessage) {
            return NextResponse.json(
                { error: 'Invalid input detected' },
                { status: 400 }
            );
        }

        // Create email content
        const emailContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #ef4444, #3b82f6); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; }
        .field { margin-bottom: 20px; }
        .label { font-weight: 600; color: #475569; margin-bottom: 8px; display: block; }
        .value { background: white; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; }
        .message-box { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; white-space: pre-wrap; }
        .footer { text-align: center; margin-top: 30px; padding: 20px; color: #64748b; font-size: 14px; }
        .badge { display: inline-block; background: #3b82f6; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; margin-top: 8px; }
    </style>
</head>
<body>
    <div class="header">
        <h1 style="margin: 0; font-size: 28px;">New Contact Form Submission</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Nathan Reardon Portfolio</p>
    </div>
    
    <div class="content">
        <div class="field">
            <span class="label">From:</span>
            <div class="value">
                <strong>${sanitizedName}</strong>
                <br>
                <a href="mailto:${sanitizedEmail}" style="color: #3b82f6; text-decoration: none;">${sanitizedEmail}</a>
                ${sanitizedCompany ? `<div class="badge">${sanitizedCompany}</div>` : ''}
            </div>
        </div>

        <div class="field">
            <span class="label">Subject:</span>
            <div class="value">${sanitizedSubject}</div>
        </div>

        <div class="field">
            <span class="label">Message:</span>
            <div class="message-box">${sanitizedMessage}</div>
        </div>
    </div>

    <div class="footer">
        <p>This message was sent through your portfolio contact form.</p>
        <p style="color: #94a3b8;">Sent on ${new Date().toLocaleString('en-US', { 
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        })}</p>
    </div>
</body>
</html>
        `.trim();

        // Attempt to send email using Resend
        try {
            if (process.env.RESEND_API_KEY) {
                const { data, error } = await resend.emails.send({
                    from: 'Portfolio Contact <noreply@nathanreardon.com>',
                    to: ['info@nathanreardon.com'],
                    replyTo: sanitizedEmail,
                    subject: `Portfolio Contact: ${sanitizedSubject}`,
                    html: emailContent,
                });

                if (error) {
                    console.error('Resend error:', error);
                    throw new Error('Failed to send via Resend');
                }

                return NextResponse.json({ 
                    success: true, 
                    message: 'Email sent successfully',
                    method: 'resend'
                });
            }
        } catch (resendError) {
            console.warn('Resend failed, falling back to mailto:', resendError);
        }

        // Fallback: Return mailto link if Resend fails or isn't configured
        const emailBody = `
Name: ${sanitizedName}
Email: ${sanitizedEmail}
Company: ${sanitizedCompany || 'Not specified'}
Subject: ${sanitizedSubject}

Message:
${sanitizedMessage}
        `.trim();

        const mailtoLink = `mailto:nathan@membershipauto.com?subject=${encodeURIComponent(`Portfolio Contact: ${sanitizedSubject}`)}&body=${encodeURIComponent(emailBody)}`;

        return NextResponse.json({ 
            success: true, 
            message: 'Mailto link generated',
            method: 'mailto',
            mailtoLink
        });

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
