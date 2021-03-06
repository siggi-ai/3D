const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusKnotGeometry( 5, 1.8, 90, 13 );
const material = new THREE.MeshLambertMaterial( { color: 0xff00ff } );
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );

const geometry2 = new THREE.TorusKnotGeometry( 6, 1, 90, 13 );
const material2 = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
const torusKnot2 = new THREE.Mesh( geometry2, material2 );
scene.add( torusKnot2 );

const geometry3 = new THREE.SphereGeometry( 5, 32, 16 );
const material3 = new THREE.MeshLambertMaterial( { color: 0x0000ff } );
const sphere3 = new THREE.Mesh( geometry3, material3 );
scene.add( sphere3 );

camera.position.z = 40;

var spotLight = new THREE.SpotLight(0xFFFFFF);
    spotLight.position.set(-40, 40, -15);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    spotLight.shadow.camera.far = 130;
    spotLight.shadow.camera.near = 40;
scene.add(spotLight);

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );


function renderScene() {
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;
    torusKnot.rotation.z += 0.01;
    torusKnot2.rotation.x += 0.008;
    torusKnot2.rotation.y += 0.008;
    torusKnot2.rotation.z += 0.009;
    requestAnimationFrame(renderScene);
    renderer.render(scene, camera);
}

renderScene();