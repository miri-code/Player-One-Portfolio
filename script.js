// Typing Animation
const typingText = "Hello!";
let index = 0;
const typingElement = document.getElementById("typing-text");

function typeText() {
    if (index < typingText.length) {
        typingElement.innerHTML += typingText[index];
        index++;
        setTimeout(typeText, 100); // Adjust speed here
    } else {
        // Wait for a moment, then show the home screen
        setTimeout(() => {
            document.getElementById("splash").style.display = "none";
            document.getElementById("home-screen").style.display = "block";
        }, 1000);
    }
}

// Start the typing animation
window.onload = typeText;

//Discord Username added message
document.addEventListener("DOMContentLoaded", () => {
    const discordIcon = document.getElementById("discord-icon");
    const copyMessage = document.getElementById("copy-message");
    const discordTag = "mirin7279";

    discordIcon.addEventListener("click", () => {
        // Copy Discord tag to clipboard
        navigator.clipboard.writeText(discordTag)
            .then(() => {
                // Show the copy message
                copyMessage.classList.remove("hidden");
                copyMessage.style.opacity = 1;

                // Hide the message after 2 seconds
                setTimeout(() => {
                    copyMessage.style.opacity = 0;
                    setTimeout(() => copyMessage.classList.add("hidden"), 300); // Match the fade-out transition time
                }, 2000);
            })
            .catch(() => {
                alert("Failed to copy the Discord username. Please try again.");
            });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const typingText = "About Me";
    const typingHeader = document.querySelector(".about-header h2");
    const typingBox = document.querySelector(".typing-box");

    let charIndex = 0;

    function type() {
        if (charIndex < typingText.length) {
            typingHeader.textContent = typingText.substring(0, charIndex + 1);
            typingHeader.appendChild(typingBox);
            charIndex++;
            setTimeout(type, 100); // Adjust typing speed here
        }
    }

    type();
});
const starContainer = document.getElementById("pixel-stars");

// Generate multiple stars with random animations
function createStars(count) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.classList.add("pixel-star");

        // Randomize starting position
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${3 + Math.random() * 5}s`; // Random duration between 3s and 8s
        star.style.animationDelay = `${Math.random() * 5}s`; // Random delay

        starContainer.appendChild(star);
    }
}

// Create 100 stars
createStars(100);

navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetSection = event.target.getAttribute("data-section");

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove("section-active");
        });

        // Show the target section
        document.getElementById(targetSection).classList.add("section-active");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetSection = event.target.getAttribute("data-section");
            const section = document.getElementById(targetSection);

            if (section) {
                section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("#navbar a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            // Prevent default navigation
            event.preventDefault();

            // Scroll to the target section
            const targetSection = document.querySelector(link.getAttribute("href"));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth", // Smooth scrolling effect
                });
            }
        });
    });
});



