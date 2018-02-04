/**
 * Created by Isaiah Wong on 16/03/2017.
 */
var taskProcessed = 0;
var NUMBER_OF_TASKS = 0;

$(function() {
	startTime();
	/** Indicate the number of task to be performed */
	NUMBER_OF_TASKS = 2;
	getAllRanking();
});


var processArray = [];

/**
 * Connects to database on initialization
 * Retrieves all processes
 */
function getAllRanking() {
	$.ajax({
		type: 'GET',
		contentType: 'application/json',
		url: '/api/processes',
		success: function(processes) {
			let rankOneProcess;

			/** Store the processes */
			for(var i = 0; i < processes.length; i++) {
				/** Transfer the values from processes to process*/
				var process = new Process();
				process.construct(processes[i]);

				if(process.rank == '0') rankOneProcess = process;

				processArray.push(process);
			}

			/**
			 * Waits for all async tasks to be completed.
			 * When Async task has completed, invoke done.
			 */
			getAllLines(rankOneProcess, start);
			getAllFiles(rankOneProcess, start);

		},
		error: function(err) {
			alert('Could not connect to processes');
		}
	});
}

/**
 * Gets all the lines for the process
 * @param processId
 * @param done
 */
function getAllLines(process, done) {
	$.ajax({
		type: 'GET',
		contentType: 'application/json',
		url: '/api/processes/'+process.rank+'/lines',
		success: function(lines) {
			if(process.lines.length < 1) process.copyLinesArray(lines);
			if(done != 'undefined') done(process);
		}
	});
}

/**
 * Gets all the files for the process
 * @param processId
 * @param done
 */
function getAllFiles(process, done) {
	$.ajax({
		type: 'GET',
		contentType: 'application/json',
		url: '/api/processes/'+process.rank+'/files',
		success: function(files) {
			if(process.files.length < 1) process.copyFilesArray(files);
			if(done != 'undefined') done(process);
		}
	});
}

/**
 * Get all libraries traversed
 * @param process
 * @param {function} done. Callback to process data retrieved
 */
function getLibrariesByRank(process, done) {
	$.ajax({
		type: 'GET',
		contentType: 'application/json',
		url: '/api/processes/'+process.rank+'/libraries',
		success: function(libraries) {
			if(process.libraries.length < 1) process.copyLibrariesArray(libraries);
			if(done !== 'undefined') done(process);
		}
	});
}

/**
 * Get all directory traversed
 * @param process
 * @param {function} done. Callback to process data retrieved
 */
function getTraversalsByRank(process, done) {
	$.ajax({
		type: 'GET',
		contentType: 'application/json',
		url: '/api/processes/'+process.rank+'/traversals',
		success: function(traversals) {
			if(process.traversals.length < 1) process.copyTraversalsArray(traversals);
			if(done !== 'undefined') done(process);
		}
	});
}

/**
 * Pass done as a callback to invoke tasks
 */
function start() {
	taskProcessed++;
	console.log('Task Processed: ' + taskProcessed + ' | ' + 'Number Of Tasks : ' + NUMBER_OF_TASKS);
	if(taskProcessed === NUMBER_OF_TASKS) {
		taskProcessed = 0;
		NUMBER_OF_TASKS = 0;

		/** Load Table */
		constructRankingTable();

		/** Initialise Graphics */
		init();
		animate();

		/** Initialise Interactions */
		rankFilesOnClick();
		affectedFoldersOnClick();
		filesOnClick();
		/** Launch Page */
		launchPage();
		menuButonListener();
	}
}

