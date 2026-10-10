'use client';

import Image from 'next/image';
import type { CardPageConfig } from '@/types/page';
import { useLocaleStore } from '@/lib/stores/localeStore';

export default function CurrentWork({ config, embedded = false }: { config: CardPageConfig; embedded?: boolean }) {
  const isChinese = useLocaleStore((state) => state.locale) === 'zh';
  const Heading = embedded ? 'h2' : 'h1';
  const fullSizeLabel = isChinese ? '查看完整图件' : 'View full-size figure';

  return (
    <section className="current-work">
      <header className="work-page-header">
        <Heading>{config.title}</Heading>
      </header>
      <div className="work-list">
        {config.items.map((item) => (
          <article className="work-row" key={item.title}>
            <div className="work-text">
              {item.subtitle && <p className="eyebrow">{item.subtitle}</p>}
              <h2>{item.title}</h2>
              {item.content && <p className="work-description">{item.content}</p>}
            </div>
            {item.image && (
              <figure className="work-figure">
                <a href={item.image} target="_blank" rel="noopener noreferrer" aria-label={fullSizeLabel} className="work-image-link">
                  <Image src={item.image} alt={item.image_alt || item.title} width={item.image_width || 1600} height={item.image_height || 1000} />
                </a>
                {item.image_caption && <figcaption>{item.image_caption}</figcaption>}
                <a href={item.image} target="_blank" rel="noopener noreferrer" className="work-full-size">{fullSizeLabel}<span aria-hidden="true"> ↗</span></a>
              </figure>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
