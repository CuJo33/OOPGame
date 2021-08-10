//Set Classes
class Room {
  constructor(
    name,
    objName,
    symbol,
    description,
    houseLevel,
    specialAction,
    gridRef,
    possibleDirections
  ) {
    this._name = name;
    this._objName = objName;
    this._symbol = symbol;
    this._description = description;
    this._houseLevel = houseLevel;
    this._specialAction = {};
    this._gridRef = {};
    this._possibleDirections = {};
    this._linkedRooms = {};
  }

  //name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  //objName
  get objName() {
    return this._objName;
  }

  set objName(value) {
    this._objName = JSON.parse(value);
  }

  // Symbol
  get symbol() {
    return this._symbol;
  }

  set symbol(value) {
    this._symbol = value;
  }

  // description
  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  // houseLevel
  get houseLevel() {
    return this._houseLevel;
  }

  set houseLevel(value) {
    this._houseLevel = value;
  }

  // gridRef
  get gridRef() {
    return this._gridRef;
  }

  set gridRef(array) {
    this._gridRef[0] = array[0];
    console.log(array[0]);
    this._gridRef[1] = array[1];
  }

  // possibleRooms
  get possibleDirections() {
    return this._possibleDirections;
  }

  set possibleDirections(array) {
    this._possibleDirections[0] = array[0] || null;
    this._possibleDirections[1] = array[1] || null;
    this._possibleDirections[2] = array[2] || null;
    this._possibleDirections[3] = array[3] || null;
  }

  // Methods
  // possibleRooms(value) {
  //   this._linkedRooms[direction] = direction;
  // }

  moveRooms(direction) {
    if (direction in this._linkedRooms) {
      console.log(`within moveRooms ` + this._linkedRooms[direction]);
      return this._linkedRooms[direction];
    } else alert("You can't go this way");
    return this;
  }

  linkRooms(direction, roomToLink) {
    this._linkedRooms[direction] = roomToLink;
  }

  describe() {
    return `This is the ${this._name} you see ${this.description}`;
  }

  // gainStats(specialAction){
  //  CharacterTurn.specialAction++
  // }

  // loseStats(specialAction){
  //  CharacterTurn.specialAction--
  // }
}

// Creation of rooms
// #region
const EntranceHall = new Room(
  "Entrance Hall",
  "EntranceHall",
  null,
  "an open entrance way leading to the Foyer to the west, untravelled rooms lie in the other directions",
  ["ground"],
  [0, 0],
  ["north", "east", "south", null]
);

const Foyer = new Room(
  "Foyer",
  "Foyer",
  null,
  "an empty foyer with a clock, to the west is a Grand Staircase and to the east is the Entrance Hall",
  ["ground"],
  [-1, 0],
  ["north", null, "south", null]
);

const GrandStaircase = new Room(
  "Grand Staircase",
  "GrandStaircase",
  null,
  "a grand staircase leading to the upper level of the house",
  ["ground"],
  [-2, 0],
  [null, null, null, null]
);

const CollapsedRoom = new Room(
  "Collapsed Room",
  "CollapsedRoom",
  null,
  "a large hole in the floor, you noticed it too late and are already falling",
  ["upper", "ground"],
  [null, null],
  ["north", "east", "south", "west"]
  // "You must attempt a Speed roll of 5+ to avoid falling. If you fail the roll, draw the basementLanding tile and put it in play. You fall there and table 1 die of physical damage."
);

