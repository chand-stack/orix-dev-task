document.addEventListener("DOMContentLoaded", function () {
    const logoSlider = document.getElementById(".logo-slider");
    const logos = logoSlider.innerHTML;
    logoSlider.innerHTML += logos; 
});

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel-items");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let scrollAmount = 0;
    const itemWidth = 320; // Adjust according to your image size

    nextBtn.addEventListener("click", () => {
        scrollAmount += itemWidth;
        if (scrollAmount >= carousel.scrollWidth - itemWidth) {
            scrollAmount = 0; // Loop back
        }
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    });

    prevBtn.addEventListener("click", () => {
        scrollAmount -= itemWidth;
        if (scrollAmount < 0) {
            scrollAmount = carousel.scrollWidth - itemWidth; // Loop back
        }
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    });

    // Auto-scroll every 3 seconds
    setInterval(() => {
        nextBtn.click();
    }, 4000);
});