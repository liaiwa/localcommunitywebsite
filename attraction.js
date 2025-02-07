// Select DOM elements for Nature Carousel
const naturePrevButton = document.querySelector('#nature-prev');
const natureNextButton = document.querySelector('#nature-next');
const natureCarouselImage = document.querySelector('#nature-carousel-image');
const natureCarouselText = document.querySelector('#nature-carousel-heading');
const natureCarouselParagraph = document.querySelector('#nature-carousel-description');

// Select DOM elements for Adventure Carousel
const adventurePrevButton = document.querySelector('#adventure-prev');
const adventureNextButton = document.querySelector('#adventure-next');
const adventureCarouselImage = document.querySelector('#adventure-carousel-image');
const adventureCarouselText = document.querySelector('#adventure-carousel-heading');
const adventureCarouselParagraph = document.querySelector('#adventure-carousel-description');

// Data for Nature Carousel
const natureCarouselData = [
    {
        image: "image/turtle.jpg",
        title: "Red-eared Slider",
        text: "Red-eared slider (Trachemys scripta elegans) is a pond turtle known for its greenish shell, which can reach up to 30 cm in length, and it has unique bright red or orange stripe behind its eyes. These turtles live and grow in freshwater habitats like ponds and lakes, often basking in the sun on logs or rock to boost the growth of beneficial bacteria on their shells. They are omnivorous, with youngins favoring a carnivorous diet and adults leaning more towards aquatic plants. Breeding occurs in spring, with females laying 2 to 20 eggs in sandy nests that incubate for 60 to 90 days."
    },
    {
        image: "image/samanea.jpg",
        title: "Samanea Saman",
        text: "Samanea saman, commonly known as the rain tree, is a tropical species native to Central and South America that bloom in various tropical regions worldwide. Growing up to 15 to 25 meters tall, it features a remarkable umbrella-shaped crown with a broad canopy that provides extensive shade. The tree's bipinnate leaves can fold up at night, a phenomenon called nyctinasty. Rain trees produce fragrant, fluffy yellow to pink flowers in clusters, attracting pollinators like bees, and bear flat, brown seed pods that can reach 20 cm in length and contains several seeds."
    }
];

// Data for Adventure Carousel
const adventureCarouselData = [
    {
        image: "image/jogging.jpg",
        title: "Jogging Track",
        text: "A serene green space, the jogging track curves gracefully, bound by towering trees that provide a refreshing canopy of shade. As joggers move smoothly along the soft, well-maintained surface, the gentle rustle of leaves adds a soothing backdrop to their rhythm. Near the track, a charming stone slab walkway invites leisurely strollers to enjoy the soothing surroundings, allowing them to immerse themselves in the beauty of nature. The blend of healthy activity and peaceful wandering creates a vibrant yet calming atmosphere, making this outdoor space a perfect haven for fitness enthusiasts and casual walkers alike."
    },
    {
        image: "image/picnic.jpg",
        title: "Picnic Area",
        text: "The small grass picnic area offers a delightful escape, its lush, emerald lawn inviting visitors to spread out a blanket and relax. Surrounded by a modest collection of vibrant plants and swaying trees, it provides a picturesque backdrop for gatherings. As the gentle breeze rustles the leaves, a stunning view of the nearby lake sparkles in the sunlight, creating a perfect spot for families and friends to enjoy a meal together. The combination of the peaceful natural setting and the calm waters makes this intimate picnic area a charming sanctuary for those seeking a peaceful outdoor experience."
    }
];

// Current indices for both carousels
let natureCurrentIndex = 0;
let adventureCurrentIndex = 0;

// Update carousel content with transition
function updateCarousel(index, carouselData, carouselImage, carouselText, carouselParagraph) {
    // Fade out the content
    carouselImage.style.opacity = 0;
    carouselText.style.opacity = 0;
    carouselParagraph.style.opacity = 0;

    // After fade out, update the content
    setTimeout(() => {
        carouselImage.src = carouselData[index].image;
        carouselText.textContent = carouselData[index].title;
        carouselParagraph.textContent = carouselData[index].text;

        // Fade in the updated content
        carouselImage.style.opacity = 1;
        carouselText.style.opacity = 1;
        carouselParagraph.style.opacity = 1;
    }, 500); // 500ms delay before updating the content to match the fade-out duration
}

// Event listeners for Nature Carousel
if (naturePrevButton) {
    naturePrevButton.addEventListener('click', () => {
        natureCurrentIndex = (natureCurrentIndex - 1 + natureCarouselData.length) % natureCarouselData.length;
        updateCarousel(natureCurrentIndex, natureCarouselData, natureCarouselImage, natureCarouselText, natureCarouselParagraph);
    });
}

if (natureNextButton) {
    natureNextButton.addEventListener('click', () => {
        natureCurrentIndex = (natureCurrentIndex + 1) % natureCarouselData.length;
        updateCarousel(natureCurrentIndex, natureCarouselData, natureCarouselImage, natureCarouselText, natureCarouselParagraph);
    });
}

// Event listeners for Adventure Carousel
if (adventurePrevButton) {
    adventurePrevButton.addEventListener('click', () => {
        adventureCurrentIndex = (adventureCurrentIndex - 1 + adventureCarouselData.length) % adventureCarouselData.length;
        updateCarousel(adventureCurrentIndex, adventureCarouselData, adventureCarouselImage, adventureCarouselText, adventureCarouselParagraph);
    });
}

if (adventureNextButton) {
    adventureNextButton.addEventListener('click', () => {
        adventureCurrentIndex = (adventureCurrentIndex + 1) % adventureCarouselData.length;
        updateCarousel(adventureCurrentIndex, adventureCarouselData, adventureCarouselImage, adventureCarouselText, adventureCarouselParagraph);
    });
}

// Initial updates for both carousels
updateCarousel(natureCurrentIndex, natureCarouselData, natureCarouselImage, natureCarouselText, natureCarouselParagraph);
updateCarousel(adventureCurrentIndex, adventureCarouselData, adventureCarouselImage, adventureCarouselText, adventureCarouselParagraph);
