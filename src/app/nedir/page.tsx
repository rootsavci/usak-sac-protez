import styles from './page.module.css';
import Link from 'next/link';

export default function ProtezSacNedir() {
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Protez Saç Nedir</h1>
          <div className={styles.breadcrumb}>
            <Link href="/">Anasayfa</Link>
            <span>&gt;</span>
            <span>Protez Saç Nedir</span>
          </div>
        </div>
      </header>

      <section className={styles.sectionInfo}>
        <div className="container">
          <div className={styles.articleHeaderImage}>
            <img src="/protez-sac-nedir.png" alt="Protez Saç Nedir" className={styles.articleImage} />
            <div className={styles.articleLogoOverlay}>
              <div className={styles.overlayLogoIcon}></div>
            </div>
          </div>
          
          <div className={styles.articleContent}>
            <p>
              Protez saç, saç dökülmesi yaşayan veya daha gür saçlara sahip olmak isteyenlerin en çok tercih ettiği, en güvenilir ve doğal saçlandırma sistemlerinden biridir.
            </p>
            <p>
              <strong>Uşak Saç Protez</strong> olarak bu uygulamayı, yüz hatlarınıza en uygun saç çizginizi belirleyip tamamen size özel bir medikal kalıp alarak tasarlıyoruz. %100 gerçek insan saçından üretilen sistemlerimiz, dünyanın en ileri teknolojileriyle hazırlanmaktadır. Hava ve su geçiren, nefes alabilen özel mikro gözenekli bir altyapı üzerine, kendi saç karakterinize (renk, dalga, kalınlık) birebir uyumlu saçların tek tek işlenmesiyle elde edilir. 
            </p>
            <p>
              Protez saçın en büyük avantajlarından biri, alttaki kendi saçlarınıza hiçbir zarar vermeden, cerrahi bir müdahale (kesi, iğne) gerektirmeden uygulanabilmesidir. Kullandığımız sabitleyici ve medikal bantlar, hassas ciltler için özel olarak geliştirilmiş anti-alerjik ürünlerdir.
            </p>
            <p>
              Protez saç, son derece hafif ve konforlu bir yapıya sahiptir; kasanızda bir ağırlık hissi yaratmaz ve size tamamen doğal bir his verir. Tıpkı kendi saçınız gibi fön çekebilir, dilediğiniz gibi şekillendirebilirsiniz. Günlük yaşamınızda hiçbir kısıtlama yaşamazsınız; efor gerektiren sporlar yapabilir, denize veya havuza rahatlıkla girebilirsiniz.
            </p>
            <p>
              Protez saç tasarımında ilk adım çok önemlidir. Uzmanlarımızla yapacağınız görüşmede yaşam tarzınız, mesleğiniz, beklentileriniz ve hayalinizdeki saç modeli hakkında vereceğiniz bilgiler, sizi daha iyi tanımamızı sağlar. Bu sayede, tam olarak yüzünüze ve tarzınıza yakışacak, en konforlu ve doğal protez saçı sizin için tasarlayabiliriz.
            </p>
            <p>
              Hiçbir estetik dokunuş, bir insanın görünümünü saçları kadar dramatik ve olumlu yönde değiştiremez. Hele ki saçlarınızı büyük oranda kaybettiyseniz... Uşak Saç Protez olarak, yaşam kalitenizi bir anda yükselten bu sistemlerle özgüveninizi yeniden kazanmanıza yardımcı oluyoruz. Yılların verdiği tecrübeyle, sayısız müşterimizin hayatındaki bu muhteşem değişime ve mutluluğa tanıklık etmekten gurur duyuyoruz. Yenilenmeye ve hayata yeniden başlamaya hazır mısınız?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
