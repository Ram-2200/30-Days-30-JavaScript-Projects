//Javascriptpro_
let userInput = document.querySelector('.container .search-box input');
let foodImg = document.querySelector('.container .info-box .food-img img');
let foodName = document.querySelector('.container .mealName');
let foodArea = document.querySelector('.container .area');
let ingredientsBox = document.querySelector('.container .ingredients-box');
let viewRecipeBtn = document.querySelector('.container .view-recipe-btn');
let instructions = document.querySelector('.container .instructions');
let closeBtn = document.querySelector('.container .close-btn');
let instructionsBox = document.querySelector('.container .instructions-box');
let infoBox = document.querySelector('.container .info-box');
let dispMsg = document.querySelector('.container .display-msg');

userInput.addEventListener('keyup',(e)=>{
if(e.key == 'Enter'){     
 if(userInput.value != ''){
   getFood(userInput.value);
 }
}
})
let getFood =(mealName)=>{
 ingredientsBox.innerHTML = '';
 infoBox.style.display = 'block';
 dispMsg.style.display = 'none';
 let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
 fetch(url + mealName).then(res => res.json()).then(meal =>{
  let myMeal = meal.meals[0];
  foodImg.src = myMeal.strMealThumb;
  foodName.innerHTML = myMeal.strMeal;
  foodArea.innerHTML = myMeal.strArea;
  instructions.innerHTML = myMeal.strInstructions;
  
  //Get Ingredients
  let count = 1;
  let ingredients = [];
  
  for(let i in myMeal){
    let ingredient = '';
    let measure = '';
   if(i.startsWith('strIngredient') && myMeal[i]){
      ingredient = myMeal[i];
      measure = myMeal[`strMeasure` + count];
      count += 1;
      ingredients.push(`${measure} ${ingredient}`);
   }  
  }
  
  let ul = document.createElement('ul');
  ingredients.forEach((ingre)=>{
    let child = document.createElement('li');
    child.innerHTML = ingre;
    ul.appendChild(child);
    ingredientsBox.appendChild(ul);
  })
 })
}

viewRecipeBtn.addEventListener('click',()=>{
  instructionsBox.style.left = '0px';   
});

closeBtn.addEventListener('click',()=>{
  instructionsBox.style.left = '-100%';   
})


