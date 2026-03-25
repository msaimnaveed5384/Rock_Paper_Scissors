let humanScore=0,computerScore=0;
function getComputerChoice() 
{
    let value;
    value = Math.random();

    if (value > 0.66) 
    { 
        return "ROCK";
    } 
    else if (value > 0.33) 
    {
        return "PAPER";
    } 
    else 
    {
        return "SCISSORS";
    }
}
function getHumanChoice()
{
    let user_value = prompt("Enter your move: ");
    user_value = user_value.toLowerCase(); // convert to lowercase

    if(user_value == "rock")
    {
        return "ROCK";
    }
    else if(user_value == "paper")
    {
        return "PAPER";
    }
    else if(user_value == "scissors")
    {
        return "SCISSORS";
    }
}

function PlayRound(humanChoice,computerChoice)
{
    
}
const humanChoice=getHumanChoice();
const computerChoice=getComputerChoice();

PlayRound(humanChoice,computerChoice);