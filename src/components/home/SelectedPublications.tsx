'use client';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Publication } from '@/types/publication';
import { useMessages } from '@/lib/i18n/useMessages';
import FormattedBibTeXText from '@/components/publications/FormattedBibTeXText';
interface SelectedPublicationsProps {
  publications: Publication[];
  title?: string;
  enableOnePageMode?: boolean;
}
export default function SelectedPublications({ publications, title, enableOnePageMode = false }: SelectedPublicationsProps) {
  const messages = useMessages();
  return <section className="selected-publications">
    <div className="section-heading"><h2 className="font-serif">{title || messages.home.selectedPublications}</h2><Link href={enableOnePageMode ? '/#publications' : '/publications/'}>{messages.home.viewAll}<ArrowUpRight size={15} aria-hidden="true" /></Link></div>
    <div>{publications.map((pub) => <article key={pub.id} className="publication-row">
      <div className="publication-meta"><span>{pub.journal || pub.conference}</span><span>{pub.year}</span></div>
      <h3><FormattedBibTeXText nodes={pub.titleNodes} fallback={pub.title} /></h3>
      <p className="publication-authors">{pub.authors.map((author, index) => <span key={author.name}>{index > 0 && ', '}<span className={author.isHighlighted ? 'owner-name' : ''}>{author.name}</span></span>)}</p>
      {pub.description && <p className="publication-description">{pub.description}</p>}
      {pub.doi && <a className="paper-link" href={'https://doi.org/' + pub.doi} target="_blank" rel="noopener noreferrer">DOI<ArrowUpRight size={13} aria-hidden="true" /></a>}
    </article>)}</div>
  </section>;
}
