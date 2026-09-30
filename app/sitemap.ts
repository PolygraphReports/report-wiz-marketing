import type { MetadataRoute } from 'next'

const SITE_URL = 'https://reportwiz.ai'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: 'monthly', priority: 1 },
    {
      url: `${SITE_URL}/report-wiz-vs-longeye`,
      lastModified: new Date('2026-09-29'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/ai-responsible-use-polygraph`,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}
