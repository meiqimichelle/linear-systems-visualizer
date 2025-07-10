# 3D Linear Algebra Visualizer

An interactive 3D visualization tool for understanding systems of linear equations and plane intersections in three-dimensional space.

**Try it now: https://meiqimichelle.github.io/linear-systems-visualizer/**


## Purpose One

This visualizer was created to make linear algebra concepts more accessible and intuitive by providing:

- **Visual Understanding**: See how changing coefficients affects plane orientation and position
- **Interactive Learning**: Play with and explore the planes
- **Solution Visualization**: Clear display of intersection points (solutions to the system)
- **Educational Tool**: Perfect for students learning about linear systems and 3D geometry

## Purpose Two

I also made this to explore AI-assisted coding. I am personally studying linear algebra, so found a good excuse to test how AI can boost coding processes. I explored using Claude Code (CLI) and Amp Code (CLI and IDE), and ended up using Claude (the AI app) to generate an initial scope and prototype, and Amp Code IDE to polish and ship.

### Hot takes

- Amp Code's *threads* ability is chef's kiss. Its great to be able to save context and link to it, and choose new threads when needed for specific tasks.
- Amp Code's commit process is also great -- it can auto-create commits that are co-authored with you with a lovely commit message and a link to the associated thread.
- AI coding assistents seems to have as much trouble with CSS as humans 🤣 They make one requested change and break another. I guess because they can't 'see' regressions. Or, maybe there's a better way to apporach this than my naive efforts.
- Starting with Claude to prototype was way easier than starting with Claude Code or Amp Code. This may have been because of the nature of the project. It was very convenient to ask Claude to start my project based on my needs and scope, and see it create a single-page index.html file in its right-hand pane. You can toggle this between code and visuals. The only thing better would have been if I could edit the file myself sometimes, too, because asking Claude to re-write the file to change one hex code seemed a waste of tokens, and often slower than what I could have done myself. Maybe there's a way to do that. I didn't try too hard.
- **All up, this took me between 2 and 3 hours, using a library that I have no expertise in (three.js). That's right. Holy smokes.** 🤯

## Features

- **Real-time 3D Visualization**: Interactive planes that update as you modify equations
- **Three Plane System**: Visualize systems of three linear equations in three variables
- **Intersection Detection**: Automatically calculates and displays solution points
- **Smooth Controls**: Mouse-based camera rotation and zoom
- **Clean Interface**: Intuitive equation input with color-coded planes
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices

## How to Use

1. **Visit the Live Site**: https://meiqimichelle.github.io/linear-systems-visualizer/
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
   - Built fully responsive design for all device sizes
   - Deployed to GitHub Pages for public access

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

## Ideas (not promises) for Future Enhancements

- [ ] Make it look better. Ya know.
- [ ] Add support for 2x2 and 4x4 systems
- [ ] Include step-by-step solution explanations
- [ ] Add preset examples for common scenarios
- [ ] Implement matrix input mode


## License

This project is open source and available under the MIT License.
