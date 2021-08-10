class Room {
  constructor(name, symbol1, description) {
    this._name = name;
    this._symbol1 = symbol1;
    this._description = description;
    this._linkedRooms = {};
  }

  get name() {
    return this._name;
  }

  get symbol1() {
    return this._symbol1;
  }

  get description() {
    return this._description;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, its needs to be over 3 characters in length");
      return;
    }
    this.name = value;
  }

  describe() {
    return `I am in the ${this.name} and i can see ${this.description}`;
  }

  linkRooms(direction, roomToLink) {
    this._linkedRooms[direction] = roomToLink;
  }

  moveRooms(direction) {
    if (direction in this._linkedRooms) {
      return this._linkedRooms[direction];
    } else alert("You can't go this way");
    return this;
  }
}

class Character {
  constructor(name, description, conversation) {
    this._name = name;
    this._description = description;
    this._conversation = conversation;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get conversation() {
    return this._conversation;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, its needs to be over 3 characters in length");
      return;
    }
    this.name = value;
  }

  set description(value) {
    this._description = value;
  }

  set conversation(value) {
    this._conversation = value;
  }

  describe() {
    return `I am the charater ${this.name}`;
  }
}

// Sub Class
class Enemy extends Character {
  constructor(name, description, conversation, weakness) {
    super(name, description, conversation);
    this._weakness = weakness;
  }

  fight(Item) {
    if ((Item = this._weakness)) {
      return true;
    } else {
      return false;
    }
  }
}

const Zombie = new Enemy(
  "Zombie",
  "A dead walking human",
  "Arrrghhhhh",
  "loss of head"
);

console.log(Zombie.describe());
console.log(Zombie.fight("loss of head"));

class Item {
  constructor(name, description) {
    this._name = name;
    this._description = description;
  }

  get name() {
    return this._name;
  }

  get _description() {
    return this._description;
  }

  describe() {
    return `I am the item " + ${this.name}`;
  }
}

// Creation of Rooms
const Kitchen = new Room(
  "Kitchen",
  "omen",
  "a sink, a knife, a cooker and a fridge"
);

const GameRoom = new Room(
  "GameRoom",
  "omen",
  "a chess board, a table with playing cards"
);

const OrganRoom = new Room("OrganRoom", "omen", "an organ and rows of pews");
const JunkRoom = new Room("JunkRoom", "item", "lots of junk");
const Crypt = new Room("Crypt", "omen", "a few coffins");

// Creation of Characters
const Darrin = new Character(
  `Darrin "Flash" Williams`,
  "Red character",
  "I am fast"
);
const Brandon = new Character(`Brandon Jaspers`, "Green character", "I am sad");
const Vivian = new Character(`Vivian Lopez`, "Blue character", "I am scared");
const Prof = new Character(
  `Professor Longfellow`,
  "White character",
  "I am smart"
);
// const Jenny = new Character(`Jenny LeClerc`, "Purple character", "I am mad");
const Missy = new Character(
  `Missy Dubourde`,
  "Yellow character",
  "I am a young girl"
);

// Creation of Items
const Idol = new Character(
  `Idol`,
  "Perhaps it's chosen you for some greater purpose. Like human sacrifice"
);
const Revolver = new Character(`Revolver`, "An old, potent looking weapon");
const LuckyStone = new Character(
  `Lucky Stone`,
  "A smooth, ordinary-Looking rock. You sense it will bring good fortune"
);
const Armor = new Character(
  `Armor`,
  "It's just prop armor from a Renaissance fair, but it's still metal"
);

// Linking of Rooms
Kitchen.linkRooms("north", GameRoom);
Kitchen.linkRooms("east", OrganRoom);
Kitchen.linkRooms("south", JunkRoom);
Kitchen.linkRooms("west", Crypt);

GameRoom.linkRooms("south", Kitchen);

OrganRoom.linkRooms("west", Kitchen);

JunkRoom.linkRooms("north", Kitchen);

Crypt.linkRooms("east", Kitchen);

// Room Functions
function displayRoomInfo(room) {
  textContent = room.describe();

  document.getElementById("textArea").innerHTML = textContent;
  document.getElementById("userInput").focus();
}

console.log(Kitchen._linkRooms[command]);
// Game Functions
function startGame() {
  currentRoom = Crypt;
  displayRoomInfo(currentRoom);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      command = document.getElementById("userInput").value;
      command = command.toLowerCase();
      const directions = ["north", "south", "east", "west"];
      if (directions.includes(command.toLowerCase())) {
        currentRoom = currentRoom.moveRooms(command);
        displayRoomInfo(currentRoom);
        document.getElementById("userInput").value = "";
      } else {
        document.getElementById("userInput").value = "";
        alert("that is not a valid command, please try again");
      }
    }
  });
}

// Start game
startGame();
