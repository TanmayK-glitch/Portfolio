// <----------------Light / Dark Mode Toggle ----------->
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById("toggle-btn");
    const sunIcon = document.querySelector('.ri-sun-fill');
    const moonIcon = document.querySelector('.ri-moon-fill');

    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    sunIcon.addEventListener('click', toggleTheme);
    moonIcon.addEventListener('click', toggleTheme);

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }

    function updateThemeIcon(theme) {
        if (theme === 'light') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
        else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }
});

//<------------------Empty Form Handeling -------------------->
const submitButton = document.querySelector('.send-message-btn');
const inputText = document.querySelectorAll('.inputText');

submitButton.addEventListener('click', (e) => {
    let isEmpty = false;
    inputText.forEach(input => {
        if (!input.value.trim()) {
            isEmpty = true;
        }
    });

    if (isEmpty) {
        e.preventDefault();
        alert("Please enter all form details.");
    }
});

// <------------------------- Hamburger Menu Script ------------------------>
const openToggle = document.querySelector('.ri-menu-line');
const closeToggle = document.querySelector('.ri-close-fill');
const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav-text');

function openMenu() {
    navMenu.classList.add('active');
    document.body.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
    navMenu.classList.add('animate-in');
    navMenu.classList.remove('animate-out');
}

function closeMenu() {
    navMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
    navMenu.classList.add('closing');
    document.body.style.overflow = 'auto';
    navMenu.classList.add('animate-out');
    navMenu.classList.remove('animate-in');

    setTimeout(() => {
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = 'auto';
        navMenu.classList.remove('animate-out');
    }, 300);
}

openToggle.addEventListener('click', openMenu);
closeToggle.addEventListener('click', closeMenu);

document.addEventListener('keydown', function (e) {
    if (e.key == "Escape" && navMenu.classList.contains('active')) {
        closeMenu();
    }
});

document.querySelectorAll('.nav-text ul li a').forEach((vals) => {
    vals.addEventListener('click', function () {
        closeMenu();
    });
});

document.addEventListener('click', function (e) {
    if (navMenu.classList.contains('active') && !openToggle.contains(e.target) && !navMenu.contains(e.target)) {
        closeMenu();
    }
});

// <------------------JS for infinte scroll animation--------------->
const scrollers = document.querySelectorAll('.techIcons');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector('.techIcons-track');
        // Clone the direct children of the track, not the container
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

// <-----------------------Digital Clock for Footer---------------------->
function DigitalClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    function handleZeroes(num) {
        return num.toString().padStart(2, "0");
    }

    const timeString = `${handleZeroes(hours)}:${handleZeroes(minutes)}:${handleZeroes(seconds)} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

DigitalClock();
setInterval(DigitalClock, 1000);

// <--------Cursor Effect (card-scoped)----------------->
const projectCards = document.querySelectorAll('.project1');

projectCards.forEach((card) => {
    let glow = card.querySelector('.cursorGlow');
    if (!glow) {
        glow = document.createElement('div');
        glow.className = 'cursorGlow';
        card.appendChild(glow);
    }

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        glow.style.left = x + 'px';
        glow.style.top = y + 'px';
    });

    card.addEventListener('mouseenter', () => {
        glow.classList.add('active');
    });

    card.addEventListener('mouseleave', () => {
        glow.classList.remove('active');
    });
});

// <-----------GSAP Animations-------------->
// Master timeline for navbar animations
document.addEventListener('DOMContentLoaded', function () {
    var navTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Logo animation - scale with rotation and fade
    navTimeline.from(".logo", {
        y: -30,
        x: -20,
        opacity: 0,
        scale: 0.5,
        rotation: -10,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.3
    });

    navTimeline.from("ul li", {
        y: -30,
        x: 50,
        opacity: 0,
        scale: 0.8,
        rotation: 5,
        duration: 0.9,
        ease: "elastic.out(1, 0.5)",
        stagger: {
            amount: 0.6,
            from: "end"
        }
    }, "-=0.5");

    navTimeline.from("#toggle-btn i", {
        y: -20,
        opacity: 0,
        scale: 0,
        rotation: 180,
        duration: 0.8,
        ease: "back.out(2)",
        stagger: {
            amount: 0.4,
            from: "start"
        }
    }, "-=0.3");

    document.querySelectorAll("ul li a").forEach((link) => {
        link.addEventListener("mouseenter", () => {
            gsap.to(link, {
                scale: 1.1,
                y: -2,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        link.addEventListener("mouseleave", () => {
            gsap.to(link, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // Logo hover effect
    const logo = document.querySelector(".logo");
    if (logo) {
        logo.addEventListener("mouseenter", () => {
            gsap.to(logo, {
                scale: 1.05,
                rotation: 2,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        logo.addEventListener("mouseleave", () => {
            gsap.to(logo, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    }

    // Icon hover effects
    document.querySelectorAll("#toggle-btn i").forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
            gsap.to(icon, {
                scale: 1.2,
                rotation: 10,
                duration: 0.3,
                ease: "back.out(2)"
            });
        });

        icon.addEventListener("mouseleave", () => {
            gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
});