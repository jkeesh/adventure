/*
* File: Adventure.js
*
* Declaration of Adventure object, the harness that does most of the work in the game
*/
var Adventure = { }
Adventure.currentRoom = null;
Adventure.cmdList = ["HELP", "LOOK", "INVENTORY", "DROP", "TAKE"]
Adventure.motionList = []
Adventure.inventory = { };

Adventure.game = new AdventureGame();

// read in the rooms
$.getJSON("TinyRooms.json.js", function(data) {
   
    Adventure.game.readRooms(data);
    
    // extend command list with motion commands
    $(Adventure.game.motions).each(function(idx, val) {
       if(Adventure.cmdList.indexOf(val) == -1)
          Adventure.cmdList.push(val);
          Adventure.motionList.push(val);
    });
    
    // set default room
    Adventure.currentRoom = Adventure.game.rooms["1"];
});

// read in the objects
$.getJSON("SmallObjects.json.js", function(data) {
    Adventure.game.readObjects(data);
});

/*
* Handles a command by ensuring that it is in the
* list of valid commands.  Commmands are of three types.
* Either they specify a system action, a motion, or
* something to do with inventory.
*/
Adventure.handleCommand = function(line) {
   // parse the command into tokens
   var tokens = line.split(" ");
   
   // split the command into components
   var cmd = tokens[0];
   var item = "";
   if(tokens.length > 1)
      item = tokens[1];
      
   // ensure valid command and call appropriate handlers
   if(Adventure.cmdList.indexOf(cmd) == -1)
      println("I don't understand that word.");
   else {
      Adventure.handleSystemCommand(cmd);
      if(Adventure.motionList.indexOf(cmd) != -1)
         Adventure.handleMotionCommand(cmd);
      Adventure.handleObjectCommand(cmd, item);
   }
}

Adventure.handleSystemCommand = function(cmd) {
   if(cmd == "HELP") {
      println("HELP TEXT");
   } else if(cmd == "INVENTORY") {
      if(isEmptyObj(Adventure.inventory)) {
         println("Your inventory is empty.")
      } else {
         println("Your inventory currently contains: ");
         for(item in Adventure.inventory) {
            println(Adventure.inventory[item].name);
         }
      }
   } else if(cmd == "LOOK") {
      println("YOU LOOKED AROUND THE ROOM")
   }
}

/*
* Utility method to test if an object is empty in javascript
*/
function isEmptyObj(o) {
    for(var i in o) 
        if(o.hasOwnProperty(i))
            return false;
 
    return true;
}

Adventure.handleMotionCommand = function(cmd) {
   var roomChanged = false;
   
   $(Adventure.currentRoom.motions).each(function(idx, val) {
      // user entered a valid direction so change the room
      if(cmd == val.direction) {
         Adventure.currentRoom = Adventure.game.rooms[val.destRoomId];
         
         // display info about new room
         println(Adventure.currentRoom.description);
         println(Adventure.currentRoom.objectStr());
         
         // set flag indicating room changed
         roomChanged = true;
      }
   });
   
   if(!roomChanged) {
      println("You cannot go that direction here.");
   }
}

Adventure.handleObjectCommand = function(cmd, item) {
   if(cmd == "TAKE") {
      if(item in Adventure.currentRoom.objects) {
         Adventure.inventory[item] = Adventure.currentRoom.objects[item];
         Adventure.currentRoom.removeObject(item);
         println(item + " taken.");
      } else {
         println("I don't see " + item + " here.");
      }
   } else if(cmd == "DROP") {
      if(item in Adventure.inventory) {
         Adventure.currentRoom.addObject(Adventure.inventory[item]);
         delete Adventure.inventory[item];
         println(item + " dropped.")
      } else {
         println("You do not have " + item + " in your inventory.");
      }
   }
}