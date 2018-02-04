/**
 * Created by LI YUANXIN on 12/06/2017.
 */

/** FILE */
function FileObj() {
  this.id;
  this.obj;
  this.fileName;
  this.fileFormat;
  this.filePath;
  this.fileNameFull;
  this.score;
}

function FileObj(fileNameFull, fileName, fileFormat, filePath, score) {
  this.fileNameFull = fileNameFull;
  this.fileName = fileName;
  this.fileFormat = fileFormat;
  this.filePath = filePath;
  this.score = score;
}

const SysCall =  {
	USER_INFO: 0,                         // (ANNOTATE) CAN contain the username/domain name

	PROCESS_CREATE : 1,                    // (ANNOTATE) MUST contain the process name including full path relative to FS root
	// CAN contain the operating system specific processId
	PROCESS_EXIT : 2,                      //

	FILE_OPEN : 3,                         // MUST contain the file name including full path relative to FS root
	// MUST generate and contain a unique file handle value
	FILE_CLOSE : 4,                        // MUST contain the file handle value
	FILE_READ : 5,                         // MUST contain the file handle value
	// MUST contain the byte length and offset
	FILE_WRITE : 6,                        // MUST contain the file handle value
	// MUST contain the byte length and offset

	// TODO: socket args
	SOCKET_OPEN : 7,                       //
	SOCKET_CLOSE : 8,                      //
	SOCKET_READ : 9,                       //
	SOCKET_WRITE : 10,                     //

	DIRNODE_CREATE : 11,                   // MUST contain the directory/file name relative to the FS root
	DIRNODE_DELETE : 12,                   // MUST contain the directory/file name relative to the FS root
	DIRNODE_RENAME : 13,                   // MUST contain the old and new directory/file name relative to the FS root
	DIRNODE_LINK : 14,                     // MUST contain the old and new directory/file name relative to the FS root
	DIRNODE_CHANGE_OWNER : 15,             // MUST contain the new owner's user ID
	DIRNODE_CHANGE_PERMISSIONS : 16,       //

	HANDLE_DUPLICATE : 17,                 // MUST contain the type of handle being duplicated (1=FILE, 2=SOCKET)
										                     // MUST contain the old handle value of the handle
	getKey: function(value) {
		var object = this;
		return Object.keys(object).find(key => object[key] === value).split('_')[1];
	},

	getLabelCssClass: function (actionNum) {
		var cssClass = "";

		switch(actionNum) {
			// FILE OPEN, SOCKET OPEN
			case 3: case 8:
			cssClass = "label-safe";
			break;
			// PROCESS EXIT, FILE CLOSE, SOCKET CLOSE
			case 2: case 4: case 7:
			cssClass = "label-minor";
			break;
			// FILE READ, SOCKET READ
			case 5: case 9:
			cssClass = "label-warning";
			break;
			// WRITE, DELETE, CREATE, RENAME, CHANGE OWNER, CHANGE PERM
			case 1: case 6: case 10: case 11: case 12: case 13: case 14: case 15: case 16:
			cssClass = "label-danger";
			break;
      // DEFAULT
			default:
				cssClass = "label-safe";
		}

		return cssClass;
	}
};
