// Name: Ranjit Ladhroya
// Instructor: Hamdy Ibrahim
// Assignment: Javascript and deploying a website

// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.


// Get the submit button and the contact page content area
const submitButton = document.getElementById("submit-button"); // The submit button
const pageContent = document.getElementById("contact-page"); // The contact page content area

// When the submit button is clicked, display the thank you message
submitButton.addEventListener('click', function() {
   pageContent.innerHTML = "<p style='font-size:24px;'> Thank you for your message! </p>"; 
});

