const fs = require('fs');
const path = require('path');

const indexCssPath = path.join(__dirname, 'index.css');

const finalFixCss = `
/* Final Mobile Revisions */
@media (max-width: 768px) {
  /* ABOUT ME Text Fix */
  .about-bg-text {
    font-size: 11vw !important; /* Smaller to prevent cutoff */
    letter-spacing: 2px !important; /* Override any huge letter spacing */
    width: 100% !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    text-align: center !important;
    white-space: nowrap !important;
    box-sizing: border-box !important;
  }

  /* Projects Toolbar Fix - Premium Stacked Layout */
  .projects-toolbar-wrapper {
    flex-direction: column !important;
    flex-wrap: nowrap !important;
    align-items: stretch !important;
    border-radius: 20px !important;
    padding: 1rem !important;
    width: 100% !important;
    max-width: 100% !important;
    height: auto !important;
    overflow: hidden !important; /* prevent any internal overflow from breaking page */
    box-sizing: border-box !important;
    gap: 1rem !important;
    margin: 0 auto 2rem auto !important;
  }

  /* Make just the filter chips horizontally scrollable */
  .projects-filter-chips {
    display: flex !important;
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    width: 100% !important;
    padding-bottom: 0.5rem !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
    justify-content: flex-start !important;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .projects-filter-chips::-webkit-scrollbar {
    display: none;
  }

  .projects-chip-btn {
    white-space: nowrap !important;
    flex-shrink: 0 !important;
  }

  /* View toggles row */
  .projects-view-toggle-group {
    display: flex !important;
    flex-wrap: nowrap !important;
    width: 100% !important;
    justify-content: center !important;
  }
  
  .projects-toggle-btn {
    flex: 1 !important;
    justify-content: center !important;
  }
}
`;

fs.appendFileSync(indexCssPath, finalFixCss, 'utf8');
console.log('Appended final fixes to index.css');
