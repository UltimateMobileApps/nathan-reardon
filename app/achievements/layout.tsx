import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Achievements | Nathan Reardon',
  description: 'View the remarkable achievements and milestones of inventor Nathan Reardon, including awards, recognitions, and major innovations.',
  keywords: 'achievements, awards, recognitions, inventor, innovations, milestones',
  openGraph: {
    title: 'Achievements | Nathan Reardon',
    description: 'Discover Nathan Reardon\'s achievements and accomplishments.',
    url: 'https://nathanreardon.com/achievements',
    type: 'website',
  },
};

export default function AchievementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
