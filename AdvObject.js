function AdvObject(obj) {
   this.name = obj.name;
   this.description = obj.description;
   this.initialRoomId = obj.initialLoc;
}

AdvObject.prototype.toString = function() {
   return "<span class='item'>" + this.description + "</span>"
}