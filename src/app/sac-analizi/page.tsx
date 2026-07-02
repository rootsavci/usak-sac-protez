import styles from './page.module.css';
import Link from 'next/link';

export default function SacAnalizi() {
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Saç Analizi (Hair Check-Up)</h1>
          <div className={styles.breadcrumb}>
            <Link href="/">Anasayfa</Link>
            <span>&gt;</span>
            <span>Saç Analizi</span>
          </div>
        </div>
      </header>

      <section className={styles.sectionInfo}>
        <div className="container">
          <div className={styles.articleHeaderImage}>
            <img src="/sac-analizi.png" alt="Uşak Saç Protez Saç Analizi ve Trikoloji Uygulaması" className={styles.articleImage} />
          </div>
          
          <div className={styles.articleContent}>
            <p>
              <strong>Saç Analizi (Hair Check-Up)</strong>, saçınızın ve saç derinizin mevcut durumunu dijital ve bilimsel yöntemlerle değerlendirerek olası sorunları erken teşhis ettiğimiz detaylı bir trikolojik uygulamadır. Tıpkı genel vücut sağlığımızı korumak için yaptırdığımız periyodik testler gibi, saç check-up'ı da dökülmenin önlenmesinde ve size en uygun çözümün (bakım veya protez saç) seçilmesinde kritik bir rol oynar. Trikolojik analizler sonucu elde edilen bilimsel ve rakamsal veriler, uygulanacak işlemlerde uzmanlarımıza kusursuz bir yol haritası sunar.
            </p>
            <p>
              Hastalıkları önlemek için nasıl sağlık taramalarından geçiyorsak, saç sorunları da ne kadar erken teşhis edilirse o kadar kolay ve etkili şekilde kontrol altına alınır. Uşak Saç Protez merkezimizde kullandığımız gelişmiş mikroskobik dijital analiz (trikoskop) cihazları sayesinde, çıplak gözle görülemeyen detayları en ince ayrıntısına kadar inceliyoruz.
            </p>
            
            <h3>Detaylı Analizde Neler İncelenir?</h3>
            <p>
              Saçlarınıza hiçbir zararı ve yan etkisi olmayan bu modern analiz işlemi sayesinde şu verileri elde ediyoruz:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Saç derisindeki sebum (yağ) dengesi ve gözeneklerin durumu</li>
              <li>Saçlı derideki keratin düzeyi ve hassasiyet seviyesi</li>
              <li>Saç köklerini besleyen damarların genel sağlığı</li>
              <li>Saç telindeki yıpranma, incelme ve kırık oranları</li>
              <li>Saç büyüme döngüsü, dökülme evresi ve saç kütle indeksi</li>
              <li>Saç ve saç derisindeki nem - pH oranı ile kepek çeşidi</li>
            </ul>
            
            <p>
              Bu detaylı tıbbi veriler, saç dökülmesi veya kırıkların ana kaynağını tespit etmemizi sağlar. Saç döngüsünün tam olarak neresinde olduğunuzu görmek, sorunun çözüm aşamasında hangi yöntemin sizin için daha verimli olacağını belirlemede en önemli kılavuzumuzdur.
            </p>

            <h3>Kimler Saç Analizi Yaptırmalı?</h3>
            <p>
              "Saçlarım son zamanlarda çok mu dökülüyor?" diye şüphe duyan herkes mutlaka vakit kaybetmeden saç check-up'ı yaptırmalıdır. Ne yazık ki saç dökülmesi çıplak gözle fark edildiğinde, saçların büyük bir kısmı çoktan kaybedilmiş olabiliyor. Eğer yastığınızda, duşakabinde veya saçınızı tararken eskisinden daha fazla saç teli görüyorsanız zaman kaybetmeden <strong>Uşak Saç Protez</strong> uzmanlarına danışmalısınız.
            </p>
            <p>
              Bunun yanı sıra saç derinizde açıklanamayan kaşıntı, aşırı yağlanma veya kuruluk, madeni para büyüklüğünde bölgesel dökülmeler, saçın doğal esnekliğini yitirip matlaşması gibi durumlar göz ardı edilmemesi gereken ciddi uyarıcılardır. Tüm bunlar basit bir stres belirtisi olabileceği gibi, ilerleyen süreçte kalıcı saç kaybına yol açacak bir problemin başlangıcı da olabilir.
            </p>
            <p>
              Vücudunuz ne kadar sağlıklı ve dengeliyse, saçlarınız da o kadar canlı ve güçlü olur. Saçınızda fark ettiğiniz her küçük değişiklik bizim için büyük önem taşır. Saçınıza dair tüm endişelerinizi gidermek, dökülmeyi erken evrede durdurmak veya protez saç ihtiyacınızı en doğru şekilde belirleyip saçlarınıza hak ettiği değeri sunmak için profesyonel ekibimizle her zaman yanınızdayız.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
