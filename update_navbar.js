const fs = require('fs');
const path = require('path');

const navbarPath = path.join(__dirname, 'src', 'components', 'Navbar.tsx');
let content = fs.readFileSync(navbarPath, 'utf8');

// Add const t = useTranslations('Nav');
content = content.replace('export default function Navbar() {', "export default function Navbar() {\n  const t = useTranslations('Nav');");

// Replace strings
content = content.replace(/>ANASAYFA</g, ">{t('home')}<");
content = content.replace(/>KURUMSAL</g, ">{t('corporate')}<");
content = content.replace(/>Hakkımızda</g, ">{t('aboutUs')}<");
content = content.replace(/>Uygulama Süreci</g, ">{t('applicationProcess')}<");
content = content.replace(/>HİZMETLERİMİZ</g, ">{t('services')}<");
content = content.replace(/>Saç Analizi</g, ">{t('hairAnalysis')}<");
content = content.replace(/>Saç Bakım Ürünleri</g, ">{t('hairCareProducts')}<");
content = content.replace(/>GALERİ</g, ">{t('gallery')}<");
content = content.replace(/>Öncesi Sonrası Görseller</g, ">{t('beforeAfter')}<");
content = content.replace(/>Müşteri Yorumları</g, ">{t('reviews')}<");
content = content.replace(/>İLETİŞİM</g, ">{t('contact')}<");
content = content.replace(/>Şubelerimiz</g, ">{t('branches')}<");
content = content.replace(/>RANDEVU AL</g, ">{t('appointment')}<");
content = content.replace(/>Telefon numarası kopyalandı!</g, ">{t('phoneCopied')}<");

fs.writeFileSync(navbarPath, content);
console.log('Navbar updated');
