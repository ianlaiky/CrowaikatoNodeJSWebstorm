var Gif = function (callback) {
    this.init(function () {
        callback();
    });
};
var p = Gif.prototype;


p.rings = [];
p.colors = [0xe44231, 0xb0f442, 0x4141f4, 0xe44231, 0x21a5ad, 0xfead13, 0xe44231, 0x21a5ad, 0xfead13];


p.init = function () {
    p.initScene();
    p.initEventListeners();
};

p.initEventListeners = function () {
    p.renderer.domElement.addEventListener('mousedown', p.onMouseDown);
    p.renderer.domElement.addEventListener('mousemove', p.onMouseMove);
    p.renderer.domElement.addEventListener('mouseup', p.onMouseUp);
}


p.initScene = function () {
    p.scene = new THREE.Scene();
    p.initCamera();
    p.initLights();
    p.initRenderer();
    p.createRings();

    p.render();
};

p.initCamera = function () {
    // p.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    p.camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 1000);
    p.camera.position.y = 0;
    p.camera.position.z = 500;
    p.camera.updateProjectionMatrix();
    p.camera.lookAt(this.scene.position);
};

p.initRenderer = function (callback) {
    p.renderer = new THREE.WebGLRenderer({antialias: true});
    p.renderer.setSize(window.innerWidth, window.innerHeight);
    p.renderer.setClearColor(0x262626, 1);
    p.renderer.domElement.id = "canvas3d";
    document.body.appendChild(p.renderer.domElement);
};

p.initLights = function () {
    var light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(-55, 10, 40);
    p.scene.add(light);
    var light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(55, -55, 55);
    p.scene.add(light);
    var light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(50, 50, 0);
    p.scene.add(light);
    var light = new THREE.DirectionalLight(0xffffff, 0.4);
    light.position.set(0, 10, 0);
    p.scene.add(light);
};

p.createRings = function () {
    p.ringGroup = new THREE.Group();
    p.scene.add(p.ringGroup);


    p.tl = new TimelineMax({repeat: -1, delay: 1});
    for (var i = 0; i < 9; ++i) {
        var pts = [
            new THREE.Vector3(30 + i * 20, 0, 20),//top left
            new THREE.Vector3(30 + i * 20 - 10, 0, 20),//top right
            new THREE.Vector3(30 + i * 20 - 10, 0, -20),//bottom right
            new THREE.Vector3(30 + i * 20, 0, -20),//bottom left
            new THREE.Vector3(30 + i * 20, 0, 20)//back to top left - close square path
        ];
        p.geometry = new THREE.LatheGeometry(pts, 100);
        p.material = new THREE.MeshLambertMaterial({color: p.colors[i], shading: THREE.FlatShading});
        p.ring = new THREE.Mesh(p.geometry, p.material);
        p.ring.position.z = 24;
        p.ring.overdraw = true;
        p.ring.doubleSided = true;
        p.ringGroup.add(p.ring);
        p.rings.push(p.ring);

        p.tl.to(p.ring.rotation, 4, {x: Math.PI, y: 2 * Math.PI, ease: Expo.easeInOut}, 0.2 * i);
    }
};

p.render = function () {
    requestAnimationFrame(p.render);
    p.renderer.render(p.scene, p.camera);
};

p.onMouseMove = function (e) {
    if (!p.mouseDown) {
        return;
    }

    e.preventDefault();

    var deltaX = e.clientX - p.mouseX,
        deltaY = e.clientY - p.mouseY;
    p.mouseX = e.clientX;
    p.mouseY = e.clientY;
    p.rotateScene(deltaX, deltaY);
}

p.onMouseDown = function (e) {
    e.preventDefault();

    p.mouseDown = true;
    p.mouseX = e.clientX;
    p.mouseY = e.clientY;
}

p.onMouseUp = function (e) {
    e.preventDefault();

    p.mouseDown = false;
}

p.rotateScene = function (deltaX, deltaY) {
    p.scene.rotation.y += deltaX / 100;
    p.scene.rotation.x += deltaY / 100;
}

window.Gif = Gif;
var gif = new Gif();