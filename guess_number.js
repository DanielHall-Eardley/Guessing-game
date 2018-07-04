const readlineSync = require('readline-sync');
/*I created the functions
 and then I daisy chained them all together in the correct order*/

function startGame() {
    var init = readlineSync.question("Initalize" + " ");
    if (init == "yes" || init == "affirmative") {
        getName();
    } else {
        console.log("Type yes to start the game");
        startGame()
    }
}
/*I referenced the startgame function so it loops back on itself,
 ie; you have to play the game*/


function getName() {
    var userName = readlineSync.question("Give me your clothes, boots and your name" + " ");
    var question = readlineSync.question(userName + " " + "do you want to play a game?" + " ");
    if (question == "affirmative" || question == "yes") {
        getMaxFromUser();
    } else {
        console.log("You have not complied. Your game is terminated")
    }
}

/*the variables created in this function get passed on to the next function*/
function getMaxFromUser() {
    var number = Number(readlineSync.question("Choose a number" + " "));
    if (!isNaN(number)|| number !== 0 ) {
        var rndNumber = randomNumber(number);
        var userGuess = Number(readlineSync.question("Guess a number between 0" + " " + number + " "));
 isGuessCorrect(userGuess, rndNumber);
    } else  {
        console.log("You have not complied. Your game is terminated");
    }
}


function randomNumber(rndNumber) {
    var rndNumber = Math.floor((Math.random() * rndNumber) + 1);
    return rndNumber
}
/*this function repeats until the correct answer is given
 and then gives an option to restart the game*/  

function isGuessCorrect(userGuess, rndNumber) {
    while (userGuess !== rndNumber) {
        if (userGuess < rndNumber && !isNaN(userGuess)|| userGuess !== 0) {
            console.log("C'mon, push it a little higher");
            var userGuess = Number(readlineSync.question(" "));

        } else if (userGuess > rndNumber && !isNaN(userGuess|| userGuess !== 0)) {
            console.log("C'mon push it a little lower");
            var userGuess = Number(readlineSync.question(" "));

        } else if (userGuess === rndNumber) {}
    }
    console.log("You got it! Hasta la vista baby!");
    let playAgain = readlineSync.question("Would you like to play again?" + " ")
    if (playAgain === "yes") {
        startGame()
    } else {
        console.log("No Problemo !")
    }
}

startGame()