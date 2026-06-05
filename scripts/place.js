document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Footer Date Operations
    const currentYearElt = document.getElementById("current-year");
    const lastModElt = document.getElementById("last-mod-date");

    if (currentYearElt) {
        currentYearElt.textContent = new Date().getFullYear();
    }
    if (lastModElt) {
        lastModElt.textContent = document.lastModified;
    }

    // 2. Wind Chill Processing Logic
    // Grab static structural data from your HTML elements
    const tempElement = document.getElementById("temp-val");
    const windElement = document.getElementById("wind-val");
    const windChillElt = document.getElementById("windchill");

    if (tempElement && windElement && windChillElt) {
        const temperature = parseFloat(tempElement.textContent);
        const windSpeed = parseFloat(windElement.textContent);

        // Validation Rules Checklist check: Temp <= 10 °C and Wind Speed > 4.8 km/h
        if (temperature <= 10 && windSpeed > 4.8) {
            const calculatedChill = calculateWindChill(temperature, windSpeed);
            windChillElt.textContent = `${calculatedChill.toFixed(1)} °C`;
        } else {
            windChillElt.textContent = "N/A";
        }
    }
});

/**
 * Metric Wind Chill Calculation Utility Formula (Celsius / km/h)
 * Formulated to run efficiently on a single calculation line.
 */
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}