// Function to open the side menu
function openMenu() {
  document.getElementById("sideMenu").style.width = "250px"; // Adjust width as needed
  document.getElementById("menu").style.display = "none"
}

// Function to close the side menu
function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
}

// Dropdown toggle for price range
document.getElementById('priceRangeToggle').addEventListener('click', function () {
  const dropdown = this.parentElement;
  dropdown.classList.toggle('open');
});

// Form submission handler
document.getElementById('propertyRequestForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission
  alert('Form submitted successfully!');
});
