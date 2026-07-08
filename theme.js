document.addEventListener("DOMContentLoaded", function () {
    function updateBackground() {
        const isDarkMode = document.querySelector('input[data-md-color-scheme="slate"]:checked');
        const basePath = window.location.origin + "/assets/images/";
        const bgImage = isDarkMode ? "bg_dark.png" : "bg.png";

        document.body.style.backgroundImage = `url('${basePath}${bgImage}')`;

        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }

    function applyStoredTheme() {
        const savedTheme = localStorage.getItem("theme");

        let isDarkMode = savedTheme === "dark" || savedTheme === null;
        const basePath = window.location.origin + "/assets/images/";
        document.body.style.backgroundImage = `url('${basePath}${isDarkMode ? "bg_dark.png" : "bg.png"}')`;

        if (isDarkMode) {
            const darkModeInput = document.querySelector('input[data-md-color-scheme="slate"]');
            if (darkModeInput) {
                darkModeInput.checked = true;
                darkModeInput.dispatchEvent(new Event("change"));
            }
        } else {
            const lightModeInput = document.querySelector('input[data-md-color-scheme="default"]');
            if (lightModeInput) {
                lightModeInput.checked = true;
                lightModeInput.dispatchEvent(new Event("change"));
            }
        }
        if (savedTheme === null) {
            localStorage.setItem("theme", "dark");
        }
    }
    document.querySelectorAll('input[name="__palette"]').forEach(input => {
        input.addEventListener("change", updateBackground);
    });

    applyStoredTheme();

    document.querySelectorAll(".project-img").forEach((img) => {
        img.addEventListener("mouseenter", () => {
            img.style.transition = "transform 0.1s ease-out";
        });
        img.addEventListener("mousemove", (e) => {
            const rect = img.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            img.style.transform = `scale(1.08) rotateX(${y * -14}deg) rotateY(${x * 14}deg)`;
        });
        img.addEventListener("mouseleave", () => {
            img.style.transition = "transform 0.4s ease-out";
            img.style.transform = "";
        });
    });

// document.addEventListener("DOMContentLoaded", function () {
//     // Select the active nav item
//     const activeNavItem = document.querySelector(".md-nav__item--active");
    
//     if (activeNavItem) {
//         activeNavItem.style.background = "none";
//         activeNavItem.style.backgroundColor = "transparent";
//         activeNavItem.style.boxShadow = "none";
//         }
//     });
    
});