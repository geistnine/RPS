let choices = ["rock", "paper", "scissors"]

function computerPlay(){
    let cpuSelection = Math.floor(Math.random() * 3 + 1)
    return cpuSelection
}

function mod(a, b) {
    const c = a % b;
    return c < 0 ? c + b : c;
}


console.log(computerPlay())
