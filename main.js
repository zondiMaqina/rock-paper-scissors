// create function that will create random choice of rock, paper or scissors.
//  it will make the computer play.

// create function that plays single round
//  it should have two parameters
//  playerSelection && computerSelection
//   It should return string function 
//   `you win` or `you lose` ect.

// playerSelection is for your choice of move
// computerSelection is for the coputer choice of move

// if statements to declare winner on game

function getComputedChoice(){
    let array = [
        `rock`, `paper`, `scissors`
    ]

    let randomChoice = array[Math.floor(Math.random() * array.length)]

    return randomChoice;
}


function RoundOne(playerSelection, computerSelection){

    
}

RoundOne(function(){
    let input = window.prompt("Enter your move Master")

    let smallcase_input = input.toLocaleLowerCase().trimStart().trimEnd() ;

    return smallcase_input ;

}, getComputedChoice)