function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
      document.getElementById("currentLocation").innerText = "Geolocation not supported.";
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  document.getElementById("currentLocation").innerText = {latitude}, {longitude};
}

function showError(error) {
  document.getElementById("currentLocation").innerText = "Unable to retrieve location.";
}

// Load current location on page load
window.onload = getLocation;

// Handle search button click
document.getElementById("searchButton").addEventListener("click", function() {
  const location = document.getElementById("locationInput").value;
  if (location) {
      document.getElementById("currentLocation").innerText = {location};
  }
});
const images = ["image1.jpg", "image2.jpg", "image3.jpg "]; // Add more images as needed
let index = 0;

function changeImage() {
    index = (index + 1) % images.length;
    document.getElementById("slideshow").src = images[index];
}

setInterval(changeImage, 3000); // Change image every 3 seconds


