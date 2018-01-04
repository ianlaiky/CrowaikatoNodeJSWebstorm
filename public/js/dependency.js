/**
 * Created by LI YUANXIN on 12/06/2017.
 */





 /**
  * RUN YOUR APPLICATION
 */
$(function() {
	setTimeout(run, 0);
});





/**
 * Variables declaration
 * Starts HERE
 */
var dependencySphereArr = [];
var raycaster, mouse, INTERSECTED;
var mockId = 0;
var timeArr = [];
var continueRotateFD = true;
var onHoverInOnce = false;
var onHoverOutOnce = false;
var openMenu = false;
var mockData = [];
var camera, sceneGL, sceneCss, rendererGL, rendererCss, controls, graphicContainer, sphereGroup, lineGroup, numGroup;
/**
 * Variables declaration
 * Ends HERE
 */


function menuButonListener(){
	$('.option').click(function(){
	  var buttonId = $(this).attr('id');
		openMenu = true;
	  $('#modal-container').removeAttr('class').addClass(buttonId);
	  $('body').addClass('modal-active');
	});

	$('#modal-container').click(function(){
		openMenu = false;
	  $(this).addClass('out');
	  $('body').removeClass('modal-active');
	});

	var lockyBtn = document.getElementById( 'lockyBtn' );
	lockyBtn.addEventListener( 'click', function ( event ) {
		 window.location.href = '/page/lockyAnalysis'
	}, false );

	var processBtn = document.getElementById( 'processBtn' );
	processBtn.addEventListener( 'click', function ( event ) {
		 window.location.href = '/page/process'
	}, false );

	var fileBtn = document.getElementById( 'fileBtn' );
	fileBtn.addEventListener( 'click', function ( event ) {
		 window.location.href = '/page/fileActivity'
	}, false );
}


/**
 * App's initialization related METHODS
 * Starts HERE
 */
function run() {
  init();
	animate();
	launchPage();
	testingD();
	menuButonListener();
}

function launchPage() {
	var $preload = $('#preload');
	var $main = $('.main');
	displayDateTime();
	$preload.hide().remove();
	$main.show('slow');
}

function displayDateTime(){
	var update = function () {
	    var date = moment().format('Do MMMM	YYYY');
			// var time = moment().format('h:mm:ss a');
			$('.date').text(date);
			// $('.time').text(',  ' +  time);
	};
    update();
    setInterval(update, 1000);
}
/**
 * App's initialization related METHODS
 * Ends HERE
 */





/**
 * WEBGL related METHODS
 * Starts HERE
 */
function init() {
	/** Camera */
	// Initialize THREEjs Camera
	camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 100000);
	camera.position.z = 3000;

	/** Get ID of div */
	graphicContainer = document.getElementById('graphic-container');

	/** Renderers */
	// GL Renderer
	rendererGL = new THREE.WebGLRenderer({ antialias: true });
	rendererGL.setSize(window.innerWidth, window.innerHeight);
	rendererGL.setClearColor( 0x000000, 1);
	rendererGL.domElement.style.zIndex = 5;
	graphicContainer.appendChild(rendererGL.domElement);

	// CSS3D Renderer
	rendererCss = new THREE.CSS3DRenderer();
	rendererCss.setSize(window.innerWidth, window.innerHeight);
	rendererCss.domElement.style.position = 'absolute';
	rendererCss.domElement.style.top = 0;
	rendererCss.domElement.className = 'cssRenderer';
	graphicContainer.appendChild(rendererCss.domElement);

	/** Scenes */
	// GL Scene
	sceneGL = new THREE.Scene();

	// CSS3D Scene
	sceneCss = new THREE.Scene();

	/** Groups */
	sphereGroup = new THREE.Group();
	lineGroup = new THREE.Group();
	numGroup = new THREE.Group();

	/** Camera Controls */
	controls = new THREE.TrackballControls(camera);
	controls.rotateSpeed = 3.5;
	controls.minDistance = 5;
	controls.maxDistance = 50000;



	/** Mouse Listener */
	mouse = new THREE.Vector2();
	raycaster = new THREE.Raycaster();
	window.addEventListener( 'mousemove', onMouseMove, false );
	window.addEventListener( 'mousedown', onMouseDown, false );

	/**  Resize renderers when page is changed */
	window.addEventListener( 'resize', onWindowResize, false );
}

