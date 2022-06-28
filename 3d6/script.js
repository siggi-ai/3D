var camera;
var scene;
var renderer;

function init() {
    var stats = initStats();
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x00ffff, 0.015, 180);
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;


    //plane1
    /* var planeGeometry = new THREE.PlaneGeometry(100, 50);
    var planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xAAAAAA,
    });

    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(10, 0, 0);
    plane.receiveShadow = true;
    scene.add(plane); */

    // plane2
    var planeGeometry2 = new THREE.PlaneGeometry(15, 25);
    var planeMaterial2 = new THREE.MeshLambertMaterial({
        color: 0xff00ff,
    });

    var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
    plane2.rotation.x = -0.1 * Math.PI;
    plane2.position.set(2, 5, -1);
    plane2.receiveShadow = true;
    scene.add(plane2);


    // plane3
    var planeGeometry2 = new THREE.PlaneGeometry(15, 25);
    var planeMaterial2 = new THREE.MeshLambertMaterial({
        color: 0xff00ff,
    });

    var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
    plane2.rotation.x = -0.3 * Math.PI;
    plane2.position.set(2, 5, -1);
    plane2.receiveShadow = true;
    scene.add(plane2);

    // plane4
    var planeGeometry2 = new THREE.PlaneGeometry(15, 25);
    var planeMaterial2 = new THREE.MeshLambertMaterial({
        color: 0xff00ff,
    });

    var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
    plane2.rotation.x = -0.5 * Math.PI;
    plane2.position.set(2, 5, -1);
    plane2.receiveShadow = true;
    scene.add(plane2);

    // plane5
    var planeGeometry2 = new THREE.PlaneGeometry(15, 25);
    var planeMaterial2 = new THREE.MeshLambertMaterial({
        color: 0xff00ff,
    });

    var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
    plane2.rotation.x = -0.7 * Math.PI;
    plane2.position.set(2, 5, -1);
    plane2.receiveShadow = true;
    scene.add(plane2);

    // plane5
    var planeGeometry2 = new THREE.PlaneGeometry(15, 25);
    var planeMaterial2 = new THREE.MeshLambertMaterial({
        color: 0xff00ff,
    });

    var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
    plane2.rotation.x = -1.8 * Math.PI;
    plane2.position.set(2, 5, -1);
    plane2.receiveShadow = true;
    scene.add(plane2);

    // plane5
    var planeGeometry2 = new THREE.PlaneGeometry(15, 25);
    var planeMaterial2 = new THREE.MeshLambertMaterial({
        color: 0xff00ff,
    });

    var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
    plane2.rotation.x = -1.9 * Math.PI;
    plane2.position.set(2, 5, -1);
    plane2.receiveShadow = true;
    scene.add(plane2);


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

