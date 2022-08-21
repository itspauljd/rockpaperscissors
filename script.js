function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissor'];
    let Selection = choices[Math.floor(Math.random() * choices.length)];
    return Selection
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You Lose';
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissor') {
        return 'You Win';
    }
    else if (playerSelection === 'Scissor' && computerSelection === 'Rock') {
        return 'You Lose'
    }
    else if (playerSelection === 'Scissor' && computerSelection === 'Paper') {
        return 'You Win'
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissor') {
        return 'You Lose'
    }
    else if (playerSelection === 'Scissor' && computerSelection === 'Paper') {
        return 'You Win'
    }
    else if (playerSelection === computerSelection) {
        return 'You Tie';
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Please Choose Rock Paper or Scissor!')
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
}

game()