export class UIManager {
    constructor(planeManager) {
        this.planeManager = planeManager;
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Add event listeners to all input fields
        const inputs = document.querySelectorAll('input[type="number"]');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                this.planeManager.createPlanes();
            });
        });
        
        // Reset button
        document.getElementById('resetBtn').addEventListener('click', () => {
            this.resetToDefaults();
        });
    }
    
    resetToDefaults() {
        // Plane 1 defaults
        document.getElementById('a1').value = '1';
        document.getElementById('b1').value = '0';
        document.getElementById('c1').value = '0';
        document.getElementById('d1').value = '0';
        
        // Plane 2 defaults
        document.getElementById('a2').value = '0';
        document.getElementById('b2').value = '1';
        document.getElementById('c2').value = '0';
        document.getElementById('d2').value = '0';
        
        // Plane 3 defaults
        document.getElementById('a3').value = '0';
        document.getElementById('b3').value = '0';
        document.getElementById('c3').value = '1';
        document.getElementById('d3').value = '0';
        
        this.planeManager.createPlanes();
    }
}
