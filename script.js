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

document.querySelectorAll('.nav-text a').forEach((vals) => {
    vals.addEventListener('click', function () {
        closeMenu();
    });
});

document.addEventListener('click', function (e) {
    if (navMenu.classList.contains('active') && !openToggle.contains(e.target) && !navMenu.contains(e.target)) {
        closeMenu();
    }
});

