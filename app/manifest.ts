import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nathan Reardon | Inventor & Innovator',
    short_name: 'Nathan Reardon',
    description: 'Patent portfolio of American inventor Nathan Reardon with 250 patents spanning more than 35 industries and over 50 market segments',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
