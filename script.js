// Slider for Yoga Tips & Tricks
const sliderContent = [
    "Tip: Focus on deep, mindful breathing throughout your practice.",
    "Tip: Use props to enhance alignment and support your poses.",
    "Tip: Warm up with gentle stretches before starting your yoga routine.",
    "Tip: Stay present and mindful in each pose.",
    "Tip: Practice regularly, even if only for a few minutes a day.",
    "Tip: Listen to your body and avoid pushing beyond your limits.",
    "Tip: Incorporate a cool-down and stretch at the end of your practice.",
    "Tip: Stay hydrated before and after your yoga sessions.",
    "Tip: Explore different yoga styles to find what suits you best.",
    "Tip: End your practice with a few minutes of meditation or relaxation.",
];

let currentSlide = 0;

function showSlide() {
    const slider = document.querySelector(".slider");
    slider.innerHTML = `<h3>${sliderContent[currentSlide]}</h3>`;
    currentSlide = (currentSlide + 1) % sliderContent.length;
}

// Initialize the slider
showSlide();
setInterval(showSlide, 4000); // Change slide every 4 seconds
