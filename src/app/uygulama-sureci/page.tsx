import styles from './page.module.css';
import Link from 'next/link';

export default function UygulamaSureci() {
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Uygulama Süreci</h1>
          <div className={styles.breadcrumb}>
            <Link href="/">Anasayfa</Link>
            <span>&gt;</span>
            <span>Uygulama Süreci</span>
          </div>
        </div>
      </header>

      <section className={styles.sectionInfo}>
        <div className="container">
          <div className={styles.articleHeaderImage}>
            <img src="/uygulama-sureci.png" alt="Uşak Saç Protez Uygulama Süreci ve Sonuç" className={styles.articleImage} />
            <Link href="/">
              <div className={styles.articleLogoOverlay}>
                <div className={styles.overlayLogoIcon}></div>
              </div>
            </Link>
          </div>
          
          <div className={styles.introText}>
            Uşak Saç Protez olarak, saç kaybı yaşayan misafirlerimizin özgüvenlerini yeniden kazanma yolculuklarında tamamen kişiselleştirilmiş, ağrısız ve medikal standartlarda bir süreç sunuyoruz. Hayalinizdeki saçlara kavuşmanız için izlediğimiz 5 temel adım:
          </div>

          <div className={styles.timeline}>
            
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Ücretsiz Analiz ve Danışmanlık</h3>
                <p className={styles.stepDesc}>
                  Sürecimiz kliniğimizde yapacağımız detaylı bir Trikolojik Saç Analizi ile başlar. Uzmanlarımız saç derinize, dökülme tipinize ve yüz hatlarınıza uygun olabilecek alternatifleri sizinle paylaşır. Beklentileriniz dinlenir ve size en doğal görünümü sağlayacak yöntem belirlenir.
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Kişiye Özel Tasarım ve Ölçülendirme</h3>
                <p className={styles.stepDesc}>
                  Kafa yapınızın birebir anatomik kalıbı (ölçüsü) alınır. Bu adım, protezin başınıza kusursuz oturması ve doğal saç çizgisi yaratılması için en kritik aşamadır. Saçınızın mevcut rengi, kalınlığı, dalgası ve çıkış yönü analiz edilerek yurt dışındaki laboratuvarlarımıza sipariş verilir.
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Protez Saçın Hazırlanması</h3>
                <p className={styles.stepDesc}>
                  Alınan kalıba uygun olarak hazırlanan nefes alabilen, anti-alerjik ince bir ünite (altyapı) üzerine, %100 doğal insan saçları tek tek elde işlenir. Saçların çıkış açıları, doğal saçınızla aynı yönü takip edecek şekilde özel düğümleme teknikleriyle (knotting) yerleştirilir.
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Uygulama ve Şekillendirme</h3>
                <p className={styles.stepDesc}>
                  Hazırlanan ünite geldiğinde, merkezimizde medikal solüsyonlar ve cilt dostu özel medikal bantlar kullanılarak cildinize sabitlenir. Ardından en heyecan verici kısım başlar: Uzman kuaförlerimiz protez saçı kendi saçınızla mükemmel bir bütünlük sağlayacak şekilde keser, şekillendirir ve hayalinizdeki imajı yaratır.
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>5</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Periyodik Bakım ve Destek</h3>
                <p className={styles.stepDesc}>
                  Uygulama bittikten sonra saçınızı nasıl yıkayacağınız, tarayacağınız ve günlük hayatta nelere dikkat etmeniz gerektiği uzmanlarımız tarafından detaylıca anlatılır. Protezinizin ömrünü uzatmak ve hijyenini korumak için 3-4 haftalık periyotlarla stüdyomuza gelerek rutin bakımınızı (hijyen temizliği ve yeniden sabitleme) yaptırmanız sağlanır.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
