
// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Display confirmation (for demonstration purposes)
  if (name && email && phone && message) {
      alert('Thank you! Your message has been sent successfully.');
      // Optionally clear the form
      this.reset();
  } else {
      alert('Please fill out all required fields.');
  }
});


// Function to open the side menu
function openMenu() {
  document.getElementById("sideMenu").style.width = "250px"; // Adjust width as needed
  document.getElementById("menu").style.display = "none"
}

// Function to close the side menu
function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
}