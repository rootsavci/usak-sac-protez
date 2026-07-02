import styles from './page.module.css';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function KadinProtezSac() {
  const t = useTranslations('Pages');
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">{useTranslations('Nav')('home')}</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>{t('kadinTitle')}</span>
          </div>
          <h1 className={styles.pageTitle}>{t('kadinTitle').split(' ').map((w,i,arr) => i === arr.length-1 ? <span key={i}>{w}</span> : w + ' ')}</h1>
        </div>
      </header>

      <section className={styles.sectionInfo}>
        <div className="container">
          <div className={styles.articleHeaderImage}>
            <img src="/kadin-protez-sac.png" alt="Kadın Protez Saç Uygulaması" className={styles.articleImage} />
            <div className={styles.articleLogoOverlay}>
              <div className={styles.overlayLogoIcon}></div>
            </div>
          </div>
          
          <div className={styles.articleContent}>
            <p>
              {t('kadinP1')}
            </p>
            <p>
              {t('kadinP2')}
            </p>
            <p>
              <strong>Uşak Saç Protez</strong> {t('kadinP3')}
            </p>
            <p>
              {t('kadinP4')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
