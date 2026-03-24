function getComputerChoice() {
    let value;
    value = Math.random();

    if (value > 0.66) 
    { 
        console.log("ROCK");
    } 
    else if (value > 0.33) 
    {
        console.log("PAPER");
    } 
    else 
    {
        console.log("SCISSORS");
    }
}
getComputerChoice();