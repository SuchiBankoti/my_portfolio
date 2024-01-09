import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"


const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()
const geometry = new THREE.SphereGeometry(1, 15, 15)
const material = new THREE.MeshStandardMaterial({ color: "blue", wireframe: true })
const sphere = new THREE.Mesh(geometry, material)
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
const orbit=new OrbitControls(camera,renderer.domElement)
const axesHelper = new THREE.AxesHelper(5)
const ambientLight = new THREE.AmbientLight(0xffffff)
const directionalLight = new THREE.DirectionalLight(0xffffff)
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight)
directionalLight.position.set(0,10,0)
camera.position.set(0, 0, 45)
axesHelper.position.set(0, 0, 0);
scene.background = new THREE.Color(0xffffff)
scene.add(camera)
scene.add(axesHelper)
scene.add(ambientLight)
scene.add(directionalLight)
scene.add(directionalLightHelper)
scene.add(sphere)
sphere.position.set(0, 0, 0)



function animate() {
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    sphere.rotation.z = 0.5;
    renderer.render(scene,camera)
}



orbit.update()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)
renderer.setAnimationLoop(animate)