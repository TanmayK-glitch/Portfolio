
// // Get form elements
// const contactForm = document.querySelector('.contactform form');
// const nameInput = document.getElementById('fname');
// const emailInput = document.getElementById('email');
// const subjectInput = document.getElementById('sub');
// const messageInput = document.getElementById('message');

// // Add event listener for form submission
// contactForm.addEventListener('submit', function (e) {
//     e.preventDefault(); // Prevent default form submission

//     // Create an object to store form data
//     const formData = {
//         name: nameInput.value,
//         email: emailInput.value,
//         subject: subjectInput.value,
//         message: messageInput.value,
//         timestamp: new Date().toISOString()
//     };

//     // Store in localStorage
//     storeFormData(formData);

//     // Clear form
//     contactForm.reset();

//     // Show success message
//     showSuccessMessage();
// });

// // Function to store form data
// function storeFormData(data) {
//     // Get existing data from localStorage or initialize empty array
//     let storedData = JSON.parse(localStorage.getItem('contactFormData')) || [];

//     // Add new form data
//     storedData.push(data);

//     // Store back in localStorage
//     localStorage.setItem('contactFormData', JSON.stringify(storedData));
// }

// // Function to show success message
// function showSuccessMessage() {
//     // Create success message element
//     const successMessage = document.createElement('div');
//     successMessage.className = 'success-message';
//     successMessage.textContent = 'Message sent successfully!';
//     successMessage.style.cssText = `
//         position: fixed;
//         top: 20px;
//         right: 20px;
//         background: linear-gradient(to right, #4b0082, #ff69b4);
//         color: white;
//         padding: 15px 25px;
//         border-radius: 5px;
//         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//         z-index: 1000;
//         animation: slideIn 0.5s ease-out;
//     `;

//     // Add to document
//     document.body.appendChild(successMessage);

//     // Remove after 3 seconds
//     setTimeout(() => {
//         successMessage.style.animation = 'slideOut 0.5s ease-out';
//         setTimeout(() => {
//             document.body.removeChild(successMessage);
//         }, 500);
//     }, 3000);
// }

// // Add CSS animations
// const style = document.createElement('style');
// style.textContent = `
//     @keyframes slideIn {
//         from {
//             transform: translateX(100%);
//             opacity: 0;
//         }
//         to {
//             transform: translateX(0);
//             opacity: 1;
//         }
//     }

//     @keyframes slideOut {
//         from {
//             transform: translateX(0);
//             opacity: 1;
//         }
//         to {
//             transform: translateX(100%);
//             opacity: 0;
//         }
//     }
// `;
// document.head.appendChild(style); 

// <----------------Light / Dark Mode Toggle ----------->
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById("toggle-btn");
    const sunIcon = document.querySelector('.ri-sun-fill');
    const moonIcon = document.querySelector('.ri-moon-fill');

    // Check for saved theme preference or default to dark mode
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    toggleButton.addEventListener('click', function () {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // Set the new theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

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
}

function closeMenu() {
    navMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
    navMenu.classList.add('closing');
    document.body.style.overflow = 'auto';

    // setTimeout(() => {
    //     navMenu.classList.remove('closing');
    //     document.body.classList.remove('open-menu');
    //     document.body.style.overflow = "auto";
    // }, 300);
}

openToggle.addEventListener('click', openMenu);
closeToggle.addEventListener('click', closeMenu);

document.addEventListener('Keydown', function (e) {
    if (e.key === "Escape" && navMenu.classList.contains('active')) {
        console.log("Working");
        closeMenu();
    }

});

document.querySelectorAll('.nav-text a').forEach((vals) => {
    vals.addEventListener('click', function () {
        closeMenu();
    });
});

