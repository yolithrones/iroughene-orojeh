const formII = document.querySelector("#inquireForm");
const submitButtonII= document.querySelector("#submit-form");
const scriptURLII = 'https://script.google.com/macros/s/AKfycbwgK1RXI-Y5dJMSAJ4NzNHjOsDb7Ukg9wrbfeVGLAwpoXFEfUxIH7HbqYkGjQYUcx95lQ/exec';

formII.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission

  submitButtonII.disabled = true; // Disable button during submission

  let requestBody = new FormData(formII);

  fetch(scriptURLII, { method: 'POST', body: requestBody })
    .then((response) => {
      alert('Thank you for reaching out, I will be with you Shortly! ', response);
      formII.reset(); // Clear input fields after successful submission
      submitButton.disabled = false; // Enable button again
    })
    .catch((error) => {
      alert('Error! Please Try Again', error.message);
      submitButtonII.disabled = false; // Enable button on error
    });
});
