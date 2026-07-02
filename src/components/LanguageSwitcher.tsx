"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../i18n/routing';
import { useState, useRef, useEffect } from 'react';
import styles from './LanguageSwitcher.module.css';

const locales = [
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeLocale = locales.find(l => l.code === locale) || locales[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className={styles.switcher} ref={dropdownRef}>
      <button 
        className={styles.button} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Dil Seçimi"
      >
        <span className={styles.flag}>{activeLocale.flag}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {locales.map((l) => (
            <button
              key={l.code}
              className={`${styles.option} ${l.code === locale ? styles.active : ''}`}
              onClick={() => changeLocale(l.code)}
            >
              <span className={styles.flag}>{l.flag}</span>
              <span className={styles.label}>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
