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
var fileArr = [];
var fileGroupTempArr = [];
var userList = [];
var fileId = 0;
var currentView = 'helix';
var continueRotateFA = false;
var clickable = true;
var viewMoreInfo = false;
var clearHighlightAndZoom = false;
var highlightZoomTimeoutArr = [];
var currentDrillDown = '';
var selectedFileObj = {};
var dependencyBtn = { dOpen: false, dRead: false, dWrite: false, dDelete: false };
var queue = [];
var queueId = 0;
var queueReady = true;
var queuePause = false;
var BACKGROUND_COLOR = 'rgba(0,0,205,' + ( Math.random() * 0 + 0.15  ) + ')';
var targets = { sphere: [], helix: [], grid: [] };
var TRANSFORM_DURATION = 2000;
var firstTransform = true;
var controlsOriginal = {};
var audioIsStopped = true;
var aud = new Audio('/audio/d1.mp3');

var dependencySphereArr = [];
var generatedVectorArr = [];
var currentDep = 'direct';
var raycaster, mouse, INTERSECTED;
var dependencyId = 0;
var timeArr = [];
var continueRotateFD = true;
var onHoverInOnce = false;
var onHoverOutOnce = false;
var stopHover = true;
var menuIsOpen = false;
var clearingDepCountInterval;
var currentDependencyType = null;
var currentDependencyTimestamp = null;
var previousDepencency = [];
var currentDependency = [];
var unfoundDependency = [];
var newDependency = [];
var originalDependency = [];
var allDependency = [];
var totalDepCountTemp = 0;
var newDepCountTemp = 0;
var unfoundDepCountTemp = 0;
var camera, sceneGL, sceneCss, rendererGL, rendererCss, controls, graphicContainerA, graphicContainerB, fileGroup, sphereGroup, lineGroup;
var firstLaunch = true;
var socket;
var scanId = 0;

Array.prototype.uniqueObjectArray = function(field) {
		var processed = [];
		for (var i=this.length-1; i>=0; i--) {
				if (this[i].hasOwnProperty(field)) {
						if (processed.indexOf(this[i][field])<0) {
								processed.push(this[i][field]);
						} else {
								this.splice(i, 1);
						}
				}
		}
}

Number.prototype.zeroPad = function() {
   return ('0'+this).slice(-2);
};
/**
 * Variables declaration
 * Ends HERE
 */





/********************************* File Activities Visualisation( anna <3 ) *********************************/



/**
 * App's initialization related METHODS
 * Starts HERE
 */
function run() {
  init();
	testingA();
  initSocket(); /* UNCOMMENT fileArr.push(file) above addToQueue line in initSocket, COMMENT fileArr.push(file) inside addFile() method */
 	animate();
	runGenerationAtBackground();
}

function launchPage() {
  var $preload = $('#preload');
 	var $main = $('.main');
	var $activityVisualisation = $('.activityVisualisation');
	displayDateTime();
 	$preload.hide().remove();
 	$main.show('slow');
	$activityVisualisation.show('slow');
}
/**
 * App's initialization related METHODS
 * Ends HERE
 */





/**
 * TOP panel related MEHODS
 * Starts HERE
 */
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

function menuButonListener(){
 	$('.option').click(function(){
 	  var buttonId = $(this).attr('id');
 		menuIsOpen = true;
 	  $('#modal-container').removeAttr('class').addClass(buttonId);
 	  $('body').addClass('modal-active');
 	});

 	$('#modal-container').click(function(){
 		menuIsOpen = false;
 	  $(this).addClass('out');
 	  $('body').removeClass('modal-active');
 	});

 	var lockyBtn = document.getElementById( 'lockyBtn' );
 	lockyBtn.addEventListener( 'click', function ( event ) {
 		 window.location.href = '/lockyAnalysis'
 	}, false );

 	var processBtn = document.getElementById( 'processBtn' );
 	processBtn.addEventListener( 'click', function ( event ) {
 		 window.location.href = '/process'
 	}, false );

 	var fileBtn = document.getElementById( 'fileBtn' );
 	fileBtn.addEventListener( 'click', function ( event ) {
 		 window.location.href = '/fileActivity'
 	}, false );
}
/**
 * TOP panel related MEHODS
 * Ends HERE
 */





/**
 * Audio related MEHODS
 * Starts HERE
 */
 function playAlertAudio(){
 		aud.play();
 }

 function stopAlertAudio(){
	 	aud.pause();
	 	aud.currentTime = 0.0;
 }
 /**
 * Audio related MEHODS
 * Starts HERE
 */





/**
 * RESTFUL API related METHODS
 * Starts HERE
 */
// getting FILE data
function getDataByName(name, option, performAction){
 		$.ajax({
 			type: 'GET',
 			contentType: 'application/json',
 			url: '/api/files/byName/' + name,
 			success: function(data) {
				console.log('receiving data...[data length] is ' + data.length);
			  var REFERENCE = moment();
			  var TODAY = REFERENCE.clone();
				var YESTERDAY = REFERENCE.clone().subtract(1, 'days').startOf('day');
				var WEEK = REFERENCE.clone().subtract(7, 'days').startOf('day');
				var MONTH = REFERENCE.clone().subtract(30, 'days').startOf('day');
				data = data.filter(function(returnableObjects){
					return returnableObjects.filename == name;
				});

				switch (option) {
				    case 'actionNum':
								data = data.length;
				        break;
				    case 'today':
								data = data.filter(function(returnableObjects){
									return moment(returnableObjects.timestamp).isSame(TODAY, 'day');
								});
								data.sort(function(a, b) {
								    return parseFloat(b.timestamp) - parseFloat(a.timestamp);
								});
				        break;
				    case 'yesterday':
								data = data.filter(function(returnableObjects){
				        	return moment(returnableObjects.timestamp).isSame(YESTERDAY, 'day');
								});
								data.sort(function(a, b) {
								    return parseFloat(a.timestamp) - parseFloat(b.timestamp);
								});
								break;
						case 'week':
								data = data.filter(function(returnableObjects){
									return moment(returnableObjects.timestamp).isAfter(WEEK);
								});
								data.sort(function(a, b) {
								    return parseFloat(a.timestamp) - parseFloat(b.timestamp);
								});
								break;
						case 'month':
								data = data.filter(function(returnableObjects){
									return moment(returnableObjects.timestamp).isAfter(MONTH);
								});
								data.sort(function(a, b) {
								    return parseFloat(a.timestamp) - parseFloat(b.timestamp);
								});
								break;
				}

				if(performAction != undefined) performAction(data);
 			},
 			error: function(err) {
 				alert('no data received...');
 			}
 		});
}

// getting DIRECT DEPENDENCY data
function getDataByNameAndType(name, type, performAction){
 		$.ajax({
 			type: 'GET',
 			contentType: 'application/json',
 			url: '/api/directDependencies/byNameAndType/' + name + '/' + type,
 			success: function(data) {
				console.log('receiving data...[data length] is ' + data.length);

				if(performAction != undefined) performAction(data);
 			},
 			error: function(err) {
 				alert('no data received...');
 			}
 		});
}

// getting INDIRECT DEPENDENCY data
function getData(performAction){
 		$.ajax({
 			type: 'GET',
 			contentType: 'application/json',
 			url: '/api/indirectDependencies',
 			success: function(data) {
				console.log('receiving data...[data length] is ' + data.length);

				if(performAction != undefined) performAction(data);
 			},
 			error: function(err) {
 				alert('no data received...');
 			}
 		});
}
/**
 * RESTFUL API related METHODS
 * EndsHERE
 */





/**
 * LIVE STREAM related METHODS
 * Starts HERE
 */
function initSocket() {
 	socket = io();
 	socket.emit('scanFile');

 	socket.on('scanFile', function(data) {

		if(Number.isInteger(data)){
			if (scanId != data){
				 scanId = data;
				 console.log(data);
				 socket.emit('streamFile', scanId);
			}
		}

 	});

 	socket.on('streamFile', function(data) {
		streamAction(data);
 	});

	function streamAction(data){
		var fileArray = JSON.parse(data).fileActivities;
		var fileArrayClone = JSON.parse(data).fileActivities;

		if(firstLaunch){
			launchPage();
			continueRotateFA = true;
		}

		if(fileArray != undefined || fileArray != null){
			if(!checkUserExists(fileArray[0].hostId,fileArray[0].username)){
				addNewUser(fileArray[0].hostId, fileArray[0].username);
			}else{
				extendTenMinToUser(fileArray[0].hostId, fileArray[0].username);
			}
		}

 		try {
			fileArray.uniqueObjectArray('filepath');
			for (var i = 0; i < fileArray.length; i++) {
 				var fileNameFull = fileArray[i].filename;
				var fileName = fileArray[i].filename.split('.')[0];
				var filePath = fileArray[i].filepath;
 				var fileFormat = fileArray[i].format;
				var score = fileArray[i].score;
				var file = new FileObj(fileNameFull, fileName, fileFormat, filePath, score);
				if(firstLaunch){
					fileArr.push(file);
				}else{
					if(fileArr.findIndex(x => x.filePath==filePath) == -1){
							firstTransform = false;
							fileArr.push(file);
							addToQueue('add', file);
							console.log('File Not Exists: '+ fileNameFull);
					}else{
						console.log('File Exists');
					}
				}
 			}

			if(currentDrillDown != ''){
				fileArrayClone = fileArrayClone.filter(function(returnableObjects){
					return returnableObjects.filename == currentDrillDown;
				});
				console.log(fileArrayClone);
				updateFileInfoToDOM(fileArrayClone);
				updateFileActionToDOM(fileArrayClone);
				if(currentDependencyType != null){
					if(currentDep == 'direct'){
						addDirectDependency(currentDependencyType);
					}else if(currentDep == 'indirect'){
						addIndirectDependency();
					}
				}else{
					console.log(currentDependencyType);
				}
			}

			if(firstLaunch){
				addAllFiles();
				firstLaunch = false;
			}

 		}
 		catch(err) {}
	}

}
/**
 * LIVE STREAM related METHODS
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
	graphicContainerCSS = document.getElementById('fileActivity-graphicContainer');
	graphicContainerGL = document.getElementById('fileDependency-graphicContainer');

	/** Renderers */
	// GL Renderer
	rendererGL = new THREE.WebGLRenderer({ antialias: true });
	rendererGL.setSize(window.innerWidth, window.innerHeight);
	rendererGL.setClearColor( 0x000000, 1);
	rendererGL.domElement.style.zIndex = 5;
	graphicContainerGL.appendChild(rendererGL.domElement);

	// CSS3D Renderer
	rendererCss = new THREE.CSS3DRenderer();
	rendererCss.setSize(window.innerWidth, window.innerHeight);
	rendererCss.domElement.style.position = 'absolute';
	rendererCss.domElement.style.top = 0;
	rendererCss.domElement.className = 'cssRenderer';
	graphicContainerCSS.appendChild(rendererCss.domElement);

	/** Scenes */
	// GL Scene
	sceneGL = new THREE.Scene();

	// CSS3D Scene
	sceneCss = new THREE.Scene();

	/** Groups */
	fileGroup = new THREE.Group();
	fileGroupTemp = new THREE.Group();
	sphereGroup = new THREE.Group();
	lineGroup = new THREE.Group();

	/** Camera Controls */
	controls = new THREE.TrackballControls(camera);
	controls.rotateSpeed = 3.5;
	controls.minDistance = 5;
	controls.maxDistance = 50000;
	controlsOriginal.position = controls.object.position.clone();
	controlsOriginal.up = controls.object.up.clone();

	/** Button Listener */
	addButtonListener();
	filesOnClick();
 	faButtonHighlightOnClick();
	depButtonHighlightOnClick();
	menuButonListener();

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

	if(!queuePause){
		runQueue();
	}

	if(continueRotateFA){
		if(currentView == 'sphere' || currentView == 'helix'){
			fileGroup.rotation.y += 0.001;
		}else{
			if(fileGroup.rotation.y > 0){
				fileGroup.rotation.y -= fileGroup.rotation.y *0.1;
			}
		}
	}else{
		if(fileGroup.rotation.y > 0){
			fileGroup.rotation.y -= fileGroup.rotation.y *0.1;
		}
	}

	if(continueRotateFD){
		sphereGroup.rotation.x += 0.001;
	  sphereGroup.rotation.y += 0.001;
	  sphereGroup.rotation.z += 0.001;

		lineGroup.rotation.x += 0.001;
		lineGroup.rotation.y += 0.001;
		lineGroup.rotation.z += 0.001;
	}
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	rendererGL.setSize( window.innerWidth, window.innerHeight );
	rendererCss.setSize( window.innerWidth, window.innerHeight );

	render();
}
/**
 * WEBGL related METHODS
 * Ends HERE
 */





