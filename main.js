const selectButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const finalresult=document.querySelector('[data-final-result')
let count=0,total_matches=5,user=0,computer=0;

const selections = [
    {
        name: 'rock',
        emoji: '👊',
        defeats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '✋',
        defeats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌️',
        defeats: 'paper'
    }
]

selectButtons.forEach(selectButton => 
{
    selectButton.addEventListener('click',() => {
        const selectionName=selectButton.dataset.selection;
        const selection = selections.find(selection => selection.name == selectionName)
        makeSelection(selection);
    })
});

function makeSelection(selection){
    // console.log(selection);
    debugger;
    const computerSelection = randomGeneration();
    const yourWinner = isWinner(selection,computerSelection)
    const computerWinner = isWinner(computerSelection,selection)

    addSelectionResult(computerSelection,computerWinner)
    addSelectionResult(selection,yourWinner)
    console.log(computerSelection);

    if(yourWinner)
     user = incrementScore(yourScoreSpan)
    else 
    computer = incrementScore(computerScoreSpan)
}

function incrementScore(scorespan){
    scorespan.classList.add('scoreresult')
    scorespan.innerText = parseInt(scorespan.innerText)+1
    return scorespan.innerText
}

function addSelectionResult(selection,winner){
    const div = document.createElement('div')
    div.innerText=selection.emoji
    div.classList.add('result-selection')
    if(winner) div.classList.add('winner')
    finalColumn.after(div)
}

function isWinner(selection,opponentSelection){
    return selection.defeats == opponentSelection.name;
}

function randomGeneration(){
    const randomIndex = Math.floor(Math.random()*selections.length);
    return selections[randomIndex]
}