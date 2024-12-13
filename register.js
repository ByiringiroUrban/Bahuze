// Function to open the side menu
function openMenu() {
  document.getElementById("sideMenu").style.width = "250px"; // Adjust width as needed
  document.getElementById("menu").style.display = "none"
}

// Function to close the side menu
function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
}

document.getElementById('registerForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const names = document.getElementById('names').value.trim();
  const email = document.getElementById('email').value.trim();
  const tel = document.getElementById('tel').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  if (!names || !email || !tel || !password || !confirmPassword) {
    alert('All fields are required!');
    return;
  }

  alert('Registration Successful!');
});
