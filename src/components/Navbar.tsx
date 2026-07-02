"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest(`.${styles.dropdownContainer}`)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleDropdown = (e: React.MouseEvent, menu: string) => {
    e.preventDefault();
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topbar}>
        <div className={`container ${styles.topbarContainer}`}>
          <div className={styles.topContact}>
            <span 
              onClick={() => {
                navigator.clipboard.writeText("+905425209464");
                alert("Telefon numarası kopyalandı!");
              }}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              +90 (542) 520 94 64
            </span>
            <span style={{ color: '#d1d5db' }}>/</span>
            <a href="https://wa.me/905425209464" target="_blank" rel="noopener noreferrer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              +90 (542) 520 94 64
            </a>
          </div>
          <div className={styles.topSocial}>
            <a href="https://www.instagram.com/usaksacprotez/" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <span style={{ marginLeft: '1rem', borderLeft: '1px solid #ddd', paddingLeft: '1rem' }}>Türkçe</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logo} aria-label="Uşak Saç Protez Anasayfa">
            <div className={styles.logoIcon}></div>
          </Link>
          
          <button 
            className={styles.mobileMenuBtn} 
            onClick={toggleMenu}
            aria-label="Menüyü Aç/Kapat"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>

          <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
            <Link href="/" className={styles.link}>ANASAYFA</Link>
            {/* Dropdown Menu for Kurumsal */}
            <div 
              className={styles.dropdownContainer}
              onMouseEnter={() => handleMouseEnter('kurumsal')}
              onMouseLeave={handleMouseLeave}
            >
              <span 
                className={styles.link} 
                style={{ cursor: 'pointer' }} 
                tabIndex={0}
                onClick={(e) => toggleDropdown(e, 'kurumsal')}
              >
                KURUMSAL
              </span>
              <div className={`${styles.dropdown} ${activeDropdown === 'kurumsal' ? styles.dropdownActive : ''}`}>
                <Link href="/hakkimizda" className={styles.dropdownLink}>Hakkımızda</Link>
                <Link href="/uygulama-sureci" className={styles.dropdownLink}>Uygulama Süreci</Link>
                <Link href="/sertifikalarimiz" className={styles.dropdownLink}>Sertifikalarımız</Link>
              </div>
            </div>
            {/* Dropdown Menu for Protez Saç */}
            <div 
              className={styles.dropdownContainer}
              onMouseEnter={() => handleMouseEnter('protez-sac')}
              onMouseLeave={handleMouseLeave}
            >
              <span 
                className={styles.link} 
                style={{ cursor: 'pointer' }} 
                tabIndex={0}
                onClick={(e) => toggleDropdown(e, 'protez-sac')}
              >
                PROTEZ SAÇ
              </span>
              <div className={`${styles.dropdown} ${activeDropdown === 'protez-sac' ? styles.dropdownActive : ''}`}>
                <Link href="/kadin-protez-sac" className={styles.dropdownLink}>Kadın Protez Saç</Link>
                <Link href="/cocuk-protez-sac" className={styles.dropdownLink}>Çocuk Protez Saç</Link>
                <Link href="/kimler-icin-uygun" className={styles.dropdownLink}>Protez Saç Kimler İçin Uygun</Link>
                <Link href="/nedir" className={styles.dropdownLink}>Protez Saç Nedir</Link>
                <Link href="/fiyatlari" className={styles.dropdownLink}>Protez Saç Fiyatları</Link>
                <Link href="/sss" className={styles.dropdownLink}>SSS</Link>
              </div>
            </div>
            
            {/* Dropdown Menu for Hizmetlerimiz */}
            <div 
              className={styles.dropdownContainer}
              onMouseEnter={() => handleMouseEnter('hizmetlerimiz')}
              onMouseLeave={handleMouseLeave}
            >
              <span 
                className={styles.link} 
                style={{ cursor: 'pointer' }} 
                tabIndex={0}
                onClick={(e) => toggleDropdown(e, 'hizmetlerimiz')}
              >
                HİZMETLERİMİZ
              </span>
              <div className={`${styles.dropdown} ${activeDropdown === 'hizmetlerimiz' ? styles.dropdownActive : ''}`}>
                <Link href="/sac-analizi" className={styles.dropdownLink}>Saç Analizi</Link>
                <Link href="/urunler" className={styles.dropdownLink}>Saç Bakım Ürünleri</Link>
              </div>
            </div>
            
            {/* Dropdown Menu for Galeri */}
            <div className={styles.dropdownContainer}>
              <span className={styles.link} style={{ cursor: 'pointer' }} tabIndex={0}>GALERİ</span>
              <div className={styles.dropdown}>
                <Link href="/oncesi-sonrasi" className={styles.dropdownLink}>Öncesi Sonrası Görseller</Link>
                <Link href="/musteri-yorumlari" className={styles.dropdownLink}>Müşteri Yorumları</Link>
              </div>
            </div>
            
            {/* Dropdown Menu for İletişim */}
            <div className={styles.dropdownContainer}>
              <span className={styles.link} style={{ cursor: 'pointer' }} tabIndex={0}>İLETİŞİM</span>
              <div className={styles.dropdown}>
                <Link href="/subeler" className={styles.dropdownLink}>Şubelerimiz</Link>
              </div>
            </div>
          </div>
          
          <div className={styles.navAction}>
            <a href="https://wa.me/905425209464" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              RANDEVU AL
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
