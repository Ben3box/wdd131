// Wait for the DOM contents to fully load before executing
document.addEventListener("DOMContentLoaded", () => {
    console.log("Travel Burundi Site Plan script initialized successfully.");

    // Dynamically update the footer with the current system year
    const footerElement = document.querySelector("footer p");
    if (footerElement) {
        const currentYear = new Date().getFullYear();
        footerElement.innerHTML = `&copy; ${currentYear} Benjamin Iriganje, Bujumbura Burundi`;
    }
});