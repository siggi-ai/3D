var camera;
var scene;
var renderer;
   
function init() {
    var stats = initStats();
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog( 0x00ffff, 0.015, 180);
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true; 


   
    var planeGeometry = new THREE.PlaneGeometry(100, 100);
    var planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xAAAAAA,
    });
   
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(15, 0, 0); 
    plane.receiveShadow = true; 
    scene.add(plane);

   

    var spotLight = new THREE.SpotLight(0xFFFFFF);
    spotLight.position.set(-40, 40, -15);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    spotLight.shadow.camera.far = 130;
    spotLight.shadow.camera.near = 40;
    scene.add(spotLight);
   
    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);
   

    function renderScene() {
        renderer.render(scene, camera);
    }

   
    document.getElementById("webgl-output").appendChild(renderer.domElement);
   
    renderScene();
}
   
init()

   