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
      <p><a href={isChinese ? 'http://www.spa.zju.edu.cn/spachinese/main.htm' : 'http://www.spa.zju.edu.cn/spaenglish/'} target="_blank" rel="noopener noreferrer">{isChinese ? '公共管理学院' : 'School of Public Affairs'}</a></p>
      <p>{author.institution}</p>
    </div>
    <div className="profile-contact">
      {social.email && <a href={'mailto:' + social.email}><Mail size={16} aria-hidden="true" />{social.email}</a>}
      {social.github && <a href={social.github} target="_blank" rel="noopener noreferrer"><Github size={16} aria-hidden="true" />GitHub<ArrowUpRight size={13} aria-hidden="true" /></a>}
      {social.location && <p><MapPin size={16} aria-hidden="true" />{social.location}</p>}
      {social.wechat_qr && <div className="wechat-contact">
        <h2 className="eyebrow">{isChinese ? '微信公众号' : 'WeChat public account'}</h2>
        <a href={social.wechat_qr} target="_blank" rel="noopener noreferrer" className="wechat-image-link" aria-label={isChinese ? '查看微信公众号二维码' : 'View WeChat public account QR code'}>
          <Image src={social.wechat_qr} alt={isChinese ? '个人微信公众号主页二维码' : 'Personal WeChat public account QR code'} width={430} height={430} />
        </a>
        <p>{isChinese ? '仅可使用微信扫描' : 'Scan with WeChat only.'}</p>
      </div>}
    </div>
    {researchInterests && <div className="profile-interests">
      <h2 className="eyebrow">{messages.profile.researchInterests}</h2>
      <ul>{researchInterests.map((interest) => <li key={interest}>{interest}</li>)}</ul>
    </div>}
    <Link href="/cv/" className="cv-link">{isChinese ? '查看个人履历' : 'Curriculum vitae'}<ArrowUpRight size={16} aria-hidden="true" /></Link>
  </aside>;
}
