+++
title = 'Flow Fields'
page_type = "project"
date = 2023-01-15T09:00:00-07:00
draft = false
github = 'https://github.com/mjpeake/flowfields'
language-icon = 'fa-js'
filters=["Javascript","Art"]

[[script]]
  src = "https://cdn.jsdelivr.net/npm/@mjpeake/flowfields@2.0.5/dist/flowfields.js"
[[adapter]]
  src = "js/projects/flowfields.js"
[[gallery]]
  location = '/images/gallery/flowfields/*'
+++

Flow Fields is a TypeScript library for creating mesmerizing flow field visualizations. It provides numerous parameters to create a desired flow field, with each parameter offering ways of creating unique patterns and effects.

## Installation

You can install FlowFields via npm:
```bash
npm i @mjpeake/flowfields
```

Alternatively, you can also use the following script tag reference:
```html
<script src="https://cdn.jsdelivr.net/npm/@mjpeake/flowfields@2.0.5/dist/flowfields.js"></script>
```

## Usage

To use FlowFields in your project, include the library in your HTML file and initialize it with the appropriate parameters. Here's how you can load a random example:

```html {linenos=inline}
<!DOCTYPE html>
<html>

<head>
  <title>Flow Fields</title>
  <link rel="stylesheet" href="./assets/style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@mjpeake/flowfields@2.0.5/dist/flowfields.js"></script>
</head>

<body>
  <div id="flowfield"></div>
  <script>
    $(document).ready(function () {
      const examples = new FlowFields.Examples()
      FlowFields.FlowField("flowfield", examples.Random());
    });
  </script>
</body>
</html>
```

This example initializes a Flow Fields visualization using one of the predefined examples.

### New Configuration Overview

The updated configuration (`Config`) offers a more flexible and dynamic way to control the appearance and behavior of your flow fields. Below are the key parameters available and what they allow you to customize:

#### **Color Options**
- **`color`** (string | string[]): 
  - Sets the color(s) for the flow field. You can specify a single color or an array of colors to create more variety. If no color is set, an error will be thrown.
- **`backgroundColor`** (string):
  - Defines the background color of the visualization. Like `color`, this must be specified; otherwise, an error will occur.

#### **Color Distribution**
- **`colorDistribution`** (string):
  - Determines how the color is distributed across the flow field. It can have one of three values:
    - **`layered`**: Colors will be arranged in distinct layers, ideal for creating multi-layered effects.
    - **`noise`**: Colors are distributed based on noise patterns, resulting in a more randomized, organic feel.
    - **`random`**: Colors are assigned randomly across the flow field, offering a fully randomized approach.

#### **Flow Characteristics**
- **`flowDensity`** (number):
  - Controls the density of the flow. A higher value results in a more crowded flow field, while a lower value gives a sparser effect. Default is `0.5`.
- **`flowIntensity`** (number):
  - Adjusts the strength of the flow. Increasing the intensity makes the flow more pronounced, while lowering it makes the movement subtler. Default is `0.35`.
- **`flowWidth`** (number):
  - Specifies the width of the flow lines. Larger values will make the flow more expansive and broader, while smaller values give a finer, tighter look. Default is `1`.

#### **Noise and Layering Control**
- **`noiseScale`** (number):
  - Modifies the scale of noise patterns that influence the flow. A smaller value results in more detailed noise, while larger values smooth out the noise.
- **`noiseResolution`** (number):
  - Adjusts the resolution of the noise pattern. Smaller values create more granular noise, while larger values create smoother, less detailed noise patterns. Default is `0.075`.
- **`layerCount`** (number):
  - Defines the number of layers to create in the flow field. Layers give depth and structure to the flow, allowing for more complex compositions. Default is `0` (no layers).
- **`layerStep`** (number):
  - Determines the step size between layers. If `layerCount` is greater than 0, this controls the spacing between layers. Default is `1` if layers are enabled, otherwise `0`.

---

This new configuration allows you to fine-tune both the aesthetics and dynamics of the flow field, giving you full control over colors, flow behavior, and noise patterns. The ability to specify how colors are distributed, and whether the flow is layered or influenced by noise, creates endless possibilities for visually complex and engaging animations.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/mjpeake/flowfields/blob/main/LICENSE) file for details.