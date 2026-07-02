const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.css') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Normalize string: first convert "Uşak Saç Protez" back to "Uşak Protez"
    // Then convert all "Uşak Protez" to "Uşak Saç Protez"
    // This prevents "Uşak Saç Saç Protez"
    let newContent = content.split('Uşak Saç Protez').join('Uşak Protez').split('Uşak Protez').join('Uşak Saç Protez');
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('Updated', filePath);
    }
  }
});
