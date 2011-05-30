/*
* File: Adventure.js
*
* Declaration of Adventure object, the harness that does most of the work in the game
*/
var Adventure = { }
Adventure.currentRoom = null;
Adventure.cmdList = ["HELP", "LOOK", "INVENTORY", "DROP", "TAKE"]

Adventure.game = new AdventureGame();

// read in the rooms
$.getJSON("TinyRooms.json.js", function(data) {
   
    Adventure.game.readRooms(data);
    
    // extend command list with motion commands
    $(Adventure.game.motions).each(function(idx, val) {
       if(Adventure.cmdList.indexOf(val) == -1)
          Adventure.cmdList.push(val);
    });
    
    // set default room
    Adventure.currentRoom = Adventure.game.rooms["1"];
});

// read in the objects
$.getJSON("SmallObjects.json.js", function(data) {
    window.console.log(data);
});

Adventure.handleCommand = function(cmd) {
   if(Adventure.cmdList.indexOf(cmd) == -1)
      println("I don't understand that word.");
   else {
      Adventure.handleSystemCommand(cmd);
      Adventure.handleMotionCommand(cmd);
   }
}

Adventure.handleSystemCommand = function(cmd) {
   if(cmd == "HELP") {
      println("HELP TEXT");
   } else if(cmd == "INVENTORY") {
      println("YOUR INVENTORY");
   } else if(cmd == "LOOK") {
      println("YOU LOOKED AROUND THE ROOM")
   }
}

Adventure.handleMotionCommand = function(cmd) {
   var roomChanged = false;
   
   $(Adventure.currentRoom.motions).each(function(idx, val) {
      // user entered a valid direction so change the room
      if(cmd == val.direction) {
         Adventure.currentRoom = Adventure.game.rooms[val.destRoomId];
         println(Adventure.currentRoom.description);
         roomChanged = true;
      }
   });
   
   if(!roomChanged) {
      println("You cannot go that direction here.")
   }
}