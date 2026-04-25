const fs = require('fs');
const path = require('path');

function removeEmojis(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== '.docusaurus' && file !== 'build' && file !== 'scratch') {
                removeEmojis(fullPath);
            }
        } else if (file.endsWith('.md') || file.endsWith('.js') || file.endsWith('.mdx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            // Remove emoji characters and following spaces if they exist
            // We use Extended_Pictographic and Emoji_Presentation to catch most emojis.
            // Some emojis like ❤️ consist of a heart character + variation selector.
            // \uFE0F is the variation selector.
            let modifiedContent = content.replace(/[\p{Extended_Pictographic}\p{Emoji_Presentation}\u2705\u274C\uFE0F]/gu, '');
            // Clean up double spaces left behind or leading spaces
            // Let's not be too aggressive with spaces, just replace the emojis.
            
            if (content !== modifiedContent) {
                fs.writeFileSync(fullPath, modifiedContent, 'utf8');
                console.log('Cleaned emojis from: ' + fullPath);
            }
        }
    }
}

removeEmojis(process.cwd());
