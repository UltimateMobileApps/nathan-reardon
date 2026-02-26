import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Nathan Reardon - Inventor & Entrepreneur',
  description: 'Get in touch with Nathan Reardon for patent licensing, collaboration opportunities, or innovation partnerships.',
  keywords: 'contact, inventor, licensing, collaboration, partnership, innovation',
  openGraph: {
    title: 'Contact | Nathan Reardon',
    description: 'Contact Nathan Reardon for licensing and collaboration opportunities.',
    url: 'https://nathanreardon.com/contact',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
