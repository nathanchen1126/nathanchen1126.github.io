'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import type { SiteConfig } from '@/lib/config';
import { useMessages } from '@/lib/i18n/useMessages';
import { useLocaleStore } from '@/lib/stores/localeStore';
interface ProfileProps {
  author: SiteConfig['author'];
  social: SiteConfig['social'];
  features: SiteConfig['features'];
  researchInterests?: string[];
}
export default function Profile({ author, social, researchInterests }: ProfileProps) {
  const messages = useMessages();
  const isChinese = useLocaleStore((state) => state.locale) === 'zh';
  return <aside className="academic-profile">
    <div className="profile-photo">
      <Image src={author.avatar} alt={author.name} width={256} height={308} priority className="profile-image" />
    </div>
    <div className="profile-heading">
      <p className="eyebrow">{isChinese ? '浙江大学 · 公共管理学院' : 'ZHEJIANG UNIVERSITY'}</p>
      <h1>{author.name}</h1>
      {isChinese && <p className="profile-english-name">Nan Chen</p>}
      <p className="profile-title">{author.title}</p>
      <p>{isChinese ? '公共管理学院' : 'School of Public Affairs'}</p>
      <p>{author.institution}</p>
    </div>
    <div className="profile-contact">
      {social.email && <a href={'mailto:' + social.email}><Mail size={16} aria-hidden="true" />{social.email}</a>}
      {social.github && <a href={social.github} target="_blank" rel="noopener noreferrer"><Github size={16} aria-hidden="true" />GitHub<ArrowUpRight size={13} aria-hidden="true" /></a>}
      {social.location && <p><MapPin size={16} aria-hidden="true" />{social.location}</p>}
    </div>
    {researchInterests && <div className="profile-interests">
      <h2 className="eyebrow">{messages.profile.researchInterests}</h2>
      <ul>{researchInterests.map((interest) => <li key={interest}>{interest}</li>)}</ul>
    </div>}
    <Link href="/cv/" className="cv-link">{isChinese ? '查看个人履历' : 'Curriculum vitae'}<ArrowUpRight size={16} aria-hidden="true" /></Link>
  </aside>;
}
