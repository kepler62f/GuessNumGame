var randomizedNumber = randomNumber(2,2)
var input = prompt('Guess a number from 1 to 100!')

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function updateH1(newH1) {
  var h1 = document.querySelector('h1')
  h1.textContent = newH1
}

function numberChecker() {
  if (input > randomizedNumber) {
    updateH1('Your answer is too high!')
  } else {
    if (input < randomizedNumber) {
      updateH1('Your answer is too low!')
    } else {
      updateH1('Correct answer!')
    }
  }
}

element.addEventListener("click", numberChecker);
