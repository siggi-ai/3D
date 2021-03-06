(function () {

 console.log(THREE);

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

    /* scene.overrideMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff}); */

    window.addEventListener('resize', onResize, false); 

    var axes = new THREE.AxesHelper(20);
    scene.add(axes);

    var planeGeometry = new THREE.PlaneGeometry(60, 20);
    var planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xAAAAAA,
    });

    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(15, 0, 0); 
    plane.receiveShadow = true; 
    scene.add(plane);

    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    var cubeMaterial = new THREE.MeshLambertMaterial({
        color: 0xFF0000,
    });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-4, 3, 0);
    cube.castShadow = true;
    scene.add(cube);

    var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    var sphereMaterial = new THREE.MeshLambertMaterial({
        color: 0x7777FF,
    });
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(20, 4, 2);
    sphere.castShadow = true; 
    scene.add(sphere);

    var spotLight = new THREE.SpotLight(0xFFFFFF);
    spotLight.position.set(-40, 40, -15);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    spotLight.shadow.camera.far = 130;
    spotLight.shadow.camera.near = 40;
    scene.add(spotLight);

    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    //GUI
    var controls = new function() { 
        this.rotationSpeed = 0.02; 
        this.bouncingSpeed = 0.03; 
      } 

    var gui = new dat.GUI(); 
    gui.add(controls, 'rotationSpeed', 0, 0.5); 
    gui.add(controls, 'bouncingSpeed', 0, 0.5); 

    //Animation
    var step = 0;

    function renderScene() {
        trackballControls.update(clock.getDelta());
        stats.update();
        /* cube.rotation.x += 0.02;
        cube.rotation.y += 0.02;
        cube.rotation.z += 0.02;
        step+=0.04; */ 
        step += controls.bouncingSpeed; 
        sphere.position.x = 20 + 10*(Math.cos(step)); 
        sphere.position.y = 2 + 10*Math.abs(Math.sin(step)); 
        requestAnimationFrame(renderScene);
        renderer.render(scene, camera);
    }

    function initStats(type) {
        var panelType = (typeof type !== 'undefined' && type) && (!isNaN(type)) ? parseInt(type) : 0;
        var stats = new Stats();
        stats.showPanel(panelType); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild(stats.dom);
        return stats;
    }

    function onResize() { 
        camera.aspect = window.innerWidth / window.innerHeight; 
        camera.updateProjectionMatrix(); 
        renderer.setSize(window.innerWidth, window.innerHeight); 
      } 

    document.getElementById("webgl-output").appendChild(renderer.domElement);
    var trackballControls = initTrackballControls(camera, renderer);
    var clock = new THREE.Clock();

    /* renderer.render(scene, camera); */
    renderScene();
}

init()

})();
