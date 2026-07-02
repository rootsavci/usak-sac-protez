import styles from './page.module.css';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function KimlerIcinUygun() {
  const t = useTranslations('Pages');
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">{useTranslations('Nav')('home')}</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>{t('kimlerTitle')}</span>
          </div>
          <h1 className={styles.pageTitle}>{t('kimlerTitle').split(' ').map((w,i,arr) => i === arr.length-1 ? <span key={i}>{w}</span> : w + ' ')}</h1>
        </div>
      </header>

      <section className={styles.sectionInfo}>
        <div className="container">
          <div className={styles.articleHeaderImage}>
            <img src="/family-beach-sunset.png" alt="Uşak Saç Protez Mutlu Aile" className={styles.articleImage} />
            <Link href="/">
              <div className={styles.articleLogoOverlay}>
                <div className={styles.overlayLogoIcon}></div>
              </div>
            </Link>
          </div>
          
          <div className={styles.articleContent}>
            <p>
              {t('kimlerP1')} <strong>Uşak Saç Protez</strong> {t('kimlerP1Strong')}
            </p>
            <p>
              {t('kimlerP2')}
            </p>
            <p>
              {t('kimlerP3')}
            </p>
            <p>
              {t('kimlerP4')}
            </p>
            <p>
              {t('kimlerP5')}
            </p>

            <h3>{t('kimlerH3_1')}</h3>
            <p>
              {t('kimlerP6')}
            </p>
            <p>
              {t('kimlerP7')}
            </p>

            <h3>{t('kimlerH3_2')}</h3>
            <p>
              {t('kimlerP8')}
            </p>

            <h3>{t('kimlerH3_3')}</h3>
            <p>
              {t('kimlerP9')}
            </p>

            <h3>{t('kimlerH3_4')}</h3>
            <p>
              {t('kimlerP10')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
