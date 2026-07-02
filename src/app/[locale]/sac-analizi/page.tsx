import styles from './page.module.css';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function SacAnalizi() {
  const t = useTranslations('Pages');
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">{useTranslations('Nav')('home')}</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>{t('analizTitle')}</span>
          </div>
          <h1 className={styles.pageTitle}>{t('analizCheckup').split(' ').map((w,i,arr) => i === arr.length-1 ? <span key={i}>{w}</span> : w + ' ')}</h1>
        </div>
      </header>

      <section className={styles.sectionInfo}>
        <div className="container">
          <div className={styles.articleHeaderImage}>
            <img src="/sac-analizi.png" alt="Uşak Saç Protez Saç Analizi ve Trikoloji Uygulaması" className={styles.articleImage} />
          </div>
          
          <div className={styles.articleContent}>
            <p>
              <strong>{t('analizCheckup')}</strong>, {t('analizP1')}
            </p>
            <p>
              {t('analizP2')}
            </p>
            
            <h3>{t('analizH3_1')}</h3>
            <p>
              {t('analizP3')}
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>{t('analizLi1')}</li>
              <li>{t('analizLi2')}</li>
              <li>{t('analizLi3')}</li>
              <li>{t('analizLi4')}</li>
              <li>{t('analizLi5')}</li>
              <li>{t('analizLi6')}</li>
            </ul>
            
            <p>
              {t('analizP4')}
            </p>

            <h3>{t('analizH3_2')}</h3>
            <p>
              {t('analizP5')} <strong>Uşak Saç Protez</strong> {t('analizP5Strong')}
            </p>
            <p>
              {t('analizP6')}
            </p>
            <p>
              {t('analizP7')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
