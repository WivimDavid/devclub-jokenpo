
const result = document.querySelector('.result')
const humanPoints = document.querySelector('#human-points')
const machinePoints = document.querySelector('#machine-points')

let = hScorePoints = 0 
let = mScorePoints = 0 


const playHuman = (humanchoice) => {
  playTheGame(humanchoice, playMachine())
}

const playMachine = () => {
  const choises = ['rock', 'paper', 'scissors']
  const randomNumber = Math.floor(Math.random() * 3)

  return choises[randomNumber]
}

const playTheGame = (human, machine) => {


  if (human === machine) {
    result.innerHTML = "Deu empate  	&#x1F91D;&#x1F3FB;"
  } else if (
    (human === 'rock' && machine === 'scissors') ||
    (human === 'paper' && machine === 'rock') ||
    (human === 'scissors' && machine === 'paper')) {
      hScorePoints++   
      humanPoints.innerHTML = hScorePoints
    result.innerHTML = "Você ganhou!  &#x1F601;"

  } else {
    mScorePoints++
    machinePoints.innerHTML = mScorePoints
    result.innerHTML = "Você perder para Alexa  &#x1F62B;"
    
  }
}