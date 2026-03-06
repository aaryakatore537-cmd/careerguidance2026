/**
 * Utility Functions
 */

// Debounce function for search input
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Global PDF Helpers (keep these here or move to a specific report module later)
function scrollToPDF() {
    const pdfSection = document.querySelector('.pdf-section');
    if (pdfSection) {
        pdfSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function toggleFullscreen() {
    const pdfViewer = document.querySelector('.pdf-viewer');
    if (!document.fullscreenElement) {
        pdfViewer.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

// Expose to window
window.debounce = debounce;
window.scrollToPDF = scrollToPDF;
window.toggleFullscreen = toggleFullscreen;
