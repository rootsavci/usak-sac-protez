import styles from './page.module.css';
import Link from 'next/link';

export default function Subeler() {
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Anasayfa</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>Şubeler</span>
          </div>
          <h1 className={styles.pageTitle} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-primary)' }}>
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Şubeler
          </h1>
        </div>
      </header>

      <section className={styles.branchesSection}>
        <div className="container">
          <div className={styles.grid}>
            
            {/* Uşak Merkez Şubesi */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>UŞAK MERKEZ ŞUBESİ</h3>
              <div className={styles.cardInfo}>
                <div className={styles.infoLine}>
                  <strong>P :</strong> <a href="tel:+905425209464" style={{ color: 'inherit' }}>+90 (542) 520 94 64</a>
                </div>
                <div className={styles.infoLine}>
                  Kurtuluş, Çakaloz Sk. NO:16 KAT:1 DAİRE:2<br />
                  64100 MERKEZ/Uşak, Türkiye
                </div>
                <div className={styles.infoLine}>
                  <strong>H.İçi Çalışma Saati :</strong> 09:00 - 19:00<br />
                  <strong>H.Sonu Çalışma Saati :</strong> 09:00 - 19:00 (Cmts)
                </div>
              </div>
              <a href="mailto:info@usakprotez.com" className={styles.contactBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                İLETİŞİM
              </a>
            </div>

            {/* Yakında Açılacak Şube Placeholder (İstenirse kaldırılabilir, ama tasarımda 3 tane yan yanaydı. Doldurmak için eklendi) */}
            <div className={styles.card} style={{ opacity: 0.7 }}>
              <h3 className={styles.cardTitle}>İZMİR ŞUBESİ (YAKINDA)</h3>
              <div className={styles.cardInfo}>
                <div className={styles.infoLine}>
                  <strong>P :</strong> Çok Yakında Hizmetinizde
                </div>
                <div className={styles.infoLine}>
                  İzmir bölgesindeki yeni şubemizle<br />
                  yakında sizlerleyiz.
                </div>
                <div className={styles.infoLine}>
                  <strong>H.İçi Çalışma Saati :</strong> -<br />
                  <strong>H.Sonu Çalışma Saati :</strong> -
                </div>
              </div>
              <button className={styles.contactBtn} disabled style={{ cursor: 'not-allowed', opacity: 0.5 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                İLETİŞİM
              </button>
            </div>

            {/* Yakında Açılacak Şube Placeholder */}
            <div className={styles.card} style={{ opacity: 0.7 }}>
              <h3 className={styles.cardTitle}>DENİZLİ ŞUBESİ (YAKINDA)</h3>
              <div className={styles.cardInfo}>
                <div className={styles.infoLine}>
                  <strong>P :</strong> Çok Yakında Hizmetinizde
                </div>
                <div className={styles.infoLine}>
                  Denizli bölgesindeki yeni şubemizle<br />
                  yakında sizlerleyiz.
                </div>
                <div className={styles.infoLine}>
                  <strong>H.İçi Çalışma Saati :</strong> -<br />
                  <strong>H.Sonu Çalışma Saati :</strong> -
                </div>
              </div>
              <button className={styles.contactBtn} disabled style={{ cursor: 'not-allowed', opacity: 0.5 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                İLETİŞİM
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
