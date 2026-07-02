import styles from './page.module.css';
import Link from 'next/link';

export default function Sertifikalarimiz() {
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Sertifikalarımız</h1>
          <div className={styles.breadcrumb}>
            <Link href="/">Anasayfa</Link>
            <span>&gt;</span>
            <span>Sertifikalarımız</span>
          </div>
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
