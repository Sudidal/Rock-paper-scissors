const SCISSORS = "scissors";
const ROCK = "rock";
const PAPER = "paper";
const WIN = "You Win!"
const LOSE = "You Lose!"
const TIE = "Tie!"

let rounds;

StartGame();

function StartGame()
{
    rounds = prompt("How many rounds you want to play?", 1);
    console.log("Rounds: " + rounds);
    SelectChoices();
}

function SelectChoices()
{
    let computerChoise = randomComputerChoice();
    let playerChosice = prompt("Rock, Paper or Scissors", "");
    playerChosice = playerChosice.toLowerCase();
    PlayRound(playerChosice, computerChoise);
}

function randomComputerChoice()
{
    let random = Math.floor(Math.random() * 3);
    if(random == 0)
    {
        return ROCK;
    }
    else if(random == 1)
    {
        return PAPER;
    }
    else
    {
        return SCISSORS
    }
}

function PlayRound(playerChosice, computerChoice)
{
    let result = "Error"
    if(playerChosice == PAPER)
    {  
        result = paperCase(computerChoice);
    }
    else if(playerChosice == ROCK)
    {
        result = rockrCase(computerChoice);
    }
    else if(playerChosice == SCISSORS)
    {
        result = scissorsCase(computerChoice);
    }
    else
    {
        console.log("Please Enter A Valid Name");
        SelectChoices();
    }
    result = result.concat(", " + playerChosice + " - " + computerChoice);
    console.log(result);
    PlayAgain();
}

function PlayAgain()
{
    rounds--;
    if(rounds > 0)
    {
        SelectChoices();
    }
    else
    {
        let choise = prompt("Do you want to play again? y/n")
        if(choise == 'y')
        {
            StartGame();
        }
        else if(choise == 'n')
        {
            console.log("as you want!");
        }
        else
        {
            PlayAgain();
        }
    }
}

function paperCase(computerChoise)
{
    let result = "Error"
    if(computerChoise == ROCK)
    {
        result = WIN;
    }
    else if(computerChoise == SCISSORS)
    {
        result = LOSE;
    }
    else
    {
        result = TIE;
    }
    return result
}
function rockrCase(computerChoise)
{
    let result = "Error"
    if(computerChoise == SCISSORS)
    {
        result = WIN;
    }
    else if(computerChoise == PAPER)
    {
        result = LOSE;
    }
    else
    {
        result = TIE;
    }
    return result
}
function scissorsCase(computerChoise)
{
    let result = "Error"
    if(computerChoise == PAPER)
    {
        result = WIN;
    }
    else if(computerChoise == ROCK)
    {
        result = LOSE;
    }
    else
    {
        result = TIE;
    }
    return result
}