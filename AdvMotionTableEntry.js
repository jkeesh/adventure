/*
* File: AdvMotionTableEntry.js
*
* Declaration of AdvMotionTableEntry object, an object that
* specifies a motion that can be made in a room and whether a
* key object is needed to pursue that direction.
*/
function AdvMotionTableEntry(mteObj) {
	this.direction = mteObj.dir;
	this.destRoomId = mteObj.dest;
	this.keysRequired = [ ]
	if(mteObj.keyStr !== undefined)
	   this.keysRequired = mteObj.keyStr.split(",");
	
	window.console.log(this);
}