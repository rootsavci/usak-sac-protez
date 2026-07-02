import styles from './page.module.css';
import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <div className={styles.main}>
      <HeroSlider />

      <section id="hizmetler" className={styles.section}>
        <div className="container">
          <h2 className="section-title">{t('innovations')}</h2>
          <div className="section-divider"></div>
          <p className={styles.sectionSubtitle}>
            {t('subtitle')}
          </p>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>{t('service1Title')}</h3>
              <p className={styles.serviceDesc}>
                {t('service1Desc')}
              </p>
            </div>
            
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>{t('service2Title')}</h3>
              <p className={styles.serviceDesc}>
                {t('service2Desc')}
              </p>
            </div>

            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>{t('service3Title')}</h3>
              <p className={styles.serviceDesc}>
                {t('service3Desc')}
              </p>
            </div>

            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>{t('service4Title')}</h3>
              <p className={styles.serviceDesc}>
                {t('service4Desc')}
              </p>
            </div>

            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>{t('service5Title')}</h3>
              <p className={styles.serviceDesc}>
                {t('service5Desc')}
              </p>
            </div>

            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>{t('service6Title')}</h3>
              <p className={styles.serviceDesc}>
                {t('service6Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="galeri" className={styles.sectionAlt} style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ minHeight: '300px' }}>
            {/* Elfsight Instagram Feed */}
            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div className="elfsight-app-2dd3827c-2b95-4b1d-ae59-817ef891217c" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>
    </div>
  );
}
