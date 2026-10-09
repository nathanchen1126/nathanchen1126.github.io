'use client';
import { useLocaleStore } from '@/lib/stores/localeStore';
import { useMessages } from '@/lib/i18n/useMessages';
interface FooterProps {
  lastUpdated?: string;
  lastUpdatedByLocale?: Record<string, string | undefined>;
  defaultLocale?: string;
}
export default function Footer({ lastUpdated, lastUpdatedByLocale, defaultLocale = 'en' }: FooterProps) {
  const locale = useLocaleStore((state) => state.locale);
  const messages = useMessages();
  const updated = lastUpdatedByLocale?.[locale] || lastUpdatedByLocale?.[defaultLocale] || lastUpdated;
  return <footer className="academic-footer"><div className="footer-inner"><p>© 2026 Nan Chen</p><p>{messages.footer.lastUpdated}: {updated}</p><a href="https://github.com/xyjoey/PRISM" target="_blank" rel="noopener noreferrer">{messages.footer.builtWithPrism}</a></div></footer>;
}
