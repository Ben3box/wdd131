// ===============================
// FOOTER DATE INFORMATION
// ===============================

// Current Year
const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

// Last Modified Date
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;


// ===============================
// HAMBURGER MENU
// ===============================

const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector("#nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    // Change hamburger to X
    if(navMenu.classList.contains("show")){
        menuBtn.textContent = "✖";
    } else {
        menuBtn.textContent = "☰";
    }

});