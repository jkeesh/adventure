/*
* File: Adventure.js
*
* Declaration of Adventure object, the harness that does most of the work in the game
*/
var Adventure = { }
Adventure.currentRoom = null;
Adventure.cmdList = ["HELP", "LOOK", "INVENTORY", "DROP", "TAKE", "TALK", "WHO"]
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
    Adventure.currentRoom.visited = true;
 
    // read in the objects
    $.getJSON("SmallObjects.json.js", function(data) {
        Adventure.game.readObjects(data);
        
        $.getJSON("SmallPeople.json.js", function(data){
            Adventure.game.readPeople(data);
            
            $(document).trigger('startGame');
        })
    });

});


Adventure.setInfo = function(info){
    $("#extra-container").html(info);
}


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
   if(tokens.length > 1){
        for(var i = 1; i < tokens.length; i++){
            item += tokens[i] + " ";
        }
        item = $.trim(item);
   }
      
   // ensure valid command and call appropriate handlers
   if(Adventure.cmdList.indexOf(cmd) == -1)
      println("I don't understand that word.");
   else {
      Adventure.handleSystemCommand(cmd);
      if(Adventure.motionList.indexOf(cmd) != -1)
         Adventure.handleMotionCommand(cmd);
      Adventure.handleObjectCommand(cmd, item);
      Adventure.handleTalkCommand(cmd, item);
   }
}

Adventure.handleTalkCommand = function(cmd, rest){
    if(cmd == "TALK"){
        var people = this.currentRoom.people;
        if(rest.length == 0 && count(people) > 1){
            println("There is more than one person here! Who do you want to talk?");
            return;
        }
        for(var p in people){
            if(rest.length == 0 || p.search(new RegExp(rest, "i")) != -1)
                println(people[p].talk());
        }
    }else if(cmd == "WHO"){
        var people = this.currentRoom.people;
        if(count(people) == 0){
            println("There is no one else in the room.");
        }
        for(var p in people){
            println(p);
        }
    }
}

Adventure.handleSystemCommand = function(cmd) {
   if(cmd == "HELP") {
      println("Here are the list of commands in ETHICAL ADVENTURE");
      println("<span class='help'>HELP</span>display this help menu");
      println("<span class='help'>LOOK</span>look around the room");
      println("<span class='help'>INVENTORY</span>show inventory");
      println("<span class='help'>WHO</span>show who is in the room");
      println("<span class='help'>TALK</span>get a person to talk, if only one in room");
      println("<span class='help'>TALK &lt;lastname&gt;</span>talk, if more than one person in room");
      println("<span class='help'>TAKE &lt;object&gt;</span>take an object in a room");
      println("<span class='help'>DIR</span>move with NORTH, SOUTH, EAST, WEST, UP, and DOWN");
      
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
       this.currentRoom.look();
//      println(this.currentRoom.description);
   }
}

function count(o) {
    var c = 0;
    for(var i in o) 
        if(o.hasOwnProperty(i))
            c += 1;

    return c;
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

Adventure.hasRequiredKeys = function(keys) {
   for(var idx in keys) {
      if(!Adventure.inventory.hasOwnProperty(keys[idx])) {
         return false;
      }
   }
   return true;
}

Adventure.handleMotionCommand = function(cmd) {
   var correctDir = false;
   
   $(Adventure.currentRoom.motions).each(function(idx, val) {
      // user entered a valid direction so change the room
      if(cmd == val.direction) {
         correctDir = true;
         
         // make sure user has required keys or room unlocked
         if(val.keysRequired.length == 0 || Adventure.hasRequiredKeys(val.keysRequired)) {
            Adventure.currentRoom = Adventure.game.rooms[val.destRoomId];
            // display info about new room
            Adventure.currentRoom.describe();
            if(Adventure.currentRoom.hasPerson)
               println("Someone is here.");
            Adventure.setInfo(Adventure.currentRoom.getInfo());
         } else {
            println("You do not have the right tools in your inventory to go that direction.")
         }

      }
   });
   
   if(!correctDir) {
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