// accounting for the additional width of the scrollbar when content overflow
window.onload = function() {
    const tableBody = document.querySelector('tbody'); 
    const tableHead = document.querySelector('thead'); 

    function adjustTableHeaderWidth() {
        if (tableBody.scrollHeight > tableBody.clientHeight) {
            // If scrollbar is present, adjust header width
            tableHead.style.width = `calc(100% - ${tableBody.offsetWidth - tableBody.clientWidth}px)`;
        } else {
            // If no scrollbar, set header width to 100%
            tableHead.style.width = '100%';
        }
    }

    adjustTableHeaderWidth(); // Adjust header width on page load
    window.addEventListener('resize', adjustTableHeaderWidth); // Adjust on window resize
    tableBody.addEventListener('scroll', adjustTableHeaderWidth); // Adjust on table body scroll
};
