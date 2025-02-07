// Select elements
const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');
const dropdowns = document.querySelectorAll('.dropdown > a');
const body = document.body;

// Toggle Sidebar on Hamburger Click
hamburger.addEventListener('click', () => {
    navItems.classList.toggle('show'); // Show/hide sidebar
    hamburger.classList.toggle('active'); // Animate hamburger
    body.classList.toggle('menu-open'); // Prevent background scrolling
});

// Dropdown Toggle in Sidebar
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const parent = dropdown.parentElement; // Get parent element
        parent.classList.toggle('show'); // Toggle the dropdown menu
    });
});

// Close Sidebar When Clicking Outside
document.addEventListener('click', (event) => {
    if (!navItems.contains(event.target) && !hamburger.contains(event.target)) {
        hamburger.classList.remove('active'); // Reset hamburger animation
        navItems.classList.remove('show'); // Hide sidebar
        body.classList.remove('menu-open'); // Allow background scrolling
    }
});

// Select Video Modal Elements
const modal = document.getElementById('videoModal'); // Modal element
const videoButton = document.getElementById('videoButton'); // Button to open modal
const closeButton = document.querySelector('.close'); // Close button inside the modal
const video = modal.querySelector('video'); // Video element inside the modal

// Show the modal when the button is clicked
videoButton.addEventListener('click', () => {
    modal.style.display = 'flex'; // Ensure modal uses flexbox for centering
    video.play(); // Optional: Start the video when the modal opens
});

// Close the modal when the close button is clicked
closeButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
    if (video) {
        video.pause(); // Pause the video
        video.currentTime = 0; // Reset the video to the beginning
    }
});

// Prevent closing the modal when clicking inside the modal content
const modalContent = document.querySelector('.modal-content');
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'; // Close the modal when clicking outside content
        if (video) {
            video.pause(); // Pause the video
            video.currentTime = 0; // Reset the video
        }
    }
});

// Ensure "Read More" starts with hidden text
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.more-text').forEach((span) => {
        span.style.display = 'none'; // Ensure hidden text is hidden
    });
});

// Add event listener to "Read More" buttons
const readMoreButtons = document.querySelectorAll('.read-more');
readMoreButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const parent = event.target.closest('.process-content'); // Find parent container
        const moreText = parent.querySelector('.more-text'); // Find hidden text
        const description = parent.querySelector('.description'); // Find description paragraph

        if (moreText.style.display === 'none' || moreText.style.display === '') {
            moreText.style.display = 'inline'; // Show hidden text
            button.textContent = 'See Less'; // Change button text
            description.innerHTML = description.innerHTML.replace('...', ''); // Remove dots
        } else {
            moreText.style.display = 'none'; // Hide text
            button.textContent = 'Read More →'; // Revert button text
            if (!description.innerHTML.includes('...')) {
                description.innerHTML = description.innerHTML.trim() + '...'; // Add dots
            }
        }
    });
});

// Handle dropdown for large screens (hover effect)
document.querySelectorAll('.dropdown').forEach((dropdown) => {
    dropdown.addEventListener('mouseenter', () => {
        dropdown.classList.add('show'); // Show dropdown on hover
    });
    dropdown.addEventListener('mouseleave', () => {
        dropdown.classList.remove('show'); // Hide dropdown on hover out
    });
});