function launchPage() {
	// Remove splash screen
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
 * Generate Ranking HTML elements
 */
function constructRankingTable() {
	const $suspectFiles = $('#suspect-files ul');

	// Sorts Array
	processArray.sort(sortByRank);

	for(var i = 0; i < processArray.length; i++) {
		let processName = processArray[i].procName;
		let processScore = processArray[i].score;
		let processRank = processArray[i].rank;
		let processId = processArray[i].id;

		const list = $('<li>');
		const name = $('<span>');
		const score = $('<span>');

		name.text(processName.capitalizeFirstLetter());
		score.text(processScore);

		let color = (processRank == 0) ? 'red-box' : 'blue';

		list.addClass('t-data ' + color );
		name.addClass('name');
		score.addClass('score');

		// Add Data ID
		list.attr('data-id', processId);

		list.append(name);
		list.append(score);

		$suspectFiles.append(list);
	}

	/** Loads the first rank into activity table */
	initActivityTable(processArray[0].id, true);
}

/**
 * Generate Activity of the process which highest rank
 * @param {String} processId | Process id
 * @return {Process} process;
 */
function initActivityTable(processId, initial) {
	var process = $.grep(processArray, function(obj){
		return obj.id == processId;
	})[0];

	// Clears interval
	if(singleInterval != 'undefined') clearInterval(singleInterval);

	/** Prevents repopulating of array */
	if(!initial && process.lines.length == 0 && process.files.length == 0) {
		NUMBER_OF_TASKS = 2;
		getAllLines(process, constructActivityTable);
		getAllFiles(process, constructActivityTable);
	}
	else {
		constructActivityTable(process);
	}
	return process;
}

var singleInterval;

function constructActivityTable(process) {
	var $processActivity = $('#program-activity table tbody');

	var lines = process.lines;
	var processName = process.procName.toUpperCase().replace(/\.[^/.]+$/, '');

	$('#program-activity .heading #selected').text(processName);

	$processActivity.empty();

	/** Populate the table */
	var i = 0;
	singleInterval = setInterval(function() {
		if(i == lines.length) { clearInterval(singleInterval); } ;

		try {
			var line = lines[i];

			var tableRow = $('<tr>');
			var tableTime = $('<td>');
			var tableProcess = $('<td>');
			var tableAction = $('<td>');
			var tableDir = $('<td>');
			var spanAction = $('<span>');

			var time = line.timestamp;
			var process = processName;
			var actionNum = parseInt(line.type);
			var action = SysCall.getKey(actionNum);
			action = SysCall.formatName(action);

			var dir = line.filePath;

			var date = new Date(time*1000); // Convert UTC to standard time
			var hours = date.getHours();
			var minutes = "0" + date.getMinutes();
			var mill = date.getMilliseconds();

			tableTime.addClass('table-time');
			tableProcess.addClass('table-process');
			tableAction.addClass('table-action');
			tableDir.addClass('table-directory');

			var cssClass = SysCall.getLabelCssClass(actionNum);
			spanAction.addClass('custom-label ' + cssClass);

			time = hours + ':' + minutes.substr(-2) + '.' + mill;

			tableTime.text(time);
			tableProcess.text(process);
			spanAction.text(action);
			tableDir.text(dir);

			tableAction.append(spanAction);
			tableRow.append(tableTime);
			tableRow.append(tableProcess);
			tableRow.append(tableAction);
			tableRow.append(tableDir);

			$processActivity.append(tableRow.hide().fadeIn('slow'));
		}
		catch(err) {}

		i++;
	}, 0.01);
}

function constructAffectedFolder(childCircle) {
	var pathName = childCircle.userData.path;
	var pathFileNum = childCircle.userData.file.length;
	var $affectedFolders = $('#affected-folders table tbody');

	var tableRow = $('<tr>');
	var pathData = $('<td>');
	var pathFiles = $('<td>');

	pathData.addClass('table-original');
	pathData.text(pathName);

	pathFiles.addClass('table-modified');
	pathFiles.text(pathFileNum);

	tableRow.append(pathData);
	tableRow.append(pathFiles);

	$affectedFolders.append(tableRow.hide().fadeIn('slow'));
}

function constructAffectedFiles(fileArray) {
	var $affectedFiles = $('#selected-files table tbody');
	var $heading = $('#selected-files .heading .affected-file');

	$affectedFiles.empty();

	var tableRow, fileAction, fileTime;
	var name, action, time;

	// Get the name of the file selected
	var tempStrArr = fileArray[0].filePath.split('\\');
	name = tempStrArr[tempStrArr.length-1];

	$heading.text(': ' + name.toUpperCase());

	for(var i = 0; i < fileArray.length; i++) {

		tableRow = $('<tr>');
		fileTime = $('<td>');
		fileAction = $('<td>');

		time = fileArray[i].timestamp;

		var date = new Date(0); // Convert UTC to standard time
		date.setUTCMilliseconds(time);
		var hours = date.getHours();
		var minutes = "0" + date.getMinutes();
		var mill = date.getMilliseconds();

		var actionNum = parseInt(fileArray[i].type);
		action = SysCall.getKey(actionNum);
		action = SysCall.formatName(action);

		time = hours + ':' + minutes.substr(-2) + '.' + mill;
		var cssClass = SysCall.getLabelCssClass(actionNum);

		fileTime.addClass('table-time');
		fileAction.addClass('table-action custom-label ' + cssClass);

		fileTime.text(time);
		fileAction.text(action);

		tableRow.append(fileTime);
		tableRow.append(fileAction);

		$affectedFiles.append(tableRow.hide().fadeIn('slow'));
	}
}

/** Sorts processes by rank*/
function sortByRank(processOne, processTwo) {
	if (processOne.rank > processTwo.rank)
		return 1;
	return 0;
}

/**
 * JQUERY INTERACTIONS
 */

/**
 * Listener for Suspected Files Clicked
 */
function rankFilesOnClick() {
	$('#suspect-files').on('click', '.t-data', function() {
		/** Get the id from dom element */
		var processId = $(this).attr('data-id');
		/** Change table data */
		var process = initActivityTable(processId, false);
		resetTable();
		resetScene();

		/** Start Drawing */
		drawProcess(process);
	});
}

function affectedFoldersOnClick() {
	var previous = null;

	$('#affected-folders').on('click', 'tr', function() {
		var path = $('.table-original',this).text();

		/** Clear Css Children */
		removePreviousCSSObjects(previous);

		$('#selected-files table tbody').empty();

		/** Change table data */
		previous = showAffectedFiles(path);
	});
}

function filesOnClick() {
	// Stores reference of previous html dom
	var previous = null;

	$('.cssRenderer').on('click', '.file', function () {
		if(previous != null) {
			previous.removeClass('danger-active');
			previous.addClass('danger');
		}

		// Create an indication that the file has been clicked
		$(this).removeClass('danger');
		$(this).addClass('danger-active');

		// Extract id form the file
		var fileHandle = $(this).attr('data-id');
		var line = processNode.process.lines;
		var fileDataArray = [];

		for(var i = 0; i < line.length; i++) {
			var tempHandle = line[i].fileId;
			if (tempHandle === fileHandle) {
				fileDataArray.push(line[i]);
			}
		}
		constructAffectedFiles(fileDataArray);
		previous = $(this);
	});
}

/**
 * THREE JS
 * Using CSS Renderer and WebGL Renderer
 */

var camera, sceneGL, sceneCss, rendererGL, rendererCss, controls, stats;

var graphicContainer;

function init() {
	/** Camera */
	// Initialize THREEjs Camera
	camera = new THREE.PerspectiveCamera(450, window.innerWidth/window.innerHeight, 0.1, 10000);
	camera.position.z = 500;
	camera.position.y = -900;

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
	sceneGL = new THREE.Scene()

	// CSS3D Scene
	sceneCss = new THREE.Scene();

	/** Camera Controls */
	controls = new THREE.OrbitControls(camera);

	/** Visualisation Intialization */
	initVisualisation(processArray[0]);

	/** Initialize Stats */
	stats = new Stats();
	// stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom

	// Align top-right
	// stats.domElement.style.position = 'absolute';
	// stats.domElement.style.top = '0';
	// stats.domElement.className = 'stats';
	// graphicContainer.appendChild(stats.domElement);

	// Resize renderers when page is changed
	window.addEventListener( 'resize', onWindowResize, false );
}

/**
 * Renders all renderers
 */
function render() {
	rendererCss.render(sceneCss, camera);
	rendererGL.render(sceneGL, camera);
}

/**
 * Change the page aspect ratio and size based on user's browser
 */
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	rendererGL.setSize( window.innerWidth, window.innerHeight );
	rendererCss.setSize( window.innerWidth, window.innerHeight );

	render();
}

function animate() {
	requestAnimationFrame(animate);
	stats.begin();

	// monitored code goes here
	TWEEN.update();
	render();
	controls.update();

	stats.end();
}

/**
 * END
 */

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	$('#timestamp').text(h + " : " + m + " : " + s);
	var t = setTimeout(startTime, 500);
}

function capitalise(str) {
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}
