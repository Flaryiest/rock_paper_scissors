function playRound(player, computer) {

    console.log(computer, "Computer Choice")
    if (player === "rock") {
        if (player === computer) {
            console.log("You Tied")
            return 0;
            
        }
        else if (computer === "scissors") {
            console.log("You Won");
            return 1;
        }
        else {
            console.log("You Lost :(");
            return -1;
        }
    }

    else if (player === "scissors") {
        if (player === computer) {
            console.log("You Tied");
            return 0;
        }
        else if (computer === "paper") {
            console.log("You Won");
            return 1;
        }
        else {
            console.log("You Lost :(");
            return -1;
        }
    }

    else if (player === "paper") {
        if (player === computer) {
            console.log("You Tied");
            return 0;
        }
        else if (computer === "rock") {
            console.log("You Won");
            return 1;
        }
        else {
            console.log("You Lost :(");
            return -1;
        }
    }
    
    else {
        console.log("Error Occurred")
    }

}

function playGame() {
    let finalResult = 0;
    for (let i = 1; i <= 5; i++ ) {
        
        playerOptions = ["rock", "paper", "scissors"];

        function getComputerChoice() {
            const computerOptions = ["rock", "paper", "scissors"];
            let computerChoice = Math.floor(Math.random() * 3);
            return computerOptions[computerChoice];
        }
        let computer = getComputerChoice();

        
        
        let playerChoice = prompt("Choose rock, paper, or scissors").toLowerCase();

        finalResult += playRound(playerChoice, computer);
        
        console.log("current score is: ", finalResult)
    }


    console.log(finalResult, "last Check")
    if (finalResult > 0) {
        return "You won the game" 
    }

    else if (finalResult = 0) {
        return "You tied the game"
    }

    else {
        return "You lost the game"
    }
    
}

console.log(playGame())



