import styles from './page.module.css';
import Link from 'next/link';

export default function KadinProtezSac() {
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Anasayfa</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>Kadın Protez Saç</span>
          </div>
          <h1 className={styles.pageTitle}>Kadın Protez <span>Saç</span></h1>
        </div>
      </header>

      <section className={styles.sectionInfo}>
        <div className="container">
          <div className={styles.articleHeaderImage}>
            <img src="/kadin-protez-sac.png" alt="Kadın Protez Saç Uygulaması" className={styles.articleImage} />
            <div className={styles.articleLogoOverlay}>
              <div className={styles.overlayLogoIcon}></div>
            </div>
          </div>
          
          <div className={styles.articleContent}>
            <p>
              Saçlar, her kadın için güzelliğin ve özgüvenin en önemli tamamlayıcılarından biridir. İster uzun ister kısa, ister dalgalı ister düz olsun; dolgun ve sağlıklı saçlara sahip olmak her kadının hayalidir. Bu sebeple saç dökülmesi veya seyrekleşmesi, kadınlar için kabullenmesi zor ve duygusal anlamda yıpratıcı bir süreç olabilir.
            </p>
            <p>
              Kadınlarda saç kaybı pek çok farklı nedenden kaynaklanabilir. Genetik yatkınlık, hamilelik sonrası hormonal değişimler, stres, yetersiz beslenme, yanlış kozmetik ürün kullanımı veya hatalı kuaför işlemleri saç dökülmesini tetikleyebilir. Ayrıca alopesi areata (saçkıran) gibi rahatsızlıklar veya kemoterapi, radyoterapi gibi ağır tedavi süreçleri de saç kaybına yol açabilir. Sebebi her ne olursa olsun, hiçbir kadın saç dökülmesine boyun eğmek zorunda değildir.
            </p>
            <p>
              <strong>Uşak Saç Protez</strong> olarak, saç dökülmesini bir kader olmaktan çıkarıyoruz. Boyutu veya nedeni ne olursa olsun, kadınlara özel tasarladığımız protez saç sistemleri ile doğal ve kusursuz sonuçlar sunuyoruz. Herhangi bir cerrahi işlem olmaksızın, tamamen ağrısız ve acısız bir şekilde uygulanan bu üniteler, kişiye özel ölçüler alınarak hazırlanır. Dilerseniz bölgesel saç seyrelmelerine, dilerseniz saçın tamamına uygulanabilir. Ayrıca kemoterapi ve radyoterapi gibi hassas süreçlerde saç derisini tahriş etmeyen, özel medikal alt yapılı çeşitlerimiz de mevcuttur.
            </p>
            <p>
              Kadınlar için ürettiğimiz protez saçlar, günlük kullanımda hiçbir zorluk veya kısıtlama yaratmaz. Yoğun spor aktivitelerinde, yüzerken veya duş alırken kendi saçınızmış gibi güvenle ve rahatça kullanabilirsiniz. Uşak Saç Protez merkezimize geldiğinizde, yaşam tarzınızı uzmanlarımıza detaylıca aktararak sizin için en doğru ve uygun ürünü belirleyebilirsiniz. Bütçenize uyacak birçok farklı protez saç çeşidimiz ve düzenli bakım hizmetlerimiz sayesinde, hayalinizdeki kusursuz saçlara kavuşarak hayatınızı baştan sona değiştirmek için ilk adımı atmanız yeterli.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
