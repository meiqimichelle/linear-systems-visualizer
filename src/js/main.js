import { SceneManager } from './scene.js';
import { PlaneManager } from './plane.js';
import { CameraControls } from './controls.js';
import { UIManager } from './ui.js';

class LinearAlgebraVisualizer {
    constructor() {
        this.sceneManager = new SceneManager();
        this.planeManager = new PlaneManager(this.sceneManager.scene);
        this.cameraControls = new CameraControls(this.sceneManager.camera, this.sceneManager.canvas);
        this.uiManager = new UIManager(this.planeManager);
        
        this.init();
    }
    
    init() {
        this.planeManager.createPlanes();
        this.animate();
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        this.sceneManager.render();
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LinearAlgebraVisualizer();
});
