[
   {
      "id": "1",
      "name": "Outside building",
      "description": "You are standing at the end of a road before a small brick building. A small stream flows out of the building and down a gully to the south. A road runs up a small hill to the west.",
      "motions": [
         {"dir": "WEST", "dest": "2"},
         {"dir": "UP", "dest": "4"},
         {"dir": "NORTH", "dest": "3"},
         {"dir": "IN", "dest": "3"}
      ],
      "info": "outside-building"
   },
   {
      "id": "2",
      "name": "End of road",
      "description": "You are at the end of a road at the top of a small hill.  It is the year 1688.  The Glorious Revolution has just occurred in England.  On your journey through the valley you published a pamphlet criticizing the monarchy and have been tried for seditious libel.  Luckily this is a period of revolution and several influential philosophers are around to help you out.",
      "motions": [
         {"dir": "DOWN", "dest": "1"},
         {"dir": "EAST", "dest": "1"}
      ],
      "info": "end-of-road"
   },
   {
      "id": "3",
      "name": "Inside building",
      "description": "You are inside a building, a well house for a large spring.",
      "motions": [
         {"dir": "SOUTH", "dest": "1"},
         {"dir": "OUT", "dest": "1"}
      ],
      "info": "inside-building"
   },
   {
       "id": "4",
       "name": "Bar in Redwood City",
       "description": "You are inside a bar in Redwood City.",
       "motions": [
         {"dir": "SOUTH", "dest": "1"},
         {"dir": "OUT", "dest": "1"}        
       ],
       "info": "gizmodo-iphone"
   }
]