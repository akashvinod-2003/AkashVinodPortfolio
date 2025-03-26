document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });



    // Mobile Navigation
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("open");
});

    // Form Submission
    document.querySelector(".contact-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        const mailtoLink = `mailto:akasheroor1@gmail.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0A${encodeURIComponent(message)}`;

        window.location.href = mailtoLink;
        alert("Your message has been sent!");
        this.reset();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const root = document.documentElement;

    // Check saved theme in localStorage, default to light
    let currentTheme = localStorage.getItem("theme") || "light";
    root.setAttribute("data-theme", currentTheme);
    updateButtonIcon(currentTheme);

    themeToggle.addEventListener("click", () => {
        // Toggle between light and dark mode
        currentTheme = currentTheme === "light" ? "dark" : "light";
        root.setAttribute("data-theme", currentTheme);
        localStorage.setItem("theme", currentTheme);
        updateButtonIcon(currentTheme);
    });

    function updateButtonIcon(theme) {
        themeToggle.textContent = theme === "light" ? "🌞" : "🌙";
    }
});
