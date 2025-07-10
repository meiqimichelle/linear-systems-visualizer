# AGENT.md

## Build/Test Commands
- **Run**: Open `index.html` in a web browser (no build required)
- **Test**: Manual testing through browser interactions
- **Lint**: No linting tools configured

## Architecture
- **Type**: Single-page 3D visualization application
- **Framework**: Pure HTML/CSS/JavaScript with Three.js
- **Structure**: Self-contained in single `index.html` file
- **Dependencies**: Three.js (CDN), no package manager
- **Purpose**: Interactive 3D linear algebra visualizer for plane intersections

## Code Style
- **Structure**: All-in-one file with embedded CSS and JavaScript
- **Naming**: camelCase for variables and functions
- **Colors**: Hex color codes (e.g., `0xD18718`, `0x56CFE1`, `0x39FDC6`)
- **Event handling**: Standard DOM event listeners
- **Three.js patterns**: Scene/camera/renderer setup, mesh creation, animation loops
- **CSS**: BEM-like class naming, rgba() for transparency, backdrop-filter for glassmorphism
- **JavaScript**: ES6 features, const/let over var, arrow functions in event handlers
- **Error handling**: Basic null checks and Math.abs() for floating point comparisons
