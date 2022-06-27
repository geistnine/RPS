let choices = ["rock", "paper", "scissors"]

function computerPlay(){
    let cpuSelection = Math.floor(Math.random() * 3 + 1)
    return cpuSelection
}

function mod(a, b) {
    const c = a % b;
    return c < 0 ? c + b : c;
}

function RPS(choice1, choice2){
    if (choice1 === choice2){
        return "It's a tie!"
    } else if (mod(choice1 - choice2, choices.length) < choices.length / 2) {
        return "You win!"
    } else {
        return "You lose!"
    }
}


console.log(computerPlay())