function render() {
	rendererCss.render(sceneCss, camera);
	rendererGL.render(sceneGL, camera);
}

function animate() {
	requestAnimationFrame(animate);
	render();
	TWEEN.update();
	controls.update();
	if(continueRotateFD){
		sphereGroup.rotation.x += 0.001;
	  sphereGroup.rotation.y += 0.001;
	  sphereGroup.rotation.z += 0.001;

		lineGroup.rotation.x += 0.001;
		lineGroup.rotation.y += 0.001;
		lineGroup.rotation.z += 0.001;

		numGroup.rotation.x += 0.001;
		numGroup.rotation.y += 0.001;
		numGroup.rotation.z += 0.001;

		for ( var i = numGroup.children.length - 1; i >= 0; i--) {
			var num = numGroup.children[i];

			num.rotation.x -= 0;
	 		num.rotation.y = 0;
			num.rotation.z = 0;
		}
	}
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	rendererGL.setSize( window.innerWidth, window.innerHeight );
	rendererCss.setSize( window.innerWidth, window.innerHeight );

	render();
}

function onMouseDown(event) {
		setUpRaycaster(event);
		var intersects = raycaster.intersectObjects(sphereGroup.children);
		if (intersects.length > 0) {
			INTERSECTED = intersects[0].object;
		}
		else {
			INTERSECTED = null;
		}
}

function onMouseMove(event) {
	setUpRaycaster(event);
	var intersects = raycaster.intersectObjects(sphereGroup.children);
	if(!openMenu){
		if ( intersects.length > 0 ) {
			if(!onHoverInOnce){
				INTERSECTED = intersects[0].object;
				showBottomPanelDOM(getdependency(INTERSECTED.id).data);
		    INTERSECTED.material.opacity = 0.3;
				continueRotateFD = true;
				onHoverInOnce = true;
				onHoverOutOnce = false;
			}
		}
		else {
			if(!onHoverOutOnce){
				for(var i = 0; i < sphereGroup.children.length; i++) {
					try {
						sphereGroup.children[i].material.opacity = 0.2;
					}
					catch(err) {}
				}
				hideBottomPanelDOM();
				continueRotateFD = true;
				onHoverInOnce = false;
				onHoverOutOnce = true;
				INTERSECTED = null;
			}
		}
	}
}

function setUpRaycaster(event) {
	event.preventDefault();
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	raycaster.setFromCamera( mouse, camera );
}
/**
 * WEBGL related METHODS
 * Ends HERE
 */





/**
 * dependency DOM related METHODS
 * Starts HERE
 */
function hideBottomPanelDOM(){
	 $('#pBottomPanel').hide('fast');
}

function showBottomPanelDOM(data) {
	var selecteddependencySpan = $('.pSelectedDependency');
	var cpuSpan = $('.pCpu');
	var memorySpan = $('.pMemory');
	var descriptionSpan = $('.pDescription');

	selecteddependencySpan.text(data.selecteddependency);
	cpuSpan.text(data.cpu);
	memorySpan.text(data.memory);
	descriptionSpan.text(data.description);
	$('#pBottomPanel').show('fast');
}

function getdependency(id) {
	var dependency;
	for(var i = 0; i < dependencySphereArr.length; i ++){
		if(dependencySphereArr[i].obj.id == id){
			dependency = dependencySphereArr[i];
			break;
		}
	}
	return dependency;
}
/**
 * dependency DOM related METHODS
 * Ends HERE
 */





/**
 * Drawing related METHODS
 * Starts HERE
 */
