document.addEventListener("DOMContentLoaded", function () {
    var showcase = document.getElementById("home-showcase");
    if (!showcase) return;
    if (showcase.dataset.showcaseInitialized === "true") return;

    showcase.dataset.showcaseInitialized = "true";

    var initialTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    var style = window.getComputedStyle(showcase);
    var color = style.color;
    var bgColor = style.backgroundColor;

    function syncShowcaseTheme(theme) {
        var currentTheme = theme === "dark" ? "dark" : "light";
        showcase.dataset.showcaseInverted = String(currentTheme !== initialTheme);
    }

    ColourfulBoids("home-showcase", color, bgColor);
    syncShowcaseTheme(initialTheme);

    document.addEventListener("themechange", function (event) {
        syncShowcaseTheme(event.detail && event.detail.theme);
    });
});
