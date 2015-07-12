define(function() {
    'use strict';

    // class Scene extends THREE.Scene {
    //     constructor() {

    //     }
    // }


    var Scene = function() {
        // this.setScene();
        // this.setContainer();
        // this.setRenderEngine();
        // this.setLights();
        // this.setCamera();
        // this.setFocalPoint();

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer();

        renderer.setSize( window.innerWidth, window.innerHeight );

        document.body.appendChild( renderer.domElement );

        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );

        scene.add( cube );

        camera.position.z = 5;

        var render = function () {
            requestAnimationFrame( render );

            cube.rotation.x += 0.1;
            cube.rotation.y += 0.1;

            renderer.render(scene, camera);
        };

        render();
    };

    // Scene.prototype.setScene = function() {
    //     this.scene = new THREE.Scene();

    //     this.scene.add(new THREE.AxisHelper(3000));

    //     App.scene = this.scene;
    // };

    // Scene.prototype.setContainer = function() {
    //     this.container = document.getElementById('solar-system');
    // };

    // Scene.prototype.setRenderEngine = function() {
    //     var renderEngine = new THREE.WebGLRenderer({ antialias: true });

    //     renderEngine.setSize(window.innerWidth, window.innerHeight);

    //     this.renderEngine = renderEngine;

    //     console.log('domElement:', this.renderEngine.domElement);

    //     this.container.appendChild(this.renderEngine.domElement);
    // };

    // Scene.prototype.setLights= function() {
    //     var fromTop    = new THREE.DirectionalLight(0xffffff, 2, { target: new THREE.Vector3(0, 0, 0)}),
    //         fromBottom = new THREE.DirectionalLight(0xffffff, 2, { target: new THREE.Vector3(0, 0, 0)})
    //     ;

    //     fromTop.position.set(0, 1000, 0);
    //     fromBottom.position.set(0, -1000, 0);

    //     this.scene.add(fromTop);
    //     this.scene.add(fromBottom);

    //     var light = new THREE.PointLight( 0xff0000, 1, 100 );

    //     light.position.set(0, 0, 0);
    //     this.scene.add( light );
    // };

    // Scene.prototype.setCamera = function() {
    //     this.camera = new THREE.PerspectiveCamera(
    //         45,
    //         window.innerWidth / window.innerHeight,
    //         1,
    //         1 * Math.pow(10, 12)
    //     );

    //     App.camera = this.camera;
    // };

    // Scene.prototype.setFocalPoint = function(target) {
    //     // var target = target || new THREE.Vector3(0,0,0);

    //     // this.scene.camera.lookAt(target);
    // };

    return new Scene();
});