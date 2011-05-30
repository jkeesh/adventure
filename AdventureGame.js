/*
* File: AdventureGame.js
*
* Declaration of AdventureGame object, the entity that holds
* the state of the game
*/
function AdventureGame() {
   this.rooms = {};      // associative array of roomId => room object
   this.objects = null;  // array of AdvObjects
   this.synonyms = null; // associative array of strings synonym => synonym
   this.motions = [];    // array of string motion commands in game
}

/*
* Read rooms from a json array
*/
AdventureGame.prototype.readRooms = function(roomArr) {
   var self = this;       // reference to this class when scope of "this" changes
   
   $(roomArr).each(function(idx) {
      var curRoomId = roomArr[idx].id;
      self.rooms[curRoomId] = new AdvRoom(roomArr[idx]);
      
      $(self.rooms[curRoomId].motions).each(function(idx, motion) {
         if(self.motions.indexOf(motion.direction) == -1) 
            self.motions.push(motion.direction);
      });
   });
   
   window.console.info(this.rooms["1"]);
   window.console.info(this);
}

AdventureGame.prototype.readObjects = function(objArr) {
   var self = this;       // reference to this class when scope of "this" changes
   
   $(roomArr).each(function(idx) {
      self.objects.push(new AdvRoom(roomArr[idx]));
   });
}

AdventureGame.prototype.handleCommand = function(cmd) {
   
}