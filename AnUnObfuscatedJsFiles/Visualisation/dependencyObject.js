/**
 * Created by LI YUANXIN on 12/06/2017.
 */

/** DEPENDENCY */
function DependencySphere() {
  this.id;
  this.obj;
  this.data;
  this.lines = [];
  this.positionX;
  this.positionY;
  this.positionZ;
}

DependencySphere.prototype.constructor = function(id, obj, data, positionX, positionY, positionZ) {
  this.id = id;
  this.obj = obj;
  this.data = data;
  this.positionX = positionX;
  this.positionY = positionY;
  this.positionZ = positionZ;
};

const PlatformOS =  {
	Windows: 0,                         // Window Platform
	Linux : 1,                    // Linix Platform

	getKey: function(value) {
		var object = this;
		return Object.keys(object).find(key => object[key] === value);
	}
};
