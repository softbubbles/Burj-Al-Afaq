// Initialize Leaflet map
var map = L.map('map').setView([25.276987, 55.296249], 10); // Dubai Coordinates

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Fix map not displaying correctly
setTimeout(() => {
    map.invalidateSize();
}, 500);

// Sample property data
var properties = [
    {
        name: "Vistara House",
        location: [25.2048, 55.2708],
        price: "AED 1,100,000",
        image: "images/property1.jpg"
    },
    {
        name: "Modern Villa in DIP Dubai",
        location: [25.276987, 55.296249],
        price: "AED 1,750,000",
        image: "images/property2.jpg"
    },
    {
        name: "Moonsa 2 Residencies",
        location: [25.1972, 55.2744],
        price: "AED 1,800,000",
        image: "images/property3.jpg"
    }
];

// Add property markers to the map
properties.forEach(function(property) {
    L.marker(property.location).addTo(map)
     
