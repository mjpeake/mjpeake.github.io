+++
title = 'Game of Life'
page_type = "project"
date = 2023-01-15T09:00:00-07:00
draft = false
showcaseimage = 'showcase.webp'
github = 'https://github.com/mjpeake/gameoflife'
language-icon = 'fa-java'
tags=["Java","Games"]
+++

A remake of John Conway's Game of Life with added functionality.

## Features
- Scalable Grid Environment
- Infinite Grid Environment
- Step and Continuous Animation
- Drawable Grid with Crosshair cursor
- Loading of Popular Templates
- Monitoring of Environment Statistics
- Inverted Grid Cell Colours

## Usage

### Drawing
Whilst the grid is not being animated, the grid can be drawn upon using the mouse. With right click being used to turn cells alive and left to turn cells dead.

### Statistics
Grid environment statistics are displayed at the top of the control panel. The Statistics panel will display the current generation and the number of alive cells and dead cells of that generation.

### Scaling
The grid can be scaled through the given button in the Grid Options panel. The grid can be scaled with a slider through a range of 1 to 4, with 2 being the default. Once confirmed, the grid will be reset with the new scale.

### Grid Animation
Animation can either be continuous or on a generation-by-generation basis. Both methods can be activated through their respective buttons in the control panel.

### Infinite Grid
The grid can be made "infinite" through the option in the grid options. This will modify how the next generation is determined by replacing cells that do not exist with cells from the oposite side of the grid. This will allow for reactions to be continued on the other side of the grid environment and will avoid non-existant dead cells being used in new generation calculations.

### Load Popular Templates
Popular templates can be loaded into the grid enviroment through the respective button in the control panel. Templates include Gliders, Oscillators and Miscellaneous such as the Gospel Glider Gun and the Acorn. Once confirmed, the grid will be reset and the selected template will be loaded in either the center or top-left of the grid, dependant on the given template.

### Reset Grid
The grid environment can be manualy reset through the corresponding button on the control panel.

### Color Invertion
The colors of the grid cells can be inverted so as to make grid easier to view for some users.