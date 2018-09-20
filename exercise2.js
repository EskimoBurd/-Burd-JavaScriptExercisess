var question = prompt ("Do you want to play?");

if (question === "yes") {
  var result = "";
}

do {
  var word = prompt("Enter a word.");

  result +="" + word;

  question = prompt ("Do you want to play?");
}

while (question === "yes");

console.log(result);