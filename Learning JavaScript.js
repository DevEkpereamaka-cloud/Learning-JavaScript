var newLine =
  "\tMy name is Ekpereamaka\n\ti am lerning javascript\n\tthis is the third line";
console.log(newLine);
var myString = "this is the first line ";
myString += "\nthis is the second line";
console.log(myString);
var myName = "Ekpereamaka";
var myStr = "Hello my name is " + myName + " and i am learning JavaScript";
console.log(myStr);
var name = "JavaScript";
var nameLength = name.length;
console.log(nameLength);

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
