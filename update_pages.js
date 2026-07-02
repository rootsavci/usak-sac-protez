const fs = require('fs');
const path = require('path');

const srcAppDir = path.join(__dirname, 'src', 'app');

const subdirs = fs.readdirSync(srcAppDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(name => name !== 'guncel-satilik-urunler');

for (const dir of subdirs) {
  const pagePath = path.join(srcAppDir, dir, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Add Link import if not present
    if (!content.includes("import Link from 'next/link';")) {
        content = content.replace(/import pageStyles from '\.\.\/page\.module\.css';/g, "import pageStyles from '../page.module.css';\nimport Link from 'next/link';");
    }

    // Replace the container contents of heroAlt section
    const titleMatch = content.match(/<h1 className=\{pageStyles\.titleAlt\}>(.*?)<\/h1>/);
    if (titleMatch) {
      let pageTitle = titleMatch[1];
      
      // If title has spans or something, just strip it for the breadcrumb or use it as is?
      // Actually, all current pages have plain text in <h1>. So pageTitle is safe.
      // E.g. "Hakkımızda"
      
      // Let's create the new title format where the last word is in a span if we want, or just leave it as is.
      // To match the requested "Buna benzer yani", we should wrap the last word in a span.
      const words = pageTitle.split(' ');
      let newTitleHtml = pageTitle;
      if (words.length > 1) {
          const lastWord = words.pop();
          newTitleHtml = `${words.join(' ')} <span>${lastWord}</span>`;
      } else {
          newTitleHtml = `<span>${pageTitle}</span>`;
      }

      const regex = /<section className=\{pageStyles\.heroAlt\}>\s*<div className="container">\s*<h1 className=\{pageStyles\.titleAlt\}>.*?<\/h1>\s*<p className=\{pageStyles\.subtitleAlt\}>.*?<\/p>\s*<\/div>\s*<\/section>/gs;
      
      content = content.replace(regex, (match) => {
          // Extract subtitle
          const subtitleMatch = match.match(/<p className=\{pageStyles\.subtitleAlt\}>(.*?)<\/p>/);
          const subtitle = subtitleMatch ? subtitleMatch[1] : '';

          return `<section className={pageStyles.heroAlt}>
        <div className="container">
          <div className={pageStyles.breadcrumb}>
            <Link href="/">Anasayfa</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>${pageTitle}</span>
          </div>
          <h1 className={pageStyles.titleAlt}>${newTitleHtml}</h1>
          <p className={pageStyles.subtitleAlt}>${subtitle}</p>
        </div>
      </section>`;
      });
      
      fs.writeFileSync(pagePath, content, 'utf8');
      console.log(`Updated ${pagePath}`);
    }
  }
}
