document.addEventListener('DOMContentLoaded', function() {
    const parallaxWrapper = document.querySelector('.parallax-wrapper');
    const hero = document.querySelector('.hero');
    const scrollIconContainer = document.querySelector('.scroll-icon-container');
    const navLinks = document.querySelectorAll('nav ul li a');
    const loginButton = document.querySelector('.modal-buttons .input-button');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');

    // Parallax effect on scroll
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const heroHeight = hero.offsetHeight;
        const scrollIconHeight = scrollIconContainer.offsetHeight;

        // Adjust the parallax effect based on scroll position
        const parallaxSpeed = 0.5;
        hero.style.transform = `translateY(${scrollTop * parallaxSpeed}px)`;

        // Hide the scroll icon when scrolled past the hero section
        if (scrollTop > heroHeight - scrollIconHeight) {
            scrollIconContainer.style.opacity = '0';
        } else {
            scrollIconContainer.style.opacity = '1';
        }
    });

    // Smooth scroll to the main content when scroll icon is clicked
    scrollIconContainer.addEventListener('click', function() {
        const mainContent = document.querySelector('.main-content');
        mainContent.scrollIntoView({ behavior: 'smooth' });
    });

    // Smooth scroll to sections when nav links are clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Login functionality
    loginButton.addEventListener('click', function(event) {
        event.preventDefault();
        const username = emailInput.value;
        const password = passwordInput.value;

        if (username === 'MEDISANA' && password === 'KARTIK') {
            window.location.href = '/symptom/symptom_checker.html'; // Use absolute path
        } else {
            alert('Invalid username or password');
        }
    });

    // Modal functionality
    const body = document.querySelector("body");
    const modal = document.querySelector(".modal");
    const modalButton = document.querySelector(".modal-button");
    const closeButton = document.querySelector(".close-button");
    let isOpened = false;

    const openModal = () => {
        modal.classList.add("is-open");
        body.style.overflow = "hidden";
    };

    const closeModal = () => {
        modal.classList.remove("is-open");
        body.style.overflow = "initial";
    };

    window.addEventListener("scroll", () => {
        if (window.scrollY > window.innerHeight / 3 && !isOpened) {
            isOpened = true;
            scrollDown.style.display = "none";
            openModal();
        }
    });

    modalButton.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);

    document.onkeydown = evt => {
        evt = evt || window.event;
        if (evt.keyCode === 27) {
            closeModal();
        }
    };
});

