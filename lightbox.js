// Select all images in the gallery
const galleryImages = document.querySelectorAll('.gallery-image');

// Select the lightbox modal and the image inside it
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightbox = document.getElementById('close-lightbox');

// Store the images for the lightbox
let lightboxImages = [];
galleryImages.forEach(image => lightboxImages.push(image.src)); // Populate lightboxImages array with image sources

let currentIndex = 0; // Start at the first image

// Function to update the lightbox image
function updateLightboxImage() {
    lightboxImage.src = lightboxImages[currentIndex];
}

// Add event listeners to each image for the lightbox effect
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        // Set the clicked image's source to the lightbox image
        lightboxImage.src = image.src;
        // Store the clicked image index
        currentIndex = lightboxImages.indexOf(image.src);
        // Show the lightbox modal
        lightboxModal.style.display = 'flex';
    });
});

// Close the lightbox when the close button is clicked
closeLightbox.addEventListener('click', () => {
    lightboxModal.style.display = 'none';
});

// Close the lightbox when clicking outside the image
lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
        lightboxModal.style.display = 'none';
    }
});

// Optional: Next/Previous buttons to manually navigate through images

// Next button
document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % lightboxImages.length;
    updateLightboxImage();
});

// Previous button
document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + lightboxImages.length) % lightboxImages.length;
    updateLightboxImage();
});

// Initialize modal with the first image when page loads
updateLightboxImage();