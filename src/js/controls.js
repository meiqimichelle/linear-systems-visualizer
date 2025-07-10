export class CameraControls {
    constructor(camera, canvas) {
        this.camera = camera;
        this.canvas = canvas;
        this.isMouseDown = false;
        this.mouseX = 0;
        this.mouseY = 0;
        this.targetRotationX = 0.3;
        this.targetRotationY = 0.8;
        this.targetRotationZ = 0.2;
        this.currentRotationX = 0.3;
        this.currentRotationY = 0.8;
        this.currentRotationZ = 0.2;
        this.autoRotate = true;
        this.autoRotateSpeed = 0.002;
        
        this.setupEventListeners();
        this.updateCamera();
    }
    
    setupEventListeners() {
        this.canvas.addEventListener('mousedown', (event) => {
            this.isMouseDown = true;
            this.autoRotate = false;
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
        });
        
        this.canvas.addEventListener('mousemove', (event) => {
            if (!this.isMouseDown) return;
            
            const deltaX = event.clientX - this.mouseX;
            const deltaY = event.clientY - this.mouseY;
            
            this.targetRotationY += deltaX * 0.01;
            this.targetRotationX += deltaY * 0.01;
            
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
        });
        
        this.canvas.addEventListener('mouseup', () => {
            this.isMouseDown = false;
        });
        
        this.canvas.addEventListener('wheel', (event) => {
            this.camera.position.multiplyScalar(event.deltaY > 0 ? 1.1 : 0.9);
        });
    }
    
    updateCamera() {
        if (this.autoRotate) {
            this.targetRotationY += this.autoRotateSpeed;
        }
        
        this.currentRotationX += (this.targetRotationX - this.currentRotationX) * 0.1;
        this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.1;
        this.currentRotationZ += (this.targetRotationZ - this.currentRotationZ) * 0.1;
        
        const radius = this.camera.position.length();
        this.camera.position.x = radius * Math.cos(this.currentRotationX) * Math.cos(this.currentRotationY);
        this.camera.position.y = radius * Math.sin(this.currentRotationX);
        this.camera.position.z = radius * Math.cos(this.currentRotationX) * Math.sin(this.currentRotationY);
        
        this.camera.up.set(
            -Math.sin(this.currentRotationZ),
            Math.cos(this.currentRotationZ),
            0
        );
        
        this.camera.lookAt(0, 0, 0);
        
        requestAnimationFrame(() => this.updateCamera());
    }
}
