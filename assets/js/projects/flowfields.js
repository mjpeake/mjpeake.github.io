$(document).ready(function () {
    let bgColor;

    // Generate random color
    do {
        bgColor = generateRandomColor();
    } while (getBrightness(bgColor) > 180); // Ensure the brightness is not too high

    // Set background color
    $('#showcase').css('background-color', bgColor);

    // Generate a lighter version of the random color
    let lighterColor = adjustColorLightness(bgColor, 30); // Increase lightness by 30 units

    new p5(FlowFields.TraceField(lighterColor, bgColor), "showcase")
});

// Function to generate a random color
function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// Function to get the brightness of a color
function getBrightness(color) {
    let rgb = color.substring(4, color.length - 1)
        .replace(/ /g, '')
        .split(',');

    return Math.sqrt(
        0.299 * (rgb[0] ** 2) +
        0.587 * (rgb[1] ** 2) +
        0.114 * (rgb[2] ** 2)
    );
}

// Function to adjust the lightness of a color
function adjustColorLightness(color, amount) {
    let rgb = color.substring(4, color.length - 1)
        .replace(/ /g, '')
        .split(',');

    let hsl = rgbToHsl(parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]));
    hsl[2] += amount; // Adjust lightness

    return `hsl(${hsl[0]},${hsl[1]}%,${hsl[2]}%)`;
}

// Helper function to convert RGB to HSL
function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h * 360, s * 100, l * 100];
}