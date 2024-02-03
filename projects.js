import * as THREE from "three";


const properties = {
    clearcoat: 1.0,
    metalness: 0.9,
    roughness: 0.5,
}
// First scene
const scene1 = new THREE.Scene();
const camera1 = new THREE.PerspectiveCamera(45, 1, 1, 1000);
const renderer1 = new THREE.WebGLRenderer({ alpha: true });
const ambientLight1 = new THREE.AmbientLight(0xffffff, 5);
const directionalLight1 = new THREE.DirectionalLight(0xffffff, 5);
const torusGeometry1 = new THREE.TorusGeometry(2, 1);
const torusMaterial1 = new THREE.MeshPhysicalMaterial({
    color: '#DFAD7D',
   ...properties
});
const torusMesh1 = new THREE.Mesh(torusGeometry1, torusMaterial1);
scene1.add(torusMesh1);
torusMesh1.position.set(0, 0, 0);
camera1.position.set(0, 0, 10);
scene1.add(camera1);
scene1.add(ambientLight1);
scene1.add(directionalLight1);
directionalLight1.position.set(-10, 10, 10);

// Second scene
const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(45, 1, 1, 1000);
const renderer2 = new THREE.WebGLRenderer({ alpha: true });
const ambientLight2 = new THREE.AmbientLight(0xffffff, 5);
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 5);
const boxGeometry = new THREE.ConeGeometry(2, 4);
const boxMaterial =  new THREE.MeshPhysicalMaterial({  ...properties,color: 'yellow' });
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
scene2.add(boxMesh);
boxMesh.position.set(0, 0, 0);
camera2.position.set(0, 0, 10);
scene2.add(camera2);
scene2.add(ambientLight2);
scene2.add(directionalLight2);
directionalLight2.position.set(10, -10, -10);



// third scene

const scene3 = new THREE.Scene();
const camera3 = new THREE.PerspectiveCamera(45, 1, 1, 1000);
const renderer3 = new THREE.WebGLRenderer({ alpha: true });
const ambientLight3 = new THREE.AmbientLight(0xffffff, 5);
const directionalLight3 = new THREE.DirectionalLight(0xffffff, 5);
const sphereGeometry = new THREE.CylinderGeometry(2,2,2);
const sphereMaterial = new THREE.MeshPhysicalMaterial({  ...properties,color: 'skyblue' });
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene3.add(sphereMesh);
sphereMesh.position.set(0, 0, 0);
camera3.position.set(0, 0, 10);
scene3.add(camera3);
scene3.add(ambientLight3);
scene3.add(directionalLight3);
directionalLight3.position.set(10, -10, -10);

function animate1() {
    torusMesh1.rotation.x += 0.01;
    torusMesh1.rotation.y += 0.01;
    torusMesh1.rotation.z += 0.01;
    renderer1.render(scene1, camera1);
    window.requestAnimationFrame(animate1);
}

function animate2() {
    boxMesh.rotation.x += 0.01;
    boxMesh.rotation.y += 0.01;
    boxMesh.rotation.z += 0.01;
    renderer2.render(scene2, camera2);
    window.requestAnimationFrame(animate2);
}
function animate3() {
    sphereMesh.rotation.x += 0.01;
    sphereMesh.rotation.y += 0.01;
    sphereMesh.rotation.z += 0.01;
    renderer3.render(scene3, camera3);
    window.requestAnimationFrame(animate3);
}
renderer1.setSize(100, 100);
renderer1.render(scene1, camera1);
const project1 = document.getElementById('project1');
project1.appendChild(renderer1.domElement);

renderer2.setSize(100, 100);
renderer2.render(scene2, camera2);
const project2 = document.getElementById('project2');
project2.appendChild(renderer2.domElement);

renderer3.setSize(100, 100);
renderer3.render(scene3, camera3);
const project3 = document.getElementById('project3');
project3.appendChild(renderer3.domElement);


animate1();
animate2();
animate3()
