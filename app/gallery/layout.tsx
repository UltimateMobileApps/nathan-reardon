import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Nathan Reardon',
  description: 'Explore Nathan Reardon\'s gallery featuring personal photos, cars, family moments, and visual documentation of achievements.',
  keywords: 'gallery, photos, personal, achievements, documentation',
  openGraph: {
    title: 'Gallery | Nathan Reardon',
    description: 'View Nathan Reardon\'s personal gallery.',
    url: 'https://nathanreardon.com/gallery',
    type: 'website',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
