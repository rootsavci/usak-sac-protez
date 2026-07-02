import { setRequestLocale } from 'next-intl/server';
import styles from './page.module.css';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default async function OncesiSonrasi({ params }: { params: Promise<{locale: string}> }) {
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
            <span>{t('musterilerTitle')}</span>
          </div>
          <h1 className={styles.pageTitle}><span>{t('musterilerTitle')}</span></h1>
        </div>
      </header>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.grid}>
            
            {/* Card 1 */}
            <div className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.placeholderText}>{t('yakinda')}</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{t('oncesi1Title')}</h3>
                <p className={styles.cardDesc}>
                  {t('oncesi1Desc')}
                </p>
                <button className={styles.cardBtn} disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>{t('detaylariIncele')}</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.placeholderText}>YAKINDA</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{t('oncesi2Title')}</h3>
                <p className={styles.cardDesc}>
                  {t('oncesi2Desc')}
                </p>
                <button className={styles.cardBtn} disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>Detayları İncele</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.placeholderText}>YAKINDA</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{t('oncesi3Title')}</h3>
                <p className={styles.cardDesc}>
                  {t('oncesi3Desc')}
                </p>
                <button className={styles.cardBtn} disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>Detayları İncele</button>
              </div>
            </div>

            {/* Card 4 */}
            <div className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.placeholderText}>YAKINDA</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{t('oncesi4Title')}</h3>
                <p className={styles.cardDesc}>
                  {t('oncesi4Desc')}
                </p>
                <button className={styles.cardBtn} disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>Detayları İncele</button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
