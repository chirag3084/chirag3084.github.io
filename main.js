
// Create a function to animate the background color of the page
function animateBackground() {
  // Get the current background color of the page
  var backgroundColor = document.body.style.backgroundColor;

  // Set a new background color
  document.body.style.backgroundColor = backgroundColor + ", " + backgroundColor;

  // Wait for 1 second
  setTimeout(animateBackground, 1000);
}

// Call the animateBackground function once the page has loaded
window.onload = animateBackground;
