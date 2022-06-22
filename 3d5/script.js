const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusKnotGeometry( 8, 1, 90, 13 );
const material = new THREE.MeshLambertMaterial( { color: 0x00ecff } );
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );

camera.position.z = 40;

var spotLight = new THREE.SpotLight(0xFFFFFF);
    spotLight.position.set(-40, 40, -15);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    spotLight.shadow.camera.far = 130;
    spotLight.shadow.camera.near = 40;
scene.add(spotLight);


function renderScene() {
    torusKnot.rotation.x += 0.02;
    torusKnot.rotation.y += 0.02;
    torusKnot.rotation.z += 0.02;
    requestAnimationFrame(renderScene);
    renderer.render(scene, camera);
}

renderScene();