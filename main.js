//Program must run on console
// return ll values first

// comoutor must generate random choices
//  "rock", "papers" or "scissors"
// add function that plays a single round
// function must have parameters for:
//  playerselection choice
//   must be case-insensitive
//  computor slecetion choice
//  function must respond with:
//  "You win" or "You lose" or "Its a Tie"


function getComputerChoice(){
    let computor_choices = ["rock", "paper", "scissors"] ;

    let random_choice = computor_choices[Math.floor(Math.random() * computor_choices.length)]

    return random_choice
}


function gameRound(playerSelection, computerSelection){


}

let playerSelection = "rock"
let computerSelection = getComputerChoice();

