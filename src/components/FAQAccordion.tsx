"use client";
import { useTranslations } from 'next-intl';

import { useState } from 'react';
import styles from './FAQAccordion.module.css';

interface FAQ {
  question: string;
  answer: string;
}

const getFaqs = (t: (key: string) => string): FAQ[] => [
  {
    question: t('faqQ1'),
    answer: t('faqA1')
  },
  {
    question: t('faqQ2'),
    answer: t('faqA2')
  },
  {
    question: t('faqQ3'),
    answer: t('faqA3')
  },
  {
    question: t('faqQ4'),
    answer: t('faqA4')
  },
  {
    question: t('faqQ5'),
    answer: t('faqA5')
  },
  {
    question: t('faqQ6'),
    answer: t('faqA6')
  },
  {
    question: t('faqQ7'),
    answer: t('faqA7')
  },
  {
    question: t('faqQ8'),
    answer: t('faqA8')
  },
  {
    question: t('faqQ9'),
    answer: t('faqA9')
  },
  {
    question: t('faqQ10'),
    answer: t('faqA10')
  },
  {
    question: t('faqQ11'),
    answer: t('faqA11')
  },
  {
    question: t('faqQ12'),
    answer: t('faqA12')
  }
];

export default function FAQAccordion() {
  const t = useTranslations('Pages');
  const faqs = getFaqs(t);

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
