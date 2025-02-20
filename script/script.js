// brand logo slider script
document.addEventListener("DOMContentLoaded", function () {
    const logoSlider = document.getElementById(".logo-slider");
    const logos = logoSlider.innerHTML;
    logoSlider.innerHTML += logos; 
});

// Carousel button script for large and small screens
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel-items");
    let scrollAmount = 0;
    const itemWidth = 320;

  
    const prevBtns = document.querySelectorAll(".prev, .prevSm");
    const nextBtns = document.querySelectorAll(".next, .nextSm");

    function moveNext() {
        scrollAmount += itemWidth;
        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
            scrollAmount = 0;
        }
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    }

 
    function movePrev() {
        scrollAmount -= itemWidth;
        if (scrollAmount < 0) {
            scrollAmount = carousel.scrollWidth - carousel.clientWidth;
        }
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    }

  
    nextBtns.forEach(btn => btn.addEventListener("click", moveNext));
    prevBtns.forEach(btn => btn.addEventListener("click", movePrev));

    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50; 

    carousel.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchmove", (e) => {
        touchEndX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", () => {
        const swipeDistance = touchStartX - touchEndX;
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                
                moveNext();
            } else {
                
                movePrev();
            }
        }
    });
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
  
  

