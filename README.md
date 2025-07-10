# 3D Linear Algebra Visualizer

An interactive 3D visualization tool for understanding systems of linear equations and plane intersections in three-dimensional space. This project helps students and educators visualize how planes interact in 3D space.

## Purpose

This visualizer was created to make linear algebra concepts more accessible and intuitive by providing:

- **Visual Understanding**: See how changing coefficients affects plane orientation and position
- **Interactive Learning**: Play with and explore the planes
- **Solution Visualization**: Clear display of intersection points (solutions to the system)
- **Educational Tool**: Perfect for students learning about linear systems and 3D geometry

It was also created to explore AI-assisted coding. I am personally studying linear algebra at the moment, so figured this would be a good project to test how AI can boost coding processes.

## How to Use

1. **Open the Application**: Load `index.html` in a web browser
2. **Modify Equations**: Adjust the coefficients (a, b, c, d) for each plane
   - **Orange Plane**: First equation
   - **Blue Plane**: Second equation  
   - **Mint Plane**: Third equation
3. **Interact with the View**:
   - **Mouse**: Click and drag to rotate the camera
   - **Scroll**: Zoom in and out
   - **Reset Button**: Return to default equation values

## Mathematical Background

Each plane is represented by the equation: **ax + by + cz = d**

The visualizer solves the system using Cramer's rule to find intersection points, helping users understand:
- How plane orientation changes with different normal vectors
- The geometric meaning of linear equation solutions
- Cases where systems have unique solutions, no solutions, or infinite solutions

## Technical Details

### Architecture
- **Frontend**: Pure HTML/CSS/JavaScript with Three.js
- **3D Engine**: Three.js r128 for WebGL rendering
- **Module System**: ES6 modules for clean code organization
- **No Build Process**: Runs directly in the browser

### Project Structure
```
├── index.html              # Main application entry point
├── src/
│   ├── css/
│   │   └── styles.css      # All styling
│   └── js/
│       ├── main.js         # Application initialization
│       ├── scene.js        # Three.js scene management  
│       ├── plane.js        # Plane creation and math
│       ├── controls.js     # Camera controls
│       └── ui.js           # User interface handling
```

## AI-Assisted Development

This project used an AI-assisted development workflow:

1. **Initial Concept & Prototype** (Claude): 
   - Scoped learning tool requirements
   - Created the initial working prototype in a single HTML file
   - Implemented core mathematical algorithms and basic 3D visualization

2. **Polish & Production** (Amp):
   - Refactored monolithic code into modular architecture
   - Separated concerns (HTML, CSS, JavaScript modules)
   - Improved code organization and maintainability
   - Prepared for deployment and scaling

This demonstrates how different AI coding assistants can complement each other in the development lifecycle.

## Local Development
For local development with proper CORS handling:
```bash
# Serve files locally (Python 3)
python3 -m http.server 8000

# Or with Node.js
npx serve .

# Then open http://localhost:8000
```

## TODO

- [ ] Deploy to a public URL for easy sharing
- [ ] Add preset examples for common scenarios
- [ ] Implement matrix input mode that you can flip back and forth from

## License

This project is open source and available under the MIT License.
