const fs = require('fs');
const path = require('path');

const srcAppDir = path.join(__dirname, 'src', 'app');

const subdirs = fs.readdirSync(srcAppDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(name => name !== 'guncel-satilik-urunler');

const cssTemplate = `
.pageHeader {
  padding: 3rem 1rem 4rem 1rem;
  text-align: center;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
}

.pageTitle {
  font-size: 2.8rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.pageTitle span {
  color: var(--brand-primary);
}

.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #888;
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.breadcrumb a {
  color: var(--brand-primary);
  text-decoration: none;
  transition: all 0.2s ease;
}

.breadcrumb a:hover {
  color: #b5952f;
}

.breadcrumb svg {
  opacity: 0.5;
}
`;

for (const dir of subdirs) {
  const pagePath = path.join(srcAppDir, dir, 'page.tsx');
  const cssPath = path.join(srcAppDir, dir, 'page.module.css');
  
  if (fs.existsSync(pagePath) && fs.existsSync(cssPath)) {
    // 1. Update CSS
    let cssContent = fs.readFileSync(cssPath, 'utf8');
    
    // Remove old header styles
    cssContent = cssContent.replace(/\.pageHeader\s*\{[^}]+\}/, '');
    cssContent = cssContent.replace(/\.pageTitle\s*\{[^}]+\}/, '');
    cssContent = cssContent.replace(/\.breadcrumb\s*\{[^}]+\}/, '');
    cssContent = cssContent.replace(/\.breadcrumb\s+a\s*\{[^}]+\}/, '');
    cssContent = cssContent.replace(/\.breadcrumb\s+a:hover\s*\{[^}]+\}/, '');
    cssContent = cssContent.replace(/\.breadcrumb\s+span\s*\{[^}]+\}/, '');
    
    // Append new styles
    cssContent = cssContent.replace(/\.main\s*\{[^}]+\}/, match => match + "\n" + cssTemplate);
    fs.writeFileSync(cssPath, cssContent, 'utf8');

    // 2. Update TSX
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Replace the header block
    const headerRegex = /<header className=\{styles\.pageHeader\}>\s*<div className="container">\s*<h1 className=\{styles\.pageTitle\}>(.*?)<\/h1>\s*<div className=\{styles\.breadcrumb\}>\s*<Link href="\/">Anasayfa<\/Link>\s*<span>&gt;<\/span>\s*<span>(.*?)<\/span>\s*<\/div>\s*<\/div>\s*<\/header>/s;
    
    content = content.replace(headerRegex, (match, title, breadcrumbText) => {
        const words = title.split(' ');
        let newTitleHtml = title;
        if (words.length > 1) {
            const lastWord = words.pop();
            newTitleHtml = `${words.join(' ')} <span>${lastWord}</span>`;
        } else {
            newTitleHtml = `<span>${title}</span>`;
        }

        return `<header className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Anasayfa</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>${breadcrumbText}</span>
          </div>
          <h1 className={styles.pageTitle}>${newTitleHtml}</h1>
        </div>
      </header>`;
    });

    fs.writeFileSync(pagePath, content, 'utf8');
    console.log(`Updated ${dir}`);
  }
}
