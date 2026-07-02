"use client";

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import styles from './HeroSlider.module.css';
import { useTranslations } from 'next-intl';



export default function HeroSlider() {
  const t = useTranslations('Home');
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      id: 2,
      image: "/hero-campaign.png",
      subtitle: t('campaignSubtitle'),
      title: t('campaignTitle'),
      desc: t('campaignDesc'),
      btnText: t('campaignBtn'),
      btnLink: "https://www.instagram.com/usaksacprotez/"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1920&q=80",
      subtitle: t('heroSubtitle'),
      title: t('heroTitle'),
      desc: t('heroDesc'),
      btnText: t('heroBtn'),
      btnLink: "https://wa.me/905425209464"
    }
  ];

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <section className={styles.sliderSection}>
      <div className={styles.sliderContainer}>
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`${styles.slide} ${index === current ? styles.active : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Split layout simulation: dark solid background on bottom half */}
            <div className={styles.overlay}></div>
            
            <div className={styles.content}>
              <div className="container">
                <div className={styles.textContent}>
                  <p className={styles.subtitle}>{slide.subtitle}</p>
                  <h1 className={styles.title}>{slide.title}</h1>
                  <p className={styles.desc}>{slide.desc}</p>
                  <Link 
                    href={slide.btnLink} 
                    className={styles.btn}
                    target={slide.btnLink.startsWith('http') ? "_blank" : undefined}
                    rel={slide.btnLink.startsWith('http') ? "noopener noreferrer" : undefined}
                  >
                    {slide.btnText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className={`${styles.arrow} ${styles.prevArrow}`} onClick={prevSlide} aria-label="Önceki">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <button className={`${styles.arrow} ${styles.nextArrow}`} onClick={nextSlide} aria-label="Sonraki">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>

      {/* Pagination Bars */}
      <div className={styles.pagination}>
        {slides.map((_, index) => (
          <button 
            key={index} 
            className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
            onClick={() => setCurrent(index)}
            aria-label={`Slayt ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
