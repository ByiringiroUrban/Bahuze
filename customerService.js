// script.js
document.addEventListener('DOMContentLoaded', function() {
  const contentsLinks = document.querySelectorAll('.contents-link');
  const sections = document.querySelectorAll('section');

  function activateLinkOnScroll() {
      let index = sections.length;

      while(--index && window.scrollY + 100 < sections[index].offsetTop) {}

      contentsLinks.forEach((link) => link.classList.remove('active'));
      contentsLinks[index].classList.add('active');
  }

  // Scroll event listener
  window.addEventListener('scroll', activateLinkOnScroll);

  // Smooth scroll behavior
  contentsLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          window.scrollTo({
              top: targetElement.offsetTop - 20,
              behavior: 'smooth'
          });
      });
  });
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