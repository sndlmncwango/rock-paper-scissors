let player = 0;
let cpu = 0;
function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*3)+1;
    if(randomChoice===1){
        choice = "ROCK"
    }else if(randomChoice===2){
        choice = "PAPER"
    }else{
        choice = "SCISSOR"
    }
    return choice
}
function playRound(user,computer){
    if(user=="ROCK" && computer =="SCISSOR"){
        console.log("You Win! ROCK beats SCISSOR")
        player ++
    }else if(user=="ROCK" && computer=="PAPER"){
        console.log("You Lose! PAPER beats ROCK")
        cpu ++
    }else if(user == "ROCK" && computer == "ROCK"){
        console.log("its a draw,play again")
    }else if(user == "PAPER" && computer == "ROCK"){
        console.log("You Win! PAPER beats ROCK")
        player ++
    }else if(user == "PAPER" && computer == "SCISSOR"){
        console.log("You Lose! SCISSOR beats PAPER")
        cpu ++
    }else if(user == "PAPER" && computer == "PAPER"){
        console.log("its a draw,play again")
    }else if(user == "SCISSOR" && computer == "PAPER"){
        console.log("You Win! SCISSOR beats PAPER")
        player ++
    }else if(user == "SCISSOR" && computer == "ROCK"){
        console.log("You Lose! ROCK beats SCISSOR")
        cpu ++
    }else if(user == "SCISSOR" && computer == "SCISSOR"){
        console.log("Its a draw,play again")
    }
}
//console.log(`Player choice: ${playerSelection}, Computer choice: ${computerSelection}`)
function game(){
    for(let i = 1;i<6;i++){
        playerSelection = prompt("select your choice").toLocaleUpperCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection)
    }
    if (player > cpu){
        console.log(`you Win! score is ${player}:${cpu}`)
        player = 0;
        cpu = 0;
    }else if(player == cpu){
        console.log(`Its a draw! score is ${player}:${cpu}`)
        player = 0;
        cpu = 0;
    }
    else{console.log(`you Lose! score is ${player}:${cpu}`)
    player = 0;
    cpu = 0;}
}
