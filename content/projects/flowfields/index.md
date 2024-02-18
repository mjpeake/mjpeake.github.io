+++
title = 'Flow Fields'
page_type = "project"
date = 2023-01-15T09:00:00-07:00
draft = false
github = 'https://github.com/mjpeake/flowfields'
language-icon = 'fa-js'
tags=["Javascript","GenerativeArt"]

[[script]]
  src = "https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js"
[[script]]
  src = "https://cdn.jsdelivr.net/npm/@mjpeake/flowfields@1.0.1/dist/flowfields.js"
[[adapter]]
  src = "js/projects/flowfields.js"
[[gallery]]
  location = '/images/gallery/flowfields/*'
+++

Flow Fields is a JavaScript library for creating mesmerizing flow field visualizations. It provides several types of flow fields, each offering unique patterns and effects.

## Installation

You can install FlowFields via npm:
```bash
npm i @mjpeake/flowfields
```

Alternatively, you can also use the following script tag reference:
```html
<script src="https://cdn.jsdelivr.net/npm/@mjpeake/flowfields@1.0.1/dist/flowfields.js"></script>
```

## Usage

To use FlowFields in your project, include the library in your HTML file and initialize it with the appropriate parameters. Here's an example of how to create a TraceField visualization:

```html {linenos=inline}
<!DOCTYPE html>
<html>

<head>
  <title>Flow Fields</title>
  <link rel="stylesheet" href="./assets/style.css">
  <script src="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@mjpeake/flowfields@1.0.1/dist/flowfields.js"></script>
</head>

<body>
  <div id="flowfield"></div>
  <script>
    $(document).ready(function () {
      // Get colors from CSS
      const color = $('#flowfield').css("color");
      const bgColor = $('#flowfield').css("background-color");
      // Initialize TraceField
      new p5(FlowFields.TraceField(color, bgColor), "flowfield");
    });
  </script>
</body>
</html>
```

This example initializes a TraceField visualization using the colors defined in the CSS of the `flowfield` element.

## Available Fields

- **DotField**: Creates a field of dots with varying sizes and positions.
- **LineField**: Generates a field of lines indicating flow direction.
- **ImageTraceField**: Uses an image to generate a field with particles tracing its features.
- **TraceField**: Displays particles moving within the flow field.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/mjpeake/flowfields/blob/main/LICENSE) file for details.