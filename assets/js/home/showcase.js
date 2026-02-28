document.addEventListener("DOMContentLoaded", function () {
    var showcase = document.getElementById("home-showcase");
    if (!showcase) return;

    var style = window.getComputedStyle(showcase);
    var color = style.color;
    var bgColor = style.backgroundColor;
    ColourfulBoids("home-showcase", color, bgColor);
});
