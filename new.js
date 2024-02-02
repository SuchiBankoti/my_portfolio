import * as THREE from "three"
import * as CANNON from "cannon-es"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { Group } from "three"

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
const orbit=new OrbitControls(camera,renderer.domElement)
const axesHelper = new THREE.AxesHelper(100)
const ambientLight = new THREE.AmbientLight(0xffffff)
axesHelper.position.set(0, 0, 0);
camera.position.set(0,0,20)
scene.add(camera)
scene.add(axesHelper)
scene.add(ambientLight)

const group = new Group()




const ballMeshGeometry = new THREE.SphereGeometry(1)
const ballMeshMaterial = new THREE.MeshStandardMaterial({ color: 'red' })
const ballMesh=new THREE.Mesh(ballMeshGeometry,ballMeshMaterial)
const planeMeshGeometry = new THREE.PlaneGeometry(100,100)
const planeMeshMaterial = new THREE.MeshStandardMaterial({color:'grey'})
const planeMesh = new THREE.Mesh(planeMeshGeometry, planeMeshMaterial)

scene.add(ballMesh)
scene.add(planeMesh)
const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.8, 0) })
const spherePhysMat = new CANNON.Material()
const groundPhysMat=new CANNON.Material()
const groundSphereContactMat = new CANNON.ContactMaterial(
    groundPhysMat,
    spherePhysMat,
    {
        restitution:0.9
    }
)
const ball = new CANNON.Body({
    shape: new CANNON.Sphere(1),
    mass: 5,
    position: new CANNON.Vec3(1, 20, 0),
    material:spherePhysMat
})
const plane = new CANNON.Body({
    type: CANNON.Body.STATIC,
    shape: new CANNON.Box(new CANNON.Vec3(100, 100, 0.1)),
    material:groundPhysMat
})
plane.quaternion.setFromEuler(-Math.PI / 2, 0, 0)

let n=10

const spePhysicsBodies = [];

for (let i = 0; i < n; i++) {
    const speGeometry = new THREE.SphereGeometry(1);
    const speMaterial = new THREE.MeshStandardMaterial({ color: 'white' });
    const speMesh = new THREE.Mesh(speGeometry, speMaterial);
    group.add(speMesh);
    const x = (Math.random()-0.5 )*10
    const y=(Math.random()) *20
    const z=(Math.random()-0.5 ) *10
    const speBody = new CANNON.Body({
        shape: new CANNON.Sphere(1),
    mass: 5,
    position: new CANNON.Vec3(x,y,z),
    material:spherePhysMat
    });

    spePhysicsBodies.push(speBody); 
    world.addBody(speBody);
}

scene.add(group)

world.addBody(ball)
world.addBody(plane)
world.addContactMaterial(groundSphereContactMat)
window.addEventListener('resize', ()=>{
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth,window.innerHeight)
})
const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()
window.addEventListener('mousemove', (e) => {
    pointer.x = (e.clientX/window.innerWidth)*2-1
    pointer.y = -(e.clientY/window.innerHeight)*2+1
    
    raycaster.setFromCamera(pointer, camera)
})

const timeStep=1/60

function animate() {
    n=n+1
    world.step(timeStep)
    planeMesh.position.copy(plane.position)
    planeMesh.quaternion.copy(plane.quaternion)

    group.children.forEach((speMesh, index) => {
        const speBody = spePhysicsBodies[index];
        speMesh.position.copy(speBody.position);
        speMesh.quaternion.copy(speBody.quaternion);
    });

    ballMesh.position.copy(ball.position)
    ballMesh.quaternion.copy(ball.quaternion)


  requestAnimationFrame(animate);
    renderer.render(scene,camera)
}


animate()
orbit.update()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)