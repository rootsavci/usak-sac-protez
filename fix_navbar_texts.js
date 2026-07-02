const fs = require('fs');
const path = require('path');

const navbarPath = path.join(__dirname, 'src', 'components', 'Navbar.tsx');
let content = fs.readFileSync(navbarPath, 'utf8');

content = content.replace(/>\s*KURUMSAL\s*<\/span>/g, ">{t('corporate')}</span>");
content = content.replace(/>\s*ÜRÜNLERİMİZ\s*<\/span>/g, ">{t('ourProducts')}</span>");
content = content.replace(/>\s*PROTEZ SAÇ\s*<\/span>/g, ">{t('prostheticHair')}</span>");
content = content.replace(/>\s*HİZMETLERİMİZ\s*<\/span>/g, ">{t('services')}</span>");
content = content.replace(/>\s*GALERİ\s*<\/span>/g, ">{t('gallery')}</span>");
content = content.replace(/>\s*İLETİŞİM\s*<\/span>/g, ">{t('contact')}</span>");

content = content.replace(/>Güncel Satılık Ürünler</g, ">{t('currentProducts')}<");
content = content.replace(/>Kadın Protez Saç</g, ">{t('womenProsthetic')}<");
content = content.replace(/>Çocuk Protez Saç</g, ">{t('childrenProsthetic')}<");
content = content.replace(/>Protez Saç Kimler İçin Uygun</g, ">{t('whoIsItFor')}<");
content = content.replace(/>Protez Saç Nedir</g, ">{t('whatIsIt')}<");
content = content.replace(/>Protez Saç Fiyatları</g, ">{t('hairPrices')}<");
content = content.replace(/>SSS</g, ">{t('faq')}<");

fs.writeFileSync(navbarPath, content);
console.log('Navbar updated');
