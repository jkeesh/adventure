/*
* File: AdvPerson.js
* 
* Definition of an adventure person. An adventure person has a name,
* a room number that they start in, and a quote that they say. An 
* adventure person can be prompted to speak his quote with the command
* TALK
*/
function AdvPerson(obj) {
   this.name = obj.name;
   this.quote = obj.quote;
   this.initialRoomId = obj.initialLoc;
}

AdvPerson.prototype.talk = function(){
    return "<span class='quote'>" + this.quote + "-" + this.name +"</span>";
}

///test