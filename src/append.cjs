const fs = require('fs');
const path = require('path');

const indexCssPath = path.join(__dirname, 'index.css');
const mobileCssPath = path.join(__dirname, 'mobile.css');

const mobileCss = fs.readFileSync(mobileCssPath, 'utf8');
fs.appendFileSync(indexCssPath, '\n\n' + mobileCss, 'utf8');

console.log('Appended mobile CSS to index.css successfully');
