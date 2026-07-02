import styles from './page.module.css';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function ProtezSacFiyatlari() {
  const t = useTranslations('Pages');
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">{useTranslations('Nav')('home')}</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>{t('fiyatTitle')}</span>
          </div>
          <h1 className={styles.pageTitle}>{t('fiyatTitle').split(' ').map((w,i,arr) => i === arr.length-1 ? <span key={i}>{w}</span> : w + ' ')}</h1>
        </div>
      </header>

      <section className={styles.sectionInfo}>
        <div className="container">
          <div className={styles.articleHeaderImage}>
            <img src="/protez-sac-fiyatlari.png" alt="Protez Saç Fiyatları ve Kalite Standartları" className={styles.articleImage} />
            <div className={styles.bannerTextOverlay}>
              <Link href="/">
                <div className={styles.articleLogoOverlay}>
                  <div className={styles.overlayLogoIcon}></div>
                </div>
              </Link>
              <div className={styles.overlayText}>
                {t('fiyatQuality').split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}
              </div>
            </div>
          </div>
          
          <div className={styles.articleContent}>
            {t('fiyatSoon')}
          </div>
        </div>
      </section>
    </div>
  );
}
