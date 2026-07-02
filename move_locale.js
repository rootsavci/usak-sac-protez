const fs = require('fs');
const path = require('path');

const srcAppDir = path.join(__dirname, 'src', 'app');
const localeDir = path.join(srcAppDir, '[locale]');

if (!fs.existsSync(localeDir)) {
    fs.mkdirSync(localeDir);
}

const items = fs.readdirSync(srcAppDir);
for (const item of items) {
    if (item === '[locale]' || item === 'favicon.ico') continue;
    
    const oldPath = path.join(srcAppDir, item);
    const newPath = path.join(localeDir, item);
    
    fs.renameSync(oldPath, newPath);
    console.log(`Moved ${item} to [locale]`);
}
