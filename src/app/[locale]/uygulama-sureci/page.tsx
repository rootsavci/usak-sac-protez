import styles from './page.module.css';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function UygulamaSureci() {
  const t = useTranslations('Home');
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">{useTranslations('Nav')('home')}</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>Uygulama Süreci</span>
          </div>
          <h1 className={styles.pageTitle}>{t('appProcessTitle').split(' ').map((word, i) => i === 1 ? <span key={i}>{word}</span> : word + ' ')}</h1>
        </div>
      </header>

      <section className={styles.sectionInfo}>
        <div className="container">
          <div className={styles.articleHeaderImage}>
            <img src="/uygulama-sureci.png" alt="Uşak Saç Protez Uygulama Süreci ve Sonuç" className={styles.articleImage} />
            <Link href="/">
              <div className={styles.articleLogoOverlay}>
                <div className={styles.overlayLogoIcon}></div>
              </div>
            </Link>
          </div>
          
          <div className={styles.introText}>
            {t('appProcessIntro')}
          </div>

          <div className={styles.timeline}>
            
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{t('step1Title')}</h3>
                <p className={styles.stepDesc}>
                  {t('step1Desc')}
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{t('step2Title')}</h3>
                <p className={styles.stepDesc}>
                  {t('step2Desc')}
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{t('step3Title')}</h3>
                <p className={styles.stepDesc}>
                  {t('step3Desc')}
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{t('step4Title')}</h3>
                <p className={styles.stepDesc}>
                  {t('step4Desc')}
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>5</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{t('step5Title')}</h3>
                <p className={styles.stepDesc}>
                  {t('step5Desc')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
