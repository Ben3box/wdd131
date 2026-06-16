// Wait for the DOM contents to fully load before executing
document.addEventListener("DOMContentLoaded", () => {
    console.log("Travel Burundi Site Plan script initialized successfully.");

    // Dynamically update the footer year and last modified date
    const footerElement = document.querySelector("footer p");
    if (footerElement) {
        const currentYear = new Date().getFullYear();
        
        // Fetch the last modification date of the HTML document
        const lastModifiedDate = document.lastModified;

        // Update the footer text with both the copyright and the last update timestamp
        footerElement.innerHTML = `&copy; ${currentYear} Benjamin Iriganje, Bujumbura Burundi <br> <span style="font-size: 0.85rem; opacity: 0.8;">Last Updated: ${lastModifiedDate}</span>`;
    }
});