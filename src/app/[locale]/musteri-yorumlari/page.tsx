import styles from './page.module.css';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const AvatarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

export default function MusteriYorumlari() {
  const t = useTranslations('Pages');

  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">{useTranslations('Nav')('home')}</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>{t('yorumlarTitle')}</span>
          </div>
          <h1 className={styles.pageTitle}>{t('yorumlarTitle').split(' ').map((w,i,arr) => i === arr.length-1 ? <span key={i}>{w}</span> : w + ' ')}</h1>
        </div>
      </header>

      <section className={styles.reviewsSection}>
        <div className="container">
          <div className={styles.grid}>
            
            {/* Card 1 */}
            <div className={styles.card}>
              <div className={styles.avatar}>
                <AvatarIcon />
              </div>
              <h3 className={styles.name}>{t('yorum1Name')}</h3>
              <div className={styles.profession}>{t('yorum1Prof')}</div>
              <p className={styles.reviewText}>
                {t('yorum1Desc')}
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.card}>
              <div className={styles.avatar}>
                <AvatarIcon />
              </div>
              <h3 className={styles.name}>{t('yorum2Name')}</h3>
              <div className={styles.profession}>{t('yorum2Prof')}</div>
              <p className={styles.reviewText}>
                {t('yorum2Desc')}
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.card}>
              <div className={styles.avatar}>
                <AvatarIcon />
              </div>
              <h3 className={styles.name}>{t('yorum3Name')}</h3>
              <div className={styles.profession}>{t('yorum3Prof')}</div>
              <p className={styles.reviewText}>
                {t('yorum3Desc')}
              </p>
            </div>

            {/* Card 4 */}
            <div className={styles.card}>
              <div className={styles.avatar}>
                <AvatarIcon />
              </div>
              <h3 className={styles.name}>{t('yorum4Name')}</h3>
              <div className={styles.profession}>{t('yorum4Prof')}</div>
              <p className={styles.reviewText}>
                {t('yorum4Desc')}
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