function drawSphereObject(radius){
	var random = getRandomPosition();
	var randomX = random.x;
	var randomY = random.y;
	var randomZ = random.z;
	var dependencySphere = new DependencySphere();
  var geometry = new THREE.SphereGeometry(radius, 20, 20);
  var material = new THREE.MeshBasicMaterial( {
      transparent : true,
      opacity     : 0.2,
      wireframe : true,
      color: 0x00ffff
  });
  sphere = new THREE.Mesh(geometry, material);
  sphere.position.needsUpdate = true;
  sphere.position.set(randomX, randomY, randomZ);
	sphere.geometry.dynamic = true;
	dependencySphere.constructor(sphere.id,sphere,mockData[mockId],randomX, randomY, randomZ);
	dependencySphereArr.push(dependencySphere);
  sphereGroup.add(sphere);
  sceneGL.add(sphereGroup);
	mockId++;
}

function drawNumText(position, rotation){
	var t = 2
  var loader = new THREE.FontLoader();
 	loader.load( '/font/helvetiker_regular.typeface.json', function ( font ) {
	  var textGeometry = new THREE.TextGeometry( t, {
	     font: font,
	     size: 300,
	     height: 10,
	     curveSegments: 12,
	     bevelThickness: 1,
	     bevelSize: 1,
	     bevelEnabled: true

	  });

		THREE.GeometryUtils.center( textGeometry );
	  var textMaterial = new THREE.MeshBasicMaterial(
	    { color: 0xffffff }
	  );
	  var mesh = new THREE.Mesh( textGeometry, textMaterial );
		mesh.position.copy(position);
		mesh.rotation.set(0, 0, 0);
    mesh.__dirtyRotation = true;
		console.log(mesh);

		numGroup.add(mesh);
		sceneGL.add(numGroup);
		setTimeout(function(){
			numGroup.remove(mesh);
		},2000)
	});
}

function drawDependencyLine(){
	for(var i = 1, len = dependencySphereArr.length; i<len; i++){
		addLineAndAnimateSphere(dependencySphereArr[0],dependencySphereArr[i]);
	}
}

function drawAllNumText(){
	for (var i = sphereGroup.children.length - 1; i >= 0; i--) {
	    var position = sphereGroup.children[i].position;
			var rotation = sphereGroup.children[i].rotation;
			drawNumText(position,rotation);
	}
}

function getRadius(size){
	var radius = 0;
	switch (size) {
    case 'small':
        radius = 200
        break;
    case 'medium':
        radius = 350;
        break;
    case 'large':
        radius = 500;
	 }
	 return radius;
}

function tco(f) {
    var value;
    var active = false;
    var accumulated = [];

    return function accumulator() {
        accumulated.push(arguments);

        if (!active) {
            active = true;

            while (accumulated.length) {
                value = f.apply(this, accumulated.shift());
            }

            active = false;

            return value;
        }
    }
}

var getRandomPosition = tco(function(){
	var vector = new THREE.Vector3(0, 0, 0);
	var x = Math.random() * 6000 - 3000;
  var y = Math.random() * 6000 - 3000;
  var z = Math.random() * 6000 - 3000;
	console.log(x);
	var randomVector = new THREE.Vector3(x, y, z);
	if(dependencySphereArr.length > 0){
		for(var i = 0; i < dependencySphereArr.length; i++){
			var existingVector = new THREE.Vector3(dependencySphereArr[i].positionX, dependencySphereArr[i].positionY, dependencySphereArr[i].positionZ);
			var minDistance = getRadius('large') * 4;
			//var maxDistance = getRadius('large') * 6;
			var calculatedDistance = randomVector.distanceTo(existingVector);
			console.log(existingVector);
			console.log(randomVector);
			console.log('Your distance: ' + calculatedDistance);
			console.log('Your min distance: ' + minDistance);
			if( calculatedDistance < minDistance ) {
				return getRandomPosition();
			}
		}
		return vector = randomVector;
	}else{
		return vector;
	}
});

