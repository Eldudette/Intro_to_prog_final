//Enhance each function and put comments 
//Above each line of code explaining what is happening in your own words

function display (welcome) {
document.write("<h1>Welcome to the Space Casino!!!</h1>");
} 
function displayInstructions() {
    document.write ("<p>This is how you play</p>");
}

function play() {
var die1=Math.ceil(Math.random()*6);

var die2= Math.ceil(Math.random()*6);
console.log("Why isn't this working")
var sum= die1+die2
//This calls and runs the java function's math 
document.getElementById("die1").innerHTML ="you rolled a " + die1;
document.getElementById("die2").innerHTML="you rolled a " + die2;
document.getElementById("sum").innerHTML="You rolled a total of " + sum;
if (sum == 7|| sum==11) {
    document.getElementById("balls").innerHTML="you've won Space Marines!";
}
else if (die1==die2 && die1 % 2 ==0) {
    document.getElementById("balls").innerHTML= "DOUBLES - You've Won Captain!";
}
else { document.getElementById("balls").innerHTML="Roll again Guardsmen";
}
}
