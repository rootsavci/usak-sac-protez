import styles from './page.module.css';
import Link from 'next/link';

export default function Urunler() {
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Anasayfa</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>Saç Bakım Ürünleri</span>
          </div>
          <h1 className={styles.pageTitle}>Saç Bakım <span>Ürünleri</span></h1>
        </div>
      </header>

      <section className={styles.sectionInfo}>
        <div className="container">
          <div className={styles.articleHeaderImage}>
            <img src="/sac-bakim-urunleri.png" alt="Uşak Saç Protez Profesyonel Saç Bakım Ürünleri" className={styles.articleImage} />
            <Link href="/">
              <div className={styles.articleLogoOverlay}>
                <div className={styles.overlayLogoIcon}></div>
              </div>
            </Link>
          </div>
          
          <div className={styles.articleContent}>
            <h3>Saçlarınızın Gerçek Potansiyelini Keşfedin</h3>
            <p>
              Sağlıklı, gür ve canlı saçlara sahip olmanın ilk kuralı, onlara ihtiyaç duydukları doğru bakımı sunmaktan geçer. Saç yapınıza tam uyumlu, klinik olarak test edilmiş kaliteli bakım ürünleri kullanmak ve saça zarar veren ağır kimyasal uygulamalardan uzak durmak, dökülme karşıtı mücadelenizin en güçlü temelidir.
            </p>
            
            <h3>Saç Deriniz Size Neler Söylüyor?</h3>
            <p>
              Saç derinizin mevcut durumu, genel saç sağlığınız hakkında size çok önemli ipuçları verir. Kulaktan dolma bilgilerle veya yanlış kozmetik ürünleriyle yapılan sıradan bakımlar, saç tellerinize fayda sağlamak yerine zamanla saç derisinin doğal florasını bozarak geri dönülmez zararlar verebilir.
            </p>
            <p>
              Saçınızın biyolojik yapısına tam uyumlu olan profesyonel bakım ürünleri; saç derisinde kaşıntı, kepek, aşırı yağlanma, kuruluk veya hassasiyet yaratmamalıdır. Temizleyici ürünlerin saçı yormadan arındırması ve kökleri derinlemesine beslemesi şarttır. Dökülme, cansızlık, matlaşma veya koparak kırılma gibi ciddi sorunların önüne geçebilmek ve saçın ömrünü uzatmak için mutlaka klinik etkinliği test edilmiş, güvenilirliği kanıtlanmış medikal ve kozmesötik ürünler tercih edilmelidir.
            </p>
            
            <h3>Dünya Standartlarında Premium Çözümler</h3>
            <p>
              <strong>Uşak Saç Protez</strong> olarak, saç dökülmesini yavaşlatmak, yeni saç oluşumunu desteklemek ve saç derisi rahatsızlıklarının kalıcı olarak önüne geçebilmek adına dünya çapında kanıtlanmış kaliteye sahip, Amerika ve Avrupa'nın en seçkin laboratuvarlarında geliştirilen elit ürün serilerini kliniğimizde sizlere sunuyoruz. Sülfat ve paraben içermeyen, dermatolojik olarak test edilmiş bu eşsiz bakım ürünleri, en hassas saç derilerinde bile maksimum konfor ve gözle görülür bir memnuniyet yaratır.
            </p>

            <h3>Doğru Ürünü Nasıl Seçeceksiniz?</h3>
            <p>
              Saç yapınız, genetik dökülme eğiliminiz ve özel durumunuz için en doğru ve en etkili ürünü nokta atışıyla belirlemek adına, öncelikle merkezimizde uzmanlarımız eşliğinde bir <strong>Trikolojik Saç Analizi</strong> yaptırmanızı tavsiye ediyoruz. 
            </p>
            <p>
              Çıplak gözle görülemeyen mikroskobik sorunları (tıkanmış gözenekler, sebum dengesizliği vb.) bile tespit edebilen bu detaylı analiz sayesinde, saçınızın ve saç derinizin tam olarak neye "aç" olduğunu net bir şekilde buluyoruz. Bu analiz sonrasında, deneme yanılma yöntemleriyle vakit kaybetmeden doğrudan saçınızın gerçek ihtiyacını karşılayacak olan premium bakım ürünlerimizi güvenle ve keyifle kullanmaya başlayabilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
