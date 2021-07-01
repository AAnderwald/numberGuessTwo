let rand = Math.floor(Math.random() * 100) + 1;
var turns = 5;
/* timer runs 40 down but how to stop it when number is guess correcty.  
var myVar = setInterval(function(){ myTimer() }, 1000);
var secondlimit = 40;

function myTimer() {
if(secondlimit == 0)
{
    myStopFunction();
}

document.getElementById("timerDisplay").innerHTML = '00:' + zeroPad(secondlimit,2);
secondlimit = secondlimit  - 1;

}

function myStopFunction() {
    clearInterval(myVar);
}

function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}
*/
document.getElementById("submitGuess").onclick = function checkNumber(){
   

    var guess = document.getElementById("guessBox").value;
    
    if (guess == rand){
            alert("Contratualations!");
            return;
    } else {
        turns--;
        if (guess < rand) {
            alert ("Too low, try again, you have remaining " + turns);
        } else if (guess > rand) {
            alert ("Too high, one more time, you have remaining " + turns);
        }
    }
    if (turns==0){
        alert ("Oop! Try again.");
       }
}
  
    function startNewGame() {
        turns = 5;
        num = Math.floor(Math.random() * 100) + 1;
        checkNumber();
        }
        