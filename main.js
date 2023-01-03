const selectButtons = document.querySelectorAll('[data-selection]')

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
    const computerSelection=randomGeneration();
    console.log(computerSelection);
}

function randomGeneration(){
    const randomIndex = Math.floor(Math.random()*selections.length);
    return selections[randomIndex]
}