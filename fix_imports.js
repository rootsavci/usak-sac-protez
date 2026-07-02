const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            // Replace '../components/' with '@/components/'
            if (content.includes("from '../components/")) {
                content = content.replace(/from '\.\.\/components\//g, "from '@/components/");
                modified = true;
            }
            if (content.includes('from "../components/')) {
                content = content.replace(/from "\.\.\/components\//g, 'from "@/components/');
                modified = true;
            }

            // Replace '../../components/' with '@/components/'
            if (content.includes("from '../../components/")) {
                content = content.replace(/from '\.\.\/\.\.\/components\//g, "from '@/components/");
                modified = true;
            }
            if (content.includes('from "../../components/')) {
                content = content.replace(/from "\.\.\/\.\.\/components\//g, 'from "@/components/');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content);
                console.log('Fixed imports in', fullPath);
            }
        }
    }
}

processDir(path.join(__dirname, 'src', 'app', '[locale]'));
