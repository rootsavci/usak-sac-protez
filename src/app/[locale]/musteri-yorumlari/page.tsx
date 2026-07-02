import styles from './page.module.css';
import Link from 'next/link';

export default function MusteriYorumlari() {
  const AvatarIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );

  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Anasayfa</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>Müşterilerimizin Yorumları</span>
          </div>
          <h1 className={styles.pageTitle}>Müşterilerimizin <span>Yorumları</span></h1>
        </div>
      </header>

      <section className={styles.reviewsSection}>
        <div className="container">
          <div className={styles.grid}>
            
            {/* Card 1 */}
            <div className={styles.card}>
              <div className={styles.avatar}>
                <AvatarIcon />
              </div>
              <h3 className={styles.name}>Doğukan Ülker</h3>
              <div className={styles.profession}>Mağaza Yöneticisi</div>
              <p className={styles.reviewText}>
                Erken yaşta saç dökülmesi sorunu yaşamaya başladım. Bu yüzden kendimi çok mutsuz hissediyordum. Çok araştırma yaparak Uşak Saç Protez firması ile tanıştım. Kalite ve hizmet anlayışlarından çok memnun kaldım. Beni yeniden saçlarıma kavuşturdular.
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.card}>
              <div className={styles.avatar}>
                <AvatarIcon />
              </div>
              <h3 className={styles.name}>Miraç Özay</h3>
              <div className={styles.profession}>Öğrenci</div>
              <p className={styles.reviewText}>
                23 yaşındayım. 3 yıldır saç dökülmesi sorunu yaşıyordum. Protez saç yaptırmayı düşündüm fakat cesaret edemedim. Kliniğe gidip ön görüşme yaptığımda tüm şüphelerim gitti. Hayalini kurduğum saçlara sahip oldum. Keşke beklemeden yaptırsaydım diyorum.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.card}>
              <div className={styles.avatar}>
                <AvatarIcon />
              </div>
              <h3 className={styles.name}>Doğukan Aydın</h3>
              <div className={styles.profession}>Profesyonel Sporcu</div>
              <p className={styles.reviewText}>
                Ben aktif ve çok hareketli bir yaşamı olan biriyim. Saç sorunu yaşıyordum ve saçlarım sürekli canımı sıkıyordu. Protez saç uygulaması ile aynadaki yeni görüntüm beni inanılmaz mutlu etti. Kaybettiğim özgüvenimi çok kısa bir sürede geri kazandım.
              </p>
            </div>

            {/* Card 4 */}
            <div className={styles.card}>
              <div className={styles.avatar}>
                <AvatarIcon />
              </div>
              <h3 className={styles.name}>Burçin Bildik</h3>
              <div className={styles.profession}>Sanatçı</div>
              <p className={styles.reviewText}>
                Dış görünüşümde yapılan muhteşem değişiklik, hayat yolunda beni daha mutlu ve pozitif bir insan yaptı. Ekrandaki duruşum bile değişti. Bana bunu sağlayan Uşak Saç Protez ailesine sonsuz teşekkürler.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
