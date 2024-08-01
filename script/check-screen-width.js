document.addEventListener('DOMContentLoaded', function () {
    function checkScreenWidth() {
        const overlay = document.getElementById('overlay');
        if (window.innerWidth < 768) {
            overlay.style.display = 'flex'; // Show overlay
        } else {
            overlay.style.display = 'none'; // Hide overlay
        }
    }

    // Initial check
    checkScreenWidth();

    // Check on window resize
    window.addEventListener('resize', checkScreenWidth);
});
