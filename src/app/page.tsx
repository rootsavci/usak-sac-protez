import styles from './page.module.css';
import Link from 'next/link';
import HeroSlider from '../components/HeroSlider';

export default function Home() {
  return (
    <div className={styles.main}>
      <HeroSlider />

      <section id="hizmetler" className={styles.section}>
        <div className="container">
          <h2 className="section-title">Saçlarınız İçin Yeniliklerimiz</h2>
          <div className="section-divider"></div>
          <p className={styles.sectionSubtitle}>
            Her bir saç teliniz bizim için çok değerlidir, hayallerinizi karşılamak için buradayız!
          </p>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>SAÇ ANALİZİ VE BAKIMI</h3>
              <p className={styles.serviceDesc}>
                Sağlıklı ve ışıldayan saçlara kavuşmanızı sağlamak ve saç dökülmesini durdurabilmek için bilimsel analizler ve size özel saç bakım terapileri...
              </p>
            </div>
            
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>KİŞİYE ÖZEL TASARIM</h3>
              <p className={styles.serviceDesc}>
                Yüz hatlarınıza, yaşınıza ve yaşam tarzınıza en uygun saç stili uzmanlarımız tarafından tasarlanır. Tamamen size özel üretilen, nefes alan ve %100 doğal görünümlü protez saç sistemlerimizle tanışın.
              </p>
            </div>

            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>ERKEK, KADIN & ÇOCUK ÇÖZÜMLERİ</h3>
              <p className={styles.serviceDesc}>
                Her yaşa ve cinsiyete uygun, dökülme tipine özel geliştirilmiş medikal altyapılarımızla; dilediğiniz gibi tarayabileceğiniz, spor yapıp yüzebileceğiniz güvenli ve kalıcı çözümler sunuyoruz.
              </p>
            </div>

            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>%100 GERÇEK İNSAN SAÇI KALİTESİ</h3>
              <p className={styles.serviceDesc}>
                Sentetik hiçbir materyal içermeyen, en üst segment %100 gerçek insan saçları kullanılarak hazırlanan sistemlerimiz, kendi saçınızdan asla ayırt edilemez kusursuzlukta bir deneyim yaşatır.
              </p>
            </div>

            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>UZMAN KADRO & GÜVENİLİR HİZMET</h3>
              <p className={styles.serviceDesc}>
                Alanında yetkin, yenilikçi saç trendlerini yakından takip eden profesyonel ekibimizle; ilk analizden periyodik bakımlarınıza kadar her adımda size en üst düzey konforu ve güveni sağlıyoruz.
              </p>
            </div>

            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>MEDİKAL ONAYLI ÜRÜNLER</h3>
              <p className={styles.serviceDesc}>
                Uygulamalarımızda kullandığımız tüm sabitleyici solüsyon, bant ve bakım ürünleri dermatolojik testlerden geçmiş, FDA onaylı ve cildinizle tam uyumlu medikal ürünlerdir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="galeri" className={styles.sectionAlt}>
        <div className="container">
          <h2 className="section-title">Video Galerisi</h2>
          <div className="section-divider"></div>

          <div className={styles.videoGrid}>
            {[1, 2, 3].map((item) => (
              <div key={item} className={styles.videoCard}>
                <div className={styles.videoThumbnail} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#111', aspectRatio: '16/9' }}>
                  <span style={{ fontSize: '1.5rem', color: 'var(--brand-primary)', fontWeight: 'bold', letterSpacing: '2px' }}>YAKINDA</span>
                </div>
                <h3 className={styles.videoTitle} style={{ textAlign: 'center' }}>Yeni Videolarımız Hazırlanıyor</h3>
                <p className={styles.videoDesc} style={{ textAlign: 'center' }}>
                  Sizler için en yeni öncesi-sonrası ve bilgilendirme videolarımızın çekimleri devam ediyor. Çok yakında burada olacak.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
