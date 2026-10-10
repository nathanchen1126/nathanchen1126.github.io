import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/current-work/', '/research/', '/publications/', '/cv/'].map((path) => ({ url: 'https://nathanchen1126.github.io' + (path || '/'), lastModified: new Date('2026-10-10T00:00:00+08:00') }));
}
