// Initialize the map
const map = L.map('map').setView([20.5937, 78.9629], 5); // Centered on India

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '© OpenStreetMap'
}).addTo(map);

// Define a custom red icon
const redIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-red.png', // Link to a red marker icon
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', // Optional shadow
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
  shadowSize: [41, 41] // Size of the shadow
});

// Default markers
const defaultMarkers = [
  { lat: 19.061569, lng: 72.836868, title: "Bandra" },
  { lat: 19.0121175, lng: 72.8463795, title: "Wadala" },
  { lat: 19.161810, lng: 72.857590, title: "Goregoan" },
  { lat: 19.2811145, lng: 72.8534095, title: "Mira Road" },
  { lat: 19.236286, lng: 73.1279239, title: "Kalyan" },
  { lat: 19.2501363, lng: 72.8567373, title: "Dahisar" }
];

// Add default markers to the map
defaultMarkers.forEach(marker => {
  L.marker([marker.lat, marker.lng], { icon: redIcon }) // Use the red icon here
    .addTo(map)
    .bindPopup(`<b>${marker.title}</b>`)
    .openPopup();
});

// Automatically get the user's location when the page loads
window.onload = function() {
  getLocation();
};

// Handle Geolocation
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

// Show the user's location on the map
function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Add a marker for the user's location
  L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup("<b>Your Location</b>")
    .openPopup();

  // Center the map on the user's location
  map.setView([latitude, longitude], 13);
}

// Handle geolocation errors
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert(
        "Location permissions are denied. Check your browser settings to allow location access for this site."
      );
      document.getElementById("manual-location").style.display = "block";
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable. Try again later.");
      break;
    case error.TIMEOUT:
      alert("The request to get your location timed out. Please try again.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred. Please refresh the page and try again.");
      break;
  }
}

// Redirect to OpenStreetMap search for manual location input
function redirectToMap() {
  const locationInput = document.getElementById("location-input").value;
  if (locationInput) {
    window.location.href = `https://www.openstreetmap.org/search?query=${encodeURIComponent(locationInput)}`;
  } else {
    alert("Please enter a valid location.");
  }
}

// Helper functions for UI interactions
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 24
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

})();
