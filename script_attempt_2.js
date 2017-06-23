var input = prompt ('Guess a number between 1 to 100!')
var randomizedNumber = randomNumber (2, 2)

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// console.log(randomizedNumber)
// console.log(input)

if (input > randomizedNumber) {
    var outcome = ('tooHigh')
  } else {
    if (input < randomizedNumber) {
      var outcome = ('tooLow')
    } else {
      var outcome = ('correct')
    }
}

// console.log(outcome)

function updateH1(newH1) {
  var h1 = document.querySelector('h1')
  h1.textContent = newH1 }

// updateH1('Hello')

if (outcome === 'tooHigh') {
  updateH1('Your guess is too high!')
} else {
  if (outcome === 'tooLow') {
    updateH1('Your guess is too low!')
  } else {
    updateH1 ('Tha
  if (outcome === 'tooHigh') {
    updateH1('Your guess is too high!')
  }t's right!)
  }
}
