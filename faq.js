// Function to toggle FAQ answer visibility using class toggling
function toggleAnswer(button) {
    const answer = button.nextElementSibling; // Get the next sibling (answer)
    const arrow = button.querySelector('.toggle-arrow-faq'); // Get the arrow element

    // Toggle the 'show' class on the answer div
    answer.classList.toggle('show'); 

    // Change the arrow based on whether the answer is shown or not
    if (answer.classList.contains('show')) {
        arrow.innerHTML = "&#9650;"; // Up arrow (answer is visible)
    } else {
        arrow.innerHTML = "&#9660;"; // Down arrow (answer is hidden)
    }
}

// Get all FAQ question buttons and add click event listener
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function () {
        toggleAnswer(this); // Call the toggle function on the clicked question
    });
});
