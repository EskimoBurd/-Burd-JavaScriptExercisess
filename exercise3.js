var name = "Matt";

var continueplaying = false;

var play = prompt("Would you like to print your name?");

while (play === "yes"){
    console.log(name);

play = prompt("Would you like to print your name again?");

name += "!";
}