// Wait for the DOM contents to fully load before executing
document.addEventListener("DOMContentLoaded", () => {
    console.log("Travel Burundi Site Plan script initialized successfully.");

    // Dynamically update the footer year if needed
    const footerYearElement = document.querySelector("footer p");
    if (footerYearElement) {
        const currentYear = new Date().getFullYear();
        footerYearElement.innerHTML = `&copy; ${currentYear} Benjamin Iriganje, Bujumbura Burundi`;
    }
});