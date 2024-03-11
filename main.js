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

const playerSelection = "rock"
const computerSelection = getComputerChoice();


function checkWinner(){

    if (playerSelection == computerSelection){
        return "It is a Tie Master"
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Master"
    } else{
        return "Computor"
    }
}

let returnValue = checkWinner();


function gameRound(playerSelection, computerSelection){

    if (returnValue == "It is a Tie Master"){
        return `You lose Master: ${playerSelection} equals ${computerSelection}... TRY AGAIN`
    } else if (returnValue == "Master"){
        return `You win Master! ${playerSelection} beats ${computerSelection}`
    } else if (returnValue == "Computor"){
        return `Master you lose! ${computerSelection} beats ${playerSelection}`
    }
    
}

