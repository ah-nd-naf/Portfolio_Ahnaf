const fs = require('fs');
const path = require('path');

const indexCssPath = path.join(__dirname, 'index.css');

const fixCss = `
/* User Revisions for Mobile */
@media (max-width: 768px) {
  /* Make the projects toolbar a sleek horizontally scrollable pill instead of a big wrapped box */
  .projects-toolbar-wrapper {
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    border-radius: 100px !important;
    padding: 8px 16px !important;
    width: max-content !important;
    max-width: 95vw !important;
    justify-content: flex-start !important;
    height: auto !important;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .projects-toolbar-wrapper::-webkit-scrollbar {
    display: none;
  }

  /* Keep the internal elements from wrapping */
  .projects-filter-chips {
    flex-wrap: nowrap !important;
  }
  .projects-chip-btn {
    white-space: nowrap !important;
  }
  .projects-view-toggle-group {
    flex-wrap: nowrap !important;
  }

  /* Fix ABOUT ME text getting cut off */
  .about-bg-text {
    font-size: 15vw !important;
    width: 100% !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    text-align: center !important;
    white-space: nowrap !important;
  }
}
`;

fs.appendFileSync(indexCssPath, fixCss, 'utf8');
console.log('Appended user revisions to index.css');
