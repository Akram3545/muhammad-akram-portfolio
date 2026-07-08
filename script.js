// ===============================
// DXB Portfolio JavaScript
// Muhammad Akram
// ===============================

// Welcome Message
console.log("Welcome to DXB Portfolio");

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// Active Navigation Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
// ===========================
// Current Year in Footer
// ===========================

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
    "© " + new Date().getFullYear() + " DXB Portfolio | Muhammad Akram | All Rights Reserved";
}