function equalizeCardDimensions() {
    // Select all profile items
    const profileItems = document.querySelectorAll('.profile-item');
    
    // Reset heights and widths first to get natural dimensions
    profileItems.forEach(item => {
        item.style.height = 'auto';
        item.style.width = 'auto';
    });
    
    // Calculate the maximum height and width
    let maxHeight = 0;
    let maxWidth = 0;
    profileItems.forEach(item => {
        const itemHeight = item.offsetHeight;
        const itemWidth = item.offsetWidth;
        
        maxHeight = Math.max(maxHeight, itemHeight);
        maxWidth = Math.max(maxWidth, itemWidth);
    });
    
    // Set all cards to the maximum height and width
    profileItems.forEach(item => {
        item.style.height = `${maxHeight}px`;
        item.style.width = `${maxWidth}px`;
    });
}

// Debounce function to limit resize event firing
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

// Run on initial page load
document.addEventListener('DOMContentLoaded', equalizeCardDimensions);

// Re-run on window resize to handle responsive design
window.addEventListener('resize', debounce(equalizeCardDimensions, 250));