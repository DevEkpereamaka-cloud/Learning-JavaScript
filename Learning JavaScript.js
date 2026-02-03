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
myArray.push([" in training"]);
console.log(myArray);
