import styles from './page.module.css';
import Link from 'next/link';

export default function OncesiSonrasi() {
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Müşteriler</h1>
          <div className={styles.breadcrumb}>
            <Link href="/">Anasayfa</Link>
            <span>&gt;</span>
            <span>Müşteriler</span>
          </div>
        </div>
      </header>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.grid}>
            
            {/* Card 1 */}
            <div className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.placeholderText}>YAKINDA</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Ahmet Y. - İş İnsanı</h3>
                <p className={styles.cardDesc}>
                  "Saç dökülmesi iş hayatımdaki özgüvenimi etkilemeye başlamıştı. Uşak Saç Protez sayesinde hayalimdeki o gür saçlara tamamen doğal bir şekilde yeniden kavuştum."
                </p>
                <button className={styles.cardBtn} disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>Detayları İncele</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.placeholderText}>YAKINDA</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Mehmet K. - Öğretmen</h3>
                <p className={styles.cardDesc}>
                  "Acaba dışarıdan belli olur mu korkum vardı. Ancak uygulama sonrası o kadar doğal oldu ki, eşim bile ilk bakışta farkı anlamadı. Çok teşekkürler."
                </p>
                <button className={styles.cardBtn} disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>Detayları İncele</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.placeholderText}>YAKINDA</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Ayşe T. - Bankacı</h3>
                <p className={styles.cardDesc}>
                  "Kadın tipi dökülme psikolojimi çok bozmuştu. Ön bölgedeki seyrelmelerim harika bir tasarımla kapatıldı. Artık aynalara gülerek bakabiliyorum."
                </p>
                <button className={styles.cardBtn} disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>Detayları İncele</button>
              </div>
            </div>

            {/* Card 4 */}
            <div className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.placeholderText}>YAKINDA</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Caner B. - Sporcu</h3>
                <p className={styles.cardDesc}>
                  "Antrenmanlarda terlediğimde veya duş alırken sorun yaşarım sanıyordum. Aksine kendi saçımmış gibi rahatça kullanıyorum, en ufak bir kayma bile yok."
                </p>
                <button className={styles.cardBtn} disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>Detayları İncele</button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
