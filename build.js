const fs = require('fs');
const path = require('path');

const rootDir = '/home/lautaro/Documents/Portfolio';
const htmlPath = path.join(rootDir, 'index.html');

let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// 1. Extract and process JS files
const jsRegex = /<script\s+defer\s+src="\.\/src\/js\/(.*?)\.js"><\/script>/g;
let jsMatch;
const jsFiles = [];

while ((jsMatch = jsRegex.exec(htmlContent)) !== null) {
    jsFiles.push(jsMatch[1] + '.js');
}

let bundledJs = '';
jsFiles.forEach(file => {
    const filePath = path.join(rootDir, 'src', 'js', file);
    if (fs.existsSync(filePath)) {
        bundledJs += `\n/* --- ${file} --- */\n`;
        bundledJs += fs.readFileSync(filePath, 'utf8') + '\n';
    }
});

fs.writeFileSync(path.join(rootDir, 'src', 'js', 'bundle.js'), bundledJs);

// Remove all script tags from HTML
htmlContent = htmlContent.replace(/<script\s+defer\s+src="\.\/src\/js\/.*?\.js"><\/script>\s*/g, '');

// Insert bundle script before Google Analytics script
htmlContent = htmlContent.replace('<!-- Lazy Load Google Analytics -->', '<script defer src="./src/js/bundle.js"></script>\n\n    <!-- Lazy Load Google Analytics -->');


// 2. Extract and process CSS and inline styles
const inlineStyleRegex = /<style>([\s\S]*?)<\/style>/;
let inlineStyle = '';
const styleMatch = inlineStyleRegex.exec(htmlContent);
if (styleMatch) {
    inlineStyle = styleMatch[1];
    htmlContent = htmlContent.replace(inlineStyleRegex, '');
}

const cssFiles = [
    'style.css',
    'main.css',
    'helpers.css',
    'animation.css',
    'shareButtons.css',
    'colorPicker.css'
];

let bundledCss = '';

// Add inline styles first, or maybe style.css first?
// In HTML it was style.css, then inline style, then main.css, etc...
// So let's respect that order roughly. style.css -> inline -> the rest.
cssFiles.forEach(file => {
    const filePath = path.join(rootDir, 'src', 'css', file);
    if (fs.existsSync(filePath)) {
        bundledCss += `\n/* --- ${file} --- */\n`;
        bundledCss += fs.readFileSync(filePath, 'utf8') + '\n';
    }
    
    // insert inline style after style.css
    if(file === 'style.css') {
        bundledCss += `\n/* --- inline styles from index.html --- */\n`;
        bundledCss += inlineStyle + '\n';
    }
});

fs.writeFileSync(path.join(rootDir, 'src', 'css', 'bundle.css'), bundledCss);


// Replace the css links in HTML
// Remove them
const cssRegexList = [
    /<link rel="preload" as="style" href="\.\/src\/css\/style\.css" onload="this\.rel='stylesheet'" \/>\s*/g,
    /<link rel="preload" as="style" href="\.\/src\/css\/main\.css" onload="this\.rel='stylesheet'" \/>\s*/g,
    /<link rel="stylesheet" href="\.\/src\/css\/helpers\.css" media="print" onload="this\.media='all'" \/>\s*/g,
    /<link rel="stylesheet" href="\.\/src\/css\/animation\.css" media="print" onload="this\.media='all'" \/>\s*/g,
    /<link rel="stylesheet" href="\.\/src\/css\/shareButtons\.css" media="print" onload="this\.media='all'" \/>\s*/g,
    /<link rel="stylesheet" href="\.\/src\/css\/colorPicker\.css" media="print" onload="this\.media='all'" \/>\s*/g
];

cssRegexList.forEach(r => {
    htmlContent = htmlContent.replace(r, '\n');
});

// Insert bundle.css after font preloads
const insertCssPoint = '<link rel="preload" href="./src/montserrat/Montserrat-Bold.ttf" as="font" type="font/ttf" crossorigin />';
htmlContent = htmlContent.replace(
    insertCssPoint, 
    insertCssPoint + '\n    <link rel="preload" as="style" href="./src/css/bundle.css" onload="this.rel=\'stylesheet\'" />\n    <noscript><link rel="stylesheet" href="./src/css/bundle.css" /></noscript>\n'
);

// Format HTML slightly to remove excessive newlines left behind
// We can just collapse 3+ newlines into 2
htmlContent = htmlContent.replace(/\n{3,}/g, '\n\n');

fs.writeFileSync(htmlPath, htmlContent);

console.log("Optimization built successfully.");
