// Name: Ranjit Ladhroya
// Instructor: Hamdy Ibrahim
// Assignment: Javascript and deploying a website

/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

// The cost variables
let cost_per_day = 35,number_of_days = 0,total_cost = 0;

// Buttons for each day of the week on the webpage
const mon_button_element = document.getElementById("monday"); // Monday's button
const tue_button_element = document.getElementById("tuesday"); // Tuesday's button
const wed_button_element = document.getElementById("wednesday"); // Wednesday's button
const thu_button_element = document.getElementById("thursday"); // Thursday's button
const fri_button_element = document.getElementById("friday"); // Friday's button

// Buttons for full and half day options
const full_day_span_element = document.getElementById("full"); // Button for choosing full day
const half_day_span_element = document.getElementById("half"); // Button for choosing half day

// The clear button and the place to display the cost
const clear_button_element = document.getElementById("clear-button"); // Button to clear.
const calculated_cost_span_element = document.getElementById("calculated-cost"); // Where the cost will be displayed.

// Function to update the total cost
function recalculate() {
    total_cost = cost_per_day * number_of_days; // Multiplying day cost by number of days
    calculated_cost_span_element.innerText = total_cost; // Displaying the total cost.
}

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

// This function handles everything when a button is clicked
function handle_button(a_button) {
    if (a_button.classList.contains("clicked")) {
        a_button.classList.remove("clicked");
        number_of_days -= 1; 
    } else {
        a_button.classList.add("clicked");
        number_of_days += 1; // Adding one more day to the count
    }
    recalculate(); // To update the total cost
}

// Setting a command for each botton when it gets clicked
mon_button_element.addEventListener('click', function() {
    handle_button(this); // When Monday gets clicked, this will handle it
});
tue_button_element.addEventListener('click', function() {
    handle_button(this); // When Tuesday gets clicked, this will handle it
});
wed_button_element.addEventListener('click', function() {
    handle_button(this); // When Wednesday gets clicked, this will handle it
});
thu_button_element.addEventListener('click', function() {
    handle_button(this); // When Thrusday gets clicked, this will handle it
});
fri_button_element.addEventListener('click', function() {
    handle_button(this); // When Friday gets clicked, this will handle it
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


// This function resets everything.
function reset_all(){
   
    mon_button_element.classList.remove("clicked");
    tue_button_element.classList.remove("clicked");
    wed_button_element.classList.remove("clicked");
    thu_button_element.classList.remove("clicked");
    fri_button_element.classList.remove("clicked");

    // Sets it back to a full day by default
    full_day_span_element.classList.add("clicked"); 
    half_day_span_element.classList.remove("clicked"); 

    // Resets the costs to the default : full day rate
    cost_per_day = 35; // Back to 35
    number_of_days = 0; // Starts from zero
    total_cost = 0; // Total cost goes back to zero

    // After everything is reset recalculate the total
    recalculate(); // This updates the total
}

// When the clear button is clicked, it will run the reset function
clear_button_element.addEventListener('click', function() {
    reset_all(); // This will reset it all
});



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


// This function handle's the half day span element
function onHalfDayClick() {
    half_day_span_element.classList.add("clicked"); // selects the half day
    full_day_span_element.classList.remove("clicked"); // Ensuring the full day isn't selected at the same time.
    cost_per_day = 20; // Setting the cost to 20 for half days
    recalculate(); // Updating the total cost
}

// Adding click event listener to half day span element
half_day_span_element.addEventListener('click', onHalfDayClick);

// This function is to handle the clicks on full day span element
function onFullDayClick() {
    full_day_span_element.classList.add("clicked"); // Selects full day
    half_day_span_element.classList.remove("clicked");  // Deselecting the half day option.
    cost_per_day = 35; // Set the cost to 35 for full days
    recalculate(); // Recalculating the total cost 
}

// Adding click event listener to full day span element
full_day_span_element.addEventListener('click', onFullDayClick);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value