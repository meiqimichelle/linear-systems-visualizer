export class SceneManager {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = null;
        this.renderer = null;
        this.canvas = null;
        
        this.setupScene();
        this.setupCamera();
        this.setupRenderer();
        this.setupLighting();
        this.addAxes();
        this.setupResize();
    }
    
    setupScene() {
        this.scene.background = new THREE.Color(0xf6f6f6);
    }
    
    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(12, 8, 10);
        this.camera.lookAt(0, 0, 0);
    }
    
    setupRenderer() {
        this.canvas = document.getElementById('canvas');
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }
    
    setupLighting() {
        const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
        this.scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
        directionalLight.position.set(10, 10, 5);
        directionalLight.castShadow = true;
        this.scene.add(directionalLight);
        
        const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.6);
        directionalLight2.position.set(-8, -5, -3);
        this.scene.add(directionalLight2);
    }
    
    addAxes() {
        const axesGroup = new THREE.Group();
        
        // X axis
        const xGeometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(5, 0, 0)
        ]);
        const xMaterial = new THREE.LineBasicMaterial({ color: 0x2F4F4F, linewidth: 3 });
        const xLine = new THREE.Line(xGeometry, xMaterial);
        axesGroup.add(xLine);
        
        // Y axis
        const yGeometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 5, 0)
        ]);
        const yMaterial = new THREE.LineBasicMaterial({ color: 0x2F4F4F, linewidth: 3 });
        const yLine = new THREE.Line(yGeometry, yMaterial);
        axesGroup.add(yLine);
        
        // Z axis
        const zGeometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 0, 5)
        ]);
        const zMaterial = new THREE.LineBasicMaterial({ color: 0x2F4F4F, linewidth: 3 });
        const zLine = new THREE.Line(zGeometry, zMaterial);
        axesGroup.add(zLine);
        
        this.scene.add(axesGroup);
    }
    
    setupResize() {
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
    
    render() {
        this.renderer.render(this.scene, this.camera);
    }
}
