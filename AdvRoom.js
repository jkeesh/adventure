/*
* File: AdventureRoom.js
*
* Declaration of AdvRoom object, which stores state information about a room
*/
function AdvRoom(roomObj) {
   var self = this;  // reference to this class to use when jquery changes the scope on us
   
	this.id = roomObj.id;
	this.name = roomObj.name;
	this.description = roomObj.description;
	this.info = roomObj.info;
	this.visited = false;
	
	this.motions = [];
	$(roomObj.motions).each(function(idx) {
	   self.motions.push(new AdvMotionTableEntry(roomObj.motions[idx]));
	});
	
	this.objects = {};
	this.people = {};
	this.hasPerson = false;
}

AdvRoom.prototype.getInfo = function(){
    return $("#"+this.info).html();
}

AdvRoom.prototype.addPerson = function(person){
    this.people[person.name] = person;
    this.hasPerson = true;
}

AdvRoom.prototype.addObject = function(obj) {
   this.objects[obj.name] = obj
}

AdvRoom.prototype.removeObject = function(key) {
   delete this.objects[key];
}

AdvRoom.prototype.describe = function(force){
    if(!this.visited)
        println(this.description);
    else
        println(this.name);
    
    println(this.objectStr());
    this.visited = true;
}

AdvRoom.prototype.look = function(){
    println(this.description);
    println(this.objectStr());
}

/*
* Get a string listing the objects currently in this room.
*/
AdvRoom.prototype.objectStr = function() {
   var objStr = "";
   for(key in this.objects) {
      obj = this.objects[key];
      objStr += "There is " + obj + " here.\n"
   }
   return objStr;
}