// Contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Here, you can add code to send the form data to a server or handle it in some other way
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Reset the form after submission
  contactForm.reset();
});
