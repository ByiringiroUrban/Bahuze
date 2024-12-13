document.querySelector('.partnership-form form').addEventListener('submit', function(event) {
  const inputs = this.querySelectorAll('input[required], textarea[required]');
  let isValid = true;
  
  inputs.forEach(input => {
      if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = 'red';
      } else {
          input.style.borderColor = '#ddd';
      }
  });
  
  if (!isValid) {
      event.preventDefault();
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