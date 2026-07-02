import styles from './page.module.css';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Hakkimizda() {
  const t = useTranslations('Home');
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">{useTranslations('Nav')('home')}</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>{t('aboutTitle')}</span>
          </div>
          <h1 className={styles.pageTitle}>{t('aboutTitle')}</h1>
        </div>
      </header>

      <section className={styles.contentSection}>
        <div className="container">
          <p className={styles.comingSoonText}>{t('comingSoon')}</p>
        </div>
      </section>
    </div>
  );
}
