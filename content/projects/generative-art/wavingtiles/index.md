+++
title = 'Waving Tiles'
page_type = "project"
date = 2025-05-08T09:00:00-07:00
draft = false
link = 'https://mattpeake.com/wavingtiles/'
github = 'https://github.com/mjpeake/wavingtiles'
language-icon = 'fa-js'
filters=["Javascript","Art"]
description = "Waving tiles animated using perlin noise."

[[script]]
  src = "https://cdn.jsdelivr.net/npm/@mjpeake/wavingtiles@1.0.0/dist/wavingtiles.js"
[[adapter]]
  src = "js/projects/wavingtiles.js"
[[gallery]]
  location = '/images/gallery/wavingtiles/*'
+++

Waving Tiles is a TypeScript library for creating waving tile visualizations. It uses Perlin noise to generate smooth, flowing animations with customizable styles, colors, and densities.

## Installation

You can install WavingTiles via npm:
```bash
npm i @mjpeake/wavingtiles
```

Alternatively, you can also use the following script tag reference:
```html
<script src="https://cdn.jsdelivr.net/npm/@mjpeake/wavingtiles@1.0.0/dist/wavingtiles.js"></script>
```

## Usage

To use WavingTiles in your project, include the library in your HTML file and initialize it with the appropriate parameters.

```html {linenos=inline}
<!DOCTYPE html>
<html>

<head>
  <title>Waving Tiles</title>
  <link rel="stylesheet" href="./assets/style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@mjpeake/wavingtiles@1.0.0/dist/wavingtiles.js"></script>
</head>

<body>
  <div id="wavingtiles"></div>
  <script>
    const colors = ["#7209b7", "#b5179e", "#f72585", "#4cc9f0", "#4895ef", "#4361ee"];
    const backgroundColor = "#3a0ca3";
    const density = 75;

    $(document).ready(function () {
      WavingTiles.WavingTiles("wavingtiles", colors, backgroundColor, density);
    });
  </script>
</body>
</html>
```

## Configuration Options

The Waving Tiles library allows you to customize the appearance and behavior of the tiles through the following parameters:

### **Color Options**
- **`colors`** (string[]):  
  An array of colors used for the tiles. Each tile is assigned a color from this array.

- **`backgroundColor`** (string):  
  The background color of the canvas.

### **Tile Characteristics**
- **`density`** (number):  
  Controls the number of tiles per row and column. Higher values result in smaller tiles and a denser grid.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/mjpeake/wavingtiles/blob/main/LICENSE) file for details.