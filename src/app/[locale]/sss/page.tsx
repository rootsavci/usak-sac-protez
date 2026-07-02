import { setRequestLocale } from 'next-intl/server';
import styles from './page.module.css';
import { Link } from '@/i18n/routing';
import FAQAccordion from '@/components/FAQAccordion';
import { useTranslations } from 'next-intl';

export default async function SSS({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = useTranslations('Pages');
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">{useTranslations('Nav')('home')}</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>{t('sssTitle')}</span>
          </div>
          <h1 className={styles.pageTitle}>{t('sssTitle').split(' ').map((w,i,arr) => i === arr.length-1 ? <span key={i}>{w}</span> : w + ' ')}</h1>
        </div>
      </header>

      <section className={styles.sectionFAQ}>
        <div className="container">
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
}
