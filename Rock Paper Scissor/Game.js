let userChoiceIcon = document.querySelector('.container .choices .user-choice');
let computerChoiceIcon = document.querySelector('.container .choices .computer-choice');
let resultText = document.querySelector('.container .choices .result');
let userIcon,computerIcon;

let play =(userChoice,elem)=>{
  userChoiceIcon.classList.add('user-icon-animate');
  computerChoiceIcon.classList.add('computer-icon-animate');
  resultText.innerHTML = 'Wait....'
  
 setTimeout(()=>{
   getResult(userChoice, elem);     
 },3000)
}

let getResult =(userChoice, elem)=>{
 userChoiceIcon.classList.remove('user-icon-animate');
 computerChoiceIcon.classList.remove('computer-icon-animate');
 
 //Computer Random Choice
 let randomChoices = ['rock','paper','scissor'];
 let randomNumber = Math.floor(Math.random() * 3);
 
 let computerChoice = randomChoices[randomNumber];
// console.log(computerChoice);
 
 //Get Selected Icons
 let rockIcon = '<i class="fa-regular fa-hand-back-fist"></i>';
 let paperIcon = '<i class="fa-regular fa-hand"></i>';
 let scissorIcon = '<i class="fa-regular fa-hand-scissors"></i>';
 
 userIcon = userChoice == 'rock' ? rockIcon : userChoice == 'paper' ? paperIcon : userChoice == 'scissor' ? scissorIcon : '';
 computerIcon = computerChoice == 'rock' ? rockIcon : computerChoice == 'paper' ? paperIcon : computerChoice == 'scissor' ? scissorIcon : '';
 userChoiceIcon.innerHTML = userIcon;
 computerChoiceIcon.innerHTML = computerIcon;
 
 //Outcomes
 let outcomes ={
  rockrock:'Draw', 
  rockpaper:'Cpu', 
  rockscissor:'You', 
  paperpaper:'Draw', 
  paperrock:'You', 
  paperscissor:'Cpu', 
  scissorscissor:'Draw', 
  scissorrock:'Cpu', 
  scissorpaper:'You', 
 }

let outcomeValue = outcomes[userChoice + computerChoice];
resultText.innerHTML = userChoice == computerChoice ? 'Draw' : `${outcomeValue} Won!!`;
}
