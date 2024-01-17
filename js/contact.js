$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
        
                }
            },
            messages: {
                name: {
                    required: "Please fill in your name ",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: "What's the subject of you inquiry",
                    minlength: "your subject must consist of at least 4 characters"
                },
                number: {
                    required: "Please fill i yout phone number",
                    minlength: "your number must consist of at least 5 characters"
                },
                email: {
                    required: "What's yout email?"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
              
                }
            },
        })
    })
        
 })(jQuery)
})


const form = document.querySelector("#contactForm");
const submitButton = document.querySelector("#submit");
const scriptURL = 'https://script.google.com/macros/s/AKfycbwgK1RXI-Y5dJMSAJ4NzNHjOsDb7Ukg9wrbfeVGLAwpoXFEfUxIH7HbqYkGjQYUcx95lQ/exec';

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission

  submitButton.disabled = true; // Disable button during submission

  let requestBody = new FormData(form);

  fetch(scriptURL, { method: 'POST', body: requestBody })
    .then((response) => {
      alert('Your Appointment Has Been Booked!', response);
      form.reset(); // Clear input fields after successful submission
      submitButton.disabled = false; // Enable button again
    })
    .catch((error) => {
      alert('Error! Please Try Again', error.message);
      submitButton.disabled = false; // Enable button on error
    });
});

