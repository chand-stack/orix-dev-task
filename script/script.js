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

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel-items");
    const prevBtn = document.querySelector(".prevSm");
    const nextBtn = document.querySelector(".nextSm");

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

document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const menuOverlay = document.getElementById("menu-overlay");
    const closeMenu = document.getElementById("close-menu");

    // Open Menu
    burgerMenu.addEventListener("click", () => {
        menuOverlay.classList.add("active");
    });

    // Close Menu
    closeMenu.addEventListener("click", () => {
        menuOverlay.classList.remove("active");
    });

    // Close Menu When Clicking Outside
    menuOverlay.addEventListener("click", (e) => {
        if (e.target === menuOverlay) {
            menuOverlay.classList.remove("active");
        }
    });
});
