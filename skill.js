import * as THREE from "three";


const properties = {
    clearcoat: 1.0,
    metalness: 0.9,
    roughness: 0.5,
}
const scene1 = new THREE.Scene();
const camera1 = new THREE.PerspectiveCamera(45, 1/2, 1, 1000);
const renderer1 = new THREE.WebGLRenderer({ alpha: true });

const ambientLight1 = new THREE.AmbientLight(0xffffff, 5);
const directionalLight1 = new THREE.DirectionalLight('#AF2E28', 2);
const boxGeometry1 = new THREE.BoxGeometry(5, 5,5);
const boxMaterial1 = new THREE.MeshPhysicalMaterial({
    color: '#b9d9ff',
   ...properties
});
const cube1 = new THREE.Mesh(boxGeometry1, boxMaterial1);
scene1.add(cube1);
cube1.position.set(0, 0, 0);
camera1.position.set(0, 0, 10);
scene1.add(camera1);
scene1.add(ambientLight1);
scene1.add(directionalLight1);
directionalLight1.position.set(-10, 10, 10);

const clock = new THREE.Clock()

function animate1() {
    const t=clock.getElapsedTime()
    cube1.position.y =Math.sin(t)*2;
    renderer1.render(scene1, camera1);
    window.requestAnimationFrame(animate1);
}

renderer1.setSize(100, 200);
renderer1.render(scene1, camera1);
const skill1 = document.getElementById('skill1');
skill1.appendChild(renderer1.domElement);

animate1();





const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(45, 1/2, 1, 1000);
const renderer2 = new THREE.WebGLRenderer({ alpha: true });

const ambientLight2 = new THREE.AmbientLight(0xffffff, 5);
const directionalLight2 = new THREE.DirectionalLight('#AF2E28', 2);
const boxGeometry2 = new THREE.BoxGeometry(5, 5,5);
const boxMaterial2 = new THREE.MeshPhysicalMaterial({
    color: 'white',
   ...properties
});
const cube2 = new THREE.Mesh(boxGeometry2, boxMaterial2);
scene2.add(cube2);
cube2.position.set(0, 0, 0);
camera2.position.set(0, 0, 10);
scene2.add(camera2);
scene2.add(ambientLight2);
scene2.add(directionalLight2);
directionalLight2.position.set(-10, 10, 10);


function animate2() {
    const t=clock.getElapsedTime()
    cube2.position.y =Math.sin(t)*2;
    renderer2.render(scene2, camera2);
    window.requestAnimationFrame(animate2);
}

renderer2.setSize(100, 200);
renderer2.render(scene2, camera2);
const skill2 = document.getElementById('skill2');
skill2.appendChild(renderer2.domElement);

animate2();



const scene3 = new THREE.Scene();
const camera3 = new THREE.PerspectiveCamera(45, 1/2, 1, 1000);
const renderer3 = new THREE.WebGLRenderer({ alpha: true });

const ambientLight3 = new THREE.AmbientLight(0xffffff, 5);
const directionalLight3 = new THREE.DirectionalLight('#AF2E28', 2);
const boxGeometry3 = new THREE.BoxGeometry(5, 5,5);
const boxMaterial3 = new THREE.MeshPhysicalMaterial({
    color: '#ffe699',
   ...properties
});
const cube3 = new THREE.Mesh(boxGeometry3, boxMaterial3);
scene3.add(cube3);
cube3.position.set(0, 0, 0);
camera3.position.set(0, 0, 10);
scene3.add(camera3);
scene3.add(ambientLight3);
scene3.add(directionalLight3);
directionalLight3.position.set(-10, 10, 10);


function animate3() {
    const t=clock.getElapsedTime()
    cube3.position.y =Math.sin(t)*2;
    renderer3.render(scene3, camera3);
    window.requestAnimationFrame(animate3);
}

renderer3.setSize(100, 200);
renderer3.render(scene3, camera3);
const skill3 = document.getElementById('skill3');
skill3.appendChild(renderer3.domElement);

animate3();




const scene4 = new THREE.Scene();
const camera4 = new THREE.PerspectiveCamera(45, 1/2, 1, 1000);
const renderer4 = new THREE.WebGLRenderer({ alpha: true });

const ambientLight4 = new THREE.AmbientLight(0xffffff, 5);
const directionalLight4 = new THREE.DirectionalLight('#AF2E28', 2);
const boxGeometry4 = new THREE.BoxGeometry(5, 5,5);
const boxMaterial4 = new THREE.MeshPhysicalMaterial({
    color: '#b3f3a8',
   ...properties
});
const cube4 = new THREE.Mesh(boxGeometry4, boxMaterial4);
scene4.add(cube4);
cube4.position.set(0, 0, 0);
camera4.position.set(0, 0, 10);
scene4.add(camera4);
scene4.add(ambientLight4);
scene4.add(directionalLight4);
directionalLight4.position.set(-10, 10, 10);


function animate4() {
    const t=clock.getElapsedTime()
    cube4.position.y =Math.sin(t)*2;
    renderer4.render(scene4, camera4);
    window.requestAnimationFrame(animate4);
}

renderer4.setSize(100, 200);
renderer4.render(scene4, camera4);
const skill4 = document.getElementById('skill4');
skill4.appendChild(renderer4.domElement);

animate4();




const scene5 = new THREE.Scene();
const camera5 = new THREE.PerspectiveCamera(45, 1/2, 1, 1000);
const renderer5 = new THREE.WebGLRenderer({ alpha: true });

const ambientLight5 = new THREE.AmbientLight(0xffffff, 5);
const directionalLight5 = new THREE.DirectionalLight('#AF2E28', 2);
const boxGeometry5 = new THREE.BoxGeometry(5, 5,5);
const boxMaterial5 = new THREE.MeshPhysicalMaterial({
    color: '#eac3ff',
   ...properties
});
const cube5 = new THREE.Mesh(boxGeometry5, boxMaterial5);
scene5.add(cube5);
cube5.position.set(0, 0, 0);
camera5.position.set(0, 0, 10);
scene5.add(camera5);
scene5.add(ambientLight5);
scene5.add(directionalLight5);
directionalLight5.position.set(-10, 10, 10);


function animate5() {
    const t=clock.getElapsedTime()
    cube5.position.y =Math.sin(t)*2;
    renderer5.render(scene5, camera5);
    window.requestAnimationFrame(animate5);
}

renderer5.setSize(100, 200);
renderer5.render(scene5, camera5);
const skill5 = document.getElementById('skill5');
skill5.appendChild(renderer5.domElement);

animate5();


const scene6 = new THREE.Scene();
const camera6 = new THREE.PerspectiveCamera(45, 1/2, 1, 1000);
const renderer6 = new THREE.WebGLRenderer({ alpha: true });

const ambientLight6 = new THREE.AmbientLight(0xffffff, 5);
const directionalLight6 = new THREE.DirectionalLight('#AF2E28', 2);
const boxGeometry6 = new THREE.BoxGeometry(5, 5,5);
const boxMaterial6 = new THREE.MeshPhysicalMaterial({
    color: '#ffcc99',
   ...properties
});
const cube6 = new THREE.Mesh(boxGeometry6, boxMaterial6);
scene6.add(cube6);
cube6.position.set(0, 0, 0);
camera6.position.set(0, 0, 10);
scene6.add(camera6);
scene6.add(ambientLight6);
scene6.add(directionalLight6);
directionalLight6.position.set(-10, 10, 10);


function animate6() {
    const t=clock.getElapsedTime()
    cube6.position.y =Math.sin(t)*2;
    renderer6.render(scene6, camera6);
    window.requestAnimationFrame(animate6);
}

renderer6.setSize(100, 200);
renderer6.render(scene6, camera6);
const skill6 = document.getElementById('skill6');
skill6.appendChild(renderer6.domElement);

animate6();
