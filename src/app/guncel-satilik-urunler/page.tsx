'use client';

import { useState } from 'react';
import pageStyles from '../page.module.css';
import styles from './products.module.css';
import Image from 'next/image';
import Link from 'next/link';

const dummyProducts = [
  { id: 1, name: 'Premium Doğal Protez Saç', category: 'Protez Saçlar', desc: '%100 doğal insan saçı, nefes alabilen özel alt yapı.', price: '12.500 TL', image: 'https://images.unsplash.com/photo-1595628540960-d2c6c06a382e?auto=format&fit=crop&q=80&w=600', isPopular: true },
  { id: 2, name: 'Ultra Tutucu Amerikan Bant', category: 'Bantlar', desc: 'Suya ve tere dayanıklı, 4 haftaya kadar kalıcılık.', price: '450 TL', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Protez Saç Şampuanı', category: 'Bakım Ürünleri', desc: 'Protez saçı besleyen sülfatsız özel formül.', price: '350 TL', image: 'https://images.unsplash.com/photo-1629198725916-29177a4a2ec3?auto=format&fit=crop&q=80&w=600', isPopular: true },
  { id: 4, name: 'Medikal Solvent (Çözücü)', category: 'Bakım Ürünleri', desc: 'Bant kalıntılarını cilde zarar vermeden temizler.', price: '300 TL', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=600' },
  { id: 5, name: 'Ön Çizgi Bandı (C-Şekilli)', category: 'Bantlar', desc: 'Ön saç çizgisi için görünmez, şeffaf mat bant.', price: '380 TL', image: 'https://images.unsplash.com/photo-1556228720-192a6af4e863?auto=format&fit=crop&q=80&w=600', isNew: true },
  { id: 6, name: 'Argan Yağlı Saç Serumu', category: 'Bakım Ürünleri', desc: 'Dolaşmayı önler ve saça doğal parlaklık verir.', price: '400 TL', image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=600', isNew: true },
];

const categories = ['Tümü', 'Protez Saçlar', 'Bakım Ürünleri', 'Bantlar'];

export default function GuncelSatilikUrunler() {
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const filteredProducts = activeCategory === 'Tümü' 
    ? dummyProducts 
    : dummyProducts.filter(p => p.category === activeCategory);

  const handleOrderClick = (productName: string, price: string) => {
    const message = `Merhaba, web sitenizdeki "${productName}" (Fiyat: ${price}) ürünü hakkında bilgi almak ve sipariş vermek istiyorum.`;
    const whatsappUrl = `https://wa.me/905425209464?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className={pageStyles.main}>
      <section className={styles.heroAlt}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Anasayfa</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>Güncel Satılık Ürünler</span>
          </div>
          <h1 className={styles.titleAlt}>Güncel Satılık <span>Ürünler</span></h1>
          <p className={styles.subtitleAlt}>En kaliteli protez saç bakım ve uygulama ürünlerimiz</p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          
          {/* Filters */}
          <div className={styles.filterContainer}>
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className={styles.productsContainer}>
            {filteredProducts.map(product => (
              <div key={product.id} className={styles.productCard}>
                {product.isPopular && <div className={styles.specialBadge}>🔥 Çok Satan</div>}
                {product.isNew && <div className={`${styles.specialBadge} ${styles.newBadge}`}>✨ Yeni</div>}
                <div className={styles.imageWrapper}>
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.productInfo}>
                  <span className={styles.categoryBadge}>{product.category}</span>
                  <h3 className={styles.productTitle}>{product.name}</h3>
                  <p className={styles.productDesc}>{product.desc}</p>
                  
                  <div className={styles.priceWrapper}>
                    <span className={styles.priceLabel}>Fiyat:</span>
                    <span className={styles.price}>{product.price}</span>
                  </div>

                  <button 
                    onClick={() => handleOrderClick(product.name, product.price)}
                    className={styles.orderBtn}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a7.864 7.864 0 0 1-1.21-4.18c0-4.36 3.55-7.91 7.91-7.91 2.11 0 4.1.82 5.6 2.32 1.5 1.5 2.32 3.49 2.32 5.6 0 4.36-3.55 7.91-7.91 7.91zm4.33-5.91c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.64-1.19-1.44-1.33-1.68-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.11.16 1.53.1.47-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/>
                    </svg>
                    Sipariş Ver
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
