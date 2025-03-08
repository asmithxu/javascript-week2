//Code to give welcome prompt when the home page is loaded
window.addEventListener('load', function() {
  let clientName
  if (window.location.href.match('.index.html') != null) // Check if the page is the home page
  {clientName = prompt('Welcome to Java Blast Cafe! Please enter your name to continue.');
  }
  let welcomeMessage = document.getElementById('welcomeText');
  welcomeMessage.innerHTML = `Welcome, ${clientName}!`;
  welcomeMessage.style.color = 'white';
  welcomeMessage.style.fontSize = '3em';
});


// Code to submit the form and open an email with the form information
// Define the submit button and create click event
const submitHTML = document.getElementById('submitBtn');
submitHTML.addEventListener("click", function(event) {
  event.preventDefault();
  // Define variables for the sections of the form that I want to fill out in the email
  const orderNumber = Math.floor(Math.random() * 9999);
  const emailHTML = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const nameHTML = document.getElementById('name').value;
  // Check if the form is filled out before submitting
  if (emailHTML === '' || message === '' || nameHTML === '') {
    alert('Please fill out all fields before submitting');
    return;
  }
  // Open the email with form information
  window.open(`mailto:asmithxu+business@gmail.com?cc=asmithxu+personal@gmail.com?from=${emailHTML}
  ?subject=Java Order #${orderNumber}?body=${message}`);
  // Replace form with a return to home button after a 5 second delay with a function
  setTimeout(() => {
    // Define variable for the contactUs div
    const contactUs = document.getElementById('contactUs');
    // Replacing the inner html of the contactUs div with a return to home button
    contactUs.innerHTML = `<a href='index.html'><button> Return to Home </button></a>`;
    } , 5000);
});

