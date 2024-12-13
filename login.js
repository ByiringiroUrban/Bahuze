// Function to open the side menu
function openMenu() {
  document.getElementById("sideMenu").style.width = "250px"; // Adjust width as needed
  document.getElementById("menu").style.display = "none"
}

// Function to close the side menu
function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
}

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const messageElement = document.getElementById("login-message");

  // Reset message
  messageElement.className = "hidden";
  messageElement.textContent = "";

  // Validation Logic
  if (!email || !password) {
      messageElement.className = "";
      messageElement.style.color = "red";
      messageElement.textContent = "Please fill out all fields.";
  } else if (!validateEmail(email)) {
      messageElement.className = "";
      messageElement.style.color = "red";
      messageElement.textContent = "Please enter a valid email address.";
  } else {
      messageElement.className = "";
      messageElement.style.color = "#ff7f00"; /* Orange success */
      messageElement.textContent = "Login successful!";
  }
});

// Email Validation Function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
