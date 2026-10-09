'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import LanguageToggle from '@/components/ui/LanguageToggle';
import { useLocaleStore } from '@/lib/stores/localeStore';
import type { SiteConfig } from '@/lib/config';
import type { I18nRuntimeConfig } from '@/types/i18n';
interface NavigationProps {
  items: SiteConfig['navigation'];
  siteTitle: string;
  enableOnePageMode?: boolean;
  i18n: I18nRuntimeConfig;
  itemsByLocale?: Record<string, SiteConfig['navigation']>;
  siteTitleByLocale?: Record<string, string>;
}
export default function Navigation({ items, siteTitle, i18n, itemsByLocale, siteTitleByLocale }: NavigationProps) {
  const pathname = usePathname();
  const locale = useLocaleStore((state) => state.locale);
  const [open, setOpen] = useState(false);
  const navItems = itemsByLocale?.[locale] || items;
  const title = siteTitleByLocale?.[locale] || siteTitle;
  const isChinese = locale === 'zh';
  const normalize = (href: string) => href.replace(/\/$/, '') || '/';
  const links = (mobile = false) => navItems.map((item) => {
    const active = normalize(pathname) === normalize(item.href);
    return <Link key={item.target} href={item.href} onClick={() => setOpen(false)} className={'nav-link ' + (active ? 'is-active ' : '') + (mobile ? 'mobile-nav-link' : '')} aria-current={active ? 'page' : undefined}>{item.title}</Link>;
  });
  return <header className="academic-header">
    <nav aria-label={isChinese ? '主导航' : 'Main navigation'} className="header-inner">
      <Link href="/" className="wordmark" onClick={() => setOpen(false)}><span className="wordmark-seal" aria-hidden="true">nc</span><span>{title}</span></Link>
      <div className="desktop-navigation">{links()}</div>
      <div className="header-controls"><LanguageToggle i18n={i18n} /><ThemeToggle /><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={isChinese ? '切换导航菜单' : 'Toggle navigation menu'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X size={21} /> : <Menu size={21} />}</button></div>
    </nav>
    {open && <div id="mobile-navigation" className="mobile-navigation">{links(true)}</div>}
  </header>;
}
