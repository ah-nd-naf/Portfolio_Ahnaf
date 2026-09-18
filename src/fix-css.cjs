const fs = require('fs');
const path = require('path');

const indexCssPath = path.join(__dirname, 'index.css');
let css = fs.readFileSync(indexCssPath, 'utf8');

// Fix Projects class names in the appended mobile media query
css = css.replace(/\.projects-filter-container/g, '.projects-filter-chips');
css = css.replace(/\.project-card/g, '.projects-card');
css = css.replace(/\.project-image-box/g, '.projects-card-image-panel');
css = css.replace(/\.project-content/g, '.projects-card-content');
css = css.replace(/\.project-actions/g, '.projects-card-actions');
css = css.replace(/\.project-btn/g, '.projects-btn');

fs.writeFileSync(indexCssPath, css, 'utf8');
console.log('Fixed CSS classes in index.css');
