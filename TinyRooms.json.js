[
   {
      "id": "1",
      "name": "Outside building",
      "description": "You are standing at the end of a road before a small brick building. A small stream flows out of the building and down a gully to the south. A road runs up a small hill to the west.",
      "motions": [
         {"dir": "WEST", "dest": "2", "keyStr": "TIME MACHINE"}
      ],
      "info": "outside-building"
   },
   {
      "id": "2",
      "name": "Outside a blacksmith's shop in Essex, England",
      "description": "You are at the outside a blacksmith's shop in Essex, England.  It is the year 1688.  The Glorious Revolution has just occurred in England.  On your journey through the valley you published a pamphlet criticizing the monarchy and have been tried for seditious libel.  Luckily this is a period of revolution and several influential philosophers are around to help you out. There is more help to the south.",
      "motions": [
         {"dir": "SOUTH", "dest": "3"},
         {"dir": "EAST",  "dest": "1"}
      ],
      "info": "locke"
   },
   {
      "id": "3",
      "name": "On a bridge",
      "description": "It is 1644, and you are standing on the London Bridge, as the sunset fades in the distance. You can leave the bridge to the east.",
      "motions": [
         {"dir": "EAST", "dest": "4"},
         {"dir": "NORTH", "dest": "2"}
      ],
      "info": "milton"
   },
   {
      "id": "4",
      "name": "On the side of the Thames River",
      "description": "It is 1806, and you are beside the Thames River, where a small band is playing. You can walk up the river to the north.",
      "motions": [
         {"dir": "WEST", "dest": "3"},
         {"dir": "NORTH", "dest": "5"}
      ],
      "info": "mill"
   },
   {
      "id": "5",
      "name": "The steps of the Supreme Court",
      "description": "You are on the steps of the Supreme Court. You can walk up the steps.",
      "motions": [
         {"dir": "UP", "dest": "6"},
         {"dir": "SOUTH", "dest": "4"}
      ],
      "info": "supreme-court"
   },
   {
      "id": "6",
      "name": "In the New York Times editorial office",
      "description": "You are standing next to the editor-in-chief of the New York Times as he paces back and forth deciding if he should publish the Pentagon Papers. You can enter the blog room to the west or the news desk to the east.",
      "motions": [
         {"dir": "EAST", "dest": "7"},
         {"dir": "DOWN", "dest": "5"},
         {"dir": "WEST", "dest": "10", "keyStr": "LAPTOP"}
      ],
      "info": "pentagon-papers"
   },
   {
      "id": "7",
      "name": "The WikiLeaks headquarters in Stockholm, Sweden",
      "description": "You are 100 feet below ground in a room with green plants, solar lighting, and a buzzing humidifier. This room only has one entrance. Leave to the south. Or exit west.",
      "motions": [
         {"dir": "SOUTH", "dest": "8"},
         {"dir": "WEST", "dest": "6"}
      ],
      "info": "wikileaks"
   },
   {
       "id": "8",
       "name": "Bar in Redwood City",
       "description": "You are inside a bar in Redwood City. You can leave the bar to the west.",
       "motions": [
         {"dir": "WEST", "dest": "9"},
         {"dir": "NORTH", "dest": "7"}        
       ],
       "info": "gizmodo-iphone"
   },
   {
      "id": "9",
      "name": "At the Apple Headquarters",
      "description": "You are walking by a clean desk, and on it are the slides of a presentation labeled classified. You can go home to the south.",
      "motions": [
         {"dir": "EAST", "dest": "8"},
         {"dir": "SOUTH", "dest": "13"}
      ],
      "info": "apple-headquarters"
   },
   {
      "id": "10",
      "name": "CS105 Lecture",
      "description": "You are in the top row of Hewlett 200 for CS105, as the lecturer explains simple HTML and CSS. You supposedly needs these tools to make your first simple website. You are on your way to becoming a blogger. You can leave class to the west.",
      "motions": [
         {"dir": "WEST", "dest": "11"},
         {"dir": "EAST", "dest": "6"}
      ],
      "info": "blog-what"
   },
   {
      "id": "11",
      "name": "The LAIR",
      "description": "The LAIR doesn't help you if you are in CS105, but you go there anyway. You see dozens of students with their heads tucked down staring at their computers. You see a stray printout in the corner which contains the solutions to the Breakout assignment. You aren't in CS106A, but you might be in the future. Leave to the east, or continue north.",
      "motions": [
         {"dir": "EAST", "dest": "10"},
         {"dir": "NORTH", "dest": "12"}
      ],
      "info": "blog-issues"
   },
   {
      "id": "12",
      "name": "CS181 Section",
      "description": "You sit around a table for CS181 section and realize the positive implications of blogging. Now that the barrier to entry in publication has been lowered, the internet has become a tool for the spread of knowledge across the world. More references to the north.",
      "motions": [
         {"dir": "SOUTH", "dest": "11"},
         {"dir": "NORTH", "dest": "13"}
      ],
      "info": "blog-issues-2"
   },
   {
      "id": "13",
      "name": "References",
      "description": "You are wondering where we got all of this information from. You can restart in the west.",
      "motions": [
         {"dir": "WEST", "dest": "1"}
       ],
      "info": "references"
   }
 
]