import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nathanreardon.com';
  
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/patents`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/achievements`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ];

  // Dynamic patent pages
  const patents = [
    'quantus',
    'radiamel',
    'solin',
    'core-volt',
    'storm-defender',
    'vita-choice',
    'reardon-cancer-protocol',
    'invisishield',
    'poo-gone',
    'no-sweat',
    'no-dry-starts-oil-pump',
    'never-forget-baby',
    'autophashield',
    'invisishield-glass',
    'scentinel',
    'patch-worx',
    'sani-spray',
    'reardon-diabetes-protocol',
    'apex-alert',
    'apex-swarm',
    'kirk-collar',
    'apex-defense',
    'genesis-chamber',
    'aurum-flux',
    'lacto-clear',
    'cravex',
    'pyra-pipe',
    'magma-bit',
    'ice-shield-roads',
    'dormigen',
    'r-board',
    'membership-auto',
    'liberty-social',
    'freedom-teck',
  ];

  const patentPages: MetadataRoute.Sitemap = patents.map((patent) => ({
    url: `${baseUrl}/${patent}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...patentPages];
}
