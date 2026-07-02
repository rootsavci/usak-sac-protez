import styles from './page.module.css';
import Link from 'next/link';

export default function CocukProtezSac() {
  return (
    <div className={styles.main}>
      <header className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Anasayfa</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>Çocuk Protez Saç</span>
          </div>
          <h1 className={styles.pageTitle}>Çocuk Protez <span>Saç</span></h1>
        </div>
      </header>

      <section className={styles.sectionInfo}>
        <div className="container">
          <div className={styles.articleHeaderImage}>
            <img src="/cocuk-protez-sac.png" alt="Çocuk Protez Saç Uygulaması" className={styles.articleImage} />
            <div className={styles.articleLogoOverlay}>
              <div className={styles.overlayLogoIcon}></div>
            </div>
          </div>
          
          <div className={styles.articleContent}>
            <p>
              Çocuklar, fiziksel ve ruhsal gelişimlerinin en hassas dönemlerindedir. Onların dünyasında dış görünüş, sosyal hayata adaptasyon ve özgüven gelişimi için büyük önem taşır. Saç dökülmesi veya saç kaybı, bir çocuğun psikolojisini derinden etkileyebilir, okul hayatında veya arkadaş çevresinde içe kapanmasına ve özgüven eksikliği yaşamasına neden olabilir.
            </p>
            <p>
              Çocukluk döneminde saç dökülmesi; alopesi (saçkıran) gibi rahatsızlıklar, genetik faktörler, kaza sonucu oluşan yara izleri veya kemoterapi, radyoterapi gibi mecburi tıbbi tedaviler sebebiyle ortaya çıkabilir. Çocukların bu zorlu süreci psikolojik olarak en az hasarla atlatabilmesi için ebeveynlerin yaklaşımı kadar, onlara sunulan çözümün doğallığı ve konforu da büyük rol oynar.
            </p>
            <p>
              <strong>Uşak Saç Protez</strong> olarak, minik kahramanlarımızın yüzündeki tebessümü yeniden kazanmaları bizim için her şeyden değerlidir. Çocuklara özel tasarladığımız saç sistemleri, tamamen onların hassas cilt yapılarına uygun, anti-alerjik ve %100 medikal altyapıya sahip malzemelerden üretilir. Çocukların hareketli dünyasına uyum sağlaması için özel olarak tasarlanan bu protezler, hiçbir cerrahi müdahale olmadan, acısız ve ağrısız bir şekilde uygulanır.
            </p>
            <p>
              Uyguladığımız çocuk protez saç sistemleri, onların okul hayatına, oyun saatlerine veya spor aktivitelerine hiçbir engel teşkil etmez. Terleme, koşma, yüzme ve duş alma gibi günlük aktivitelerde bile kendi saçlarıymış hissi vererek tamamen doğal bir kullanım sunar. Çocuğunuzun saç rengine, teline ve kafa yapısına birebir uyumlu olarak hazırlanan bu sistemlerle, onların hayata yeniden güvenle ve neşeyle bakmasını sağlamak Uşak Saç Protez güvencesiyle çok kolay.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
