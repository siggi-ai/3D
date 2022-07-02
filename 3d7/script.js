

var camera;
var scene;
var renderer;

function init() {
    var stats = initStats();
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 0.015, 500);
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;


    //Polyhedron
    const verticesOfCube = [
        -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
        -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
    ];
    
    const indicesOfFaces = [
        2,1,0,    0,3,2,
        0,4,7,    7,3,0,
        0,1,5,    5,4,0,
        1,2,6,    6,5,1,
        2,3,7,    7,6,2,
        4,5,6,    6,7,4
    ];
    
    const geometry = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6, 1 );
    const geometryMaterial= new THREE.MeshLambertMaterial({color: 0xffffff});

    var polyhedron = new THREE.Mesh(geometry, geometryMaterial);
    scene.add(polyhedron);
    

    //Light
    var spotLight = new THREE.SpotLight(0xFFFFFF);
    spotLight.position.set(-40, 40, 15);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    spotLight.shadow.camera.far = 130;
    spotLight.shadow.camera.near = 40;
    scene.add(spotLight);

    const ambientLight = new THREE.AmbientLight( 0x302050 );
    scene.add( ambientLight );

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

