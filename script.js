document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (name === "" || email === "") {
            alert("Please fill in all fields.");
        } else {
            alert("Form submitted successfully!");
        }
    });
});