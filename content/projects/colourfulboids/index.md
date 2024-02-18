+++
title = 'Colourful Boids'
page_type = "project"
date = 2023-01-15T09:00:00-07:00
draft = false
github = 'https://github.com/mjpeake/colourfulboids'
language-icon = 'fa-js'
tags=["Javascript","GenerativeArt","Boids"]

[[script]]
  src = "https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js"
[[script]]
  src = "https://cdn.jsdelivr.net/gh/mjpeake/colourfulboids/canvas.js"
[[script]]
  src = "https://cdn.jsdelivr.net/gh/mjpeake/colourfulboids/boid.js"
[[adapter]]
  src = "js/projects/colourfulboids.js"
[[gallery]]
  location = '/images/gallery/colourfulboids/*'
+++

This JavaScript project simulates a flock of colorful boids moving around a canvas. The boids exhibit flocking behavior, including alignment, cohesion, and separation. Each boid is represented by a series of colored dots forming its body.

## Installation

To use this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/mjpeake/colourfulboids

2. Open the `index.html` file in your web browser.

## Usage

Once the project is running in your browser, you'll see a flock of colorful boids moving around the canvas. You can adjust various parameters of the simulation by modifying the JavaScript code:

- `perceptionRadius`: The radius within which boids perceive others and flock together.
- `separationRadius`: The radius within which boids avoid crowding each other.
- `maxForce` and `maxSpeed`: Control the maximum force and speed of boids' movement.
- `alignmentCoef`, `cohesionCoef`, and `separationCoef`: Coefficients to adjust the influence of alignment, cohesion, and separation behaviors.

Additionally, you can toggle debugging information by setting the `debug` variable to `true` or `false`.

## Features

- **Flocking Behavior**: The boids exhibit realistic flocking behavior, including alignment, cohesion, and separation.
- **Colorful Visualization**: Each boid is represented by a series of colored dots forming its body, creating an aesthetically pleasing visualization.
- **Dynamic Population**: The population size of the flock adjusts based on the size of the canvas and the specified population density.

## Customization

Feel free to customize the project according to your preferences. You can modify the colors, behaviors, and visualizations to create different effects and interactions.

## Credits

This project was inspired by Craig Reynolds' classic [boids](https://www.red3d.com/cwr/boids/) algorithm for simulating flocking behavior.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/mjpeake/colourfulboids/blob/master/LICENSE) file for details.