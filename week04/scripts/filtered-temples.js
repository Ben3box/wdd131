// 1. Temple Data Array (Updated with open-access development image URLs)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://picsum.photos/id/1018/400/250"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://picsum.photos/id/1043/400/250"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://picsum.photos/id/1022/400/250"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2022, May, 2",
    area: 6861,
    imageUrl: "https://picsum.photos/id/1039/400/250"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://picsum.photos/id/1040/400/250"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://picsum.photos/id/1044/400/250"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://picsum.photos/id/1045/400/250"
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

// 4. Filtering Event Listeners (Added e.preventDefault() to keep links stable)
document.getElementById("home").addEventListener("click", (e) => {
    e.preventDefault();
    categoryTitle.textContent = "Home";
    displayTemples(temples);
});

document.getElementById("old").addEventListener("click", (e) => {
    e.preventDefault();
    categoryTitle.textContent = "Old Temples (Built before 1900)";
    const oldTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0].trim()) < 1900);
    displayTemples(oldTemples);
});

document.getElementById("new").addEventListener("click", (e) => {
    e.preventDefault();
    categoryTitle.textContent = "New Temples (Built after 2000)";
    const newTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0].trim()) > 2000);
    displayTemples(newTemples);
});

document.getElementById("large").addEventListener("click", (e) => {
    e.preventDefault();
    categoryTitle.textContent = "Large Temples (Area > 90,000 sq ft)";
    const largeTemples = temples.filter(t => t.area > 90000);
    displayTemples(largeTemples);
});

document.getElementById("small").addEventListener("click", (e) => {
    e.preventDefault();
    categoryTitle.textContent = "Small Temples (Area < 10,000 sq ft)";
    const smallTemples = temples.filter(t => t.area < 10000);
    displayTemples(smallTemples);
});

// 5. Footer Date Processing
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Initial load
displayTemples(temples);