import styles from './page.module.css';
import Link from 'next/link';
import FAQAccordion from '@/components/FAQAccordion';

export default function SSS() {
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Sıkça Sorulan Sorular</h1>
          <div className={styles.breadcrumb}>
            <Link href="/">Anasayfa</Link>
            <span>&gt;</span>
            <span>Sıkça Sorulan Sorular</span>
          </div>
        </div>
      </header>

      <section className={styles.sectionFAQ}>
        <div className="container">
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
}
