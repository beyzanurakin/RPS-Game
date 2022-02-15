const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('.data-final-column')
const yourScoreSpan = document.querySelector('#data-your-score')
const compScoreSpan = document.querySelector('#data-comp-score')
const SELECTIONS = [
  {
    name: 'rock',
    beats: 'scissor'
  },
  {
    name: 'paper',
    beats: 'rock'
  },
  {
    name: 'scissor',
    beats: 'paper'
  }
]

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })

});


function makeSelection(selection){
  const computerSelection = randomSelection()
  const youWin = whoWinner(selection, computerSelection);
  const compWin = whoWinner(computerSelection, selection);
  console.log(computerSelection)

  addSelectionWinner(computerSelection, compWin)
  addSelectionWinner(selection, youWin)
  console.log(yourScoreSpan)
  console.log(compScoreSpan)

  if (youWin) incrementScore(yourScoreSpan)
  if (compWin) incrementScore(compScoreSpan)

  if(compScoreSpan.innerText === "5"){
    alert("Computer Won")
    location.reload();
  }
  if(yourScoreSpan === "5"){
    alert("You Won")

    location.reload();
  }
}


function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1

}

function addSelectionWinner(selection,winner){
  const div = document.createElement('div')
  div.innerText = selection.name
  div.classList.add('result-selection')
  if(winner) div.classList.add('winner')
  console.log(div)
  console.log(finalColumn)
  finalColumn.after(div)
}
function whoWinner(selection ,opposite){
  return opposite.name === selection.beats
}
function randomSelection(selection){
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}
