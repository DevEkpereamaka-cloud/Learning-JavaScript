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

let myStack = [10, 20, 30, 40];
function removedItem() {
  return myStack.shift();
}
myStack.push(50);
console.log("myStack: " + JSON.stringify(myStack));
console.log(removedItem());
