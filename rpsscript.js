let choices = ["rock", "paper", "scissors"]

function computerPlay(){
    let cpuSelection = Math.floor(Math.random() * 3)
    return cpuSelection
}

function mod(a, b) {
    const c = a % b;
    return c < 0 ? c + b : c;
}

function RPS(choice1, choice2){
    if (choice1 === choice2){
        return "It's a draw!"
    } else if (mod(choice1 - choice2, choices.length) < choices.length / 2) {
        return "You win! " + choices[choice1] + " beats " + choices[choice2] + "!"
    } else {
        return "You lose! " + choices[choice2] + " beats " + choices[choice1] + "!"
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        let selection = prompt("Rock, paper, or scissors?").toLowerCase()
        let playerChoice = choices.indexOf(selection)
        let cpuChoice = computerPlay()
        alert(RPS(playerChoice, cpuChoice))
    }
    return "Thanks for playing!"
}

console.log(game())
