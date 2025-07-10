export class PlaneManager {
    constructor(scene) {
        this.scene = scene;
        this.planeSize = 8;
        this.planes = [];
        this.intersectionPoint = null;
        this.colors = [0xD18718, 0x56CFE1, 0x39FDC6];
    }
    
    createPlanes() {
        // Remove existing planes
        this.planes.forEach(plane => this.scene.remove(plane));
        if (this.intersectionPoint) {
            this.scene.remove(this.intersectionPoint);
            this.intersectionPoint = null;
        }
        
        // Get coefficients from inputs
        const coeffs = this.getCoefficients();
        
        // Create planes
        this.planes = [
            this.createPlane(coeffs.plane1, this.colors[0], 0.7),
            this.createPlane(coeffs.plane2, this.colors[1], 0.7),
            this.createPlane(coeffs.plane3, this.colors[2], 0.7)
        ];
        
        this.planes.forEach(plane => this.scene.add(plane));
        
        // Find intersection point
        const intersection = this.findIntersection(coeffs.plane1, coeffs.plane2, coeffs.plane3);
        if (intersection) {
            const pointGeometry = new THREE.SphereGeometry(0.2, 16, 16);
            const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
            this.intersectionPoint = new THREE.Mesh(pointGeometry, pointMaterial);
            this.intersectionPoint.position.copy(intersection);
            this.scene.add(this.intersectionPoint);
        }
    }
    
    createPlane(coeffs, color, opacity) {
        const geometry = new THREE.PlaneGeometry(this.planeSize, this.planeSize);
        const material = new THREE.MeshPhongMaterial({ 
            color: color,
            transparent: true,
            opacity: opacity,
            side: THREE.DoubleSide,
            shininess: 60,
            specular: 0x666666
        });
        
        const plane = new THREE.Mesh(geometry, material);
        
        // Position and orient the plane based on its equation
        const normal = new THREE.Vector3(coeffs.a, coeffs.b, coeffs.c);
        normal.normalize();
        
        // Calculate distance from origin
        const distance = coeffs.d / Math.sqrt(coeffs.a * coeffs.a + coeffs.b * coeffs.b + coeffs.c * coeffs.c);
        
        // Position the plane
        plane.position.copy(normal.multiplyScalar(distance));
        
        // Orient the plane to face the normal direction
        plane.lookAt(plane.position.clone().add(new THREE.Vector3(coeffs.a, coeffs.b, coeffs.c)));
        
        return plane;
    }
    
    getCoefficients() {
        return {
            plane1: {
                a: parseFloat(document.getElementById('a1').value) || 0,
                b: parseFloat(document.getElementById('b1').value) || 0,
                c: parseFloat(document.getElementById('c1').value) || 0,
                d: parseFloat(document.getElementById('d1').value) || 0
            },
            plane2: {
                a: parseFloat(document.getElementById('a2').value) || 0,
                b: parseFloat(document.getElementById('b2').value) || 0,
                c: parseFloat(document.getElementById('c2').value) || 0,
                d: parseFloat(document.getElementById('d2').value) || 0
            },
            plane3: {
                a: parseFloat(document.getElementById('a3').value) || 0,
                b: parseFloat(document.getElementById('b3').value) || 0,
                c: parseFloat(document.getElementById('c3').value) || 0,
                d: parseFloat(document.getElementById('d3').value) || 0
            }
        };
    }
    
    findIntersection(p1, p2, p3) {
        // Solve the system of equations using Cramer's rule
        const det = p1.a * (p2.b * p3.c - p2.c * p3.b) - 
                   p1.b * (p2.a * p3.c - p2.c * p3.a) + 
                   p1.c * (p2.a * p3.b - p2.b * p3.a);
        
        if (Math.abs(det) < 1e-10) return null;
        
        const x = (p1.d * (p2.b * p3.c - p2.c * p3.b) - 
                  p1.b * (p2.d * p3.c - p2.c * p3.d) + 
                  p1.c * (p2.d * p3.b - p2.b * p3.d)) / det;
        
        const y = (p1.a * (p2.d * p3.c - p2.c * p3.d) - 
                  p1.d * (p2.a * p3.c - p2.c * p3.a) + 
                  p1.c * (p2.a * p3.d - p2.d * p3.a)) / det;
        
        const z = (p1.a * (p2.b * p3.d - p2.d * p3.b) - 
                  p1.b * (p2.a * p3.d - p2.d * p3.a) + 
                  p1.d * (p2.a * p3.b - p2.b * p3.a)) / det;
        
        return new THREE.Vector3(x, y, z);
    }
}
