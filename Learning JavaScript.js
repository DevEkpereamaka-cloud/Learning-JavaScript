function wordBrackets(aNoun, anAdjective, aVerb, anadverb) {
  let result = " ";
  result +=
    "The " +
    anAdjective +
    " " +
    aNoun +
    " " +
    aVerb +
    " us " +
    anadverb +
    " we entered the compound";
  return result;
}

console.log(wordBrackets("Dog", "Big", "chased", "immediately"));

let myArray = ["I am a ", " backend developer "];
myArray.push(" in training");
console.log(myArray);

let myStack = [10, 20, 30, 40];
function removedItem() {
  return myStack.shift();
}
myStack.push(50);
console.log("myStack: " + JSON.stringify(myStack));
console.log("removedItem: " + JSON.stringify(removedItem()));

let ourArray = [["Knowledge"], ["Strength"], ["Discipline"], ["Laziness"]];
let badArray = ourArray.pop();
console.log(ourArray);
console.log(badArray);

function kilimanjaro(bakery, restaurant) {
  bakery.push(restaurant);
  return bakery.shift();
}
let theQueue = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("in the morning: " + JSON.stringify(theQueue));
console.log(kilimanjaro(theQueue, 9));
console.log("in the afternoon: " + JSON.stringify(theQueue));

let myTray = [
  ["your with me too", "ate nine"],
  ["lets plant the tree", "yeah he was forgiven"],
];

function stillOnSwitch(num) {
  switch (num) {
    case 1:
      return "GOD is #1";
      break;
    case 2:
      return myTray[0][0];
      break;
    case 3:
      return myTray[1][0];
      break;
    case 4:
      return myTray[1][1];
      break;
    case 7:
      return myTray[0][1];
      break;
    default:
      return "haha LOL";
  }
}
console.log(stillOnSwitch(1));
