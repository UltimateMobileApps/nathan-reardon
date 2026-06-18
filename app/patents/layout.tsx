import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patent Portfolio | 250 Patents | Nathan Reardon',
  description: 'Explore Nathan Reardon\'s 250-patent portfolio spanning more than 35 industries and over 50 market segments, including defense, healthcare, energy, automotive, security, and consumer products.',
  keywords: 'patents, inventor, innovation, defense technology, healthcare patents, energy solutions, automotive technology, aerospace patents',
  openGraph: {
    title: 'Patent Portfolio | Nathan Reardon',
    description: 'Discover 250 patents across technology, healthcare, defense, energy, security, and more.',
    url: 'https://nathanreardon.com/patents',
    type: 'website',
  },
};

export default function PatentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
