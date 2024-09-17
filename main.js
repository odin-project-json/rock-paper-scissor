let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const a = Math.floor(Math.random() * 3) + 1;

    if(a == 1) {
        return 'rock';
    } else if(a == 2) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

function getHumanChoice() {
    let choice = prompt("Rock? Paper? Scissor? ");

    choice = choice.toLowerCase();

    while(choice != "rock" && choice != "paper" && choice != "scissor") {
        choice = prompt("Rock? Paper? Scissor? ");
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice == "rock") {
        if(computerChoice == "rock") {
            console.log("Draw");
        } else if(computerChoice == "paper") {
            console.log("You lose. Paper beats rock");
            computerScore++;
        } else {
            console.log("You win. Rock wins scissor");
            humanScore++;
        }
    } else if(humanChoice == "paper") {
        if(computerChoice == "rock") {
            console.log("You win. Paper beats rock");
            humanScore++;
        } else if(computerChoice == "paper") {
            console.log("Draw");
        } else {
            console.log("You lose. Scissor beat paper");
            computerScore++;
        }
    } else { /* Scissor */
        if(computerChoice == "rock") {
            console.log("You lose. Rock beats scissor");
            computerScore++;
        } else if(computerChoice == "paper") {
            console.log("You win. Scissor wins paper");
            humanScore++;
        } else {
            console.log("Draw");
        }
    }
}

// function playGame() {
//     for(let i = 0; i <= 4; i++) {
//         playRound(getHumanChoice(), getComputerChoice());
//     }
//     console.log(`Total Score: HUMAN ${humanScore} and COMPUTER ${computerScore}`);
// }

// playGame();


const rock_button = document.createElement('button');
rock_button.textContent = 'ROCK';

const paper_button = document.createElement('button');
paper_button.textContent = "PAPER";

const scissors_button = document.createElement('button');
scissors_button.textContent = "SCISSORS";




rock_button.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});
// paper_button.addEventListener('click', playRound('paper', getComputerChoice()));
// scissors_button.addEventListener('click', playRound('scissors', getComputerChoice()));

paper_button.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissors_button.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});


document.body.appendChild(rock_button);
document.body.appendChild(paper_button);
document.body.appendChild(scissors_button);
