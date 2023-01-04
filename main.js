const selectButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')

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
    const computerSelection = randomGeneration();
    const yourWinner = isWinner(selection,computerSelection)
    const computerWinner = isWinner(computerSelection,selection)

    addSelectionResult(computerSelection,computerWinner)
    addSelectionResult(selection,yourWinner)
    console.log(computerSelection);
}

function addSelectionResult(selection,winner){
    const div = document.createElement('div')
    div.innerText=selection.emoji
    div.classList.add('result-selection')
    if(winner) div.classList.add('winner')
    finalColumn.after(div)
}

function randomGeneration(){
    const randomIndex = Math.floor(Math.random()*selections.length);
    return selections[randomIndex]
}