function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function updateH1(newH1) {
  var h1 = document.querySelector('h1')
  h1.textContent = newH1
}

function checkInput() {
  var input = prompt("Guess a number from 0 to 100!")
  var randomizedNumber = randomNumber (2, 2)
  if (input > randomizedNumber) {
    updateH1("Your number is too high! Try again")
    checkInput()
  } else {
    if (input < randomizedNumber) {
      updateH1("Your number is too low! Try again")
      checkInput()
    } else {
      updateH1("Correct answer!")
    }
  }
checkInput()