function addLineAndAnimateSphere(from, to){
	var connectionFrom = from;
	var connectionTo = to;
	var radiusFrom = connectionFrom.obj.geometry.parameters.radius;
	var radiusTo = connectionTo.obj.geometry.parameters.radius;
	var vary = 1;
	let x, y, z;
	let eX, eY, eZ;

	x = connectionFrom.positionX;
	y = connectionFrom.positionY;
	z = connectionFrom.positionZ;

	eX = connectionTo.positionX;
	eY = connectionTo.positionY + radiusTo;
	eZ = connectionTo.positionZ;

	var controlPoint= ((connectionTo.positionY * vary + connectionFrom.positionY * vary	) / 2);

	var curve = new THREE.QuadraticBezierCurve3(
		new THREE.Vector3(x, y, z),
		new THREE.Vector3(vary*1.5, controlPoint, vary*1.5),
		new THREE.Vector3(eX, eY, eZ)
	);
	var curvePoint = curve.getPoints(500);
	var numPoints = curvePoint.length;
	var geometryL = new THREE.BufferGeometry();
	var materialL = new THREE.LineDashedMaterial( {
		color: 0xf4e542,
		dashSize: 1,
		gapSize: 1e10
	});
	var positions = new Float32Array(numPoints*3);
	var lineDistances = new Float32Array(numPoints*1);
	geometryL.addAttribute( 'position', new THREE.BufferAttribute(positions, 3));
	geometryL.addAttribute( 'lineDistance', new THREE.BufferAttribute(lineDistances, 1) );
	for (var i = 0, index = 0;  i < numPoints; i ++, index += 3 ) {
		positions[index] = curvePoint[i].x;
		positions[index+1] = curvePoint[i].y;
		positions[index+2] = curvePoint[i].z;
		if ( i > 0 ) {
			lineDistances[i] = lineDistances[i-1] + curvePoint[i-1].distanceTo(curvePoint[i]);
		}
	}
	var lineLength = lineDistances[numPoints-1];
	var line = new THREE.Line(geometryL, materialL);

	lineGroup.add(line);
	sceneGL.add(lineGroup);

	var geometryS = new THREE.SphereGeometry(15, 20, 20);
  var materialS = new THREE.MeshBasicMaterial( {
      transparent : true,
      opacity     : 0,
      color: 0xf4e542
  });
  var animateSphere = new THREE.Mesh(geometryS, materialS);
  animateSphere.position.set(x,y,z);
	lineGroup.add(animateSphere);

	addLineToSphereOrigin(connectionFrom, line);
	addSphereOnLineAnimationTime();
	animateLineConnection(line, lineLength, timeArr.length-1 , animateSphere, curve);
}

function addLineToSphereOrigin(origin, line){
	for(var i = 0; i < dependencySphereArr.length; i ++){
		if(	origin.positionX == dependencySphereArr[i].positionX && origin.positionY == dependencySphereArr[i].positionY
			&& origin.positionZ == dependencySphereArr[i].positionZ){
				dependencySphereArr[i].lines.push(line);
			}
	}
}

function addSphereOnLineAnimationTime() {
	var obj ={}
	obj.t = 0;
	timeArr.push(obj);
}

function animateLineConnection(line, lineLength, timeArrNum, animateSphere,curve){
	var fraction = 0;
	var interval = setInterval(function() {
		if(fraction < 0.99) {
			fraction += 0.01;
			line.material.dashSize = fraction * lineLength;
		}
		else{
			clearInterval(interval);
			setInterval(function(){
				 animateSphere.material.opacity = 0.9;
				 animateSphereOnLine(animateSphere, timeArrNum, curve);
			}, 1);
		}
	}, 20);
}

