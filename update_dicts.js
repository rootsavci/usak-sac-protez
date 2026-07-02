const fs = require('fs');
const path = require('path');

const tr = require('./messages/tr.json');
const en = require('./messages/en.json');
const de = require('./messages/de.json');

const newTr = {
  ...tr,
  Nav: {
    ...tr.Nav,
    services: "HİZMETLERİMİZ",
    hairAnalysis: "Saç Analizi",
    hairCareProducts: "Saç Bakım Ürünleri",
    gallery: "GALERİ",
    beforeAfter: "Öncesi Sonrası Görseller",
    reviews: "Müşteri Yorumları",
    appointment: "RANDEVU AL",
    phoneCopied: "Telefon numarası kopyalandı!"
  }
};

const newEn = {
  ...en,
  Nav: {
    ...en.Nav,
    services: "OUR SERVICES",
    hairAnalysis: "Hair Analysis",
    hairCareProducts: "Hair Care Products",
    gallery: "GALLERY",
    beforeAfter: "Before & After Images",
    reviews: "Customer Reviews",
    appointment: "BOOK APPOINTMENT",
    phoneCopied: "Phone number copied!"
  }
};

const newDe = {
  ...de,
  Nav: {
    ...de.Nav,
    services: "UNSERE LEISTUNGEN",
    hairAnalysis: "Haaranalyse",
    hairCareProducts: "Haarpflegeprodukte",
    gallery: "GALERIE",
    beforeAfter: "Vorher & Nachher Bilder",
    reviews: "Kundenbewertungen",
    appointment: "TERMIN BUCHEN",
    phoneCopied: "Telefonnummer kopiert!"
  }
};

fs.writeFileSync(path.join(__dirname, 'messages/tr.json'), JSON.stringify(newTr, null, 2));
fs.writeFileSync(path.join(__dirname, 'messages/en.json'), JSON.stringify(newEn, null, 2));
fs.writeFileSync(path.join(__dirname, 'messages/de.json'), JSON.stringify(newDe, null, 2));

console.log('Dictionaries updated');
