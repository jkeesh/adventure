/*
* File: AdventureGame.js
*
* Declaration of AdvRoom object, which stores state information about a room
*/
function AdvRoom(roomObj) {
   var self = this;  // reference to this class to use when jquery changes the scope on us
   
	this.id = roomObj.id;
	this.name = roomObj.name;
	this.description = roomObj.description;
	this.visited = false;
	
	this.motions = [];
	$(roomObj.motions).each(function(idx) {
	   self.motions.push(new AdvMotionTableEntry(roomObj.motions[idx]));
	});
	
	this.objects = {};
}