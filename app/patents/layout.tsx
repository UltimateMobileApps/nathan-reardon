import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patent Portfolio | 34 Filed Patents | Nathan Reardon',
  description: 'Explore Nathan Reardon\'s 34 filed patents spanning 14+ industries including defense, healthcare, energy, aerospace, automotive, and consumer products. Breakthrough innovations with global impact.',
  keywords: 'patents, inventor, innovation, defense technology, healthcare patents, energy solutions, automotive technology, aerospace patents',
  openGraph: {
    title: 'Patent Portfolio | Nathan Reardon',
    description: 'Discover 34 groundbreaking patents across technology, healthcare, defense, and more.',
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
