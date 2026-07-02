import { setRequestLocale } from 'next-intl/server';
import styles from './page.module.css';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default async function Urunler({ params }: { params: Promise<{locale: string}> }) {
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
            <span>{t('urunTitle')}</span>
          </div>
          <h1 className={styles.pageTitle}>{t('urunTitle').split(' ').map((w,i,arr) => i === arr.length-1 ? <span key={i}>{w}</span> : w + ' ')}</h1>
        </div>
      </header>

      <section className={styles.sectionInfo}>
        <div className="container">
          <div className={styles.articleHeaderImage}>
            <img src="/sac-bakim-urunleri.png" alt="Uşak Saç Protez Profesyonel Saç Bakım Ürünleri" className={styles.articleImage} />
            <Link href="/">
              <div className={styles.articleLogoOverlay}>
                <div className={styles.overlayLogoIcon}></div>
              </div>
            </Link>
          </div>
          
          <div className={styles.articleContent}>
            <h3>{t('urunH3_1')}</h3>
            <p>
              {t('urunP1')}
            </p>
            
            <h3>{t('urunH3_2')}</h3>
            <p>
              {t('urunP2')}
            </p>
            <p>
              {t('urunP3')}
            </p>
            
            <h3>{t('urunH3_3')}</h3>
            <p>
              <strong>Uşak Saç Protez</strong> {t('urunP4')}
            </p>

            <h3>{t('urunH3_4')}</h3>
            <p>
              {t('urunP5')} <strong>Trikolojik Saç Analizi</strong> {t('urunP5Strong')} 
            </p>
            <p>
              {t('urunP6')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
