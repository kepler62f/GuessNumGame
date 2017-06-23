var input = prompt('Guess a number between 1 to 100!')
var randomizedNumber = randomNumber (2, 2)

if(input > randomizedNumber) {
  gameOutcome(false)
} else {
    if (input < randomizedNumber) {
    gameOutcome(false)
    } else {
        gameOutcome(true)
      }
  }

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function updateH1(newH1) {
  var h1 = document.querySelector('h1')
  h1.textContent = newH1
}

function gameOutcome(out) {
  if(out === false) {
    var newInput = prompt('Please try again!')
    input = newInput
    return gameOutcome(out)
  } else {
      if(out === true) {
        if(confirm ('Would you like to start again?')) {
          var newInput = prompt('Guess a number between 1 to 100!')
          input = newInput
          return gameOutcome(out)
        } else {
        alert ('Thank you for playing!')
          }
      }
    }
}

console.log(newInput)
console.log(input)

// gameOutcome(true)
// console.log(randomizedNumber)
// console.log(input)
//console.log()
