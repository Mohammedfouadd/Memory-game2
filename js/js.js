let startButton = document.getElementById("start");
let wordDiv = document.querySelector(".words");
let from = document.querySelector(".from");
let level = document.querySelector("#level");
let levelSpan = document.querySelector(".level");
let secondsSpan = document.querySelector(".seconds");
let theWord = document.querySelector(".theWord");
let timeSpan = document.querySelector(".time span");
let to = document.querySelector(".to ");
let good = document.querySelector(".good");
let bad = document.querySelector(".bad");
let input = document.querySelector("#input");
console.log(level.value)


console.log(to)
let wordsEsey = [
    "Hello",
  "Code",
  "Town",
  "Python",
  "Scala",
  "Cascade",
  "Coding",
  "Funny",
  "Working",
  "Task"
]


let wordnormall = [
    "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Python",
  "Scala",
  "Cascade",
  "Coding",
  "Funny",
  "Working",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
  
]

let wordshard = [
    "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
  
]
let oo = 1;
let timeEsey = 7;
let timeNormal = 5;
let timeHard = 3;

startButton.onclick = function(){
input.focus()

console.log(level.value)

    if(level.value === 'Esey'){
    showWord(wordsEsey,timeEsey, level.value);

    }else if (level.value === 'normal'){
    showWord(wordnormall, timeNormal, level.value);

    }else{
    showWord(wordshard, timeHard, level.value);

    }

    this.remove()


   
}

function showWord(words, time, level) {
  secondsSpan.innerHTML = time;

  levelSpan.innerHTML = level;


timeSpan.innerHTML = time;

    let random = words[Math.floor(Math.random() * words.length)] ;
    console.log(wordDiv)
    let wordTndex =  words.indexOf(random);
    words.splice(wordTndex,1)

    theWord.innerHTML = random
    wordDiv.innerHTML = "";
from.innerHTML =  words.length;

    
    for(let i = 0 ; i < words.length; i++){
        let span = document.createElement('span');
        let txt = document.createTextNode(words[i]);
        span.appendChild(txt)
        wordDiv.appendChild(span)
    }
startPlay(time, words, level);
}

function startPlay(time, wordss,level){
secondsSpan.innerHTML = time
let start = setInterval(() => {

  secondsSpan.innerHTML--;
  timeSpan.innerHTML--;
  if(secondsSpan.innerHTML === "0" ){
    clearInterval(start)

    if(theWord.innerHTML.toLowerCase() === input.value.toLowerCase() ){
      input.value = "";
      to.innerHTML++;
      if(wordss.length > 0){
        showWord(wordss, time, level)

      }else if(wordss.length === 0){
        good.style.display = "block"
        theWord.remove()
        wordDiv.remove()
      }
    }else{
      bad.style.display = "block"
      theWord.remove()
      wordDiv.remove()
    }
  }
  
  
}, 1000)}
