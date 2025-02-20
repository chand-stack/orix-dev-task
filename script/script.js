// brand logo slider script
document.addEventListener("DOMContentLoaded", function () {
    const logoSlider = document.getElementById(".logo-slider");
    const logos = logoSlider.innerHTML;
    logoSlider.innerHTML += logos; 
});

// carousel button script for large screens
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel-items");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let scrollAmount = 0;
    const itemWidth = 320;

    nextBtn.addEventListener("click", () => {
        scrollAmount += itemWidth;
        if (scrollAmount >= carousel.scrollWidth - itemWidth) {
            scrollAmount = 0; 
        }
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    });

    prevBtn.addEventListener("click", () => {
        scrollAmount -= itemWidth;
        if (scrollAmount < 0) {
            scrollAmount = carousel.scrollWidth - itemWidth; 
        }
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    });
    setInterval(() => {
        nextBtn.click();
    }, 4000);
});

// carousel button script for small screens
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel-items");
    const prevBtn = document.querySelector(".prevSm");
    const nextBtn = document.querySelector(".nextSm");

    let scrollAmount = 0;
    const itemWidth = 320;

    nextBtn.addEventListener("click", () => {
        scrollAmount += itemWidth;
        if (scrollAmount >= carousel.scrollWidth - itemWidth) {
            scrollAmount = 0; 
        }
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    });

    prevBtn.addEventListener("click", () => {
        scrollAmount -= itemWidth;
        if (scrollAmount < 0) {
            scrollAmount = carousel.scrollWidth - itemWidth; 
        }
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    });
    setInterval(() => {
        nextBtn.click();
    }, 4000);
});


// burger menu script for small screens
document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const menuOverlay = document.getElementById("menu-overlay");
    const closeMenu = document.getElementById("close-menu");
    burgerMenu.addEventListener("click", () => {
        menuOverlay.classList.add("active");
    });
    closeMenu.addEventListener("click", () => {
        menuOverlay.classList.remove("active");
    });
    menuOverlay.addEventListener("click", (e) => {
        if (e.target === menuOverlay) {
            menuOverlay.classList.remove("active");
        }
    });
});


// script for nav links active routing
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");
    let activeItem = document.querySelector(".nav-item.active");

    navItems.forEach(item => {
        item.addEventListener("click", function () {
            if (activeItem) {
                activeItem.classList.remove("active");
            }

            this.classList.add("active");
            activeItem = this;
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});


// script for footer links active routing
document.addEventListener("DOMContentLoaded", function () {
    const allLinks = document.querySelectorAll("[data-target]");

    function activateLink(clickedLink) {
        
        document.querySelectorAll(".dot").forEach(dot => {
            dot.style.display = "none";
        });

        
        const dot = clickedLink.querySelector(".dot");
        if (dot) dot.style.display = "inline";
    }

    allLinks.forEach(link => {
        link.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth",
                });
            }

            activateLink(this); 
        });
    });
    const defaultHome = document.querySelector('[data-target="home"] .dot');
    if (defaultHome) defaultHome.style.display = "inline";
});



// script for close burger menu after choosing a section
document.addEventListener("DOMContentLoaded", function () {
    const menuOverlay = document.getElementById("menu-overlay");
    const closeMenuBtn = document.getElementById("close-menu");
    const burgerMenuItems = document.querySelectorAll('#burger-menu li[data-target]');
  
    function closeBurgerMenu() {
      menuOverlay.classList.remove("active");
    }

    if (closeMenuBtn) {
      closeMenuBtn.addEventListener("click", closeBurgerMenu);
    }

    burgerMenuItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
        closeBurgerMenu();
      });
    });
  });
  
  

