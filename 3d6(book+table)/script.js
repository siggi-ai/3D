(function () {

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



    //plane1 (table)
    var planeGeometry = new THREE.PlaneGeometry(35, 75);
    var planeMaterial = new THREE.MeshLambertMaterial({
        color: 0x16bd00,
    });

    console.log(planeMaterial.color);

    //GUI
    var controls = new function() { 
        this.planeMaterial = { color : '#ffae23' }; 
      } 

    var gui = new dat.GUI(); 
    var conf = { color : '#ffae23' };    
    gui.addColor(conf, 'color').onChange( function(colorValue) {
    planeMaterial.color.set(colorValue);
    });


    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(2, 5, -1);
    plane.receiveShadow = true;
    scene.add(plane);

    //plane2 (book)
    var planeGeometry2 = new THREE.PlaneGeometry(15, 25);
    var planeMaterial2 = new THREE.MeshLambertMaterial({
        color: 0xff00ff,
    });

    var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
    plane2.rotation.x = -0.0 * Math.PI;
    plane2.position.set(2, 5, -1);
    plane2.receiveShadow = true;
    scene.add(plane2);


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
    var planeGeometry3 = new THREE.PlaneGeometry(15, 25);
    var planeMaterial3 = new THREE.MeshLambertMaterial({
        color: 0xff00ff,
    });

    var plane3 = new THREE.Mesh(planeGeometry3, planeMaterial3);
    plane3.rotation.x = -0.2 * Math.PI;
    plane3.position.set(2, 5, -1);
    plane3.receiveShadow = true;
    scene.add(plane3);

    // plane4
    var planeGeometry2 = new THREE.PlaneGeometry(15, 25);
    var planeMaterial2 = new THREE.MeshLambertMaterial({
        color: 0xff00ff,
    });

    var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
    plane2.rotation.x = -0.3 * Math.PI;
    plane2.position.set(2, 5, -1);
    plane2.receiveShadow = true;
    scene.add(plane2);

    // plane5
    var planeGeometry2 = new THREE.PlaneGeometry(15, 25);
    var planeMaterial2 = new THREE.MeshLambertMaterial({
        color: 0xff00ff,
    });

    var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
    plane2.rotation.x = -0.4 * Math.PI;
    plane2.position.set(2, 5, -1);
    plane2.receiveShadow = true;
    scene.add(plane2);

    // plane5
    var planeGeometry2 = new THREE.PlaneGeometry(15, 25);
    var planeMaterial2 = new THREE.MeshLambertMaterial({
        color: 0xff00ff,
    });

    var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
    plane2.rotation.x = -0.51 * Math.PI;
    plane2.position.set(2, 5, -1);
    plane2.receiveShadow = true;
    scene.add(plane2);

    // plane6
    var planeGeometry2 = new THREE.PlaneGeometry(15, 25);
    var planeMaterial2 = new THREE.MeshLambertMaterial({
        color: 0xff00ff,
    });

    var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
    plane2.rotation.x = -0.6 * Math.PI;
    plane2.position.set(2, 5, -1);
    plane2.receiveShadow = true;
    scene.add(plane2);

    // plane7
    var planeGeometry2 = new THREE.PlaneGeometry(15, 25);
    var planeMaterial2 = new THREE.MeshLambertMaterial({
        color: 0xff00ff,
    });

    var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
    plane2.rotation.x = 0.1 * Math.PI;
    plane2.position.set(2, 5, -1);
    plane2.receiveShadow = true;
    scene.add(plane2);

    // plane8
    var planeGeometry2 = new THREE.PlaneGeometry(15, 25);
    var planeMaterial2 = new THREE.MeshLambertMaterial({
        color: 0xff00ff,
    });

    var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
    plane2.rotation.x = 0.2 * Math.PI;
    plane2.position.set(2, 5, -1);
    plane2.receiveShadow = true;
    scene.add(plane2);

    // plane9
    var planeGeometry2 = new THREE.PlaneGeometry(15, 25);
    var planeMaterial2 = new THREE.MeshLambertMaterial({
        color: 0xff00ff,
    });

    var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
    plane2.rotation.x = -0.7 * Math.PI;
    plane2.position.set(2, 5, -1);
    plane2.receiveShadow = true;
    scene.add(plane2);



    //Light
    var spotLight = new THREE.SpotLight(0xFFFFFF);
    spotLight.position.set(-40, 40, 15);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    spotLight.shadow.camera.far = 130;
    spotLight.shadow.camera.near = 40;
    scene.add(spotLight);

    var ambientLight = new THREE.AmbientLight(0x000000)
    scene.add(ambientLight);

    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);


    function renderScene() {
        stats.update();
        trackballControls.update(clock.getDelta());
        requestAnimationFrame(renderScene);
        renderer.render(scene, camera);
    }


    document.getElementById("webgl-output").appendChild(renderer.domElement);
    var trackballControls = initTrackballControls(camera, renderer);
    var clock = new THREE.Clock();

    renderScene();
}

init()

})();
