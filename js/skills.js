Skills = function(window, $) {

        var skills = CV.skills;
    
    var editor = ace.edit($('#skills .editor')[0]);
    editor.setValue(JSON.stringify(skills, null, 4));
    window.adjustEditor(editor);


    function startTimer2(){};
    
    /*var count = 0;
    var maxCount = 12;

    var timer = setInterval(function(){
    
        $('#skills .ace_content').glitch({
            amount: (maxCount - count)/maxCount*4 + 1,
            complete: function(canvas){
                canvas.style.display = "none";
                $('#skills .skills-info').append(canvas);
            }
        });

        if(++count > maxCount)
            clearInterval(timer)
    },16)

   
    
    function startTimer2(){
        var i = 0;

        $('#skills .ace_editor').hide();

        timer2 = setInterval(function(){
            $('.skills-info>canvas').hide();

            if(i == $('.skills-info>canvas').length){
                clearInterval(timer2);
                $('#skills .ace_editor').show();
            }
         
            
            $('.skills-info>canvas:eq('+ i++ +')').show();
        },16)

    }
    */


    // variables used in init()
    var scene, camera, renderer, clock, controls;
    
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
    var targetRotation = 0;
    var targetRotationOnMouseDown = 0;
    
    var mouseX = 0;
    var mouseXOnMouseDown = 0;
    var textArr = [];
    var composer, rgbShift, lastCameraPos;

    var bgColor = new THREE.Color();
    bgColor.setHSL(0, 0, 0.95 );
    var container = $("#skills > div.skills-canvas");

    // Setup the scene
    function init() {
        scene = new THREE.Scene();
        scene.fog = new THREE.Fog(bgColor, .5, 700);
        
        camera = new THREE.PerspectiveCamera(75, container.width() / container.height(), 0.1, 100000);
        camera.lookAt(scene.position);
   
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(container.width(), container.height());
        renderer.setClearColor(bgColor);
        clock = new THREE.Clock();
        container.append(renderer.domElement);

        controls = new THREE.TrackballControls(camera, container[0]);
        //controls.enabled = false;
        controls.noPan = true;
        controls.rotateSpeed = 0.7;
        controls.zoomSpeed = 0.8;
        controls.minDistance = 200;
        controls.maxDistance = 400;
        controls.dynamicDampingFactor = 0.1;
    }
    
    
    function buildAxis(src, dst, colorHex, dashed) {
        var geom = new THREE.Geometry(), 
        mat;
        
        if (dashed) {
            mat = new THREE.LineDashedMaterial({linewidth: 3,color: colorHex,dashSize: 50,gapSize: 50});
        } else {
            mat = new THREE.LineBasicMaterial({linewidth: 3,color: colorHex});
        }
        
        geom.vertices.push(src.clone());
        geom.vertices.push(dst.clone());
        geom.computeLineDistances(); // This one is SUPER important, otherwise dashed lines will appear as simple plain lines
        
        var axis = new THREE.Line(geom, mat, THREE.LinePieces);
        
        return axis;
    }
    
    function drawLineFromPoint(from, to) {
        var axes = new THREE.Object3D();
        axes.add(buildAxis(from, to, 0xFF6347, false)); // +X
        scene.add(axes);
    }
    
    function animate() {
        requestAnimationFrame(animate);
        // Using a fixed time-step here to avoid pauses
        render(clock.getDelta());
    }
    
    
    function render(dt) {
        //particleGroup.tick(dt);
        textArr.forEach(function(d) {
            d.up = camera.up;
            var textGeo = d.geometry;

            //         var centerOffsetX = -0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x);
            //         var centerOffsetY = -0.5 * (textGeo.boundingBox.max.y - textGeo.boundingBox.min.y);
            //         var centerOffsetZ = -0.5 * (textGeo.boundingBox.max.z - textGeo.boundingBox.min.z);
            //         var offset = new THREE.Vector3(centerOffsetX, centerOffsetY, centerOffsetZ);
            
            d.lookAt(camera.position)
        
        })

        //scene.rotation.y += (targetRotation - scene.rotation.y) * 0.05;
        controls.update();
        //renderer.render(scene, camera);
        if (lastCameraPos)
            rgbShift.uniforms['amount'].value = lastCameraPos.sub(camera.position.clone()).length() / 1e4;
        lastCameraPos = camera.position.clone();
        composer.render();
    }
    
    function initShape() {
        
        var gridObjects = new Array(1);
        var gridPoints = new Array(gridObjects.length);
        var points = [];
        var colors = [];
        
        var material3d = [
            new THREE.MeshLambertMaterial({color: 0xffffff,shading: THREE.FlatShading,vertexColors: THREE.VertexColors}), 
            new THREE.MeshBasicMaterial({color: 0x000000,shading: THREE.FlatShading,wireframe: true,transparent: true})
        /*new THREE.MeshPhongMaterial( { vertexColors: THREE.VertexColors, shading: THREE.SmoothShading, side: THREE.FrontSide, transparent: true,opacity: 0.8} ),
        new THREE.MeshBasicMaterial( { wireframe:true, shading: THREE.SmoothShading,color: 0x333333,side: THREE.FrontSide, transparent: true,opacity: 1} ),*/
        ];
        
        var pointCloudMaterial = new THREE.PointCloudMaterial({color: 0x111111,size: 2.0,vertexColors: THREE.VertexColors});
        
        
        var materialGrid = [
            new THREE.MeshBasicMaterial({color: 0x888888,wireframe: true,transparent: true,opacity: 0.8})
        ];
        
        var materialSphere = new THREE.MeshBasicMaterial({wireframe: true,color: 0x000000,transparent: true,opacity: 0.05});
        
        
        var radial = AntipodalPointSet(skills.length);
        
        radial.forEach(function(dd, ii) {
            var from = sph2cart(new THREE.Vector3(skills[ii].value, dd.x, dd.y))
            var color = new THREE.Color(0xffffff);
            color.setHSL(skills[ii].value / 100, 1.0, 0.5);
            colors.push(color);
            points.push(from);
            var textCoord = sph2cart(new THREE.Vector3(150, dd.x, dd.y));
            var to = sph2cart(new THREE.Vector3(150, dd.x, dd.y));
            textArr.push(createTextAt(skills[ii].name, textCoord));
            drawLineFromPoint(from, to);
        });
        
        
        for (var i = 0; i < gridObjects.length; i++) {
            var radius = 102 / gridObjects.length * (i + 1);
            gridPoints[i] = []
            radial.forEach(function(dd, ii) {
                var point = sph2cart(new THREE.Vector3(radius, dd.x, dd.y));
                gridPoints[i].push(point);
            })
        }
        
        var objectGeometry = new THREE.ConvexGeometry(points);
        
        var n, length = objectGeometry.vertices.length, f;
        var faceIndices = ['a', 'b', 'c', 'd'];
        
        for (var i = 0; i < objectGeometry.faces.length; i++) {
            f = objectGeometry.faces[i];
            n = (f instanceof THREE.Face3) ? 3 : 4;
            
            for (var j = 0; j < n; j++) {
                
                f.vertexColors[j] = colors[f[faceIndices[j]]];
            }
        }
        
        
        object = THREE.SceneUtils.createMultiMaterialObject(objectGeometry, material3d);
        object.position.set(0, 0, 0);
        scene.add(object);

        /*pointCloud = new THREE.PointCloud( objectGeometry, pointCloudMaterial );
    pointCloud.position.set(0,0,0);
    scene.add(pointCloud);*/
        
        for (var i = 0; i < gridObjects.length; i++) {
            gridObjects[i] = THREE.SceneUtils.createMultiMaterialObject(new THREE.ConvexGeometry(gridPoints[i]), materialGrid);
            gridObjects[i].position.set(0, 0, 0);
            scene.add(gridObjects[i]);
        }
        
        [20, 40, 60, 80, 100].forEach(function(d) {
            var sphereGeometry = new THREE.SphereGeometry(d, 32, 32);
            var sphereObject = new THREE.Mesh(sphereGeometry, materialSphere);
            scene.add(sphereObject);
        })

    //     sphereGeometry.computeVertexNormals();
    //     scene.add( new THREE.FaceNormalsHelper( sphereObject, 0x000000 ))
    
    }
    
    function initLights() {
        lights = [];
        lights.push(new THREE.PointLight(0xffffff));
        lights[0].position.set(0, 0, 300);
        lights[0].intensity = 1;
        
        lights.push(new THREE.PointLight(0xffffff));
        lights[1].position.set(300, 300, 0);
        lights[1].intensity = 1;
        
        lights.push(new THREE.PointLight(0xffffff));
        lights[2].position.set(-300, 0, -300);
        lights[2].intensity = 1;

        //debugging
        lights.forEach(function(d) {
            d.castShadow = true;
            d.shadowCameraVisible = true;
        })
        
        lights.push(new THREE.AmbientLight(0x000000));
        
        lights.forEach(function(d) {
            scene.add(d);
        })
    
    }
    
    
    function createTextAt(text, point) {
        
        var material = new THREE.MeshFaceMaterial([
            new THREE.MeshLambertMaterial({color: 0x2194ce,shading: THREE.FlatShading,ambient: 0xffffff,emissive: 0x000000,shininess: 0}),  // front
            new THREE.MeshLambertMaterial({color: 0x2194ce,shading: THREE.FlatShading}) // side
        ]);
        
        size = 100;
        height = 80;
        hover = 30, 
        
        opts = {
            "size": 8,
            "height": 1,
            "curveSegments": 4,
            "font": "droid sans",
            "weight": "normal",
            "style": "normal",
            "bevelThickness": 2,
            "bevelSize": 1.5,
            "bevelEnabled": 0,
            "material": 0,
            "extrudeMaterial": 0
        };
        
        
        
        textGeo = new THREE.TextGeometry(text, opts);
        
        textGeo.computeBoundingBox();
        textGeo.computeVertexNormals();

        // "fix" side normals by removing z-component of normals for side faces
        // (this doesn't work well for beveled geometry as then we lose nice curvature around z-axis)
        
        if (!opts.bevelEnabled) {
            
            var triangleAreaHeuristics = 0.1 * (opts.height * opts.size);
            
            for (var i = 0; i < textGeo.faces.length; i++) {
                
                var face = textGeo.faces[i];
                
                if (face.materialIndex == 1) {
                    
                    for (var j = 0; j < face.vertexNormals.length; j++) {
                        
                        face.vertexNormals[j].z = 0;
                        face.vertexNormals[j].normalize();
                    
                    }
                    
                    var va = textGeo.vertices[face.a];
                    var vb = textGeo.vertices[face.b];
                    var vc = textGeo.vertices[face.c];
                    
                    var s = THREE.GeometryUtils.triangleArea(va, vb, vc);
                    
                    if (s > triangleAreaHeuristics) {
                        
                        for (var j = 0; j < face.vertexNormals.length; j++) {
                            
                            face.vertexNormals[j].copy(face.normal);
                        
                        }
                    
                    }
                
                }
            
            }
        
        }
        
        textGeo.center();
        
        textMesh1 = new THREE.Mesh(textGeo, material);
        textMesh1.position.set(point.x, point.y, point.z);
        
        
        textMesh1.rotation.x = 0;
        textMesh1.rotation.y = 0 // Math.PI * 2;
        
        scene.add(textMesh1);


        //     var bbox = new THREE.BoundingBoxHelper( textMesh1, 0x000000 );
        //     bbox.update();
        //     scene.add(bbox);
        
        return textMesh1;
    
    }
    
    function initShaders() {
        composer = new THREE.EffectComposer(renderer);
        composer.addPass(new THREE.RenderPass(scene, camera));
        
        rgbShift = new THREE.ShaderPass(THREE.RGBShiftShader);
        rgbShift.uniforms['amount'].value = 0.0;
        rgbShift.renderToScreen = true;
        composer.addPass(rgbShift);
    }

    /* HELPERS*/
    
    function AntipodalPointSet(K2) {
        // Ref. http://dx.doi.org/10.1016/j.jocs.2011.06.007 
        var K = K2 / 2;
        var PI = Math.PI;
        var n = Math.round(Math.sqrt(K * PI / 8.0));
        var sc = new Array(K);
        var L = PI / Math.sin(PI / (4.0 * n));
        var phi, theta, k;
        var sum = 0;
        var index = 0;
        for (var i = 1; i < n; i++) {
            
            phi = (i - 0.5) * 0.5 * PI / n;
            k = Math.round(2.0 * PI * Math.sin(phi) * K / L);
            sum += k;
            
            for (var j = 1; j <= k; j++) {
                theta = (j - 0.5) * 2.0 * PI / k;
                sc[index] = new THREE.Vector2(theta, PI / 2 - phi);
                index++;
            }
        }
        
        phi = (n - 0.5) * 0.5 * PI / n;
        k = K - sum;
        
        for (var j = 1; j <= k; j++) {
            theta = (j - 0.5) * 2.0 * PI / k;
            sc[index] = new THREE.Vector2(theta, PI / 2 - phi);
            index++;
        }
        
        for (var k = 0; k < K; k++) {
            sc[index] = new THREE.Vector2(sc[K - k - 1].x, PI + sc[K - k - 1].y);
            index++;
        }
        
        return sc;
    }
    
    function sph2cart(vect) {
        //r, theta, phi
        var z = vect.x * Math.sin(vect.z);
        var rcoselev = vect.x * Math.cos(vect.z);
        var x = rcoselev * Math.cos(vect.y);
        var y = rcoselev * Math.sin(vect.y);
        return new THREE.Vector3(x, y, z);
    }

    function cart2sph(vect){
        //x, y ,z
        var ρ = cartesianToR(vect.x, vect.y, vect.z);
        var θ = cartesianToTheta(vect.x, vect.y);
        var φ = cartesianToPhi(vect.x, vect.y, vect.z);
        return new THREE.Vector3(ρ, θ, φ);
    }
    
    cartesianToR = function(x, y, z) {
        return Math.sqrt(x * x + y * y + z * z);
    };

    cartesianToPhi = function(x, y, z) {
        if (arguments.length == 2) {
            if (y >= 0.0) {
                return Math.acos(y / x);
            } else {
                return -Math.acos(y / x);
            }
        } else {
            if (z >= 0.0) {
                return Math.acos(z / this.cartesianToR(x, y, z));
            } else {
                return -Math.acos(z / this.cartesianToR(x, y, z));
            }
        }
    };
    cartesianToTheta = function(x, y) {
        var pi = 4.0 * Math.atan(1.0);
        if (x == 0.0) {
            if (y >= 0.0)
                return pi / 2.0;
            else
                return -pi / 2.0;
        } else if (y == 0.0) {
            if (x >= 0.0)
                return 0.0;
            else
                return pi;
        } else {
            if (x >= 0.0)
                return Math.atan(y / x);
            else
                return Math.atan(y / x) + pi;
        }
    }
    
    
    function startRotateAnimation() {
        console.log(camera.position);
        var currSph = cart2sph(new THREE.Vector3(camera.position.z, camera.position.x, camera.position.y));
        var nextShp = currSph.clone().add(new THREE.Vector3(0, 0, Math.PI*2));
        var newPos;
        TweenMax.to(currSph, 3, {x: nextShp.x, y:  nextShp.y, z:  nextShp.z,ease: Circ.easeOut, onUpdate: function(){            
            newPos = sph2cart(currSph)
            //console.log(newPos.z, newPos.x, newPos.y)
            camera.position.set(newPos.x, newPos.y, newPos.z);
        }})
    }
    
    start = function() {
        init();
        initShaders();
        initShape();
        initLights();
        animate();
        
        camera.position.z = 280;
        camera.position.y = 0;
        camera.position.x = 0;
        
        window.addEventListener('resize', function() {
            var w = container.width(), 
            h = container.height();
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        }, false);
    
    };
    
    start();
    
    $(window).on('skills-enter', function(){
        startRotateAnimation();
        startTimer2();
        setInterval(startTimer2, 12000);
    })

    return ({
        startRotateAnimation: startRotateAnimation
    })
}