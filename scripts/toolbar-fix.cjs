const fs = require('fs');
const path = require('path');

const indexCssPath = path.join(__dirname, 'index.css');

const fixCss = `
/* Toolbar Mobile Fix */
@media (max-width: 768px) {
  .projects-toolbar-wrapper {
    border-radius: 16px;
    padding: 1rem;
    width: 100%;
    max-width: 100%;
    flex-direction: column;
    height: auto;
  }
}
`;

fs.appendFileSync(indexCssPath, fixCss, 'utf8');
console.log('Appended toolbar fix to index.css');
