// NAME STANDARD SCRIPT
document.addEventListener("DOMContentLoaded", function() {
    var sitenameElements = document.querySelectorAll(".sitename");
    var siteurlElements = document.querySelectorAll(".siteurl");
    sitenameElements.forEach(function(element) {
        element.textContent = "Vexwing"; // name of the website here
    });
    siteurlElements.forEach(function(element) {
        element.textContent = "vexwing.github.io"; // url of the website here
    });
});

// SWITCH THEME FUNCTION
function toggleTheme() {
    var body = document.body;
    body.classList.toggle("light-mode");
} 

// SWITCH FONT FUNCTION

function toggleFont() {
    var body = document.body;
    body.classList.toggle("sans-serif");
} 

// NAVBAR INTEGRATER SCRIPT