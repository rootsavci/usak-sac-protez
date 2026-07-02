"use client";

import { useState } from 'react';
import styles from './FAQAccordion.module.css';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "PROTEZ SAÇ NEDİR?",
    answer: "Kişinin saç dökülmesi yaşadığı bölgelere özel olarak hazırlanan, nefes alabilen ince bir alt yapı üzerine %100 gerçek insan saçlarının tek tek işlenmesiyle elde edilen estetik ve kalıcı bir çözümdür."
  },
  {
    question: "PROTEZ SAÇ NASIL ORTAYA ÇIKMIŞTIR?",
    answer: "İlk olarak Hollywood sinemasında aktörlerin farklı rollere hızlıca bürünebilmesi için geliştirilmiş, daha sonra sağladığı kusursuz doğallık sayesinde tüm dünyada saç dökülmesi yaşayanlar için vazgeçilmez bir estetik çözüm halini almıştır."
  },
  {
    question: "PERUKTAN FARKI NEDİR?",
    answer: "Peruk kafanıza bir şapka gibi takılır ve her an düşme riski taşır. Protez saç ise özel medikal solüsyonlarla cildinize sabitlenir; onunla yüzebilir, spor yapabilir, duş alabilir ve tamamen kendi saçınız gibi hissedebilirsiniz. Ayrıca protez saç nefes alır, peruk almaz."
  },
  {
    question: "SAĞLIKLI MIDIR?",
    answer: "Evet, tamamen sağlıklıdır. Kullandığımız alt yapılar ve sabitleyici medikal bantlar/solüsyonlar dermatolojik testlerden geçmiştir ve cildin hava ve su geçirmesine olanak tanır."
  },
  {
    question: "DİNİ AÇIDAN BİR ENGEL VAR MIDIR?",
    answer: "Protez saçın alt yapısı hava ve su geçirgenliğine sahip olduğu için dini açıdan abdest veya gusül abdesti almaya engel teşkil etmediği İslam alimleri tarafından belirtilmiştir."
  },
  {
    question: "YAPIŞTIRMA MI?",
    answer: "Evet, cilde zarar vermeyen, dermatolojik testlerden geçmiş özel medikal bantlar ve sıvı yapıştırıcılar kullanılarak sabitlenir. Bu işlem tamamen acısız ve güvenlidir."
  },
  {
    question: "DAYANIKLILIK SÜRESİ NEDİR?",
    answer: "Seçilen alt yapı modeline ve kişinin kullanım alışkanlıklarına bağlı olarak bir protez saçın ömrü ortalama 1 ile 3 yıl arasında değişmektedir."
  },
  {
    question: "BAKIM GEREKTİRİR Mİ?",
    answer: "Kendi saçınız gibi periyodik bakıma ihtiyaç duyar. Ortalama 3-4 haftada bir uzman merkezimizde veya evde kendi imkanlarınızla bakımının yapılması, alt yapının temizlenmesi ve bantların yenilenmesi gerekir."
  },
  {
    question: "SAÇLAR UZAR MI?",
    answer: "Protez saç, cansız %100 insan saçından üretildiği için uzamaz. Bu nedenle ilk kesim ve stil çok önemlidir; uzman stilistlerimiz size en uygun modeli tasarlar. Altta kalan kendi saçlarınız ise normal uzamaya devam eder."
  },
  {
    question: "SPOR YAPABİLİR MİYİM?",
    answer: "Kesinlikle! Protez saçınızla profesyonel spor yapabilir, havuza veya denize girebilir, futbol oynayabilir, fön çekebilirsiniz. Hiçbir kısıtlama yaşamazsınız."
  },
  {
    question: "İSTEDİĞİM GİBİ TARAMA ŞEKİL VERME?",
    answer: "Evet, %100 gerçek insan saçı kullanıldığı için fön çekebilir, maşa yapabilir, jöle veya wax kullanabilir ve istediğiniz yöne tarayarak şekil verebilirsiniz."
  },
  {
    question: "PROTEZ SAÇ ÇOCUKLAR İÇİN UYGUN MUDUR?",
    answer: "Evet, özellikle kemoterapi gören, alopesi hastası olan veya kaza sonucu saç kaybı yaşayan çocuklarımız için özel olarak üretilen, ekstra hassas ciltlere uygun çocuk protez saç uygulamalarımız mevcuttur."
  }
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordionContainer}>
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
        >
          <div 
            className={styles.accordionHeader} 
            onClick={() => toggleAccordion(index)}
          >
            <div className={styles.headerLeft}>
              <div className={styles.iconCircle}>?</div>
              <span className={styles.question}>{faq.question}</span>
            </div>
            <div className={styles.iconPlus}>+</div>
          </div>
          <div className={styles.accordionContent}>
            <p className={styles.answer}>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
