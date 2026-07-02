"use client";

import { useState, useEffect, useRef } from 'react';
import { usePathname, Link } from '../i18n/routing';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Navbar.module.css';

export default function Navbar() {
  const t = useTranslations('Nav');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
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

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+905425209464");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topbar}>
        <div className={`container ${styles.topbarContainer}`}>
          <div className={styles.topContact}>
            <span 
              onClick={handleCopyPhone}
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
          
          <div className={styles.mobileActions}>
            <LanguageSwitcher />
            <a 
              href="https://wa.me/905425209464"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileWhatsappBtn}
              aria-label="WhatsApp'tan ulaşın"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a7.864 7.864 0 0 1-1.21-4.18c0-4.36 3.55-7.91 7.91-7.91 2.11 0 4.1.82 5.6 2.32 1.5 1.5 2.32 3.49 2.32 5.6 0 4.36-3.55 7.91-7.91 7.91zm4.33-5.91c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.64-1.19-1.44-1.33-1.68-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.11.16 1.53.1.47-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/>
              </svg>
            </a>
            <a 
              href="tel:+905425209464"
              className={styles.mobilePhoneBtn} 
              aria-label="Bizi arayın"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </a>
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
          </div>

          <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
            <Link href="/" className={styles.link}>{t('home')}</Link>
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
              >{t('corporate')}</span>
              <div className={`${styles.dropdown} ${activeDropdown === 'kurumsal' ? styles.dropdownActive : ''}`}>
                <Link href="/hakkimizda" className={styles.dropdownLink}>{t('aboutUs')}</Link>
                <Link href="/uygulama-sureci" className={styles.dropdownLink}>{t('applicationProcess')}</Link>
              </div>
            </div>
            {/* Dropdown Menu for Ürünlerimiz */}
            <div 
              className={styles.dropdownContainer}
              onMouseEnter={() => handleMouseEnter('urunlerimiz')}
              onMouseLeave={handleMouseLeave}
            >
              <span 
                className={styles.link} 
                style={{ cursor: 'pointer' }} 
                tabIndex={0}
                onClick={(e) => toggleDropdown(e, 'urunlerimiz')}
              >{t('ourProducts')}</span>
              <div className={`${styles.dropdown} ${activeDropdown === 'urunlerimiz' ? styles.dropdownActive : ''}`}>
                <Link href="/guncel-satilik-urunler" className={styles.dropdownLink}>{t('currentProducts')}</Link>
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
              >{t('prostheticHair')}</span>
              <div className={`${styles.dropdown} ${activeDropdown === 'protez-sac' ? styles.dropdownActive : ''}`}>
                <Link href="/kadin-protez-sac" className={styles.dropdownLink}>{t('womenProsthetic')}</Link>
                <Link href="/cocuk-protez-sac" className={styles.dropdownLink}>{t('childrenProsthetic')}</Link>
                <Link href="/kimler-icin-uygun" className={styles.dropdownLink}>{t('whoIsItFor')}</Link>
                <Link href="/nedir" className={styles.dropdownLink}>{t('whatIsIt')}</Link>
                <Link href="/fiyatlari" className={styles.dropdownLink}>{t('hairPrices')}</Link>
                <Link href="/sss" className={styles.dropdownLink}>{t('faq')}</Link>
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
              >{t('services')}</span>
              <div className={`${styles.dropdown} ${activeDropdown === 'hizmetlerimiz' ? styles.dropdownActive : ''}`}>
                <Link href="/sac-analizi" className={styles.dropdownLink}>{t('hairAnalysis')}</Link>
                <Link href="/urunler" className={styles.dropdownLink}>{t('hairCareProducts')}</Link>
              </div>
            </div>
            
            {/* Dropdown Menu for Galeri */}
            <div 
              className={styles.dropdownContainer}
              onMouseEnter={() => handleMouseEnter('galeri')}
              onMouseLeave={handleMouseLeave}
            >
              <span 
                className={styles.link} 
                style={{ cursor: 'pointer' }} 
                tabIndex={0}
                onClick={(e) => toggleDropdown(e, 'galeri')}
              >{t('gallery')}</span>
              <div className={`${styles.dropdown} ${activeDropdown === 'galeri' ? styles.dropdownActive : ''}`}>
                <Link href="/oncesi-sonrasi" className={styles.dropdownLink}>{t('beforeAfter')}</Link>
                <Link href="/musteri-yorumlari" className={styles.dropdownLink}>{t('reviews')}</Link>
              </div>
            </div>
            
            {/* Dropdown Menu for İletişim */}
            <div 
              className={styles.dropdownContainer}
              onMouseEnter={() => handleMouseEnter('iletisim')}
              onMouseLeave={handleMouseLeave}
            >
              <span 
                className={styles.link} 
                style={{ cursor: 'pointer' }} 
                tabIndex={0}
                onClick={(e) => toggleDropdown(e, 'iletisim')}
              >{t('contact')}</span>
              <div className={`${styles.dropdown} ${activeDropdown === 'iletisim' ? styles.dropdownActive : ''}`}>
                <Link href="/subeler" className={styles.dropdownLink}>{t('branches')}</Link>
              </div>
            </div>
          </div>
          
          <div className={styles.navAction} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <LanguageSwitcher />
            <a href="https://wa.me/905425209464" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              RANDEVU AL
            </a>
          </div>
        </div>
      </nav>

      {/* Toast Notification */}
      {showToast && (
        <div className={styles.toast}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          Telefon numarası kopyalandı!
        </div>
      )}
    </header>
  );
}
