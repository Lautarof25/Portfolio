const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const htmlPath = path.join(rootDir, 'index.html');

const jsFiles = [
    'dom.js',
    'menu.js',
    'cardsInfo.js',
    'chevronCorner.js',
    'titlePage.js',
    'about.js',
    'projects.js',
    'certificates.js',
    'services.js',
    'filterCheckboxes.js',
    'dynamicCards.js',
    'linksSelector.js',
    'form.js',
    'showPage.js',
    'navigation.js',
    'demoMode.js',
    'shareButtons.js',
    'scrollNavigation.js',
    'colorPicker.js',
    'backgroundSound.js',
    'cardsEffect.js',
    'modalServices.js',
    'cardsSlider.js'
];

let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// 1. Build JavaScript from source modules in runtime order.
let bundledJs = '';
jsFiles.forEach(file => {
    const filePath = path.join(rootDir, 'src', 'js', file);
    bundledJs += `\n/* --- ${file} --- */\n`;
    bundledJs += fs.readFileSync(filePath, 'utf8').replace(/[\t ]+$/gm, '') + '\n';
});

fs.writeFileSync(path.join(rootDir, 'src', 'js', 'bundle.js'), bundledJs);

// Remove local bundle tags before adding the single generated bundle reference.
htmlContent = htmlContent.replace(/[ \t]*<script\s+defer\s+src=["']\.\/src\/js\/[^"']+["']\s*><\/script>[ \t]*\n?/g, '');

// Insert bundle script before Google Analytics script
htmlContent = htmlContent.replace('<!-- Lazy Load Google Analytics -->', '<script defer src="./src/js/bundle.js"></script>\n\n    <!-- Lazy Load Google Analytics -->');


// 2. Build CSS from source stylesheets.
const cssFiles = [
    'style.css',
    'inline.css',
    'main.css',
    'helpers.css',
    'animation.css',
    'shareButtons.css',
    'colorPicker.css'
];

let bundledCss = '';

// Keep the original cascade order while including the recovered inline rules.
cssFiles.forEach(file => {
    const filePath = path.join(rootDir, 'src', 'css', file);
    bundledCss += `\n/* --- ${file} --- */\n`;
    bundledCss += fs.readFileSync(filePath, 'utf8') + '\n';
});

fs.writeFileSync(path.join(rootDir, 'src', 'css', 'bundle.css'), bundledCss);


// Remove old no-script stylesheet fallbacks before replacing local CSS links.
htmlContent = htmlContent.replace(/<noscript>\s*<link\b(?=[^>]*\bhref=["']\.\/src\/css\/[^"']+["'])[^>]*\/?\s*>\s*<\/noscript>/g, '');

// Replace any previous local CSS bundle or source stylesheet references.
htmlContent = htmlContent.replace(/[ \t]*<link\b(?=[^>]*\bhref=["']\.\/src\/css\/[^"']+["'])[^>]*\/?\s*>[ \t]*\n?/g, '');

// Insert the render-blocking stylesheet after font preloads.
const insertCssPoint = '<link rel="preload" href="./src/montserrat/Montserrat-Bold.ttf" as="font" type="font/ttf" crossorigin />';
htmlContent = htmlContent.replace(
    insertCssPoint, 
    insertCssPoint + '\n    <link rel="stylesheet" href="./src/css/bundle.css" />\n'
);

htmlContent = htmlContent.replace(/<noscript>\s*<\/noscript>/g, '');

// Format HTML slightly to remove excessive newlines left behind
// We can just collapse 3+ newlines into 2
htmlContent = htmlContent.replace(/^[\t ]+$/gm, '');
htmlContent = htmlContent.replace(/\n{3,}/g, '\n\n');

fs.writeFileSync(htmlPath, htmlContent);

console.log("Optimization built successfully.");
