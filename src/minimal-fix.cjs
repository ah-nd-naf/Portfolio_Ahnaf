const fs = require('fs');
const path = require('path');

const indexCssPath = path.join(__dirname, 'index.css');

const fixCss = `
/* Minimalist Mobile Toolbar Revisions */
@media (max-width: 768px) {
  .projects-toolbar-wrapper {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    padding: 0 !important;
    margin-bottom: 2rem !important;
    gap: 1.5rem !important;
  }

  .projects-filter-chips {
    border-bottom: none !important;
    padding-bottom: 0 !important;
    gap: 0.5rem !important;
  }
}
`;

fs.appendFileSync(indexCssPath, fixCss, 'utf8');
console.log('Appended minimalist toolbar fix to index.css');
