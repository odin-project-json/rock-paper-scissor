let humanScore = document.createElement('div');
humanScore.textContent = 0;

let computerScore = document.createElement('div');
computerScore.textContent = 0;

document.body.appendChild(humanScore);
document.body.appendChild(computerScore);



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

    if(humanScore.textContent == 5) {
        alert("HUMAN WON!");
        humanScore.textContent = 0;
        computerScore.textContent = 0;
        
    } else if(computerScore.textContent == 5) {
        alert("COMPUTER WON!");
        humanScore.textContent = 0;
        computerScore.textContent = 0;
        
    }

    const div = document.createElement('div');

    document.body.appendChild(div);

    if(humanChoice == "rock") {
        if(computerChoice == "rock") {
            div.textContent = "Draw";
            
        } else if(computerChoice == "paper") {
            div.textContent = "You lose. Paper beats rock";
            computerScore.textContent++;
        } else {
            div.textContent = "You win. Rock wins scissor";
            humanScore.textContent++;
        }
    } else if(humanChoice == "paper") {
        if(computerChoice == "rock") {
            div.textContent = "You win. Paper beats rock";
            humanScore.textContent++;
        } else if(computerChoice == "paper") {
            div.textContent = "Draw";
        } else {
            div.textContent = "You lose. Scissor beat paper";
            computerScore.textContent++;
        }
    } else { /* Scissor */
        if(computerChoice == "rock") {
            div.textContent = "You lose. Rock beats scissor";
            computerScore.textContent++;
        } else if(computerChoice == "paper") {
            div.textContent = "You win. Scissor wins paper";
            humanScore.textContent++;
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