function animateSphereOnLine(animateSphere, timeArrNum, curve) {
		var axis = new THREE.Vector3( );
		var up = new THREE.Vector3( 0, 1, 0 );
    animateSphere.position.copy( curve.getPointAt(timeArr[timeArrNum].t) );
    var tangent = curve.getTangentAt(timeArr[timeArrNum].t).normalize();
    axis.crossVectors(up, tangent).normalize();
    var radians = Math.acos(up.dot(tangent));
    animateSphere.quaternion.setFromAxisAngle(axis, radians);
    timeArr[timeArrNum].t = (timeArr[timeArrNum].t >= 1) ? 0 : timeArr[timeArrNum].t += 0.002;
}

function clearLine(){
	for (var i = lineGroup.children.length - 1; i >= 0; i--) {
	    lineGroup.remove(lineGroup.children[i]);
	}
}

function clearSphere(){
	for (var i = sphereGroup.children.length - 1; i >= 0; i--) {
	    sphereGroup.remove(sphereGroup.children[i]);
	}
}
/**
 * Drawing related METHODS
 * Ends HERE
 */





/**
 * Transform animation related METHODS
 * Start HERE
 */
function transformSphereSize(index, size){
	var radiusC;

	switch (size) {
    case 'small':
        radiusC = 200
        break;
    case 'medium':
        radiusC = 350;
        break;
    case 'large':
        radiusC = 500;
	 }

	var scale = radiusC * 0.005;
	toX = scale;
	toY = scale;
	toZ = scale;
	var sphere = dependencySphereArr[index].obj;
	sphere.geometry.parameters.radius = radiusC;
	var newSphere = dependencySphereArr[index];

	var count = 0;
	new TWEEN.Tween(sphere.scale)
		.to( { x: toX, y: toY, z: toZ }, 6000 )
		.onUpdate(function() {
			if(sphere.scale.x > scale){
				count++;
				if(count==1){
					clearLine();
					drawDependencyLine();
				}
			}
		})
		.easing(TWEEN.Easing.Back.Out)
		.start()
		.onComplete(function() {
		});
}

function transformLineColor(index){
	for(var i = 0; i<dependencySphereArr[index].lines.length; i++  ){
		var line = dependencySphereArr[index].lines[i];
		new TWEEN.Tween(line.material.color)
			.to( { r: 255, g: 0, b: 0 }, 10000 )
			.onUpdate(function() {
			})
			.easing(TWEEN.Easing.Quadratic.Out)
			.start()
			.onComplete(function() {
			});
	}
}
/**
 * Transform animation related METHODS
 * Ends HERE
 */





/**
 * Testing related METHODS
 * Starts HERE
 */
function testingD(){
 createMockDataD();

 drawSphereObject(getRadius('large'));
 drawSphereObject(getRadius('large'));
 drawSphereObject(getRadius('large'));
 drawSphereObject(getRadius('large'));
 drawSphereObject(getRadius('large'));

 drawSphereObject(getRadius('large'));
 drawSphereObject(getRadius('large'));
 drawSphereObject(getRadius('large'));
 drawSphereObject(getRadius('large'));
 drawSphereObject(getRadius('large'));

 drawDependencyLine();
 // setInterval(function(){
 //  drawAllNumText();
 // },5000);

 setTimeout(function(){
  // transformSphereSize(2,'large');
  // transformSphereSize(3,'medium');
  transformLineColor(0);
 },6000);
}

function createMockDataD() {
	var obj1 = {};
	obj1.selecteddependency='chrome.exe';
	obj1.cpu='01';
	obj1.memory= Number(4098).toLocaleString('en') +'K';
	obj1.description='Google Chrome';

	var obj2 = {};
	obj2.selecteddependency='node.exe';
	obj2.cpu='01';
	obj2.memory= Number(22948).toLocaleString('en') +'K';
	obj2.description='Node.js: Server-side Javascript';


	var obj3 = {};
	obj3.selecteddependency='explorer.exe';
	obj3.cpu='00';
	obj3.memory= Number(8320).toLocaleString('en') +'K';
	obj3.description='Window Explorer';

	mockData.push(obj1);
	mockData.push(obj2);
	mockData.push(obj3);
}
/**
 * Testing related METHODS
 * Ends HERE
 */
