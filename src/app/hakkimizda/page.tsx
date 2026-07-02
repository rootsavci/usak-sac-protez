import styles from './page.module.css';
import Link from 'next/link';

export default function Hakkimizda() {
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Hakkımızda</h1>
          <div className={styles.breadcrumb}>
            <Link href="/">Anasayfa</Link>
            <span>&gt;</span>
            <span>Hakkımızda</span>
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
