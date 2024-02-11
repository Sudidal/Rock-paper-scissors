const SCISSORS = "scissors";
const ROCK = "rock";
const PAPER = "paper";
const WIN = "You Win!"
const LOSE = "You Lose!"
const TIE = "Tie!"

const roundsInput = document.querySelector("#roundsinput");
const startBtn = document.querySelector("#startbtn");
const rockBtn = document.querySelector("#rockbtn");
const paperBtn = document.querySelector("#paperbtn");
const scissorsBtn = document.querySelector("#scissorsbtn");
const resultTxt = document.querySelector("#result")
const compScoreTxt = document.querySelector("#compscore")
const playerScoreTxt = document.querySelector("#playerscore")

let rounds = 0;
let compScore = 0;
let playerScore = 0;

roundsInput.value = 1;
changeButtonsState();

startBtn.addEventListener("click", StartGame);
roundsInput.addEventListener("keypress", (Event) => 
{
    if(Event.key == "Enter")
    {
        Event.preventDefault();
        startBtn.click();
    }
});
rockBtn.addEventListener("click", () => 
{
    SelectChoices(ROCK);
});
paperBtn.addEventListener("click", () => 
{
    SelectChoices(PAPER);
});
scissorsBtn.addEventListener("click", () => 
{
    SelectChoices(SCISSORS);
});

function StartGame()
{
    rounds = roundsInput.value;
    console.log("Rounds: " + rounds);
    playerScore = 0;
    compScore = 0;
    setTxtValue();
    changeButtonsState();
}

function SelectChoices(_plchoice)
{
    if(rounds != 0)
    {
        let computerChoice = randomComputerChoice();
        let playerChosice = _plchoice;
        PlayRound(playerChosice, computerChoice);
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
        console.log("Please Enter A Valid Choice!");
        SelectChoices();
        return;
    }
    if(result == WIN)
    {
        playerScore++;
    }
    else if(result == LOSE)
    {
        compScore++;
    }
    result = result.concat(", " + playerChosice + " - " + computerChoice);
    rounds--;
    changeButtonsState();
    setTxtValue(result);
}

function setTxtValue(result = "")
{
    resultTxt.innerText = result;
    playerScoreTxt.innerText = "Player Score: " + playerScore;
    compScoreTxt.innerText = "Computer Score: " + compScore;
    
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

function changeButtonsState()
{
    if(rounds == 0)
    {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
    else
    {
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
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