results = document.querySelector(".results")
rock = document.querySelector(".rock")
scissors = document.querySelector(".scissors")
paper = document.querySelector(".paper")

function getComputerChoice() {
    const computerOptions = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * 3);
    return computerOptions[computerChoice];
}

rock.addEventListener("click", function () { currentScore += playRound("rock", getComputerChoice())})
scissors.addEventListener("click", function () { currentScore += playRound("scissors", getComputerChoice())})
paper.addEventListener("click", function () { currentScore += playRound("paper", getComputerChoice())})
      
let totalRoundsPlayed = 0;
let currentScore = 0;
function endGame() {
if (totalRoundsPlayed == 5) {
    console.log("test")
    if (currentScore > 0) {
        alert("You Won!")
    }
    else if (currentScore = 0) {
        alert("You Tied")
    }
    else {
        alert("You Lost")
    }
}
}
function playRound(player, computer) {
    totalRoundsPlayed++
    endGame()
    console.log(totalRoundsPlayed, currentScore)
    console.log(player, computer)
    if (player === "rock") {
        if (player === computer) {
            tie = document.createElement("div");
            tie.textContent = "You Tied :/";
            tie.classList.add("content");
            results.append(tie);
            return 0;
            
        }
        else if (computer === "scissors") {
            win = document.createElement("div");
            win.textContent = "You Won!";
            win.classList.add("content")
            results.append(win);
            return 1;
        }
        else {
            loss = document.createElement("div");
            loss.classList.add("content")
            loss.textContent = "You loss :(";
            results.append(loss);
            return -1;
        }
    }

    else if (player === "scissors") {
        if (player === computer) {
            tie = document.createElement("div");
            tie.textContent = "You Tied :/";
            tie.classList.add("content");
            results.append(tie);
            return 0;
        }
        else if (computer === "paper") {
            win = document.createElement("div");
            win.textContent = "You Won!";
            win.classList.add("content")
            results.append(win);
            return 1;
        }
        else {
            loss = document.createElement("div");
            loss.classList.add("content")
            loss.textContent = "You loss :(";
            results.append(loss);
            return -1;
        }
    }

    else if (player === "paper") {
        if (player === computer) {
            tie = document.createElement("div");
            tie.textContent = "You Tied :/";
            tie.classList.add("content");
            results.append(tie);
            return 0;
        }
        else if (computer === "rock") {
            win = document.createElement("div");
            win.textContent = "You Won!";
            win.classList.add("content")
            results.append(win);
            return 1;
        }
        else {
            loss = document.createElement("div");
            loss.classList.add("content")
            loss.textContent = "You loss :(";
            results.append(loss);
            return -1;
        }
    }
    
    else {
        console.log("Error Occurred")
    }

}

