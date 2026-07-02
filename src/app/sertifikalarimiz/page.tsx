import styles from './page.module.css';
import Link from 'next/link';

export default function Sertifikalarimiz() {
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Anasayfa</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>Sertifikalarımız</span>
          </div>
          <h1 className={styles.pageTitle}><span>Sertifikalarımız</span></h1>
        </div>
      </header>

      <section className={styles.contentSection}>
        <div className="container">
          <p className={styles.comingSoonText}>YAKINDA</p>
        </div>
      </section>
    </div>
  );
}
