import "./globals.css";
import "./performance.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { personSchema, organizationSchema } from "@/app/structured-data";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nathan Reardon | Inventor, Entrepreneur & Innovator | 34 Patents",
  description: "Discover Nathan Reardon's portfolio of 34 filed patents and 120+ in development spanning technology, healthcare, automotive, energy, aerospace, and more. American inventor and entrepreneur.",
  keywords: "Nathan Reardon, inventor, innovator, patents, entrepreneur, technology, healthcare, automotive, energy, aerospace, defense, consumer products",
  authors: [{ name: "Nathan Reardon" }],
  creator: "Nathan Reardon",
  publisher: "Nathan Reardon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nathanreardon.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Nathan Reardon | Inventor, Entrepreneur & Innovator | 34 Patents",
    description: "Explore 34 filed patents and 120+ patents in development by American inventor Nathan Reardon. Innovation across 14+ industries.",
    url: "https://nathanreardon.com",
    siteName: "Nathan Reardon - Patent Portfolio & Innovations",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nathan Reardon - Inventor & Innovator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathan Reardon | Inventor & Innovator | 34 Patents",
    description: "Explore breakthrough patents in technology, healthcare, energy, and defense by inventor Nathan Reardon.",
    images: ["/og-image.png"],
    creator: "@nathanreardon",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code', // Replace with actual verification code
    other: {
      'msvalidate.01': 'your-bing-verification-code', // Replace with actual verification code
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Google Analytics (Optional - add your GA4 ID) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[var(--color-bg)] text-[var(--color-text)] overflow-x-hidden`}
      >
        <div className="flex min-h-screen flex-col w-full max-w-[100vw]">
          <Header />
          <main className="flex-1 w-full overflow-x-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
