'use client';
import { Printer } from 'lucide-react';
import { useLocaleStore } from '@/lib/stores/localeStore';
export default function PrintCV() {
  const locale = useLocaleStore((state) => state.locale);
  return <button type="button" className="print-cv" onClick={() => window.print()}><Printer size={16} aria-hidden="true" />{locale === 'zh' ? '打印 / 保存为 PDF' : 'Print / save as PDF'}</button>;
}
