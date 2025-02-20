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


document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");

    // Ensure Home is active by default
    let activeItem = document.querySelector(".nav-item.active");

    navItems.forEach(item => {
        item.addEventListener("click", function () {
            // Remove active class from previous item
            if (activeItem) {
                activeItem.classList.remove("active");
            }

            // Add active class to the clicked item
            this.classList.add("active");
            activeItem = this; // Update active item reference

            // Scroll to the corresponding section
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

document.addEventListener("DOMContentLoaded", function () {
    const allLinks = document.querySelectorAll("[data-target]"); // Select both nav and footer links

    function activateLink(clickedLink) {
        // Remove dot from all links
        document.querySelectorAll(".dot").forEach(dot => {
            dot.style.display = "none";
        });

        // Show dot for clicked link
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

            activateLink(this); // Set active dot
        });
    });

    // ✅ Set "Home" as the default active link
    const defaultHome = document.querySelector('[data-target="home"] .dot');
    if (defaultHome) defaultHome.style.display = "inline";
});




document.addEventListener("DOMContentLoaded", function () {
    const menuOverlay = document.getElementById("menu-overlay");
    const closeMenuBtn = document.getElementById("close-menu");
    const burgerMenuItems = document.querySelectorAll('#burger-menu li[data-target]');
  
    // Function to close the burger menu
    function closeBurgerMenu() {
      menuOverlay.classList.remove("active");
    }
  
    // Attach event listener to the close button
    if (closeMenuBtn) {
      closeMenuBtn.addEventListener("click", closeBurgerMenu);
    }
  
    // Attach event listeners to all burger menu items
    burgerMenuItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
  
        // Close the menu using the same function
        closeBurgerMenu();
      });
    });
  });
  
  

