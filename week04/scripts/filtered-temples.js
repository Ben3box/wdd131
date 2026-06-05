// 1. Temple Data Array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-mobile.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/temples/photo-galleries/manti-utah/400x250/manti-temple-768171-mobile.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-mobile.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2022, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-mobile.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-mobile.jpg"
  }
];

// 2. DOM Elements
const templeGrid = document.querySelector(".temple-grid");
const categoryTitle = document.getElementById("category-title");

// 3. Function to Display Temple Cards
function displayTemples(filteredTemples) {
    templeGrid.innerHTML = ""; // Clear existing cards
    
    filteredTemples.forEach(temple => {
        const card = document.createElement("section");
        card.classList.add("temple-card");
        
        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
        `;
        
        templeGrid.appendChild(card);
    });
}

// 4. Filtering Event Listeners
document.getElementById("home").addEventListener("click", () => {
    categoryTitle.textContent = "Home";
    displayTemples(temples);
});

document.getElementById("old").addEventListener("click", () => {
    categoryTitle.textContent = "Old Temples (Built before 1900)";
    const oldTemples = temples.filter(t => new Date(t.dedicated.split(",")[0]) < 1900);
    displayTemples(oldTemples);
});

document.getElementById("new").addEventListener("click", () => {
    categoryTitle.textContent = "New Temples (Built after 2000)";
    const newTemples = temples.filter(t => new Date(t.dedicated.split(",")[0]) > 2000);
    displayTemples(newTemples);
});

document.getElementById("large").addEventListener("click", () => {
    categoryTitle.textContent = "Large Temples (Area > 90,000 sq ft)";
    const largeTemples = temples.filter(t => t.area > 90000);
    displayTemples(largeTemples);
});

document.getElementById("small").addEventListener("click", () => {
    categoryTitle.textContent = "Small Temples (Area < 10,000 sq ft)";
    const smallTemples = temples.filter(t => t.area < 10000);
    displayTemples(smallTemples);
});

// 5. Footer Date Processing
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Initial load
displayTemples(temples);