import styles from './page.module.css';
import Link from 'next/link';

export default function ProtezSacFiyatlari() {
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Protez Saç Fiyatları</h1>
          <div className={styles.breadcrumb}>
            <Link href="/">Anasayfa</Link>
            <span>&gt;</span>
            <span>Protez Saç Fiyatları</span>
          </div>
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
