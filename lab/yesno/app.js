
//if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var container, stats;

var camera, cameraTarget, scene, renderer;
window.onload = function() {
    init();
    animate();
};

function init() {

    container = document.createElement('div');
    document.body.appendChild(container);

    //camera = new THREE.PerspectiveCamera(5, window.innerWidth / window.innerHeight, 0.5, 150000);
    //camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);

    var aspect = window.innerWidth / window.innerHeight;
    //camera = new THREE.OrthographicCamera(aspect * 5, -aspect * 5, -1 / aspect * 5, 1 / aspect * 5, 100, -100);
    camera = new THREE.OrthographicCamera(10, -10, -10 / aspect - 1, 10 / aspect - 1, 100, -100);

    cameraTarget = new THREE.Vector3(0, -2, 0);

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x72645b, 30, 50);


    // Ground

    var plane = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), new THREE.MeshPhongMaterial({ambient: 0x222222, color: 0x444444, specular: 0x101010, side: THREE.DoubleSide}));
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = 0.01;
    scene.add(plane);
    //plane.receiveShadow = true;


    var h = 2.00;
    var geometry = new THREE.CubeGeometry(5, h, 5, 1, 1, 1);//new THREE.CylinderGeometry(3, 3, h, 32, true);
    var material = new THREE.MeshPhongMaterial({ambient: 0x222222, color: 0xCCCCCC, specular: 0x888888, side: THREE.DoubleSide});
    var cube1 = new THREE.Mesh(geometry, material);
    cube1.position.y = -h / 2;
    cube1.position.x = 0.25;
    scene.add(cube1);

    var h2 = 0.35;
    var geometry = new THREE.CubeGeometry(5, h2, 5, 1, 1, 1);//new THREE.CylinderGeometry(3, 3, h, 32, true);
    var material = new THREE.MeshPhongMaterial({ambient: 0x000000, color: 0x444444, specular: 0x888888, shininess: 10, side: THREE.DoubleSide});
    var cube2 = new THREE.Mesh(geometry, material);
    cube2.position.y = -h - h2 / 2;
    cube2.position.x = 0.25;
    scene.add(cube2);

    for (var i = -20; i < 20; i++) {
        addLineZ(i*3);
        addLineX(i*3);
    }

    function addLineZ(z) {
        var material = new THREE.LineBasicMaterial(0x000000, 1, 'round', THREE.NoColors, true);
        var geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-60, 0, z));
        geometry.vertices.push(new THREE.Vector3(60, 0, z));

        var line = new THREE.Line(geometry, material);
        scene.add(line);
    }

    function addLineX(x) {
        var material = new THREE.LineBasicMaterial(0x000000, 1, 'round', THREE.NoColors, true);
        var geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(x, 0, -60));
        geometry.vertices.push(new THREE.Vector3(x, 0, 60));

        var line = new THREE.Line(geometry, material);
        scene.add(line);
    }





    var manager = new THREE.LoadingManager();
    manager.onProgress = function(item, loaded, total) {

        console.log(item, loaded, total);

    };

    var loader = new THREE.OBJLoader(manager, new THREE.MeshPhongMaterial({ambient: 0x000000, color: 0xFFFFFF, specular: 0xFFFFFF, shininess: 5, side: THREE.DoubleSide}));
    loader.load('yesno', function(object) {

        object.traverse(function(child) {

            if (child instanceof THREE.Mesh) {
                child.material.side = THREE.DoubleSide;
                /*child.castShadow = true;
                 child.receiveShadow = true;*/

                //child.position.set(0, -10, 0);
                child.scale.set(0.1, -0.1, 0.1);


            }

        });


        object.position.y = -1.20;

        object.castShadow = true;
        //object.receiveShadow = true;

        scene.add(object);

    });

    // Lights

    scene.add(new THREE.AmbientLight(0xFFFFFF));
    addShadowedLight(40, 0, 0, 0xA6D96A, 1);
    addShadowedLight(0, 0, 40, 0xD53E4F, 1);

    addShadowedLight(-40, -4, -40, 0xFFFFFF, 0.5);



    // renderer

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.setClearColor(scene.fog.color, 1);

    /*renderer.gammaInput = true;
    renderer.gammaOutput = true;*/

    //renderer.shadowMapEnabled = true;
    //renderer.shadowMapSoft = true;
    renderer.shadowMapCullFace = THREE.CullFaceBack;

    container.appendChild(renderer.domElement);

    // stats

    /*stats = new Stats();
     stats.domElement.style.position = 'absolute';
     stats.domElement.style.top = '0px';
     container.appendChild(stats.domElement);*/

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    camera.position.x = -40;
    camera.position.y = -2;
    camera.position.z = 0;
    controls.addEventListener('change', render);

    renderer.domElement.onmouseup = startTween;
    renderer.domElement.onmousedown = function() {
        tween.stop();
    };

    var yes = new THREE.Vector3(0, -2, -40),
            no = new THREE.Vector3(-40, -2, 0);

    tween = new TWEEN.Tween(camera.position)
            .to(yes, 2000)
            .delay(300)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

    tweenBack = new TWEEN.Tween(camera.position)
            .to(no, 2000)
            .delay(300)
            .easing(TWEEN.Easing.Exponential.InOut);



    tween.chain(tweenBack);
    tweenBack.chain(tween);

    window.addEventListener('resize', onWindowResize, false);

}

function addShadowedLight(x, y, z, color, intensity) {

    var directionalLight = new THREE.DirectionalLight(color, intensity);
    directionalLight.position.set(x, y, z);
    scene.add(directionalLight);

    directionalLight.castShadow = true;
    //directionalLight.shadowCameraVisible = true;

    var d = 20;
    directionalLight.shadowCameraLeft = -d;
    directionalLight.shadowCameraRight = d;
    directionalLight.shadowCameraTop = d;
    directionalLight.shadowCameraBottom = -d;

    directionalLight.shadowCameraNear = 1;
    directionalLight.shadowCameraFar = 40;

    directionalLight.shadowMapWidth = 4096;
    directionalLight.shadowMapHeight = 4096;

    directionalLight.shadowBias = -0.005;
    directionalLight.shadowDarkness = 0.15;

}

function onWindowResize() {

    var aspect = window.innerWidth / window.innerHeight;

    camera.top = -10 / aspect - 1;
    camera.botom = 10 / aspect - 1;


    //new THREE.OrthographicCamera(6, -6, -6/aspect-1, 6/aspect-1, 100, -100);

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {

    requestAnimationFrame(animate);

    TWEEN.update();
    render();

}

function startTween() {
    var yes = new THREE.Vector3(0, -2, -40),
            no = new THREE.Vector3(-40, -2, 0),
            target = yes.distanceTo(camera.position) > no.distanceTo(camera.position) ? no : yes;

    tween = new TWEEN.Tween(camera.position)
            .to(target, 2000)
            .easing(TWEEN.Easing.Exponential.InOut);
    tween.start();
}

function render() {

    camera.lookAt(cameraTarget);

    renderer.render(scene, camera);

}
