import styles from './page.module.css';
import Link from 'next/link';

export default function ProtezSacFiyatlari() {
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Anasayfa</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>Protez Saç Fiyatları</span>
          </div>
          <h1 className={styles.pageTitle}>Protez Saç <span>Fiyatları</span></h1>
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
                Protez Saç<br />
                Fiyat ve Kalite<br />
                Standartlarımız
              </div>
            </div>
          </div>
          
          <div className={styles.articleContent}>
            Yakında...
          </div>
        </div>
      </section>
    </div>
  );
}
