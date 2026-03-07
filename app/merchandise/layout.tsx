import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Merchandise | Nathan Reardon - Official Store',
  description: 'Explore exclusive Nathan Reardon merchandise and branded apparel celebrating innovation and entrepreneurship.',
  keywords: 'merchandise, store, apparel, branded, Nathan Reardon',
  openGraph: {
    title: 'Merchandise | Nathan Reardon',
    description: 'Shop Nathan Reardon official merchandise and branded products.',
    url: 'https://nathanreardon.com/merchandise',
    type: 'website',
  },
};

export default function MerchandiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
