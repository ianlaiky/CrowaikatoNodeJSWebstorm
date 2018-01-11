init = () => {
    let scene = new THREE.Scene();
    let gui = new dat.GUI();

    let enableFog = false;

    if (enableFog) {
        scene.fog = new THREE.FogExp2(0xffffff, 0.2);
    }



    let plane = getPlane(30);
    let directionalLight = getDirectionalLight(1);
    let sphere = getSphere(0.05);
    let boxGrid = getBoxGrid(10,1.5);
    let helper = new THREE.CameraHelper(directionalLight.shadow.camera);

    plane.name = 'plane-1';


    plane.rotation.x = Math.PI / 2;
    directionalLight.position.y = 4;
    directionalLight.add(sphere);
    directionalLight.intensity = 2;

    gui.add(directionalLight, 'intensity', 0, 10);
    gui.add(directionalLight.position, 'x', 0, 20);
    gui.add(directionalLight.position, 'y', 0, 20);
    gui.add(directionalLight.position, 'z', 0, 20);
    // gui.add(directionalLight,'penumbra',0,1);

    scene.add(plane);
    scene.add(directionalLight);
    scene.add(boxGrid);
    scene.add(helper);

    let camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight, 1, 1000
    );

    camera.position.x = 1;
    camera.position.y = 2;
    camera.position.z = 5;

    camera.lookAt(new THREE.Vector3(0, 0, 0));


    let renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor('rgb(120,120,120)');
    document.getElementById('webgl').appendChild(renderer.domElement);

    let controls = new THREE.OrbitControls(camera, renderer.domElement);


    update(renderer, scene, camera, controls);

    return scene;
};

getBox = (w, h, d) => {
    let geometry = new THREE.BoxGeometry(w, h, d);

    let material = new THREE.MeshPhongMaterial({
        color: 'rgb(120,120,120)'
    });
    let mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;

    return mesh;
};


getSphere = (size) => {
    let geometry = new THREE.SphereGeometry(size, 24, 24);

    let material = new THREE.MeshBasicMaterial({
        color: 'rgb(255,255,255)'
    });
    let mesh = new THREE.Mesh(geometry, material);

    return mesh;
};

getPlane = (size) => {
    let geometry = new THREE.PlaneGeometry(size, size);

    let material = new THREE.MeshPhongMaterial({
        color: 'rgb(120,120,120)',
        side: THREE.DoubleSide
    });
    let mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    return mesh;
};

getPointLight = (intensity) => {
    let light = new THREE.PointLight(0xffffff, intensity);
    light.castShadow = true;
    return light;
};

getSpotLight = (intensity) => {
    let light = new THREE.SpotLight(0xffffff, intensity);
    light.castShadow = true;

    light.shadow.bias=0.001;
    light.shadow.mapSize.width=2048;
    light.shadow.mapSize.height=2048;
    return light;
};

getDirectionalLight = (intensity) => {
    let light = new THREE.DirectionalLight(0xffffff, intensity);
    light.castShadow = true;

 light.shadow.camera.left=-5;
 light.shadow.camera.bottom=-5;
 light.shadow.camera.right=-5;
    return light;
};
getBoxGrid = (amount, separationMultiplier)=>{
    console.log("RUN 1");
    let group = new THREE.Group();
    for(let i=0;i<amount;i++){
        let obj = getBox(1,1,1);
        obj.position.x=i*separationMultiplier;
        obj.position.y=obj.geometry.parameters.height/2;
        group.add(obj);
        for(let j=1;j<amount;j++){
            console.log("rimmm");
            let obj = getBox(1,1,1);
            obj.position.x=i*separationMultiplier;
            obj.position.y=obj.geometry.parameters.height/2;
            obj.position.z=j*separationMultiplier;
            group.add(obj);
        }
    }
    group.position.x=-(separationMultiplier*(amount-1))/2;
    group.position.z=-(separationMultiplier*(amount-1))/2;

    return group;

};

update = (renderer, scene, camera, controls) => {

    renderer.render(
        scene, camera
    );
    controls.update();

    requestAnimationFrame(() => {
        // console.log("er");
        update(renderer, scene, camera, controls);
    });

};


let scene = init();
