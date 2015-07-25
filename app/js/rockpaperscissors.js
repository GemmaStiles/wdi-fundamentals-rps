////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return (move || getInput());
}

function getComputerMove(move) {
    return (move || randomPlay());
}

function getWinner(playerMove,computerMove) {
    var winner;

    if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player';
    }  
    
    if (playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player';
    }

    if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player';
    }
    
    if (playerMove === 'rock' && computerMove === 'paper') {
        winner = 'computer';
    }
    
    if (playerMove === 'paper' && computerMove === 'scissors') {
        winner = 'computer';
    }
    
    if (playerMove === 'scissors' && computerMove === 'rock') {
        winner = 'computer';
    }
    
    if (playerMove === computerMove) {
        winner = 'tie';
    } 

    return winner;

}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
   
     while (playerWins < 5 && computerWins < 5) {

        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        
        if (winner === 'player') {
            playerWins++; 
            console.log('Player wins with ' + playerMove);
            console.log('Computer loses with ' + computerMove);
        }
        
        else if (winner === 'computer') {
            computerWins++;
            console.log('Computer wins with ' + computerMove);
            console.log('Player loses with ' + playerMove);
        }  

        else if (winner === 'tie') {
            console.log('This round is a tie');
        }
    
    console.log ("Player Score: " + playerWins);
    console.log ("Computer Score: " + computerWins);
    
    }

    if (playerWins === 5) {
        console.log ('Well done, you have won five rounds!');
    }

    else if (computerWins === 5) {
        console.log ('The computer has won five rounds!');
    }

}

playToFive();  
   

