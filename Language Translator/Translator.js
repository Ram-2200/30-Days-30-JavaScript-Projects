//Javascriptpro_
//Dont forget to follow me on github,instagram and codepen
let container = document.querySelector('.container');
let fromInput = document.querySelector('.container .select-box .from-input-box input'); 
let toInput = document.querySelector('.container .select-box .to-input-box input');
let switchBtn = document.querySelector('.container .select-box .switch-btn');
let fromOptionsBox = document.querySelector('.container .from-options');
let toOptionsBox = document.querySelector('.container .to-options');
let fromInputBox = document.querySelector('.container .select-box .from-input-box'); 
let toInputBox = document.querySelector('.container .select-box .to-input-box');
let FromTranslateInput = container.querySelector('.from-text-box textarea');
let ToTranslateInput = container.querySelector('.to-text-box textarea');
let fromCopyBtn = container.querySelector('.from-text-box .btns .copy-btn');
let toCopyBtn = container.querySelector('.to-text-box .btns .copy-btn');

let currentFrom,currentTo,currentFromTranslation,currentToTranslation

let getCountries =()=>{
let fromLi = '';
let toLi = '';        
 for(let countryCode in countries){  
  fromLi += `<li onclick="setFromCountry('${countryCode}')">${countries[countryCode]}</li>`; 
  toLi += `<li onclick="setToCountry('${countryCode}')">${countries[countryCode]}</li>`; 
 }
 fromOptionsBox.innerHTML = fromLi;
 toOptionsBox.innerHTML = toLi;
}

let setFromCountry =(countrycode)=>{
 fromInput.value = countrycode;  
 fromOptionsBox.classList.remove('from-options-active');
};

let setToCountry =(countrycode)=>{
 toInput.value = countrycode;  
 toOptionsBox.classList.remove('to-options-active'); 
}

fromInputBox.addEventListener('click',()=>{
 fromOptionsBox.classList.toggle('from-options-active');
 toOptionsBox.classList.remove('to-options-active');  
 getTranslation();
});

toInputBox.addEventListener('click',()=>{
 toOptionsBox.classList.toggle('to-options-active');  
 fromOptionsBox.classList.remove('from-options-active');
 getTranslation();
});

switchBtn.addEventListener('click',()=>{
 currentFrom = fromInput.value;
 currentTo = toInput.value;
 fromInput.value = currentTo;
 toInput.value = currentFrom;
 currentFromTranslation = FromTranslateInput.value;
 currentToTranslation = ToTranslateInput.value;
 FromTranslateInput.value = currentToTranslation;
 ToTranslateInput.value = currentFromTranslation;  
 getTranslation();
});

let getTranslation =()=>{
 let text = FromTranslateInput.value;
 let from = fromInput.value;
 let to = toInput.value;
 let url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`;
 fetch(url).then(res => res.json()).then(data => {
         ToTranslateInput.value = data.responseData.translatedText;
 });      
};

FromTranslateInput.addEventListener('keyup',(e)=>{
  if(e.key == "Enter"){
   if(FromTranslateInput.value != ''){
       getTranslation();    
   } 
  }  
})

let copyFromText =()=>{
  if(FromTranslateInput.value != ''){    
 navigator.clipboard.writeText(FromTranslateInput.value);
  }
}

let copyToText =()=>{
 if(ToTranslateInput.value != ''){      
 navigator.clipboard.writeText(ToTranslateInput.value);
}
}

//from Speak Btn
let speakFromText =()=>{
 if(FromTranslateInput.value != ''){
   let speech = new SpeechSynthesisUtterance();
   speech.lang = 'en-US';
   speech.text = FromTranslateInput.value;
   speechSynthesis.speak(speech);    
 }      
}

let speakToText =()=>{
 if (ToTranslateInput.value != '') {
     let speech = new SpeechSynthesisUtterance();
     speech.lang = 'en-US';
     speech.text = ToTranslateInput.value;
     speechSynthesis.speak(speech);
 }      
}

getCountries();
