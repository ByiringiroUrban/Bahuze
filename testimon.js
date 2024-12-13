
// Add an event listener for the form submission
document.getElementById('testimonialForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Collect form data
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate that all fields are filled (basic validation)
  if (name && phone && email && message) {
      alert('Thank you for your feedback!');
      // TODO: Here, you can send form data to a backend server
  } else {
      alert('Please fill in all required fields.');
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