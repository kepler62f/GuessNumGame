var randomizedNumber = randomNumber(1, 10)
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
//
function updateH1 (newH1) {
  var h1 = document.querySelector('h1')
  h1.textContent = newH1
}

function numberChecker () {
  var input = prompt('Guess a number between 1 to 10!')
  if (input > randomizedNumber) {
    updateH1("Your answer is too high!")
  } else {
    if (input < randomizedNumber) {
      updateH1("Your answer is too low!")
    } else {
      updateH1("Correct answer!")
    }
  }
}

// numberChecker()
// console.log(randomizedNumber)
// console.log(input)

var button = document.createElement('button')

button.innerHTML = 'Guess'

var buttonLocation = document.getElementsByTagName('h3')[0]
buttonLocation.appendChild(button)

button.addEventListener("click", numberChecker)
