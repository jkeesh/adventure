/*
* File: AdvObject.js
* 
* Definition of an adventure game object.  This object contains just a 
* few fields, an identifying name, a verbose description, and an initial
* room number in which to place the item.
*/
function AdvObject(obj) {
   this.name = obj.name;
   this.description = obj.description;
   this.initialRoomId = obj.initialLoc;
}

AdvObject.prototype.getInfo = function(){
    //return $()
}

AdvObject.prototype.toString = function() {
   // print the description with a span so colors can be added
   return "<span class='item'>" + this.description + "</span>"
}