const BasementLanding = new Room(
  "Basement Landing",
  "BasementLanding",
  null,
  "an empty room with part of the roof of the above room with you",
  ["basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  ["north", "east", "south", "west"]
);

const UpperLanding = new Room(
  "Upper Landing",
  "UpperLanding",
  null,
  "an open landing area with rooms in all directions",
  ["upper"],
  [null, null],
  // ["north", "east", "south", "west"]
  ["north", "east", "south", "west"]
);

const StairsFromBasement = new Room(
  "StairsFromBasement",
  "StairsFromBasement",
  null,
  "a dark staircase conneting the Foyer to the basement",
  ["basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  ["north", null, "south", null]
);

const BloodyRoom = new Room(
  "Bloody Room",
  "BloodyRoom",
  "Item",
  "a room covered with weeks old blood and a chair",
  ["upper", "ground"],
  [-2, 0],
  ["north", "east", "south", "west"]
);

const CharredRoom = new Room(
  "Charred Room",
  "CharredRoom",
  "Omen",
  "a burnout room chared with the soot of a devasating fire",
  ["upper", "ground"],
  [null, null],
  ["north", "east", "south", "west"]
);

const Libary = new Room(
  "Libary",
  "Libary",
  "Event",
  "a large array of books on shelves",
  ["upper", "ground"],
  [null, null],
  [null, null, "south", "west"]
  // "Once per game, if you end your turn here, gain 1 knowledge"
);

const Conservatory = new Room(
  "Conservatory",
  "Conservatory",
  "Event",
  "a room with a glass conservartory with broken windows",
  ["upper", "ground"],
  [null, null],
  ["north", null, null, null]
  // ["north", "east", "south", "west"]
);

const Chapel = new Room(
  "Chapel",
  "Chapel",
  "Event",
  "a chapel with an altar at one end and many pews through the room",
  ["upper", "ground"],
  [null, null],
  ["north", null, null, null]
  // ["north", "east", "south", "west"]
);

const Gymnasium = new Room(
  "Gymnasium",
  "Gymnasium",
  "Omen",
  "a Gym with broken work-out equipment and weights",
  ["upper", "basement"],
  [null, null],
  [null, "east", "south", null]
  // ["north", "east", "south", "west"]
);

const ServantsQuarters = new Room(
  "Servants Quarters",
  "ServantsQuarters",
  "Omen",
  "a dormatory with beds and wash basins",
  ["upper", "basement"],
  [null, null],
  // [null, "east", "south", null]
  ["north", "east", "south", "west"]
);

const ResearchLaboratory = new Room(
  "Research Laboratory",
  "ResearchLaboratory",
  "Event",
  "an operating table and bookshelf full of medical journals",
  ["upper", "basement"],
  [null, null],
  // [null, "east", "south", null]
  ["north", null, "south", null]
);

const Vault = new Room(
  "Vault",
  "Vault",
  "Event",
  "an old vault door with working lock, you wonder if you can crack it",
  ["upper", "basement"],
  [null, null],
  // You can attempt a knowledge roll of 6+ to open and empty the vault, gainint 2 items
  // ["north", "east", "south", "west"]
  ["north", null, null, null]
);

const StoreRoom = new Room(
  "StoreRoom",
  "StoreRoom",
  "Item",
  "a nicely organised room full of old wears, could you maybe pick something up?",
  ["upper", "basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  ["north", null, null, null]
);

const Tower = new Room(
  "Tower",
  "Tower",
  "Event",
  "a pathway outside but it is hazardous, do you have the strength to get across?",
  ["upper"],
  [null, null],
  // You can attempt a Might roll of 3+ to cross, if you fall you stop moving
  // ["north", "east", "south", "west"]
  [null, "east", null, "west"]
);

const OperatingLaboratory = new Room(
  "Operating Laboratory",
  "OperatingLaboratory",
  "Event",
  "a medical lab where it seems lots of procedures have occured, were they all legal?",
  ["upper", "basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  [null, "east", "south", null]
);

const Gallery = new Room(
  "Gallery",
  "Gallery",
  "Omen",
  "a seated area with a view down to a room below",
  ["upper"],
  [null, null],
  // You can choose to fall to the Ballroom if its in the house. If you do, take 1 die of physical damage
  // ["north", "east", "south", "west"]
  ["north", null, "south", null]
);

const Bedroom = new Room(
  "Bedroom",
  "Bedroom",
  "Event",
  "a quaint bedroom with room for one's study",
  ["upper"],
  [null, null],
  // ["north", "east", "south", "west"]
  [null, "east", null, "west"]
);

const Balcony = new Room(
  "Balcony",
  "Balcony",
  "Omen",
  "a lovely view out away from the mansion, its a shame its too high to jump and escape",
  ["upper"],
  [null, null],
  // ["north", "east", "south", "west"]
  ["north", null, "south", null]
);

const Attic = new Room(
  "Attic",
  "Attic",
  "Event",
  "a long attic with barely any flooring to help you traverse to the otherside, there's a way out right...",
  ["upper"],
  [null, null],
  // When exiting, you must attempt a Speed roll of 3+ If you fail, lose 1 might (but continue moving)
  // ["north", "east", "south", "west"]
  [null, null, "south", null]
);

const MasterBedroom = new Room(
  "Master Bedroom",
  "MasterBedroom",
  "Omen",
  "a large bed and ceiling high windows, no time to take a nap however",
  ["upper"],
  [null, null],
  // ["north", "east", "south", "west"]
  ["north", null, null, "west"]
);

const CoalChute = new Room(
  "Coal Chute",
  "CoalChute",
  null,
  "a hole too late and you are already falling, you dust yourself off and find yourself in the basement",
  ["ground"],
  [null, null],
  // ["north", "east", "south", "west"]
  ["north", null, null, null]
);

const Graveyard = new Room(
  "Graveyard",
  "Graveyard",
  "Event",
  "a route outside and find yourself amongs the graves with no way out as the fence is too high",
  ["ground"],
  [null, null],
  // When exiting you must attempot a Sanity roll of 4+ If you fall, lose 1 knowledge (but continue moving)
  // ["north", "east", "south", "west"]
  [null, null, "south", null]
);

const Patio = new Room(
  "Patio",
  "Patio",
  "Event",
  "a paved outside area with some seating",
  ["ground"],
  [null, null],
  // ["north", "east", "south", "west"]
  ["north", null, "south", "west"]
);

const Gardens = new Room(
  "Gardens",
  "Gardens",
  "Event",
  "an overgrown garden looking like its been left to fend for itself for years",
  ["ground"],
  [null, null],
  // ["north", "east", "south", "west"]
  ["north", null, "south", null]
);

const Ballroom = new Room(
  "Ballroom",
  "Ballroom",
  "Event",
  "an open room with dance floor and piano",
  ["ground"],
  [null, null],
  // ["north", "east", "south", "west"]
  ["north", "east", "south", "west"]
);

const DiningRoom = new Room(
  "Dining Room",
  "DiningRoom",
  "Omen",
  "a large dining table with left over plates and food",
  ["ground"],
  [null, null],
  // ["north", "east", "south", "west"]
  ["north", "east", null, null]
);

const Kitchen = new Room(
  "Kitchen",
  "Kitchen",
  "Omen",
  "an old kitchen with old fashioned white goods",
  ["ground", "basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  ["north", "east", null, null]
);

const AbandonedRoom = new Room(
  "Abandoned Room",
  "AbandonedRoom",
  "Omen",
  "a completely empty room except the rug in the middle",
  ["ground", "basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  ["north", "east", "south", "west"]
);

const GameRoom = new Room(
  "Game Room",
  "GameRoom",
  "Event",
  "a chess board, cards table and a large real bear rug with complimenting deer antler trophy kills on the wall",
  ["upper", "ground", "basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  ["north", "east", "south", null]
);

const StatuaryCorridor = new Room(
  "Statuary Corridor",
  "StatuaryCorridor",
  "Event",
  "a cramp corridor with the statues broken across the floor",
  ["upper", "ground", "basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  ["north", null, "south", null]
);

const OrganRoom = new Room(
  "OrganRoom",
  "OrganRoom",
  "Event",
  "a large organ with pews lining the room, song books are littering the aisles",
  ["upper", "ground", "basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  [null, null, "south", "west"]
);

const DustyHallway = new Room(
  "Dusty Hallway",
  "DustyHallway",
  null,
  "a small empty hallyway, covered in dust (Suprisingly!)",
  ["upper", "ground", "basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  ["north", "east", "south", "west"]
);

const MysticElevator = new Room(
  "Mystic Elevator",
  "MysticElevator",
  null,
  "an elevator of all things, however this elevator seems different",
  ["upper", "ground", "basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  // Once per turn roll 2 dice and move this room next to any open door on: 4: Any floor, 3: Upper Floor, 2: Ground Floor, 1: Basement, 0: Basement, then take 1 die of physical damage
  ["north", null, null, null]
);

const CreakyHallway = new Room(
  "Creaky Hallway",
  "CreakyHallway",
  null,
  "a narrow hallway and as you move through it the floor creaks",
  ["upper", "ground", "basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  ["north", "east", "south", "west"]
);

const JunkRoom = new Room(
  "Junk Room",
  "JunkRoom",
  "Omen",
  "a room full of useless junk",
  ["upper", "ground", "basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  // When exiting, you must attempt a Might roll of 3+. If you fail lose 1 speed (but continue moving)
  ["north", "east", "south", "west"]
);

const Crypt = new Room(
  "Crypt",
  "Crypt",
  "Event",
  "a few coffins, lets hope you don't spend the night in here",
  ["basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  // If you end your turn here, take 1 point of Mental damage
  ["north", null, null, null]
);

const Catacombs = new Room(
  "Catacombs",
  "Catacombs",
  "Omen",
  "a labarynth of tunnels with remains of the dead",
  ["basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  // You can attempt a Sanity roll of 6+ to cross, if you fail, you stop moving
  ["north", null, "south", null]
);

const FurnaceRoom = new Room(
  "Furnace Room",
  "FurnaceRoom",
  "Omen",
  "a large furnace with coal pit, it's hot in here",
  ["basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  // If you wend your turn here, take 1 point of physical damage
  ["north", null, "south", "west"]
);

const Larder = new Room(
  "Larder",
  "Larder",
  "Item",
  "a storage room racks of milk, butter and cooked meat",
  ["basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  // Once per game if you end your turn here, gain 1 might
  ["north", null, "south", null]
);

const PentagramChamber = new Room(
  "Pentagram Chamber",
  "PentagramChamber",
  "Omen",
  "a large empty room, with a drawn pentagon in a circle, this place gives you the chills",
  ["basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  // When exiting you must attempt a Knowledge roll of 4+. If you fail lose 1 sanity (but continue moving)
  [null, "east", null, null]
);

const WineCellar = new Room(
  "Wine Cellar",
  "WineCellar",
  "Item",
  "a line of wine racks and large cask barrels",
  ["basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  ["north", null, "south", null]
);

const UndergroundLake = new Room(
  "Underground Lake",
  "UndergroundLake",
  "Event",
  "an open body of water, luckily you can just make your way around the edge without getting wet",
  ["basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  ["north", "east", null, null]
);

const Chasm = new Room(
  "Chasm",
  "Chasm",
  null,
  "a fall to almost certain death, with a rickity rope bridge across",
  ["basement"],
  [null, null],
  // ["north", "east", "south", "west"]
  // You can attempt a Speed roll of 3+ to cross. If you fail, you stop moving.
  [null, "east", null, "west"]
);

// #endregion

// console.log(Libary.specialAction[0]);
// console.log(Libary.specialAction[1]);

//Game Variables
let Rooms = [
  EntranceHall,
  Foyer,
  GrandStaircase,
  BasementLanding,
  UpperLanding,
  StairsFromBasement,
  BloodyRoom,
  CharredRoom,
  Libary,
  CollapsedRoom,
  Conservatory,
  Chapel,
  Gymnasium,
  ServantsQuarters,
  ResearchLaboratory,
  Vault,
  StoreRoom,
  Tower,
  OperatingLaboratory,
  Gallery,
  Bedroom,
  Balcony,
  Attic,
  MasterBedroom,
  DiningRoom,
  Ballroom,
  Gardens,
  Patio,
  CoalChute,
  Graveyard,
  Chasm,
  UndergroundLake,
  WineCellar,
  PentagramChamber,
  Larder,
  FurnaceRoom,
  Catacombs,
  Crypt,
  JunkRoom,
  CreakyHallway,
  MysticElevator,
  DustyHallway,
  OrganRoom,
  StatuaryCorridor,
  GameRoom,
  AbandonedRoom,
  Kitchen,
];

// Make a list of undiscovered rooms to pick from
// make a way that you can only select the rooms that are on the level you are on.

let discoveredRooms = [EntranceHall, Foyer, GrandStaircase];
let currentRoom = EntranceHall;
// create a part where it tells you the previous room
let previousRoom = {};
// the newroom is where you will be moving into if it has been undiscovered
let newRoom = {};
// I need to change changeRoom for if we are moving to a room that we already know about

// we can try to use the grid references to do this
let gameGridRef = [];

// console.log(currentRoom.name);
// console.log(currentRoom().describe());
// console.log(currentRoom.houseLevel);
// console.log(currentRoom.describe());
// console.log(currentRoom.gridRef[0]);
// console.log(currentRoom.gridRef[1]);
// console.log(currentRoom.objName);
// currentRoom = newRoom.objName;
// console.log(currentRoom);
// console.log(currentRoom.objName);

// Room Functions
function displayRoomInfo(room) {
  textContent = room.describe();

  document.getElementById("textArea").innerHTML = textContent;
  document.getElementById("userInput").focus();
}

function directionOpposite(direction) {
  if (direction === "north") {
    return "south";
  } else if (direction === "south") {
    return "north";
  } else if (direction === "east") {
    return "west";
  } else if (direction === "west") {
    return "east";
  } else alert("massive error");
}

function getNewRoomName() {
  result = Math.floor(Math.random() * 5);
  newRoomName = Rooms[result];
  newRoom = newRoomName.objName;
  return newRoomName;
}

function getNewRoomObj() {
  result = Math.floor(Math.random() * 5);
  newRoomName = Rooms[result];
  newRoom = newRoomName.objName;
  return newRoom;
}

// Game Functions
function startGame() {
  displayRoomInfo(currentRoom);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      command = document.getElementById("userInput").value;
      command = command.toLowerCase();
      const directions = ["north", "south", "east", "west"];
      if (directions.includes(command)) {
        if (!currentRoom._linkedRooms[command]) {
          // first what is the newRoom?
          newRoom = getNewRoomName();
          // need to call the new room if unknown and pass through the linkrooms to both the current room and the new room in the opposite direction
          currentRoom.linkRooms(command, newRoom);
          newRoom.linkRooms(
            directionOpposite(command.toLowerCase()),
            currentRoom
          );
          console.log(currentRoom._linkedRooms);
          console.log(newRoom._linkedRooms);
          currentRoom = currentRoom.moveRooms(command);
          displayRoomInfo(currentRoom);
          document.getElementById("userInput").value = "";
        } else {
          currentRoom = currentRoom.moveRooms(command);
          displayRoomInfo(currentRoom);
          document.getElementById("userInput").value = "";
        }
      } else {
        document.getElementById("userInput").value = "";
        alert("that is not a valid command, please try again");
      }
    }
  });
}

// Start game
startGame();
