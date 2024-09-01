document.addEventListener("DOMContentLoaded", function () {
    function updateTableHeaders() {
        const screenWidth = window.innerWidth;
        const headers = document.querySelectorAll("#sm-table th");

        if (screenWidth <= 600) {
            headers[1].textContent = "Code";  // Abbreviation for "Company Code"
            headers[2].textContent = "Pric";  // Abbreviation for "Current Price($)"
            headers[3].textContent = "Chng";  // Abbreviation for "Previous Day Price Change(%)"
            headers[4].textContent = "Type";  // Abbreviation for "Share Type"
            headers[5].textContent = "Sect";  // Abbreviation for "Sector"
            headers[6].textContent = "Info";  // Abbreviation for "Information"
            headers[7].textContent = "Char";  // Abbreviation for "Graph"
        } else {
            headers[1].textContent = "Company Code";
            headers[2].textContent = "Current Price($)";
            headers[3].textContent = "Previous Day Price Change(%)";
            headers[4].textContent = "Share Type";
            headers[5].textContent = "Sector";
            headers[6].textContent = "Info";
            headers[7].textContent = "Graph";
        }
    }

    // Initial check
    updateTableHeaders();

    // Update on window resize
    window.addEventListener("resize", updateTableHeaders);
});
