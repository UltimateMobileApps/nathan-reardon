import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Books | Nathan Reardon - Author & Entrepreneur',
  description: 'Explore Nathan Reardon\'s collection of books on innovation, entrepreneurship, and personal development.',
  keywords: 'books, author, innovation, entrepreneurship, personal development, Nathan Reardon',
  openGraph: {
    title: 'Books | Nathan Reardon',
    description: 'Discover Nathan Reardon\'s books on innovation and entrepreneurship.',
    url: 'https://nathanreardon.com/books',
    type: 'website',
  },
};

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}