/**
 * DRAWING related METHODS
 * Starts HERE
 */
function drawFileObject(fileName, fileFormat, filePath){
   var element = document.createElement( 'div' );
   element.className = 'element';
   element.style.backgroundColor = BACKGROUND_COLOR;

 	var name = document.createElement( 'div' );
   name.className = 'name';
   name.textContent = fileName;
   element.appendChild( name );

   var format = document.createElement( 'div' );
   format.className = 'format';
   format.textContent = fileFormat;
   element.appendChild( format );

   var path = document.createElement( 'div' );
   path.className = 'path';
   path.innerHTML =  filePath;
   element.appendChild( path );

   element.setAttribute('data-id', fileId);

   var object = new THREE.CSS3DObject( element );
   object.position.x = Math.random() * 4000 - 2000;
   object.position.y = Math.random() * 4000 - 2000;
   object.position.z = Math.random() * 4000 - 2000;
 	 object.name = fileId;
 	 fileArr[fileId].id = fileId;
   fileArr[fileId].obj = object;
   fileGroup.add(object);
   sceneCss.add(fileGroup);
 	 fileId++;
}
/**
 * DRAWING related METHODS
 * Ends HERE
 */





/**
* USER related METHODS
* Starts HERE
*/
/**
* USER related METHODS
* Starts HERE
*/
function checkUserExists(hostId, username){
	var exists = false;
	for(var i = 0; i < userList.length; i++){
		//if(hostId = userList[i].hostId && username == userList[i].username){
		if(username == userList[i].username){
			exists = true;
			break;
		}
	}
	return exists;
}

function addNewUser(hostId, username){
	var obj = {};
	obj.hostId = hostId;
	obj.username = username;
	obj.timeOut = setTimeout(function(){
		  var element = $("[data-hostId='"+(hostId+username)+"']");
			element.addClass('mStatus-inactive').removeClass('mStatus-active');
	}, 600000);
	userList.push(obj);
	appendNewUserToDOM(hostId, username);
}

function appendNewUserToDOM(hostId, username){
	var wrapper = $('.monitor-content-style');
	var line =  $('<div class="row monitor-line-style"/>');
	var col1 = $('<div class="col-lg-2"/>');
	var col2 = $('<div class="col-lg-8"/>');
	var col3 = $('<div class="col-lg-2"/>');

	var mNum = $('<div class="mNum"/>');
	var mName = $('<div class="mName"/>');
	var mId = $('<div class="mId"/>');
	var mStatus;

	var span = $('<span/>');

	mNum.text(userList.length.zeroPad());
	mName.text(username);
	mId.text('HOSTID: ');
	span.text(hostId);
	span.appendTo(mId);
	if(firstLaunch){
		mStatus = $('<div class="mStatus mStatus-inactive"/>');
	}else{
		mStatus = $('<div class="mStatus mStatus-active"/>');
	}
	mStatus.attr("data-hostId", (hostId+username));

	mNum.appendTo(col1);
	mName.appendTo(col2);
	mId.appendTo(col2);
	mStatus.appendTo(col3);

	col1.appendTo(line);
	col2.appendTo(line);
	col3.appendTo(line);

	line.appendTo(wrapper);
}

function extendTenMinToUser(hostId, username){
	for(var i = 0; i < userList.length; i++){
		//if(username == userList[i].username){
		if(hostId == userList[i].hostId && username == userList[i].username){
			clearTimeout(userList[i].timeOut);
			var updateElement = $("[data-hostId='"+(hostId+username)+"']");
			updateElement.addClass('mStatus-active').removeClass('mStatus-inactive');
			userList[i].timeOut = setTimeout(function(){
				  var element = $("[data-hostId='"+(hostId+username)+"']");
					element.addClass('mStatus-inactive').removeClass('mStatus-active');
			}, 600000);
		}
	}
}
/**
 * USER related METHODS
 * Ends HERE
 */
/**
 * USER related METHODS
 * Ends HERE
 */





/**
 * Queue related METHODS
 * Starts HERE
 */
function recurQueueStatusCheck(operation, data, id){
	var interval = setInterval(function() {
		if(!queuePause) {
			clearInterval(interval);
			setTimeout(function() {
				if(!queuePause){
					if(operation == 'add'){
						addFile(data);
					}else if(operation == 'remove'){
						removeFile(data);
					}
					removeQueueLineFromDOM(id);
					queueReady = true;
				}else{
					recurQueueStatusCheck(operation,data,id);
				}
			}, (TRANSFORM_DURATION + 500));
		}
	}, 50);
}

function runQueue(){
	if(queue.length > 0){
		if(queueReady) {
			var operation = queue[0].operation;
			var data = queue[0].data;
			var id = queue[0].queueId;
			queue.splice(0, 1);
			queueReady = false;
			setTimeout(function(){
				if(!queuePause){
					if(operation == 'add'){
						addFile(data);
					}else if(operation == 'remove'){
						removeFile(data);
					}
					removeQueueLineFromDOM(id);
					queueReady = true;
				}else{
					recurQueueStatusCheck(operation,data,id);
				}
			},(TRANSFORM_DURATION + 500));
		}
	}
}

function addToQueue(operation, data){
	appendQueueLineToDOM(operation, data, queueId);
	var obj = {};
	obj.operation = operation;
	obj.data = data;
	obj.queueId = queueId;
	queue.push(obj);
	queueId++;
}

function appendQueueLineToDOM(operation, data, id){
	var wrapper = $('.queue-content-style');
	var line =  $('<div class="row queue-line-style"/>');
	var p1 = $('<div class="line-p1 col-lg-4 col-md-4 col-lg-4 col-xl-4"/>');
	var p2 = $('<div class="line-p2 col-lg-8 col-md-8 col-lg-8 col-xl-8"/>');
	var p1Next = $('<div class="line-p1-next col-lg-4 col-md-4 col-lg-4 col-xl-4"/>');
	var p2Next = $('<div class="line-p2-next col-lg-8 col-md-8 col-lg-8 col-xl-8"/>');
	var fileName = getFileNameFromQueue(operation,data);
	line.attr("data-queueId", id);
	if(id == 0){
		switch (operation) {
		    case 'add':
		        p1Next.text("[ADD]");
		        break;
		    case 'remove':
		        p1Next.text("[REMOVE]");
		        break;
		}
		p2Next.text(fileName);
		p1Next.appendTo(line);
		p2Next.appendTo(line);
	}else{
		switch (operation) {
		    case 'add':
		        p1.text("[ADD]");
		        break;
		    case 'remove':
		        p1.text("[REMOVE]");
		        break;
		}
		p2.text(fileName);
		p1.appendTo(line);
		p2.appendTo(line);
	}
	line.appendTo(wrapper);
}

function removeQueueLineFromDOM(id){
	  var element = $("[data-queueId='"+id+"']");
		var nextElement = $("[data-queueId='"+(id+1)+"']");
		var nextP1 = nextElement.find($(".line-p1"));
		var nextP2 = nextElement.find($(".line-p2"));
		nextP1.removeClass( "line-p1" ).addClass( "line-p1-next" );
		nextP2.removeClass( "line-p2" ).addClass( "line-p2-next" );
		element.hide('slow', function(){ element.remove(); });
}

function getFileNameFromQueue(operation, data){
	if(operation == 'add'){
		return (data.fileName + data.fileFormat);
	}else if(operation == 'remove'){
		for( var i = 0; i < fileArr.length ; i++){
			if(data == fileArr[i].id){
				return (fileArr[i].fileName + fileArr[i].fileFormat);
			}
		}
	}
}
/**
 * Queue related METHODS
 * Ends HERE
 */





/**
 * FILE operation related METHODS
 * Starts HERE
 */
function addAllFiles(){
 	for ( var i = 0; i < fileArr.length; i++ ) {
 	 drawFileObject(fileArr[i].fileName, fileArr[i].fileFormat, fileArr[i].filePath);
  }
   transformCurrentView();
	 checkAllSuspiciousFile();
}

