/* ROCK PAPER SCISSORS */

/*
A. COMPUTER CHOICE

Start;
Make a variable that will store the value from the function
Make a function
 Make a variable that contains the values for RPS
 Use a method to return a random value from said variable
 Return the value
;Done */

// const computerChoice = getComputerChoice();

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

/*
B. HUMAN CHOICE

Start;
Make a variable that will store the value from the function
Make a function;
 Ask user to input their choice
Return the value--------------+o999999999999999999999999lpppp-
;Done */

// const humanChoice = getHumanChoice()

function getHumanChoice() {
  return prompt("Choose between Rock, Papers, and Scissors");
}

/* 
C.SCOREBOARD

Start;
Make two variables that will contain the scores for both Human & Computer
 Input 0 as its value;
;End */

let humanScore = 0;
let computerScore = 0;

/* 
D. Playing a Round

Start;
Make a function & set two parameters (the human's choice & the computer's choice);
 Call the function for the human's choice
 Call the function for the computer's choice;

///
&ROCK&

If human's choice is rock and computer's choice is paper
 Display 'You win! Rock beats Paper' 

If human's choice is rock and computer's choice is scissors
 Display 'You win! Rock beats Scissors'  

If human's choice is rock and computer's choice is rock
 Display 'Its a tie!' 

If choices are reversed display e.g 'You lose! Rock beats Paper'

&SCISSORS&

If human's choice is scissors and computer's choice is paper
 Display 'You win! Scissors beats Paper' 

If human's choice is scissors and computer's choice is scissors
 Display 'It's a tie!'  

If human's choice is scissors and computer's choice is rock
 Display 'You lose! Rock beats Scissors!' 

If choices are reversed display e.g 'You lose! Rock beats Paper'

&PAPER&

If human's choice is paper and computer's choice is paper
 Display 'It's a tie!' 

If human's choice is paper and computer's choice is scissors
 Display 'You lose! Scissors beats Paper'  

If human's choice is paper and computer's choice is rock
 Display 'You win! Paper beats Rock' 

If choices are reversed display e.g 'You lose! Rock beats Paper'
///

Increment the variable respective to who won the game
;Done */

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  if (humanChoice === "rock" && computerChoice === "rock") {
    alert("It's a tie!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    alert("You win! Rock beats Scissors");
    a = ++humanScore;
  }

  if (humanChoice === "paper" && computerChoice === "paper") {
    alert("It's a tie!");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    alert("You win! Paper beats rock");
    a = ++humanScore;
  }

  if (humanChoice === "scissors" && computerChoice === "scissors") {
    alert("It's a tie");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    alert("You win! Scissors beats Paper");
    a = ++humanScore;
  }

  if (humanChoice === "rock" && computerChoice === "paper") {
    alert("You lose! Rock beats Paper");
    b = ++computerScore;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    alert("You lose! Scissors beats Paper");
    b = ++computerScore;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    alert("You lose! Scissors beats Paper");
    b = ++computerScore;
  }
}

/* E. Playing a Match

START;
1. Make a function
2. Repeat the 'playRound' function 5 times, displaying the current round before the function starts 
and displaying the current score after the round.
3. Display either 'You win' or 'You lose' dependent on the outcome
;END */

function playMatch() {
  alert("ROUND 1");
  playRound();
  alert("The current score is " + humanScore + " - " + computerScore);
  alert("ROUND 2");
  playRound();
  alert("The current score is " + humanScore + " - " + computerScore);
  alert("ROUND 3");
  playRound();
  alert("The current score is " + humanScore + " - " + computerScore);
  alert("ROUND 4");
  playRound();
  alert("The current score is " + humanScore + " - " + computerScore);
  alert("ROUND 5");
  playRound();
  if (humanScore > computerScore) {
    alert("You won the game!");
  } else if ((humanScore = computerScore)) {
    alert("The game ends in a tie.");
  } else {
    alert("You lost the game!");
  }
}

playMatch();
