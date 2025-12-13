"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { GRADIENTS } from '@/constants/styles';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<{[key: string]: string}>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors: {[key: string]: string} = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Submit to API endpoint
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to send message');
            }

            // Handle different response methods
            if (result.method === 'mailto' && result.mailtoLink) {
                // Fallback to mailto if API email sending failed
                window.location.href = result.mailtoLink;
                
                // Wait a moment then show success
                setTimeout(() => {
                    setSubmitStatus('success');
                }, 1000);
            } else {
                // Email was sent successfully via API
                setSubmitStatus('success');
            }
            
            // Reset form after success
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    subject: '',
                    message: ''
                });
                setSubmitStatus('idle');
            }, 5000);

        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactMethods = [
        {
            icon: Mail,
            title: "Email",
            primary: "nathan@membershipauto.com",
            secondary: "Response within 24 hours",
            href: "mailto:nathan@membershipauto.com",
            color: "text-red-400"
        },
        {
            icon: Phone,
            title: "Phone",
            primary: "+1 (207) 947-1999",
            secondary: "Available during business hours",
            href: "tel:+12079471999",
            color: "text-blue-400"
        },
        {
            icon: MapPin,
            title: "Location",
            primary: "Detroit, ME 04929",
            secondary: "",
            href: null,
            color: "text-red-400"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-white/5 rounded-full blur-3xl"></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-8 md:pb-12">
                {/* Back Button */}
                <div className="mb-8 hero-fade-in-up">
                    <Link
                        href="/"
                        className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="text-sm">Back to Home</span>
                    </Link>
                </div>

                {/* Header */}
                <div className="text-center mb-12 md:mb-16 hero-fade-in-up hero-fade-in-up-delay-1">
                    <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 ${GRADIENTS.heroText} bg-clip-text text-transparent`}>
                        Let's Connect
                    </h1>
                    <p className="text-base md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
                        Ready to discuss innovation, licensing opportunities, or partnerships? 
                        I'm always interested in connecting with forward-thinking individuals and organizations.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Contact Information */}
                    <div className="space-y-6 md:space-y-8 hero-fade-in-up hero-fade-in-up-delay-2">
                        {/* Profile Card */}
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500/50 flex-shrink-0">
                                    <Image
                                        src="/nathan-img.png"
                                        alt="Nathan Reardon"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="text-center sm:text-left">
                                    <h3 className={`text-xl md:text-2xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent`}>
                                        Nathan Reardon
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-base">Inventor • Entrepreneur • Author</p>
                                </div>
                            </div>
                            <p className="text-white-400 leading-relaxed text-sm md:text-base">
                                With 26 years of experience in automotive innovation and 25 patents filed across multiple industries, 
                                I'm passionate about creating solutions that make a real difference in people's lives.
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="grid grid-cols-1 gap-4">
                            {contactMethods.map((method, index) => {
                                const IconComponent = method.icon;
                                return (
                                    <div
                                        key={method.title}
                                        className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 md:p-6 hover:border-red-500/50 transition-all duration-300 group cursor-pointer hero-fade-in-up hero-fade-in-up-delay-${3 + index}`}
                                        onClick={() => method.href && window.open(method.href, method.href.startsWith('mailto:') || method.href.startsWith('tel:') ? '_self' : '_blank')}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <IconComponent className={`w-5 h-5 md:w-6 md:h-6 ${method.color} group-hover:scale-110 transition-transform duration-300`} />
                                            <div className="min-w-0 flex-1">
                                                <h4 className="text-white font-semibold text-sm md:text-base group-hover:text-white transition-colors">
                                                    {method.title}
                                                </h4>
                                                <p className="text-blue-400 font-medium text-xs md:text-sm truncate">{method.primary}</p>
                                                <p className="text-gray-500 text-xs">{method.secondary}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Call to Action */}
                        <div className="bg-gradient-to-r from-blue-500/20 to-red-500/20 border border-blue-500/30 rounded-xl p-4 md:p-6 hero-fade-in-up hero-fade-in-up-delay-4">
                            <h4 className="text-white font-bold mb-2 text-sm md:text-base">🚀 Ready to Innovate Together?</h4>
                            <p className="text-gray-300 text-xs md:text-sm mb-4">
                                Whether you're interested in licensing my patents, discussing investment opportunities, 
                                or exploring collaboration, I'd love to hear from you.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 md:px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs">Patent Licensing</span>
                                <span className="px-2 md:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Partnerships</span>
                                <span className="px-2 md:px-3 py-1 bg-white/20 text-white rounded-full text-xs">Consulting</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 hero-fade-in-up hero-fade-in-up-delay-3">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Send a Message</h3>
                        
                        {submitStatus === 'success' ? (
                            <div className="text-center py-8 md:py-12 hero-fade-in-scale">
                                <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-green-400 mx-auto mb-4" />
                                <h4 className="text-lg md:text-xl font-bold text-green-400 mb-2">Message Sent Successfully!</h4>
                                <p className="text-gray-300 text-sm md:text-base">
                                    Thank you for reaching out! I'll get back to you within 24 hours.
                                </p>
                                <div className="mt-4 text-xs text-gray-400">
                                    <p>Your message has been delivered to nathan@membershipauto.com</p>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors text-sm md:text-base ${
                                                errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-red-500'
                                            }`}
                                            placeholder="Your full name"
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-xs text-red-400 flex items-center">
                                                <AlertCircle className="w-3 h-3 mr-1" />
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors text-sm md:text-base ${
                                                errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-red-500'
                                            }`}
                                            placeholder="your@email.com"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-xs text-red-400 flex items-center">
                                                <AlertCircle className="w-3 h-3 mr-1" />
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Company/Organization
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors text-sm md:text-base"
                                        placeholder="Your company"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors text-sm md:text-base ${
                                            errors.subject ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-red-500'
                                        }`}
                                        placeholder="Brief subject line"
                                    />
                                    {errors.subject && (
                                        <p className="mt-1 text-xs text-red-400 flex items-center">
                                            <AlertCircle className="w-3 h-3 mr-1" />
                                            {errors.subject}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={6}
                                        className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors resize-none text-sm md:text-base ${
                                            errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-red-500'
                                        }`}
                                        placeholder="Tell me about your project, opportunity, or how I can help..."
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-xs text-red-400 flex items-center">
                                            <AlertCircle className="w-3 h-3 mr-1" />
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                {submitStatus === 'error' && (
                                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                                        <p className="text-red-400 text-sm flex items-center">
                                            <AlertCircle className="w-4 h-4 mr-2" />
                                            There was an error sending your message. Please try again or contact me directly.
                                        </p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-semibold py-3 md:py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group text-sm md:text-base"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Preparing Email...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center">
                                            Send Message
                                            <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </span>
                                    )}
                                </button>

                                <p className="text-xs text-gray-400 text-center">
                                    Your message will be sent directly to Nathan's email inbox.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
