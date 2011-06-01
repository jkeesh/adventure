/*
* File: AdventureGame.js
*
* Declaration of AdventureGame object, the entity that holds
* the state of the game
*/
function AdventureGame() {
   this.rooms = {};      // associative array of roomId => room object
   this.objects = [];  // array of AdvObjects
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
}

/*
* Read people from json array
*/
AdventureGame.prototype.readPeople = function(peopleArr){
    var self = this;
    
    $(peopleArr).each(function(idx, val){
        console.log(idx);
        console.log(val);
        var curPerson = new AdvPerson(val);
        console.log(curPerson);
    });
}

/*
* Read objects from a json array
*/
AdventureGame.prototype.readObjects = function(objArr) {
   var self = this;       // reference to this class when scope of "this" changes
   
   $(objArr).each(function(idx, val) {
      var curAdvObj = new AdvObject(val);
      
      self.objects.push(curAdvObj);
      
      // add object to its initial room
      self.rooms[curAdvObj.initialRoomId].addObject(curAdvObj);
   });
   
   console.info(this.rooms);
}