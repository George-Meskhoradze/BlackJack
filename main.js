const text = document.querySelector(".talk-text")
const btnStart = document.querySelector(".btn-one")
const btnClean = document.querySelector(".btn-two")
const highScore = document.querySelector(".highscore")
const currentScore = document.querySelector(".currentscore")
let equal;
let ar = []

btnStart.addEventListener("click", ()=> {
  if(equal > 25) {
    return
  };
  const num = getRandomNum();
  const numTwo = getRandomNum();
  equal = num + numTwo;
  ar.push(equal)
  document.querySelector(".num-one").textContent = num
  document.querySelector(".num-two").textContent = numTwo
  loadgame();
  const sum = ar.reduce((acc,item) => acc + item, 0)
  currentScore.textContent = "Current Score: " + sum
  if (sum > value){
    localStorage.setItem("score", sum)
  }

});

const value = localStorage.getItem("score")

if (value < 1) {
  highScore.textContent += " "
} else {
  highScore.textContent = "Highest Score: " + value
}





btnClean.addEventListener("click", ()=> {
    window.location.reload()
})

function getRandomNum() {
  return Math.floor( Math.random() * 15 ) + 1
}

function loadgame() {
  if (equal < 25) { 
    text.textContent = "Do you want to try Again?"
  } 
  else if (equal === 25) {
    text.textContent = "You Got BlackJack"
  }
  else if (equal > 25) {
    text.textContent = "You are out of the Game!"
  }
}

