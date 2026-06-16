// Product Array Data Source
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    
    // --- PART 1: Global Common Layout Actions ---
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const lastModParagraph = document.getElementById("lastModified");
    if (lastModParagraph) lastModParagraph.textContent = `Last Updated: ${document.lastModified}`;


    // --- PART 2: Form Template Mechanics (Runs on form.html) ---
    const productSelect = document.getElementById("product-select");
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            // Set value attribute to the product ID as required by instructions
            option.value = product.id;
            // Set visible string choice text block capitalization values cleanly
            option.textContent = product.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            productSelect.appendChild(option);
        });
    }


    // --- PART 3: Counter Engine Engine Tracking (Runs on review.html) ---
    if (window.location.pathname.includes("review.html")) {
        const reviewCountDisplay = document.getElementById("review-count");
        
        // Pull current system counter tracking metrics from local system instances
        let reviewCount = parseInt(localStorage.getItem("completedReviews")) || 0;
        
        // Increase count by one for a fresh structural entry load
        reviewCount++;
        localStorage.setItem("completedReviews", reviewCount);
        
        // Present live data values to view panels
        if (reviewCountDisplay) {
            reviewCountDisplay.textContent = reviewCount;
        }
    }
});