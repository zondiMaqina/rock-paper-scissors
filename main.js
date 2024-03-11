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
// function to play game as many times as you want

let computor_choices = ["rock", "paper", "scissors"] ;

function getComputerChoice(){
    let random_choice = computor_choices[Math.floor(Math.random() * computor_choices.length)]

    return random_choice
}    


function checkWinner(playerSelection, computerSelection){

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



function gameRound(playerSelection, computerSelection){

    const returnValue = checkWinner(playerSelection, computerSelection);


    if (returnValue == "It is a Tie Master"){
        return `You lose Master: ${playerSelection} equals ${computerSelection}... TRY AGAIN`
    } else if (returnValue == "Master"){
        return `You win Master! ${playerSelection} beats ${computerSelection}`
    } else if (returnValue == "Computor"){
        return `Master you lose! ${computerSelection} beats ${playerSelection} Computor Wins`
    }
    
}

function playGame(){

    let input = window.prompt("Enter your Move Master")

    let input_case_insensitive = input.toLocaleLowerCase()

    let master_wins = 0;
    let totalWins = 0;

    let playerSelection = input_case_insensitive

    for (let rounds = 1; rounds <= 5; rounds ++){

        
        let computerSelection = getComputerChoice();  
        console.log(`round: ` + gameRound(playerSelection, computerSelection));    
        
        if (
            (gameRound(playerSelection, computerSelection) == `You win Master! ${playerSelection} beats ${computerSelection}`)
        ){
            master_wins += 1;
            
        }
    }

    totalWins = master_wins;
    console.log(`Your total wins are ${totalWins} Master!!!`)

    if (totalWins < 3){
        console.log("You lose Master...")
    }else{
        console.log(`You win my master!!!`)
    }
}


playGame()