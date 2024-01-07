import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'


const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000)
const orbit = new OrbitControls(camera, renderer.domElement);
const assetLoader = new GLTFLoader()


scene.add(camera)
let butterflyModel
let flowersModel
let insectModal1
let insectModal2
let mixer
let mixer1
let mixer2
let moveAmplitude = 1;
let moveSpeed = 0.005;
let moveSpeed2=0.001

const bloomParams = {
  exposure: 1,
  bloomStrength: 1.5,
  bloomThreshold: 0,
  bloomRadius: 0.1,
};
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight),
  bloomParams.bloomStrength, bloomParams.bloomRadius, bloomParams.bloomThreshold);

const bloomComposer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
bloomComposer.setSize(window.innerWidth, window.innerHeight)
bloomComposer.renderToScreen=true
bloomComposer.addPass(renderPass);
bloomComposer.addPass(bloomPass);

assetLoader.load("./assets/animated_butterfly/scene.gltf", function (gltf) {
  butterflyModel = gltf.scene;
  scene.add(butterflyModel)
  butterflyModel.position.set(0, 0, -15)
  butterflyModel.scale.set(0.5,0.5,0.5)
  butterflyModel.rotation.set(Math.PI / 2, Math.PI, 0);

  const animationClip = gltf.animations[0];
  mixer = new THREE.AnimationMixer(butterflyModel);
  const animationAction = mixer.clipAction(animationClip);
  animationAction.play();
}, undefined, function (err) { console.log(err) })

assetLoader.load("./assets/bombus_dahlbomii/scene.gltf", function (gltf) {
  insectModal1 = gltf.scene;
  scene.add(insectModal1)
  insectModal1.position.set(-6, 1, -15)
  insectModal1.scale.set(0.05,0.05,0.05)
  insectModal1.rotation.set(Math.PI / 2, 0, 0);

  const animationClip = gltf.animations[0];
  mixer1 = new THREE.AnimationMixer(insectModal1);
  const animationAction = mixer1.clipAction(animationClip);
  animationAction.play();
}, undefined, function (err) { console.log(err) })


assetLoader.load("./assets/pearly_heath/scene.gltf", function (gltf) {
  insectModal2 = gltf.scene;
  scene.add(insectModal2)
  insectModal2.position.set(2, 0, 15)
  insectModal2.scale.set(0.5,0.5,0.5)
  const animationClip = gltf.animations[0];
  mixer2 = new THREE.AnimationMixer(insectModal2);
  const animationAction = mixer2.clipAction(animationClip);
  animationAction.play();
}, undefined, function (err) { console.log(err) })




assetLoader.load("./assets/blanket_phlox/scene.gltf", function (gltf) {
  flowersModel = gltf.scene;
  scene.add(flowersModel)
  flowersModel.position.set(0, -3, -10)
  flowersModel.scale.set(40, 30, 30)
}, undefined, function (err) { console.log(err) })


let intensity=0
camera.position.set(0, 0, 10)
orbit.update()

const ambientLight = new THREE.AmbientLight(0xFFFFFF,intensity)
scene.add(ambientLight)


renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)
function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight);
  bloomComposer.setSize(window.innerWidth,window.innerHeight)
}

function animate() {
  if (mixer) {
    mixer.update(0.02);
  }
  if (mixer1) {
    mixer1.update(0.04);
  }
  if (mixer2) {
    mixer2.update(0.03);
  }
  if (butterflyModel) {
    butterflyModel.position.y=Math.sin(moveSpeed) * moveAmplitude;
    moveSpeed += 0.005;
    
  }
  if (insectModal2) {
    insectModal2.position.x = Math.sin(moveSpeed2) * 2;
    insectModal2.position.z= Math.sin(moveSpeed2)*2
    moveSpeed2 += 0.005;
    
  }
  
  requestAnimationFrame(animate);
  renderer.render(scene, camera)
  bloomComposer.render(camera,scene)
}
window.addEventListener('resize', onResize)
window.addEventListener('wheel', (event) => {
  if (event.deltaY < 0) {
    intensity += 0.01; 
  } else {
    intensity -= 0.01; 
  }
  intensity = Math.max(0, Math.min(1, intensity));
  ambientLight.intensity = intensity;
});

animate()