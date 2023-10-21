// Define an empty array to store food items
// menu.js
const foodItems = [
  {
      image: 'path/to/barbecued-chicken-image.jpg',
      name: 'Barbecued Chicken (4)',
      price: '$8.95'
  },
  {
      image: 'path/to/barbecued-beef-image.jpg',
      name: 'Barbecued Beef (4)',
      price: '$9.95'
  },
  {
      image: 'path/to/roast-pork-egg-roll-image.jpg',
      name: 'Roast Pork Egg Roll',
      price: '$1.40'
  },
  {
      image: 'path/to/spring-roll-image.jpg',
      name: 'Spring Roll',
      price: '$1.40'
  },
  {
      image: 'path/to/wonton-soup-image.jpg',
      name: 'Wonton Soup',
      price: '$2.25'
  },
  {
      image: 'path/to/egg-drop-soup-image.jpg',
      name: 'Egg Drop Soup',
      price: '$2.25'
  },
  // ... add more items as needed
];


const popularItems = [
    "Chicken and Broccoli - $10.55",
    "Boneless Ribs (Sm) - $9.25",
    "Boneless Ribs (Lg) - $15.45",
    "Barbecued Ribs (Sm) - $9.25",
    "Barbecued Ribs (Lg) - $15.45",
    "Fried Pork Dumplings (8) - $7.75",
    "Steamed Pork Dumplings (8) - $7.75",
    "Pork Lo Mein (Large) - $10.45",
    "Sesame Chicken (Small) - $7.65",
    "Sesame Chicken (Large) - $12.95",
    "General Tso's Chicken (Small) - $7.65",
    "General Tso's Chicken (Large) - $12.95",
    "Shrimp and Broccoli - $11.05",
    "Chicken Wings (4) - $6.95"
  ];
  


// Function to generate and display menu items
function generateMenu() {
  const menuContainer = document.getElementById("menu-items");

  foodItems.forEach((item) => {
      const menuItemDiv = document.createElement("div");
      menuItemDiv.classList.add("menu-item");

      const imageElement = document.createElement("img");
      imageElement.src = item.image;
      imageElement.alt = item.name;
      imageElement.classList.add("menu-item-image");

      const nameElement = document.createElement("div");
      nameElement.textContent = item.name;
      nameElement.classList.add("menu-item-name");

      const priceElement = document.createElement("div");
      priceElement.textContent = item.price;
      priceElement.classList.add("menu-item-price");

      menuItemDiv.appendChild(imageElement);
      menuItemDiv.appendChild(nameElement);
      menuItemDiv.appendChild(priceElement);

      menuContainer.appendChild(menuItemDiv);
  });
}


// Call the generateMenu function to populate the menu
generateMenu();





