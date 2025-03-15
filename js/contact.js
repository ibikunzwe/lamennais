 // Contact Form Validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contact form');
  
    form.addEventListener('submit', function (event) {
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (!firstName || !lastName || !email || !message) {
        alert('Please fill out all fields.');
        event.preventDefault();
      } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
      }
    });
  
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });
