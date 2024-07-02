import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as YUKA from "yuka";

const ballMaterial = {
  clearcoat: 1.0,
  metalness: 0.9,
  roughness: 0.5,
};
const time = new YUKA.Time();
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
const orbit = new OrbitControls(camera, renderer.domElement);
const axesHelper = new THREE.AxesHelper(100);
const ambientLight = new THREE.AmbientLight(0xffffff, 3);
const pointer = new THREE.Vector2();
const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
const targetGeometry = new THREE.TorusGeometry(0.1, 1, 1);
const targetMaterial = new THREE.MeshPhongMaterial({
  color: 0xffffff,
  transparent: true,
  opacity: 0,
});
const targetMesh = new THREE.Mesh(targetGeometry, targetMaterial);
const entityManager = new YUKA.EntityManager();

targetMesh.matrixAutoUpdate = false;
directionalLight.position.set(-10, 10, 10);

camera.position.set(0, 0, 40);
scene.add(camera);
scene.add(ambientLight);
scene.add(targetMesh);
scene.add(directionalLight);
scene.background = new THREE.Color(0x000000);

const target = new YUKA.GameEntity();
target.setRenderComponent(targetMesh, sync);
entityManager.add(target);

const seekBehavior = new YUKA.SeekBehavior(target.position);

function sync(entity, renderComponent) {
  renderComponent.matrix.copy(entity.worldMatrix);
}

const cubeMeshGeometry = new THREE.BoxGeometry(15, 15, 15);
const cubeMeshMaterial = new THREE.MeshPhysicalMaterial({
  ...ballMaterial,
  color: "#AF2E28",
});
const cubeMesh = new THREE.Mesh(cubeMeshGeometry, cubeMeshMaterial);
const vehicle = new YUKA.Vehicle();
cubeMesh.matrixAutoUpdate = false;
vehicle.setRenderComponent(cubeMesh, sync);
entityManager.add(vehicle);
scene.add(cubeMesh);
vehicle.steering.add(seekBehavior);
vehicle.position.set(0, 0, 0);

const torusMeshGeometry = new THREE.SphereGeometry(20, 5, 5);
const torusMeshMaterial = new THREE.MeshPhysicalMaterial({
  wireframe: true,
  color: "white",
  transparent: true,
  opacity: 0.2,
});
const torusMesh = new THREE.Mesh(torusMeshGeometry, torusMeshMaterial);
const torusVehicle1 = new YUKA.Vehicle();
torusMesh.matrixAutoUpdate = false;
torusVehicle1.setRenderComponent(torusMesh, sync);
entityManager.add(torusVehicle1);
scene.add(torusMesh);
torusVehicle1.steering.add(seekBehavior);
torusVehicle1.position.set(0, 0, 0);

window.addEventListener("mousemove", (e) => {
  pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;

  const depth = 10;
  pointer.z = depth;

  target.position.set(pointer.x * 50, pointer.y * 50, pointer.z);
  seekBehavior.target.copy(target.position);
});

function animate() {
  const speed = 5;
  const delta = time.update().getDelta();
  vehicle.position.x = vehicle.velocity.x * speed * delta;
  vehicle.position.y = vehicle.velocity.y * speed * delta;
  vehicle.position.z = vehicle.velocity.z * speed * delta;

  torusVehicle1.position.x = torusVehicle1.velocity.x * speed * delta;
  torusVehicle1.position.y = torusVehicle1.velocity.y * speed * delta;
  torusVehicle1.position.z = torusVehicle1.velocity.z * speed * delta;
  entityManager.update(delta);

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
orbit.update();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

let opacity = 0;
document.addEventListener("wheel", (event) => {
  const projects = document.getElementById("projects");
  const skills = document.getElementById("skills");
  const description = document.getElementById("description");
  const scroll = document.getElementById("scroll");
  if (window.innerWidth < 800) {
    ambientLight.intensity = 1;
  } else {
    if (event.deltaY < 0) {
      if (ambientLight.intensity < 3) {
        ambientLight.intensity += 1;
      }
      if (opacity > 0) {
        opacity -= 0.35;
        projects.style.opacity = opacity;
        skills.style.opacity = opacity;
        description.style.opacity = opacity;
        scroll.style.opacity = 1;
      }
    } else {
      if (ambientLight.intensity >= -8) {
        ambientLight.intensity -= 3;
      }
      if (opacity <= 1) {
        opacity += 0.35;
        projects.style.opacity = opacity;
        skills.style.opacity = opacity;
        description.style.opacity = opacity;
        scroll.style.opacity = 0;
      }
    }
  }

  renderer.render(scene, camera);
});
document.addEventListener("keydown", (event) => {
  const projects = document.getElementById("projects");
  const skills = document.getElementById("skills");
  const description = document.getElementById("description");
  const scroll = document.getElementById("scroll");
  if (window.innerWidth < 800) {
    ambientLight.intensity = 1;
  } else {
    if (event.deltaY < 0) {
      if (ambientLight.intensity < 3) {
        ambientLight.intensity += 1;
      }
      if (opacity > 0) {
        opacity -= 0.35;
        projects.style.opacity = opacity;
        skills.style.opacity = opacity;
        description.style.opacity = opacity;
        scroll.style.opacity = 1;
      }
    } else {
      if (ambientLight.intensity >= -8) {
        ambientLight.intensity -= 3;
      }
      if (opacity <= 1) {
        opacity += 0.35;
        projects.style.opacity = opacity;
        skills.style.opacity = opacity;
        description.style.opacity = opacity;
        scroll.style.opacity = 0;
      }
    }
  }

  renderer.render(scene, camera);
});
