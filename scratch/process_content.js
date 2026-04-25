const fs = require('fs');
const path = require('path');

function processFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== '.docusaurus' && file !== 'build' && file !== 'scratch') {
                processFiles(fullPath);
            }
        } else if (file.endsWith('.md') || file.endsWith('.js') || file.endsWith('.mdx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modifiedContent = content;

            // Remove emoji characters
            modifiedContent = modifiedContent.replace(/[\p{Extended_Pictographic}\p{Emoji_Presentation}\u2705\u274C\uFE0F]/gu, '');

            // Specific manual fix for src/pages/index.js stats to not render empty emoji spans if we remove them
            if (fullPath.replace(/\\/g, '/').endsWith('src/pages/index.js')) {
                modifiedContent = modifiedContent.replace(/<span className=\{styles\.statEmoji\}>\{s\.emoji\}<\/span>\s*/g, '');
                modifiedContent = modifiedContent.replace(/emoji:\s*'',?\s*/g, '');
            }

            // Replace "book" with "notes"
            modifiedContent = modifiedContent.replace(/\bbook\b/g, 'notes');
            modifiedContent = modifiedContent.replace(/\bBook\b/g, 'Notes');
            modifiedContent = modifiedContent.replace(/\bBOOK\b/g, 'NOTES');
            modifiedContent = modifiedContent.replace(/\bbooks\b/g, 'notes');
            modifiedContent = modifiedContent.replace(/\bBooks\b/g, 'Notes');

            // Be careful to not replace facebook
            modifiedContent = modifiedContent.replace(/facenotes/g, 'facebook');

            if (content !== modifiedContent) {
                fs.writeFileSync(fullPath, modifiedContent, 'utf8');
                console.log('Processed: ' + fullPath);
            }
        }
    }
}

processFiles(process.cwd());