function addFile(file){
	//fileArr.push(file);
	console.log(file.score);
	drawFileObject(file.fileName, file.fileFormat, file.filePath);
	console.log(file.fileName + " is added");
	transformCurrentView();
	checkForSuspiciousFileBy(file.id);
}

function removeFile(id){
	for( var i = 0; i < fileArr.length ; i++){
		if(id == fileArr[i].id){
			console.log(fileArr[i].id + " is removed");
		}
	}
	transformRemove(id, 1000);
}

function checkForSuspiciousFileBy(id){
	for ( var i = 0; i < fileArr.length; i++ ) {
		if(id == fileArr[i].id){
			if(fileArr[i].score > 0){
				hightlightWarning();
				break;
			}
		}
 }
}

function checkAllSuspiciousFile(){
	for ( var i = 0; i < fileArr.length; i++ ) {
			if(fileArr[i].score > 0){
				hightlightWarning();
				break;
			}
	}
}

function hightlightSuspicious(){
	for ( var i = 0; i < fileArr.length; i++ ) {
			if(fileArr[i].score ==  2){
			 highlightAndZoomFile(fileArr[i].id, 'suspicious');
	 	 }
  }
}

function hightlightWarning(){
	for ( var i = 0; i < fileArr.length; i++ ) {
	 	 if(fileArr[i].score > 0){
			 highlightAndZoomFile(fileArr[i].id, 'warning');
		 }
  }
	detectionSplashScreen();
}

function highlightAndZoomFile(id, level){
	queuePause = true;
	setTimeout(function(){
		clearHighlightAndZoom = false;
		var element = $("[data-id='"+id+"']");
		if(level == "suspicious"){
			element.css({"background-color": 'rgba(200,200,10,0.55)'});
		}else if(level == "warning"){
			element.css({"background-color": 'rgba(200,10,10,0.55)'});
		}
		for ( var i = 0; i < fileGroup.children.length; i ++ ) {
			if(id == fileGroup.children[i].name){
				var object = fileGroup.children[i];
					new TWEEN.Tween(object.position)
						.to( { x: object.position.x * 1.2 , y: object.position.y * 1.2, z: object.position.z	* 1.2 }, 1000)
						.onUpdate(function() {
						})
						.easing(TWEEN.Easing.Circular.Out)
						.start()
						.onComplete(function() {
						});
			}
	  }
	},4000);

	highlightZoomTimeoutArr.push(setTimeout(function(){
			for ( var i = 0; i < fileGroup.children.length; i ++ ) {
				if(id == fileGroup.children[i].name){
					var object = fileGroup.children[i];
						new TWEEN.Tween(object.position)
							.to( { x: object.position.x / 1.2 , y: object.position.y / 1.2 , z: object.position.z / 1.2	 }, 1000)
							.onUpdate(function() {
							})
							.easing(TWEEN.Easing.Circular.Out)
							.start()
							.onComplete(function() {
								if(!clearHighlightAndZoom){
									queuePause = false;
									if(!audioIsStopped){
										audioIsStopped = true;
										stopAlertAudio();
									}
								}
							});
				}
		  }
	},8000));
}

function clearHighlighZoomTimeout(){
    for (var i = 0; i < highlightZoomTimeoutArr.length; i++) {
        clearTimeout(highlightZoomTimeoutArr[i]);
    }
		highlightZoomTimeoutArr = [];
}

function highlightFile(id){
  var element = $("[data-id='"+id+"']");
  var item = element.find('.format');

	setTimeout(function(){
    element.fadeOut("slow", function() {
			element.css({
      "background-color": 'rgba(200,10,10,' + ( Math.random() * 0.5 + 0.25 ) + ')'
    	});
    }).fadeIn("slow");
	},4000);

  setTimeout(function(){
    element.fadeOut("slow", function() {
		 	element.css({
       "background-color": BACKGROUND_COLOR
     	});
     }).fadeIn("slow");
	},8000);
}

function detectionSplashScreen(){
	var splashScreen = $('.splashScreen');
	setTimeout(function(){
		if(!viewMoreInfo){
			if(audioIsStopped){
				audioIsStopped = false;
				playAlertAudio();
			}
			clickable = false;
			splashScreen.show("slow");
		}
	},2000);

	setTimeout(function(){
		clickable = true;
		splashScreen.hide("slow");
	},3500);
}
/**
 * File operation related METHODS
 * Ends HERE
 */





/**
 * BUTTON DOM related METHODS
 * Starts HERE
 */
function addButtonListener(){
  var sphereBtn = document.getElementById( 'sphere' );
  sphereBtn.addEventListener( 'click', function ( event ) {
    addSphereForm();
		resetControls(2000);
    currentView = 'sphere';
  }, false );

  var helixBtn = document.getElementById( 'helix' );
  helixBtn.addEventListener( 'click', function ( event ) {
    addHelixForm();
		resetControls(2000);
    currentView = 'helix';
  }, false );

  var gridBtn = document.getElementById( 'grid' );
  gridBtn.addEventListener( 'click', function ( event ) {
    addGridForm();
		resetControls(2000);
    currentView = 'grid';
  }, false );

	var dOpenBtn = document.getElementById( 'dOpen' );
	dOpenBtn.addEventListener( 'click', function ( event ) {
		showDependencyVisualisation(3);
  }, false );

	var dReadBtn = document.getElementById( 'dRead' );
	dReadBtn.addEventListener( 'click', function ( event ) {
		showDependencyVisualisation(5);
  }, false );

	var dWriteBtn = document.getElementById( 'dWrite' );
	dWriteBtn.addEventListener( 'click', function ( event ) {
		showDependencyVisualisation(6);
  }, false );

	var dDeleteBtn = document.getElementById( 'dDelete' );
	dDeleteBtn.addEventListener( 'click', function ( event ) {
		showDependencyVisualisation(12);
  }, false );

	var backBtn = document.getElementById( 'backBtn' );
	backBtn.addEventListener( 'click', function ( event ) {
		hideDependencyVisualisation();
		currentDep = 'direct';
  }, false );

	var directBtn = document.getElementById( 'direct' );
  directBtn.addEventListener( 'click', function ( event ) {
		if(currentDep == 'indirect'){
			clearDependencyMinify();
		}
		currentDep = 'direct';
		addDirectDependency(currentDependencyType);
  }, false );

  var indirectBtn = document.getElementById( 'indirect' );
  indirectBtn.addEventListener( 'click', function ( event ) {
    currentDep = 'indirect';
		clearDependencyMinify();
		addIndirectDependency();
  }, false );
}

function faButtonHighlightOnClick(){
	$('.faButtonGroup').on('click', 'div', function() {
		$(".faButtonGroup div").removeClass('faButtonSelected');
		$(this).addClass('faButtonSelected');
	});
}

function depButtonHighlightOnClick(){
	$('.depButtonGroup').on('click', 'div', function() {
		$(".depButtonGroup div").removeClass('depButtonSelected');
		$(this).addClass('depButtonSelected');
	});
}

function resetDefaultDepButton(){
	$(".depButtonGroup div").removeClass('depButtonSelected');
	$("#direct").addClass('depButtonSelected');
}
/**
 * BUTTON DOM related METHODS
 * Ends HERE
 */





/**
 * FILE DOM related METHODS
 * Starts HERE
 */
function filesOnClick() {
	$('.cssRenderer').on('click', '.element', function () {
			var id = $(this).attr('data-id');
			if(clickable){
				clickable = false;
				if(!viewMoreInfo){
					viewMoreInfo = true;
					selectedFileObj = getFileFromArr(id);
					currentDrillDown = getFileFromArr(id).fileNameFull;
					clearHighlighZoomTimeout();
					clearHighlightAndZoom = true;
					if(!audioIsStopped){
						audioIsStopped = true;
						stopAlertAudio();
					}
					appendFileInfoToDOM(getFileFromArr(id));
					appendFileActionToDOM(getFileFromArr(id));
					hideInitialDOM();
					transformZoomIn(id);
				}else{
					viewMoreInfo = false;
					selectedFileObj = {};
					showInitialDOM();
					transformZoomOut(id);
					clearInterval(clearingDepCountInterval);
				}
			}
  });
}

function getFileFromArr(id){
	for( var i = 0; i < fileArr.length ; i++){
		if(id == fileArr[i].id){
			return fileArr[i];
		}
	}
}

function appendFileInfoToDOM(file){
	var fileNameSpan = $('.fileName');
	var fileFormatSpan = $('.fileFormat');
	var filePathSpan = $('.filePath');
	var actionNumSpan = $('.actionNum');
	getDataByName(file.fileNameFull, 'actionNum', function(data){
		fileNameSpan.text(file.fileName);
		fileFormatSpan.text(file.fileFormat);
		filePathSpan.text(file.filePath);
		actionNumSpan.text(data);
	});
}

function updateFileInfoToDOM(arr){
	if (arr.length != 0) {
		setTimeout(function(){
			checkActionDependency();
		}, 2000);
		$('.actionNum').text(parseInt($('.actionNum').text()) + parseInt(arr.length)).hide().show('slow');

	}
}

