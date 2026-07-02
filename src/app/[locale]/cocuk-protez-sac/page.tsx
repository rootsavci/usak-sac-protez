import { setRequestLocale } from 'next-intl/server';
import styles from './page.module.css';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default async function CocukProtezSac({ params }: { params: Promise<{locale: string}> }) {
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
            <span>{t('cocukTitle')}</span>
          </div>
          <h1 className={styles.pageTitle}>{t('cocukTitle').split(' ').map((w,i,arr) => i === arr.length-1 ? <span key={i}>{w}</span> : w + ' ')}</h1>
        </div>
      </header>

      <section className={styles.sectionInfo}>
        <div className="container">
          <div className={styles.articleHeaderImage}>
            <img src="/cocuk-protez-sac.png" alt="Çocuk Protez Saç Uygulaması" className={styles.articleImage} />
            <div className={styles.articleLogoOverlay}>
              <div className={styles.overlayLogoIcon}></div>
            </div>
          </div>
          
          <div className={styles.articleContent}>
            <p>
              {t('cocukP1')}
            </p>
            <p>
              {t('cocukP2')}
            </p>
            <p>
              <strong>Uşak Saç Protez</strong> olarak, minik kahramanlarımızın yüzündeki tebessümü yeniden kazanmaları bizim için her şeyden değerlidir. Çocuklara özel tasarladığımız saç sistemleri, tamamen onların hassas cilt yapılarına uygun, anti-alerjik ve %100 medikal altyapıya sahip malzemelerden üretilir. Çocukların hareketli dünyasına uyum sağlaması için özel olarak tasarlanan bu protezler, hiçbir cerrahi müdahale olmadan, acısız ve ağrısız bir şekilde uygulanır.
            </p>
            <p>
              {t('cocukP4')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
