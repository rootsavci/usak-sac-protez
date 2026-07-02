"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const [showToast, setShowToast] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="Uşak Saç Protez Anasayfa">
              <div className={styles.logoWrapper}>
                <div className={styles.logoIcon}></div>
              </div>
            </Link>
            <p>
              Uşak'ta doğal görünümlü, modern ve klinik standartlarında saç protezi hizmetleri.
              Özgüveninizi yeniden keşfedin.
            </p>
          </div>
          
            <div className={styles.contact}>
              <h3 className={styles.title}>İletişim</h3>
              <div className={styles.links}>
                <a 
                  href="tel:+905425209464"
                  onClick={(e) => {
                    if (window.innerWidth > 960) {
                      e.preventDefault();
                      navigator.clipboard.writeText("+905425209464");
                      setShowToast(true);
                      setTimeout(() => {
                        setShowToast(false);
                      }, 3000);
                    }
                  }} 
                  className={styles.link}
                  style={{ cursor: 'pointer', position: 'relative' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  +90 542 520 94 64
                </a>
                <div className={styles.link} style={{ alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginTop: '0.2rem' }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>
                    Kurtuluş, Çakaloz Sk. NO:16 KAT:1 DAİRE:2,<br/>
                    64100 MERKEZ/Uşak, Türkiye
                  </span>
                </div>
                <a href="https://www.instagram.com/usaksacprotez/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Instagram Hesabımız
                </a>
              </div>
            </div>

          <div className={styles.quickLinks}>
            <h3 className={styles.title}>Hızlı Bağlantılar</h3>
            <div className={styles.links}>
              <Link href="/uygulama-sureci" className={styles.link}>Uygulama Süreci</Link>
              <Link href="/hakkimizda" className={styles.link}>Hakkımızda</Link>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Uşak Saç Protez Merkezi. Tüm hakları saklıdır.</p>
        </div>
      </div>
      {showToast && (
        <div className={styles.toast}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Telefon numarası kopyalandı!
        </div>
      )}
    </footer>
  );
}
