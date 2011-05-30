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
	this.keyName = mteObj.key;
	
	window.console.log(this);
}