function appendFileActionToDOM(file){
	var todayWrapper = $('.todayTable');
	var yesterdayWrapper = $('.yesterdayTable');
	var weekWrapper = $('.weekTable');
	var monthWrapper = $('.monthTable');

	var todayCount = $('.todayCount');
	var yesterdayCount = $('.yesterdayCount');
	var weekCount = $('.weekCount');
	var monthCount = $('.monthCount');

	var row;
	var col1;
	var col2;
	var span;

	getDataByName(file.fileNameFull, 'today', function(data){
		todayCount.text(data.length);
		data.forEach(function (item) {
			row = $('<tr/>');
			col1 = $('<td/>');
			col2 = $('<td/>');
			span = $('<span class="fa-label"/>');
			col1.text(moment(item.timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"));
			span.addClass(SysCall.getLabelCssClass(item.type));
			span.text(SysCall.getKey(item.type));
			col1.appendTo(row);
			span.appendTo(col2);
			col2.appendTo(row);
			row.appendTo(todayWrapper);
		});
	});

	getDataByName(file.fileNameFull, 'yesterday', function(data){
		yesterdayCount.text(data.length);
		data.forEach(function (item) {
			row = $('<tr/>');
			col1 = $('<td/>');
			col2 = $('<td/>');
			span = $('<span class="fa-label"/>');
			col1.text(moment(item.timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"));
			span.addClass(SysCall.getLabelCssClass(item.type));
			span.text(SysCall.getKey(item.type));
			col1.appendTo(row);
			span.appendTo(col2);
			col2.appendTo(row);
			row.appendTo(yesterdayWrapper);
		});
	});

	getDataByName(file.fileNameFull, 'week', function(data){
		weekCount.text(data.length);
		data.forEach(function (item) {
			row = $('<tr/>');
			col1 = $('<td/>');
			col2 = $('<td/>');
			span = $('<span class="fa-label"/>');
			col1.text(moment(item.timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"));
			span.addClass(SysCall.getLabelCssClass(item.type));
			span.text(SysCall.getKey(item.type));
			col1.appendTo(row);
			span.appendTo(col2);
			col2.appendTo(row);
			row.appendTo(weekWrapper);
		});
	});

	getDataByName(file.fileNameFull, 'month', function(data){
		monthCount.text(data.length);
		data.forEach(function (item) {
			row = $('<tr/>');
			col1 = $('<td/>');
			col2 = $('<td/>');
			span = $('<span class="fa-label"/>');
			col1.text(moment(item.timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"));
			span.addClass(SysCall.getLabelCssClass(item.type));
			span.text(SysCall.getKey(item.type));
			col1.appendTo(row);
			span.appendTo(col2);
			col2.appendTo(row);
			row.appendTo(monthWrapper);
		});
	});
}

function updateFileActionToDOM(arr){
	if (arr.length != 0) {
		var todayWrapper = $('.todayTable');
		var weekWrapper = $('.weekTable');
		var monthWrapper = $('.monthTable');

		var todayCount = $('.todayCount');
		var yesterdayCount = $('.yesterdayCount');
		var weekCount = $('.weekCount');
		var monthCount = $('.monthCount');

		var row;
		var col1;
		var col2;
		var span;

		todayCount.text(parseInt($('.todayCount').text()) + parseInt(arr.length)).hide().show('slow');
		weekCount.text(parseInt($('.weekCount').text()) + parseInt(arr.length)).hide().show('slow');
		monthCount.text(parseInt($('.monthCount').text()) + parseInt(arr.length)).hide().show('slow');

		arr.forEach(function (item) {
			row = $('<tr/>');
			col1 = $('<td/>');
			col2 = $('<td/>');
			span = $('<span class="fa-label"/>');
			col1.text(moment(item.timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"));
			span.addClass(SysCall.getLabelCssClass(item.type));
			span.text(SysCall.getKey(item.type));
			col1.appendTo(row);
			span.appendTo(col2);
			col2.appendTo(row);
			row.prependTo(todayWrapper).hide().show('normal');
		});

		arr.forEach(function (item) {
			row = $('<tr/>').hide();
			col1 = $('<td/>');
			col2 = $('<td/>');
			span = $('<span class="fa-label"/>');
			col1.text(moment(item.timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"));
			span.addClass(SysCall.getLabelCssClass(item.type));
			span.text(SysCall.getKey(item.type));
			col1.appendTo(row);
			span.appendTo(col2);
			col2.appendTo(row);
			row.appendTo(weekWrapper).hide().show('normal');
		});

		arr.forEach(function (item) {
			row = $('<tr/>').hide();
			col1 = $('<td/>');
			col2 = $('<td/>');
			span = $('<span class="fa-label"/>');
			col1.text(moment(item.timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"));
			span.addClass(SysCall.getLabelCssClass(item.type));
			span.text(SysCall.getKey(item.type));
			col1.appendTo(row);
			span.appendTo(col2);
			col2.appendTo(row);
			row.appendTo(monthWrapper).hide().show('normal');
		});
	}
}

function emptyFileActionFromDOM(){
	$('.todayTable').empty();
	$('.yesterdayTable').empty();
	$('.weekTable').empty();
	$('.monthTable').empty();
}

function checkActionDependency(){
	getDataByNameAndType(selectedFileObj.fileNameFull, 3, function(data){
		if(data.length > 0){
			dependencyBtn.dOpen = true;
			addActionDependency();
		}
	});

	getDataByNameAndType(selectedFileObj.fileNameFull, 5, function(data){
		if(data.length > 0){
			dependencyBtn.dRead = true;
			addActionDependency();
		}
	});

	getDataByNameAndType(selectedFileObj.fileNameFull, 6, function(data){
		if(data.length > 0){
			dependencyBtn.dWrite = true;
			addActionDependency();
		}
	});

	getDataByNameAndType(selectedFileObj.fileNameFull, 12, function(data){
		if(data.length > 0){
			dependencyBtn.dDelete = true;
			addActionDependency();
		}
	});
}

function addActionDependency(){
	for (var prop in dependencyBtn) {
		if(dependencyBtn.hasOwnProperty(prop)){
			if(dependencyBtn[prop]){
				$("#"+prop).show('slow').css('display', 'flex');;
			}
		}
	}
}

function clearActionDependency(){
	for (var prop in dependencyBtn) {
		if(dependencyBtn.hasOwnProperty(prop)){
			dependencyBtn[prop] = false;
			$("#"+prop).hide();
		}
	}
}

function showInitialDOM(){
	$('#faBottomPanel').show('slow');
	$('#queuePanel').show('slow');
	$('#monitorPanel').show('slow');
}

function hideInitialDOM(){
	$('#faBottomPanel').hide('slow');
	$('#queuePanel').hide('slow');
	$('#monitorPanel').hide('slow');
}

function showDrillDownDOM(){
	$('#faTopPanel').show('slow');
	$('#today').show('slow');
	$('#yesterday').show('slow');
	$('#week').show('slow');
	$('#month').show('slow');
	checkActionDependency();
}

function hideDrillDownDOM(){
	$('#faTopPanel').hide('slow');
	$('#today').hide('slow');
	$('#yesterday').hide('slow');
	$('#week').hide('slow');
	$('#month').hide('slow');
	clearActionDependency();
}

/**
 * FILE DOM related METHODS
 * Ends HERE
 */





/**
 * Visualisation options related METHODS
 * Starts HERE
 */
function transformCurrentView(){
	if(!firstTransform){
		TRANSFORM_DURATION = 1000;
	}
 	  switch (currentView) {
 	    case 'sphere':
 	        addSphereForm();
 	        break;
 	    case 'helix':
 	        addHelixForm();
 	        break;
 	    case 'grid':
 	        addGridForm();
 	        break;
 	  }
}

function addSphereForm(){
   targets.sphere = [];
   var vector = new THREE.Vector3();
   var spherical = new THREE.Spherical();
   for ( var i = 0, l = fileGroup.children.length; i < l; i ++ ) {
		 var radius = 350 + (l* Math.sqrt(l/5));
     var phi = Math.acos( -1 + ( 2 * i ) / l );
     var theta = Math.sqrt( l * Math.PI ) * phi;
     var object = new THREE.Object3D();
     spherical.set( radius, phi, theta );
     object.position.setFromSpherical( spherical );
     vector.copy( object.position ).multiplyScalar(2);
     object.lookAt( vector );
     targets.sphere.push( object );
   }
   transform( targets.sphere, TRANSFORM_DURATION );
}

function addHelixForm(){
  targets.helix = [];
  var vector = new THREE.Vector3();
  var cylindrical = new THREE.Cylindrical();
  for ( var i = 0, l = fileGroup.children.length; i < l; i ++ ) {
     var theta = i * 0.280 + (-0.5);
     var y = - ( i * 12 ) + 650;
     var object = new THREE.Object3D();
     cylindrical.set( 900, theta, y );
     object.position.setFromCylindrical( cylindrical );
     vector.x = object.position.x * 2;
     vector.y = object.position.y;
     vector.z = object.position.z * 2;
     object.lookAt( vector );
     targets.helix.push( object );
  }
  transform( targets.helix, TRANSFORM_DURATION );
}

function addGridForm(){
  targets.grid = [];
  for ( var i = 0; i < fileGroup.children.length; i ++ ) {
     var object = new THREE.Object3D();
     object.position.x = ( ( i % 5 ) * 400 ) - 800;
     object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
     object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;
     targets.grid.push( object );
  }
  transform( targets.grid, TRANSFORM_DURATION );
}
/**
 * Visualisation options related METHODS
 * Ends HERE
*/





/**
 * Transform animation related METHODS
 * Starts HERE
 */
function transform( targets, duration ) {
  for ( var i = 0; i < fileGroup.children.length; i ++ ) {
    var object = fileGroup.children[ i ];
    var target = targets[ i ];
    new TWEEN.Tween( object.position )
      .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
      .easing( TWEEN.Easing.Exponential.InOut )
      .start()
			.onComplete(function() {
			});

    new TWEEN.Tween( object.rotation )
      .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
      .easing( TWEEN.Easing.Exponential.InOut )
      .start();
  }
}

function transformRemove(id) {
  for ( var i = 0; i < fileGroup.children.length; i ++ ) {
		if(id == fileGroup.children[i].name){
			var object = fileGroup.children[i];

			new TWEEN.Tween(object.position)
				.to( { x: 0, y: 0, z: 0 }, TRANSFORM_DURATION/4)
				.onUpdate(function() {
				})
				.easing(TWEEN.Easing.Circular.Out)
				.start()
				.onComplete(function() {
					fileGroup.remove(object);
				  transformCurrentView();
				});
		}
  }
}

function transformZoomIn(id) {
	copyToTempArr();
	for ( var i = 0; i < fileGroup.children.length; i ++ ) {
		if(id == fileGroup.children[i].name){
			var object = fileGroup.children[i];

			if(continueRotateFA){
				continueRotateFA = false;
				controls.enabled = false;
				queuePause = true;
				for (var j = fileGroup.children.length - 1; j >= 0; j--) {
					if(id != fileGroup.children[j].name){
						var other = fileGroup.children[j];
						new TWEEN.Tween(other.rotation)
							.to( { x: object.rotation.x , y: object.rotation.y, z: object.rotation.z }, 1000)
							.easing(TWEEN.Easing.Circular.Out)
							.start();

						new TWEEN.Tween(other.position)
							.to( { x: object.position.x , y: object.position.y, z: object.position.z }, 1000)
							.easing(TWEEN.Easing.Circular.Out)
							.start()
							.onComplete(function() {
								clearAllExceptId(id);
							});
					}
				}
				new TWEEN.Tween(object.scale)
					.to( { x: 3, y: 3, z: 3	 }, 1000)
					.onUpdate(function() {
					})
					.easing(TWEEN.Easing.Circular.Out)
					.start()
					.onComplete(function() {
						clearForm(object, 2000);
					});
			}
		}
  }
}

function transformZoomOut(id) {
	returnAllExceptId(id);
	for ( var i = 0; i < fileGroup.children.length; i ++ ) {
		if(id == fileGroup.children[i].name){
			var object = fileGroup.children[i];
			if(!continueRotateFA){
				continueRotateFA = true;
				controls.enabled = true;
				queuePause = false;
				startFromObjPosition(id, object);
				new TWEEN.Tween(object.scale)
					.to( { x: 1, y: 1, z: 1	 }, 1000)
					.easing(TWEEN.Easing.Circular.Out)
					.start();
					transformCurrentView();
					hideDrillDownDOM();
					emptyFileActionFromDOM();
					currentDrillDown = '';
			}
		}
	}
	setTimeout(function(){
		clickable = true;
	},3500);
}

function resetControls(duration) {
	if(!isEmpty(controlsOriginal)){
		new TWEEN.Tween( controls.object.position )
			.to( { x: controlsOriginal.position.x, y: controlsOriginal.position.y, z: controlsOriginal.position.z }, duration )
			.easing( TWEEN.Easing.Exponential.InOut )
			.start();

		new TWEEN.Tween( controls.object.up )
			.to( { x: controlsOriginal.up.x, y: controlsOriginal.up.y, z: controlsOriginal.up.z }, duration )
			.easing( TWEEN.Easing.Exponential.InOut )
			.start();
	}
}

function clearForm(object, duration){
	new TWEEN.Tween( object.position )
		.to( { x: 0, y: 0, z: 0 }, duration )
		.easing( TWEEN.Easing.Exponential.InOut )
		.start()
		.onComplete(function() {
			clickable = true;
			showDrillDownDOM();
		});

	new TWEEN.Tween( object.rotation )
    .to( { x: 0, y: 0, z: 0 }, duration )
    .easing( TWEEN.Easing.Exponential.InOut )
    .start();

	resetControls(duration);
}

function startFromObjPosition(id, object){
	for ( var i = 0; i < fileGroup.children.length; i ++ ) {
		if(id != fileGroup.children[i].name){
			fileGroup.children[i].position.copy(object.position);
			fileGroup.children[i].rotation.set(object.rotation.x, object.rotation.y, object.rotation.z )
		}
	}
}

function isEmpty(obj) {
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop))
      return false;
  }
  return true;
}

function clearAllExceptId(id){
	for (var i = fileGroup.children.length - 1; i >= 0; i--) {
		if(id != fileGroup.children[i].name){
			fileGroup.remove(fileGroup.children[i]);
		}
	}
}

function returnAllExceptId(id){
	for (var i = 0; i < fileGroupTempArr.length; i++) {
		if(id != fileGroupTempArr[i].name){
			fileGroup.add(fileGroupTempArr[i]);
		}
	}
}

function copyToTempArr(){
	fileGroupTempArr = [];
	for (var i = 0; i < fileGroup.children.length; i++) {
			fileGroupTempArr.push(fileGroup.children[i]);
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
function testingA(){
	//launchPage();
	createMockDataA();
	// addAllFiles();

	var actionNum = Math.floor(Math.random() * 90);
	var newFile1 = new FileObj(actionNum,'orange','.png', 'C:\\share\\YUANXIN\\Pictures');
	var newFile2 = new FileObj(actionNum,'banana','.png', 'C:\\share\\YUANXIN\\Pictures');
	var newFile3 = new FileObj(actionNum,'pear','.png', 'C:\\share\\YUANXIN\\Pictures');
	var newFile4 = new FileObj(actionNum,'grape','.png', 'C:\\share\\YUANXIN\\Pictures');
	var newFile5 = new FileObj(actionNum,'watermelodwadwadawdwadwan','.png', 'C:\\share\\YUANXIN\\Pictures');
	var newFile6 = new FileObj(actionNum,'mango','.png', 'C:\\share\\YUANXIN\\Pictures');

	setTimeout(function(){
		firstTransform = false;
		addToQueue('add', newFile1);
		addToQueue('add', newFile2);

	},1000);

	setTimeout(function(){
		addToQueue('add', newFile3);
		addToQueue('add', newFile4);
		addToQueue('add', newFile5);

	},2000);

	setTimeout(function(){
		addToQueue('add', newFile6);
		// addToQueue('remove', 24);
		// addToQueue('remove', 54);

	},3000);
	//
	// setTimeout(function(){
	// 	addToQueue('remove', 32);
	// 	addToQueue('remove', 104);
	// 	addToQueue('remove', 103);
	// },4000);
	//
	// setTimeout(function(){
	// 	// addToQueue('remove', 1);
	// 	// addToQueue('remove', 2);
	// 	// addToQueue('remove', 3);
	// 	//checkForSuspiciousFile();
	// },5000);
	//
	// // setTimeout(function(){
	// // 	highlightFile(100);
	// // 	highlightFile(66);
	// // 	highlightFile(33);
	// // 	highlightFile(91);
	// // 	highlightFile(19);
	// // 	highlightFile(4);
	// // 	highlightFile(101);
	// // 	highlightFile(41);
	// // 	highlightFile(71);
	// // 	highlightFile(39);
	// // },4000);
	//
	// setTimeout(function(){
	// 	hightlightSuspicious();
	// 	// highlightAndZoomFile(100);
	// 	// highlightAndZoomFile(66);
	// 	// highlightAndZoomFile(33);
	// 	// highlightAndZoomFile(91);
	// 	// highlightAndZoomFile(19);
	// 	// highlightAndZoomFile(4);
	// 	// highlightAndZoomFile(101);
	// 	// highlightAndZoomFile(41);
	// 	// highlightAndZoomFile(71);
	// 	// highlightAndZoomFile(39);
	// },4000);

}

function createMockDataA(){
  fileArr.push(new FileObj("vanVideo.wav","vanVideo", ".wav", "C:\\share\\YUANXIN\\Videos", 0));
  fileArr.push(new FileObj("apple.png","apple", ".png", "C:\\share\\YUANXIN\\Pictures", 0));
  fileArr.push(new FileObj("socialProject.doc","socialProject", ".doc", "C:\\share\\YUANXIN\\Documents", 0));
  fileArr.push(new FileObj("Dont't let me down.mp3","Don't let me down", ".mp3", "C:\\share\\YUANXIN\\Music", 0));
  fileArr.push(new FileObj("Paris.mp3","Paris", ".mp3", "C:\\share\\YUANXIN\\Music", 0));
  fileArr.push(new FileObj("Security Threats.doc","Security Threats", ".doc", "C:\\share\\YUANXIN\\Documents", 0));
 	fileArr.push(new FileObj("Sans Report.pdf","Sans Report", ".pdf", "C:\\share\\YUANXIN\\Documents", 0));
 	fileArr.push(new FileObj("temp note.txt","temp note", ".txt", "C:\\share\\YUANXIN\\Documents", 0));
 	fileArr.push(new FileObj("doctorScript.js","doctorScript", ".js", "C:\\share\\YUANXIN\\fypj\\source\\assets\\js", 0));
 	fileArr.push(new FileObj("main.css","main", ".css", "C:\\share\\YUANXIN\\fypj\\source\\assets\\css", 0));
 	fileArr.push(new FileObj("patientScript.js","patientScript", ".js", "C:\\share\\YUANXIN\\fypj\\source\\assets\\js", 0));
 	fileArr.push(new FileObj("processing.js","processing", ".js", "C:\\share\\YUANXIN\\fypj\\source\\assets\\js", 0));
  fileArr.push(new FileObj("masterPanel.php","masterPanel", ".php", "C:\\share\\YUANXIN\\fypj\\source\\assets\\view", 0));
 	fileArr.push(new FileObj("norisScript.py","norisScript", ".py", "C:\\share\\YUANXIN\\fypj\\source\\assets\\script", 0));
 	fileArr.push(new FileObj("FinalP resentation.ppt","FinalP resentation", ".ppt", "C:\\share\\YUANXIN\\Documents", 0));
 	fileArr.push(new FileObj("Sales Report.xls","Sales Report", ".xls", "C:\\share\\YUANXIN\\Documents", 0));
 	fileArr.push(new FileObj("LightingEffect.flv","LightingEffect", ".flv", "C:\\share\\YUANXIN\\Downloads", 0));
 	fileArr.push(new FileObj("Europe Trip.wmv","Europe Trip", ".wmv", "C:\\share\\YUANXIN\\personal", 0));
 	fileArr.push(new FileObj("Daily Routine.txt","Daily Routine", ".txt", "C:\\share\\YUANXIN\\personal", 0));
 	fileArr.push(new FileObj("Despesito.mp3","Despesito", ".mp3", "C:\\share\\YUANXIN\\Music", 0));
	fileArr.push(new FileObj("aecache.dll","aecache", ".dll", "C:\\Windows\\System32\\aecache.dll", 1));
 	fileArr.push(new FileObj("Bring back the summer.mp3","Bring back the summer", ".mp3", "C:\\share\\YUANXIN\\Music", 0));
 	fileArr.push(new FileObj("StickMan.jpg", "StickMan", ".jpg", "C:\\share\\YUANXIN\\Downloads", 0));
 	fileArr.push(new FileObj("Tiramisu.png","Tiramisu", ".png", "C:\\share\\YUANXIN\\Picture\\CafeFood", 0));
 	fileArr.push(new FileObj("American Cheese Cake.png","American Cheese Cake", ".png", "C:\\share\\YUANXIN\\Picture\\CafeFood", 0));
 	fileArr.push(new FileObj("Orea Cheese Cake.png","Orea Cheese Cake", ".png", "C:\\share\\YUANXIN\\Picture\\CafeFood", 0));
 	fileArr.push(new FileObj("Long Black.jpg","Long Black", ".jpg", "C:\\share\\YUANXIN\\Picture\\CafeFood", 0));
 	fileArr.push(new FileObj("Flat White.png","Flat White", ".png", "C:\\share\\YUANXIN\\Picture\\CafeFood", 0));
  fileArr.push(new FileObj("Blueberry Muffin.jpg","Blueberry Muffin", ".jpg", "C:\\share\\YUANXIN\\Picture\\CafeFood", 0));
 	fileArr.push(new FileObj("Waterfall.jpeg","Waterfall", ".jpeg", "C:\\share\\YUANXIN\\Picture\\WallPaper", 0));
 	fileArr.push(new FileObj("Sunset.mp3","Sunset", ".mp3", "C:\\share\\YUANXIN\\Picture\\WallPaper", 0));
  fileArr.push(new FileObj("Mobile Threats.pdf","Mobile Threats", ".pdf", "C:\\share\\YUANXIN\\Downloads", 0));
 	fileArr.push(new FileObj("Car Model.pdf","Car Model", ".psd", "C:\\share\\YUANXIN\\photoshop\\assets", 0));
 	fileArr.push(new FileObj("Company Logo.svg","Company Logo", ".svg", "C:\\share\\YUANXIN\\Downloads", 0));
 	fileArr.push(new FileObj("Gannt Chart.xls","Gannt Chart", ".xls", "C:\\share\\YUANXIN\\Documents", 0));
	fileArr.push(new FileObj("atiicdxx.dat","atiicdxx", ".dat", "C:\\Windows\\System32\\atiicdxx.dat", 1));
 	fileArr.push(new FileObj("Project Plan.xls","Project Plan", "xls", "C:\\share\\YUANXIN\\fypj\\docs", 0));
 	fileArr.push(new FileObj("Transformer.mp4","Transformer", ".mp4", "C:\\share\\YUANXIN\\Videos", 0));
 	fileArr.push(new FileObj("hospitalDB.sql","hospitalDB", ".sql", "C:\\share\\YUANXIN\\fypj\\db", 0));
 	fileArr.push(new FileObj("cafeApp.apk","cafeApp", ".apk", "C:\\share\\YUANXIN\\fypj", 0));
 	fileArr.push(new FileObj("Animated Man.gif","Animated Man", ".gif", "C:\\share\\YUANXIN\\Pictures", 0));
 	fileArr.push(new FileObj("index.aspx","index", ".aspx", "C:\\share\\YUANXIN\\fypj\\source", 0));
 	fileArr.push(new FileObj("homePanel.html","homePanel", ".html", "C:\\share\\YUANXIN\\fypj\\source\\assets\\template", 0));
 	fileArr.push(new FileObj("subPanel.html","subPanel", ".html", "C:\\share\\YUANXIN\\fypj\\source\\assets\\template", 0));
 	fileArr.push(new FileObj("kaniSource.rss","kaniSource", ".rss", "C:\\share\\YUANXIN\\fypj\\other", 0));
 	fileArr.push(new FileObj("Application Icon.ico","Application Icon", ".ico", "C:\\share\\YUANXIN\\fypj\\img", 0));
 	fileArr.push(new FileObj("config.xml","config", ".xml", "C:\\share\\YUANXIN\\fypj", 0));
 	fileArr.push(new FileObj("Daily Routine.txt","Daily Routine", ".txt ", "C:\\share\\YUANXIN\\personal", 0));
 	fileArr.push(new FileObj("Hop Loop.avi","Hop Loop", ".avi", "C:\\share\\YUANXIN\\Music", 0));
 	fileArr.push(new FileObj("Exam Notes.txt","Exam Notes", ".txt", "C:\\share\\YUANXIN\\Documents", 0));
 	fileArr.push(new FileObj("appoinmentInfo.php","appoinmentInfo", ".php", "C:\\share\\YUANXIN\\fypj\\source\\assets\\view", 0));
 	fileArr.push(new FileObj("Signature.pdf","Signature", ".pdf", "C:\\share\\YUANXIN\\Downloads", 0));
 	fileArr.push(new FileObj("Interim Report.docs","Interim Report", ".docs", "C:\\share\\YUANXIN\\Documents", 0));
 	fileArr.push(new FileObj("Shared Proposal.docs","Shared Proposal", ".docs", "C:\\share\\YUANXIN\\Documents", 0));
  fileArr.push(new FileObj("Custom Ribbon.ai","Custom Ribbon", ".ai", "C:\\share\\illustrator\\assets", 0));
	fileArr.push(new FileObj("ActionCenterCPL.dll","ActionCenterCPL", ".dll", "C:\\Windows\\System32\\ActionCenterCPL.dll", 1));
 	fileArr.push(new FileObj("Something just like this.mp3","Something just like this", ".mp3", "C:\\share\\YUANXIN\\Music", 0));
 	fileArr.push(new FileObj("rootScript.bin","rootScript", ".bin", "C:\\share\\YUANXIN\\fypj\\bin", 0));
 	fileArr.push(new FileObj("fypjProject.zip","fypjProject", ".zip", "C:\\share\\YUANXIN\\fypj", 0));
 	fileArr.push(new FileObj("clikable.ogg","clikable", ".ogg", "C:\\share\\YUANXIN\\Music\\audioEffect", 0));
 	fileArr.push(new FileObj("Far Ancient.wma","Far Ancient", ".wma", "C:\\share\\YUANXIN\\Music\\audioEffect", 0));
 	fileArr.push(new FileObj("Ressurection Volume 1.cda","Ressurection Volume 1", ".cda", "C:\\share\\YUANXIN\\Music\\audioEffect", 0));
 	fileArr.push(new FileObj("Weekly Task.key","Weekly Task", ".key", "C:\\share\\YUANXIN\\Documents\\Key Note", 0));
	fileArr.push(new FileObj("agilevpn.sys","agilevpn", ".sys", "C:\\Windows\\System32\\drivers\\agilevpn.sys", 1));
 	fileArr.push(new FileObj("Currency Convertor.java","Currency Convertor", ".java", "C:\\share\\YUANXIN\\RookieProj", 0));
  fileArr.push(new FileObj("AK47.png","AK47", ".png", "C:\\share\\YUANXIN\\Downloads", 0));
 	fileArr.push(new FileObj("sphereTool.jar","sphereTool", ".jar", "C:\\share\\YUANXIN\\RookieProj\\lib", 0));
 	fileArr.push(new FileObj("Daily Routine.txt","Daily Routine", ".txt", "C:\\share\\YUANXIN\\personal", 0));
 	fileArr.push(new FileObj("Disk Optimization.wsf","Disk Optimization", ".wsf", "C:\\share\\YUANXIN\\Demo", 0));
 	fileArr.push(new FileObj("portionMapping.bmp","portionMapping", ".bmp", "C:\\share\\YUANXIN\\RookieProj\\other", 0));
 	fileArr.push(new FileObj("SoundWave.dll","SoundWave", ".dll", "C:\\Users\\Public\\Roaming", 0));
 	fileArr.push(new FileObj("Trailer Audio.wmv","Trailer Audio", ".wmv", "C:\\share\\YUANXIN\\Downloads", 0));
 	fileArr.push(new FileObj("Ronaldo.png","Ronaldo", ".png", "C:\\share\\YUANXIN\\Downloads", 0));
 	fileArr.push(new FileObj("Lebron.jpg","Lebron", ".jpg", "C:\\share\\YUANXIN\\Downloads", 0));
 	fileArr.push(new FileObj("PreLoad.flv","PreLoad", ".flv", "C:\\share\\YUANXIN\\Downloads", 0));
 	fileArr.push(new FileObj("Diabetes Examine.doc","Diabetes Examine", ".doc", "C:\\share\\YUANXIN\\personal", 0));
 	fileArr.push(new FileObj("Communication Barrier.doc","Communication Barrier", ".doc ", "C:\\share\\YUANXIN\\personal", 0));
 	fileArr.push(new FileObj("Environmental.doc","Environmental", ".doc", "C:\\share\\YUANXIN\\personal", 0));
 	fileArr.push(new FileObj("ShaMorpha.dll","ShaMorpha", ".dll", "C:\\Users\\Public\\vatring", 0));
 	fileArr.push(new FileObj("ShaConfig.cfg","ShaConfig", ".cfg", "C:\\Users\\Public\\vatring", 0));
 	fileArr.push(new FileObj("scriptingDump.dmp","scriptingDump", ".dmp ", "C:\\share\\YUANXIN\\Documents\\Dump", 0));
 	fileArr.push(new FileObj("FinalP resentation.ppt","FinalP resentation", ".ppt", "C:\\share\\YUANXIN\\Documents", 0));
 	fileArr.push(new FileObj("Indoor Game.rm","Indoor Game", ".rm", "C:\\share\\YUANXIN\\Videos", 0));
 	fileArr.push(new FileObj("Lecture1.pdf","Lecture1", ".pdf", "C:\\share\\YUANXIN\\Downloads", 0));
 	fileArr.push(new FileObj("Tutorial1.rtf","Tutorial1", ".rtf", "C:\\share\\YUANXIN\\Downloads", 0));
 	fileArr.push(new FileObj("ToRemember.txt","ToRemember", ".txt", "C:\\share\\YUANXIN\\personal", 0));
 	fileArr.push(new FileObj("Direction Board.psd","Direction Board", ".psd ", "C:\\share\\YUANXIN\\photoshop\\assets", 0));
 	fileArr.push(new FileObj("Rigno.ico","Rigno", ".ico", "C:\\share\\YUANXIN\\ooadp", 0));
 	fileArr.push(new FileObj("Ronaldo.rss","Ronaldo", ".rss", "C:\\share\\YUANXIN\\ooadp", 0));
	fileArr.push(new FileObj("adsldpc.dll.mui","adsldpc", ".mui", "C:\\Windows\System32\\en-US\\adsldpc.dll.mui", 1));
 	fileArr.push(new FileObj("main.js","main", ".js", "C:\\share\\YUANXIN\\ooadp\\js", 0));
 	fileArr.push(new FileObj("style.css","style", ".css", "C:\\share\\YUANXIN\\ooadp\\style", 0));
 	fileArr.push(new FileObj("flowControl.py","flowControl", ".py", "C:\\share\\YUANXIN\\ooadp\\executable", 0));
 	fileArr.push(new FileObj("index.html","index", ".html ", "C:\\share\\YUANXIN\\ooadp\\template", 0));
 	fileArr.push(new FileObj("controller.js","controller", ".js", "C:\\share\\YUANXIN\\ooadp\\js", 0));
 	fileArr.push(new FileObj("error.html","error", ".html", "C:\\Users\\Public\\ooadp\\template", 0));
  fileArr.push(new FileObj("homeView.jsp","homeView", ".jsp", "C:\\Users\\Public\\ooadp\\view", 0));
 	fileArr.push(new FileObj("directFlow.cgi","directFlow", ".cgi", "C:\\share\\YUANXIN\\ooadp\\perl", 0));
 	fileArr.push(new FileObj("alternateFlow.cgi","alternateFlow", ".cgi", "C:\\share\\YUANXIN\\Documents", 0));
 	fileArr.push(new FileObj("Proceed.aspx","Proceed", ".aspx ", "C:\\share\\YUANXIN\\ooadp\\vs", 0));
	fileArr.push(new FileObj("aticaldd64.dll","aticaldd64", ".dll", "C:\\Windows\\System32\\aticaldd64.dll", 1));
 	fileArr.push(new FileObj("New roman.tff","New roman", ".ttf  ", "C:\\share\\YUANXIN\\ooadp\\fonts", 0));
 	fileArr.push(new FileObj("wave.db","wave", ".db", "C:\\share\\YUANXIN\\ooadp\\db", 0));
 	fileArr.push(new FileObj("SpeakerDoe.csv","SpeakerDoe", ".csv", "C:\\share\\YUANXIN\\Downloads", 0));
 	fileArr.push(new FileObj("Person A.psd","Person A", ".psd ", "C:\\share\\YUANXIN\\photoshop\\assets", 0));
 	fileArr.push(new FileObj("ooadpProj.rar","ooadpProj", ".rar", "C:\\share\\YUANXIN\\ooadp", 0));
 	fileArr.push(new FileObj("hover.ogg","hover", ".ogg", "C:\\share\\YUANXIN\\Music\\audioEffect", 0));
 	fileArr.push(new FileObj("angularjs.zip","angularjs", ".zip", "C:\\share\\YUANXIN\\Downloads", 0));
	fileArr.push(new FileObj("ctrl2cap.nt5.sys","ctrl2cap", ".sys", "C:\\Windows\\System32\\ctrl2cap.nt5.sys", 1));
 	fileArr.push(new FileObj("drivePhoto.7z","drivePhoto", ".7z ", "C:\\share\\YUANXIN\\Downloads", 0));
 	fileArr.push(new FileObj("ionic.zip","ionic", ".zip", "C:\\share\\YUANXIN\\Downloads", 0));
 	fileArr.push(new FileObj("robot.ai","robot", ".ai", "C:\\share\\illustrator\\assets", 0));


 }
 /**
  * Testing related METHODS
  * Ends HERE
 */
/**
 * Testing related METHODS
 * Ends HERE
 */




















/********************************* File Dependencies Visualisation( dora <3 ) *********************************/



/**
 * WEBGL related METHODS
 * Starts HERE
 */
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
	if(!stopHover){
		if(!menuIsOpen){
			if ( intersects.length > 0 ) {
				if(!onHoverInOnce){
					INTERSECTED = intersects[0].object;
					showBottomPanelDOM(getDependency(INTERSECTED.id).data);
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
function showDependencyVisualisation(type){
	resetDefaultDepButton();
	controls.enabled = true
	stopHover = false;
	$('.dependencyVisualisation').show('slow');
	$('.activityVisualisation').hide('slow');
	clearInterval(clearingDepCountInterval);
	addDirectDependency(type);
	$('head title', window.parent.document).text('Dependency');
}

function hideDependencyVisualisation(){
	controls.enabled = false;
	stopHover = true;
	resetControls(2000);
	$('.dependencyVisualisation').hide('slow');
	$('.activityVisualisation').show('slow');
	clearDependency();
	$('head title', window.parent.document).text('File Activity');
}

function showDirectDepInfo(){
	clearInterval(clearingDepCountInterval);
	$('#direct-header').show();
	$('#indirect-header').hide();
	$('.dependency-content-counter').show();
}

function showIndirectDepInfo(){
	clearInterval(clearingDepCountInterval);
	$('#direct-header').hide();
	$('#indirect-header').show();
	$('.dependency-content-counter').hide();
}

function hideBottomPanelDOM(){
	 $('#pBottomPanel').hide('fast');
}

function showBottomPanelDOM(data) {
	var pVersion = $('.pVersion');
	var pFileName = $('.pFileName');
	var pFileFormat = $('.pFileFormat');
	var pFilePath = $('.pFilePath');
	var pProcessId = $('.pProcessId');
	var pHostId = $('.pHostId');
	var pPlatform = $('.pPlatform');
	var pDependencyOf = $('.pDependencyOf');

	var pTotalDependency= $('.pTotalDependency');

	if(data.processId == undefined || data.processId == null){
		pFileName.text(data.fileNameFull);
		pFileFormat.text(data.fileFormat);
		pFilePath.text(data.filePath);
		pTotalDependency.text(allDependency.length);

		$('#pBottomPanel-a1').hide();
		$('#pBottomPanel-a2').hide();
		$('#pBottomPanel-b1').show();
	}else{
		pFileName.text(data.fileNameFull);
		pFileFormat.text(data.fileFormat);
		pFilePath.text(data.filePath);
		pVersion.text(data.version);

		pProcessId.text(data.processId);
		pHostId.text(data.hostId);
		pPlatform.text(PlatformOS.getKey(data.platform));
		pDependencyOf.text(selectedFileObj.fileNameFull);

		$('#pBottomPanel-b1').hide();
		$('#pBottomPanel-a1').show();
		$('#pBottomPanel-a2').show();
	}

	$('#pBottomPanel').show('fast');
}

function getDependency(id) {
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
 * DEPENDENCY operation related METHODS
 * Starts HERE
 */
function addDirectDependency(type) {
	showDirectDepInfo();
	getDataByNameAndType(selectedFileObj.fileNameFull, type, function(data){
		console.log('1st DATA LOAD');
		console.log(data[0]);
		console.log('2nd DATA LOAD');
		console.log(data[1]);
		if(data.length > 1){
			if(!allDependency.length){
				clearDepCount();
				currentDependencyType = type;
				if(moment(data[0].timestamp) > moment(data[1].timestamp)){
					currentDependencyTimestamp = data[0].timestamp;
					currentDependency = data[0].dependencies;
					previousDepencency = data[1].dependencies;
				}else{
					currentDependencyTimestamp = data[1].timestamp;
					previousDepencency = data[0].dependencies;
					currentDependency = data[1].dependencies;
				}

				// currentDependency.uniqueObjectArray('filepath');
				// previousDepencency.uniqueObjectArray('filepath');

				unfoundDependency = previousDepencency.filter(function(a){
						return currentDependency.filter(function(b){
								return b.filename == a.filename
						}).length == 0
				});

				newDependency = currentDependency.filter(function(a){
						return previousDepencency.filter(function(b){
								return b.filename == a.filename
						}).length == 0
				});

				originalDependency = previousDepencency.filter(function(a){
						return unfoundDependency.filter(function(b){
								return b.filename == a.filename
						}).length == 0
				});

				allDependency = [].concat(originalDependency, unfoundDependency, newDependency);
				console.log(allDependency);
				logDependency(unfoundDependency, newDependency, originalDependency, allDependency, previousDepencency, currentDependency);
				drawSphereObject(getRadius('large'), selectedFileObj);
				startDrawing(allDependency, originalDependency, unfoundDependency, newDependency);

			}else{
				console.log("Ready to enter real time[1]");
				var latestDependecyData = getLatestDependencyData(data[0], data[1]);
				if(latestDependecyData != null){
					console.log("Ready to enter real time[2]");
					currentDependencyTimestamp = latestDependecyData.timestamp;
					var latestDependecy = latestDependecyData.dependencies;
					// latestDependecy.uniqueObjectArray('filepath');
					console.log(latestDependecy);
					console.log(allDependency);


					unfoundDependency = allDependency.filter(function(a){
							return latestDependecy.filter(function(b){
									return b.filename == a.filename
							}).length == 0
					});

					newDependency = latestDependecy.filter(function(a){
							return allDependency.filter(function(b){
									return b.filename == a.filename
							}).length == 0
					});

					var latestNewAndUnfoundDependency = [].concat(unfoundDependency, newDependency);

					originalDependency = allDependency.filter(function(a){
							return latestNewAndUnfoundDependency.filter(function(b){
									return b.filename == a.filename
							}).length == 0
					});

					allDependency = allDependency.concat(newDependency);
					console.log(newDependency);
					console.log(unfoundDependency);
					console.log(originalDependency);
					console.log(allDependency);

					startDrawing(newDependency, originalDependency, unfoundDependency, newDependency);
				}
			}
		}else{
			if(currentDependencyType == null){
				currentDependencyType = type;
				currentDependencyTimestamp = data[0].timestamp;
				allDependency = data[0].dependencies;//.uniqueObjectArray('filepath')
				logDependency(unfoundDependency, newDependency, originalDependency, allDependency, previousDepencency, currentDependency);
				drawSphereObject(getRadius('large'), selectedFileObj);
				startDrawing(allDependency, originalDependency, unfoundDependency, newDependency);
			}
		}
	});
}

function clearDepCount(){
	$('.newDep').text(0);
	$('.unfoundDep').text(0);
	newDepCountTemp = 0;
	unfoundDepCountTemp = 0;
}

function addIndirectDependency(){
	showIndirectDepInfo();
	getData(function(data){
		console.log('DATA LOAD');
		console.log(data);
		if(currentDependencyTimestamp == null){
			currentDependencyTimestamp = data.timestamp;
			allDependency = data.dependencies;
			startDrawing(allDependency, originalDependency, unfoundDependency, newDependency);
		}else if(data.timestamp != currentDependencyTimestamp){
			currentDependencyTimestamp = data.timestamp;
			clearDependencyMinifyX();
			allDependency = data.dependencies;
			startDrawing(allDependency, originalDependency, unfoundDependency, newDependency);
		}
	});
}

function logDependency(unfoundDependency, newDependency, originalDependency, allDependency, previousDepencency, currentDependency){
	console.log('unfoundDependency');
	console.log(unfoundDependency);
	console.log('newDependency');
	console.log(newDependency);
	console.log('originalDependency');
	console.log(originalDependency);
	console.log('allDependency');
	console.log(allDependency);
	console.log('previousDepencency');
	console.log(previousDepencency);
	console.log('currentDependency');
	console.log(currentDependency);
}

function startDrawing(arrToDraw, originalDependency, unfoundDependency, newDependency){

	if(arrToDraw.length){
		arrToDraw.forEach(function (item) {
			var data = {};
			data.fileNameFull = item.filename.split('.')[0];
			data.filePath = item.filepath;
			data.fileFormat = item.format;
			data.processId = item.processId;
			data.hostId = item.hostId;
			data.platform = item.platform;
			data.version = item.version;
			data.dependencyOf = selectedFileObj.fileNameFull;
			if(currentDep == 'direct'){
				drawSphereObject(getRadius('large'), data);
			}else if(currentDep == 'indirect'){
				drawSphereObject(getRadius('small'), data);
			}
		});
		appendTotalDepToDom(allDependency.length);
	}

	if(currentDep == 'direct'){
		setTimeout(function(){
			if(allDependency.length){
				highlightDependency(originalDependency, unfoundDependency, newDependency);
			}
		},5000);
	}
}

function getLatestDependencyData(dataOne, dataTwo){
	if(moment(dataOne.timestamp) > moment(currentDependencyTimestamp)){
		return dataOne;
	}else if(moment(dataTwo.timestamp) > moment(currentDependencyTimestamp)){
		return dataTwo;
	}else{
		return null;
	}
}

function clearDependency(){
	currentDependencyType = null;
	currentDependencyTimestamp = null;
	dependencySphereArr = [];
	dependencyId = 0;
	timeArr = [];
	clearLine();
	clearSphere();
	previousDepencency = [];
	currentDependency = [];
	unfoundDependency = [];
	newDependency = [];
	originalDependency = [];
	allDependency = [];
	totalDepCountTemp = 0;
	newDepCountTemp = 0;
	unfoundDepCountTemp = 0;
	clearingDepCountInterval = setInterval(function(){
		$('.totalDep').text(0);
		$('.newDep').text(0);
		$('.unfoundDep').text(0);
	 }, 100);
}

function clearDependencyMinify(){
	currentDependencyTimestamp = null;
	dependencySphereArr = [];
	dependencyId = 0;
	timeArr = [];
	clearLine();
	clearSphere();
	previousDepencency = [];
	currentDependency = [];
	unfoundDependency = [];
	newDependency = [];
	originalDependency = [];
	allDependency = [];
	totalDepCountTemp = 0;
	newDepCountTemp = 0;
	unfoundDepCountTemp = 0;
	clearingDepCountInterval = setInterval(function(){
		$('.totalDep').text(0);
		$('.newDep').text(0);
		$('.unfoundDep').text(0);
	 }, 100);
}

function clearDependencyMinifyX(){
	clearSphere();
	dependencySphereArr = [];
	dependencyId = 0;
}

function highlightDependency(originalDependency, unfoundDependency, newDependency){
	if(unfoundDependency.length){
			appendUnfoundDepToDom(unfoundDependency.length);
	}else{
		appendUnfoundDepToDom(0);
	}
	if(newDependency.length){
			appendNewDepToDOM(newDependency.length);
	}else{
		appendNewDepToDOM(0);
	}

  if(unfoundDependency.length > 0){
		for(var i = 0; i < dependencySphereArr.length; i++){
			unfoundDependency.forEach(function (item) {
				if(dependencySphereArr[i].data.filePath == item.filepath){
					transformLineSphereColor(i, 'unfound');
				}
			});
		}
  }
  if(newDependency.length > 0){
		for(var i = 0; i < dependencySphereArr.length; i++){
			newDependency.forEach(function (item) {
				if(dependencySphereArr[i].data.filePath == item.filepath){
					transformLineSphereColor(i, 'new');
				}
			});
		}
  }
	if(originalDependency.length > 0){
		for(var i = 0; i < dependencySphereArr.length; i++){
			originalDependency.forEach(function (item) {
				if(dependencySphereArr[i].data.filePath == item.filepath){
					transformLineSphereColor(i, 'original');
				}
			});
		}
  }
}
/**
 * DEPENDENCY operation related METHODS
 * Ends HERE
 */





/**
 * DEPENDENCY DOM related METHODS
 * Starts HERE
 */
function appendTotalDepToDom(value){
	$('.totalDep')
  .prop('number', totalDepCountTemp)
  .animateNumber(
    {
      number: value
    },
    Math.sqrt(value)*1000
  );
	totalDepCountTemp = value;
}

function appendUnfoundDepToDom(value){
	$('.unfoundDep')
	.prop('number', unfoundDepCountTemp)
	.animateNumber(
		{
			number: value
		},
		Math.sqrt(value)*1000
	);
	unfoundDepCountTemp = value;
}

function appendNewDepToDOM(value){
	$('.newDep')
	.prop('number', newDepCountTemp)
	.animateNumber(
		{
			number: value
		},
		Math.sqrt(value)*1000
	);
	newDepCountTemp = value;
}
/**
 * DEPENDENCY DOM related METHODS
 * Ends HERE
 */





/**
 * Drawing related METHODS
 * Starts HERE
 */
function drawSphereObject(radius, data){
		var random = getRandomPosition();
		var randomPosition = generatedVectorArr[dependencyId];
		var	x = randomPosition.x;
		var	y = randomPosition.y;
		var	z = randomPosition.z;
		var dependencySphere = new DependencySphere();
	  var geometry = new THREE.SphereGeometry(radius, 20, 20);
	  var material = new THREE.MeshBasicMaterial( {
			wireframe:true,
			transparent: true,
			opacity:0.2,
			color:0x00ffff
	  });
	  var sphere = new THREE.Mesh(geometry, material);
	  sphere.position.needsUpdate = true;
	  sphere.position.set(x, y, z);
		sphere.geometry.dynamic = true;
		sphere.name = data.filePath;
		//console.log(sphere);
		dependencySphere.constructor(dependencyId, sphere, data, x, y, z);
		dependencySphereArr.push(dependencySphere);
	  sphereGroup.add(sphere);
	  sceneGL.add(sphereGroup);
		dependencyId++;
		if(currentDep == 'direct'){
			drawNewDependencyLine();
		}
}

function drawNewDependencyLine(){
	if(dependencySphereArr.length > 1){
		addLineAndAnimateSphere(dependencySphereArr[0],dependencySphereArr[dependencySphereArr.length-1]);
	}
}

function runGenerationAtBackground(){
	var genRamPos = setInterval(function(){
		if(generatedVectorArr.length < 1000){
			generateRandomPosition();
		}else{
			clearInterval(genRamPos);
		}
	},1);
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
	var randomVector = new THREE.Vector3(x, y, z);
	if(dependencySphereArr.length > 0){
		for(var i = 0; i < dependencySphereArr.length; i++){
			var existingVector = new THREE.Vector3(dependencySphereArr[i].positionX, dependencySphereArr[i].positionY, dependencySphereArr[i].positionZ);
			var minDistance = getRadius('large') * 4;
			var calculatedDistance = randomVector.distanceTo(existingVector);
			if( calculatedDistance < minDistance ) {
				return getRandomPosition();
			}
		}
		return vector = randomVector;
	}else{
		return vector;
	}
});

function generateRandomPosition(){
		var vector = new THREE.Vector3(0, 0, 0);
		var x = Math.random() * 6000 - 3000;
	  var y = Math.random() * 6000 - 3000;
	  var z = Math.random() * 6000 - 3000;
		var randomVector = new THREE.Vector3(x, y, z);
		if(generatedVectorArr.length > 0 ){
			for(var i = 0; i < generatedVectorArr.length; i++){
				var existingVector = new THREE.Vector3(generatedVectorArr[i].positionX, generatedVectorArr[i].positionY, generatedVectorArr[i].positionZ);
				var minDistance = getRadius('large') * 4;
				var calculatedDistance = randomVector.distanceTo(existingVector);
				if( calculatedDistance < minDistance ) {
					return;
				}else{
					generatedVectorArr.push(randomVector);
					return;
				}
			}
		}else{
			generatedVectorArr.push(vector);
		}
}

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
	dependencySphereArr[to.id].lines.push(line);

	addSphereOnLineAnimationTime();
	animateLineConnection(line, lineLength, timeArr.length-1 , animateSphere, curve);
}

function addSphereOnLineAnimationTime() {
	var obj ={}
	obj.t = 0;
	timeArr.push(obj);
}

function animateLineConnection(line, lineLength, timeArrNum, animateSphere,curve){
	var fraction = 0;
	var intervalF = setInterval(function() {
		if(fraction < 0.99) {
			fraction += 0.01;
			line.material.dashSize = fraction * lineLength;
		}
		else{
			clearInterval(intervalF);
			var intervalT = setInterval(function(){
				if(dependencySphereArr.length > 1 && currentDep == 'direct'){
					animateSphere.material.opacity = 0.9;
 				 animateSphereOnLine(animateSphere, timeArrNum, curve);
			 }else{
				 clearInterval(intervalT);
			 }
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

function transformLineSphereColor(index, state){
	var rr;
	var gg;
	var bb;

	switch (state) {
			case 'new':
					rr = 0;
					gg = 255;
					bb = 0;
					break;
			case 'unfound':
					rr = 255;
					gg = 0;
					bb = 0;
					break;
			case 'original':
					rr = 0;
					gg = 255;
					bb = 255;
	}

 	for(var i = 0; i<dependencySphereArr[index].lines.length; i++  ){
 		var line = dependencySphereArr[index].lines[i];
		var sphere = dependencySphereArr[index].obj;
 		new TWEEN.Tween(line.material.color)
 			.to( { r: rr, g: gg, b: bb }, 3000 )
 			.onUpdate(function() {
 			})
 			.easing(TWEEN.Easing.Quadratic.Out)
 			.start()
 			.onComplete(function() {
				new TWEEN.Tween(sphere.material.color)
			 		.to( { r: rr, g: gg, b: bb }, 2000 )
			 		.onUpdate(function() {
			 		})
			 		.easing(TWEEN.Easing.Quadratic.Out)
			 		.start()
			 		.onComplete(function() {
			 		});
 			});
 	}
}
/**
 * Transform animation related METHODS
 * Ends HERE
 */
