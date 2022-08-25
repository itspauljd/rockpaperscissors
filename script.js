const buttons = document.querySelectorAll('[data-choice]');
const resetButton = document.querySelector('[data-reset')
const playerScore = document.querySelector("[data-score='player']")
const computerScore = document.querySelector("[data-score='computer']")
const resultText = document.querySelector('[data-result]')



function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissor'];
    let Selection = choices[Math.floor(Math.random() * choices.length)];
    return Selection
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore.innerText = parseInt(computerScore.innerText) + 1
        return 'You Lose!';
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissor') {
        playerScore.innerText = parseInt(playerScore.innerText) + 1
        return 'You Win!';
    }
    else if (playerSelection === 'Scissor' && computerSelection === 'Rock') {
        computerScore.innerText = parseInt(computerScore.innerText) + 1
        return 'You Lose!'
    }
    else if (playerSelection === 'Scissor' && computerSelection === 'Paper') {
        playerScore.innerText = parseInt(playerScore.innerText) + 1
        return 'You Win!'
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissor') {
        computerScore.innerText = parseInt(computerScore.innerText) + 1
        return 'You Lose!'
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore.innerText = parseInt(playerScore.innerText) + 1
        return 'You Win!'
    }
    else if (playerSelection === computerSelection) {
        return 'You Tie!';
    }
}

function reset() {
    resultText.innerText = 'Click one to play!'
    playerScore.innerText = '0'
    computerScore.innerText = '0'

}

resetButton.addEventListener('click', e => {
    reset()
})

buttons.forEach(buttons => {
    buttons.addEventListener('click', e => {
        let playerSelection = buttons.dataset.choice;
        let computerSelection = getComputerChoice();
        resultText.innerText = (playRound(playerSelection, computerSelection));
    })
})

