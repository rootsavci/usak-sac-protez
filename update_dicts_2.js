const fs = require('fs');
const path = require('path');

const trPath = path.join(__dirname, 'messages/tr.json');
const enPath = path.join(__dirname, 'messages/en.json');
const dePath = path.join(__dirname, 'messages/de.json');

const tr = JSON.parse(fs.readFileSync(trPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const de = JSON.parse(fs.readFileSync(dePath, 'utf8'));

tr.Nav = {
  ...tr.Nav,
  corporate: "KURUMSAL",
  ourProducts: "ÜRÜNLERİMİZ",
  prostheticHair: "PROTEZ SAÇ",
  womenProsthetic: "Kadın Protez Saç",
  childrenProsthetic: "Çocuk Protez Saç",
  whoIsItFor: "Protez Saç Kimler İçin Uygun",
  whatIsIt: "Protez Saç Nedir",
  hairPrices: "Protez Saç Fiyatları",
  faq: "SSS",
  services: "HİZMETLERİMİZ",
  gallery: "GALERİ",
  contact: "İLETİŞİM",
  currentProducts: "Güncel Satılık Ürünler"
};

en.Nav = {
  ...en.Nav,
  corporate: "CORPORATE",
  ourProducts: "OUR PRODUCTS",
  prostheticHair: "PROSTHETIC HAIR",
  womenProsthetic: "Women's Prosthetic Hair",
  childrenProsthetic: "Children's Prosthetic Hair",
  whoIsItFor: "Who is it for?",
  whatIsIt: "What is Prosthetic Hair?",
  hairPrices: "Prosthetic Hair Prices",
  faq: "FAQ",
  services: "OUR SERVICES",
  gallery: "GALLERY",
  contact: "CONTACT",
  currentProducts: "Current Products For Sale"
};

de.Nav = {
  ...de.Nav,
  corporate: "UNTERNEHMEN",
  ourProducts: "UNSERE PRODUKTE",
  prostheticHair: "HAARERSATZ",
  womenProsthetic: "Damen Haarersatz",
  childrenProsthetic: "Kinder Haarersatz",
  whoIsItFor: "Für wen ist es geeignet?",
  whatIsIt: "Was ist Haarersatz?",
  hairPrices: "Preise für Haarersatz",
  faq: "FAQ",
  services: "UNSERE LEISTUNGEN",
  gallery: "GALERIE",
  contact: "KONTAKT",
  currentProducts: "Aktuelle Produkte zum Verkauf"
};

fs.writeFileSync(trPath, JSON.stringify(tr, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(dePath, JSON.stringify(de, null, 2));

console.log('Dictionaries updated');
