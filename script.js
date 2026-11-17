
// ======================================================
// 1. MOBILE NAVIGATION MENU
// ======================================================

// Get menu button and navigation links
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Check whether the elements exist
if (menuToggle && navLinks) {

    // Add click event to menu button
    menuToggle.addEventListener("click", function () {

        // Show or hide navigation menu
        navLinks.classList.toggle("show");

        // Check whether the menu is open
        const isOpen = navLinks.classList.contains("show");

        // Update accessibility attribute
        menuToggle.setAttribute("aria-expanded", isOpen);

    });

}


// ======================================================
// 2. DYNAMIC COPYRIGHT YEAR
// ======================================================

// Get the year element
const yearElement = document.getElementById("year");

// Check whether the year element exists
if (yearElement) {

    // Display the current year automatically
    yearElement.textContent = new Date().getFullYear();

}


// ======================================================
// 3. CONTACT FORM VALIDATION
// ======================================================

// Get the contact form
const contactForm = document.getElementById("contactForm");

// Check whether the contact form exists
if (contactForm) {

    // Add submit event to the form
    contactForm.addEventListener("submit", function (event) {

        // Prevent default form submission
        event.preventDefault();

        // Get values from input fields
        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const message = document.getElementById("message").value.trim();

        // Get the form response element
        const formMessage = document.getElementById("formMessage");


        // Validate empty fields
        if (name === "" || email === "" || message === "") {

            formMessage.textContent = "Please fill in all fields.";

            return;
        }


        // Validate email address
        if (!email.includes("@") || !email.includes(".")) {

            formMessage.textContent = "Please enter a valid email address.";

            return;
        }


        // Display success message
        formMessage.textContent =
            "Thank you, " + name +
            "! Your message was validated successfully.";

        // Clear the form after successful validation
        contactForm.reset();

    });

}
