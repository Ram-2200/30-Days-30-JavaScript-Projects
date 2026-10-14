//Javascriptpro_
//Dont forget to follow me on github,instagram and codepen.
let mainWrapper = document.querySelector('.main-wrapper');
let container = mainWrapper.querySelector('.container');
let startQuizBtn = mainWrapper.querySelector('.start-quiz-btn');
let quesBox = container.querySelector('.ques-box');
let optionBox = container.querySelector('.option-box');
let noOfQues = container.querySelector('.quiz-top-bar .no-of-question');
let nextQuesBtn = container.querySelector('.next-ques-btn');
let timeTxt = container.querySelector('.quiz-top-bar .timer span');
let timer_line = container.querySelector('.quiz-top-bar .timer-progress-bar');
let timerBox = container.querySelector('.quiz-top-bar .timer');
const result = document.querySelector('.result-div');

let quesIndex = 1;
let score = 0;
let quesCount = 0;
let count;
let countLine;

let correctIcon = `<div class="icon correct-icon"><i class="fa-solid fa-check"></i></div>`;
let incorrectIcon = `<div class="icon wrong-icon"><i class="fa-solid fa-xmark"></i></div>`;

startQuizBtn.addEventListener('click',()=>{
 startQuizBtn.style.display = 'none';
 container.style.display = 'block';
 startQuiz();
 noOfQuestion();
 startTimer(30);
 timerLine(0);
});

nextQuesBtn.addEventListener('click',()=>{
 if(quesCount < questions.length - 1){
  quesCount++;
  quesIndex++;
  noOfQuestion();
  startQuiz();
  clearInterval(count);
  startTimer(30);
  clearInterval(countLine);
  timerLine(0);
  nextQuesBtn.style.pointerEvents = 'none';
 }else{
  showResult();
 }     
});

let startQuiz =()=>{
 let ques = `<h3>${questions[quesIndex -1].number}. ${questions[quesIndex - 1].question}</h3>`; 
 let quizOptions = `<div class="option option-1">
                 <div class="option-num-lett">A</div>
                 <span class="option-txt">${questions[quesIndex - 1].options[0]}</span>
               </div>
               <div class="option option-1">
                  <div class="option-num-lett">B</div>
                  <span class="option-txt">${questions[quesIndex - 1].options[1]}</span>
                </div>
                <div class="option option-1">
                  <div class="option-num-lett">C</div>
                  <span class="option-txt">${questions[quesIndex - 1].options[2]}</span>
                </div>
                <div class="option option-1">
                  <div class="option-num-lett">D</div>
                  <span class="option-txt">${questions[quesIndex - 1].options[3]}</span>
                </div>`;
 quesBox.innerHTML = ques;
 optionBox.innerHTML = quizOptions;
 const option = optionBox.querySelectorAll('.option');
 for(let i = 0;i<option.length;i++){
  option[i].setAttribute('onclick','optionSelect(this)');    
 }
};

let optionSelect =(userAns)=>{
 clearInterval(count);      
 clearInterval(countLine);        
 const userAnswer = userAns.querySelector('span').textContent;
 const correctAns = questions[quesIndex - 1].answer;
 let AllOption = optionBox.children.length;
 if(userAnswer == correctAns){
   score+=1;
   userAns.classList.add('correct');
   userAns.style.borderColor = '#689f38';
   userAns.insertAdjacentHTML('beforeend', correctIcon);
 }else{
 userAns.classList.add('incorrect');
 userAns.style.borderColor = '#d32f2f';
 userAns.insertAdjacentHTML('beforeend', incorrectIcon);
 let allOptionTxt = optionBox.querySelectorAll('div span');
 for(let i=0;i<allOptionTxt.length;i++){
 if(allOptionTxt[i].textContent == correctAns){
   allOptionTxt[i].parentElement.classList.add('correct');
   allOptionTxt[i].parentElement.insertAdjacentHTML('beforeend', correctIcon);
   allOptionTxt[i].parentElement.style.borderColor = '#689f38';
 }    
 }
 }
for(let i=0;i<AllOption;i++){
 optionBox.children[i].classList.add('disabled'); 
}
 nextQuesBtn.style.pointerEvents = 'auto';
}

//No Of Questions
let noOfQuestion =()=>{
 noOfQues.innerHTML = `${questions[quesIndex - 1].number} of ${questions.length} Question`;     
}

let startTimer =(time)=>{
  count = setInterval(()=>{
   time--;
   timeTxt.innerHTML = time;
   timerBox.style.backgroundColor = '#e7f6d5';
   timerBox.style.borderColor = '#689f38';
   timerBox.style.color = '#689f38';
   if(time < 10){
   timeTxt.innerHTML = "0" + time;  
   timerBox.style.backgroundColor = '#ffdde0';
   timerBox.style.borderColor = '#d32f2f';
   timerBox.style.color = '#d32f2f';
   }
   if(time == 0){
     clearInterval(count) 
     let allOptionTxt = optionBox.querySelectorAll('div span');
     let correctAns = questions[quesIndex - 1].answer;
     let AllOption = optionBox.children.length;
     for(let i = 0; i < allOptionTxt.length; i++) {
     if(allOptionTxt[i].textContent == correctAns) {
        allOptionTxt[i].parentElement.classList.add('correct');
        allOptionTxt[i].parentElement.insertAdjacentHTML('beforeend', correctIcon);
        allOptionTxt[i].parentElement.style.borderColor = '#689f38';
        }
     }
    for(let i = 0; i < AllOption; i++) {
      optionBox.children[i].classList.add('disabled');
    } 
    nextQuesBtn.style.pointerEvents = 'auto';
   }
  },1000)
}

let timerLine =(time)=>{
 countLine = setInterval(()=>{
  time+=1; 
  timer_line.style.width = time + "px";
  if(time > 359){
   clearInterval(countLine);        
  }
 },83)      
}

let showResult =()=>{
 container.style.display = 'none';
result.style.display = 'block';
let scoreText = document.querySelector('.score');
if(score > 3){
let scoreTag = `<span>Congrats! You scored `+score+` out of `+questions.length+` 🔥</span>`;  
scoreText.innerHTML = scoreTag;
}else if(score > 1){
let scoreTag = `<span>Nice! You scored ` + score + ` out of ` + questions.length + ` 🔥</span>`;
scoreText.innerHTML = scoreTag;       
}else{
let scoreTag = `<span>Sorry! You scored `+score+` out of `+questions.length+` 🔥</span>`;  
scoreText.innerHTML = scoreTag;         
}
}
