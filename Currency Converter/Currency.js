let fromInputBox = document.querySelector('.container .from-to .from .from-input');
let toInputBox = document.querySelector('.container .from-to .to .to-input');
let fromOptionsBox = document.querySelector('.container .from-to .from .from-country-options');
let toOptionsBox = document.querySelector('.container .from-to .to .to-country-options');
let fromInputFlag = document.querySelector('.container .from-to .from-input .from-flag img');
let toInputFlag = document.querySelector('.container .from-to .to-input .to-flag img');
let fromInput = document.querySelector('.container .from-to .from-input input');
let toInput = document.querySelector('.container .from-to .to-input input');
let amount = document.querySelector('.container .amount input');
let convertBtn = document.querySelector('.container .convert-btn');
let resultBox = document.querySelector('.container .result-box');
let result = document.querySelector('.container .result-box .result');
let switchBtn = document.querySelector('.container .switch-btn');

//Symbols Api
let symbolsApiUrl = 'https://api.exchangerate.host/symbols';
let apiKey = 'eb285e81c7865fde916a5361';
let currFromValue, currFromFlagSrc, currToValue, currToFlagSrc;

fromInputBox.addEventListener('click', () => {
        fromOptionsBox.classList.toggle('active')
        toOptionsBox.classList.remove('active');
})

toInputBox.addEventListener('click', () => {
        toOptionsBox.classList.toggle('active');
        fromOptionsBox.classList.remove('active');
});

let getSymbols = () => {
        let fromLi = '';
        let toLi = '';
        for (currency_code in country_list) {
                fromLi += `<li onclick="getFromValue('${currency_code}')"><img src="https://flagsapi.com/${country_list[currency_code]}/flat/64.png" alt="">${currency_code}</li>`;
                toLi += `<li onclick="getToValue('${currency_code}')"><img src="https://flagsapi.com/${country_list[currency_code]}/flat/64.png" alt="">${currency_code}</li>`;
        }
        fromOptionsBox.innerHTML = fromLi;
        toOptionsBox.innerHTML = toLi;
}

let getFromValue = (country) => {
        fromInputFlag.src = `https://flagsapi.com/${country_list[country]}/flat/64.png`;
        fromInput.value = country;
        fromOptionsBox.classList.remove('active');
}

let getToValue = (country) => {
        toInputFlag.src = `https://flagsapi.com/${country_list[country]}/flat/64.png`;
        toInput.value = country;
        toOptionsBox.classList.remove('active');
}

let getExchangeRate = () => {
        if (amount.value != '') {
                result.innerHTML = 'Getting Exchange Rate....';
                result.style.fontSize = '12px';
                let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromInput.value}`;
                fetch(url).then(res => res.json()).then(data => {
                        let exchangeRate = data.conversion_rates[toInput.value];
                        let totalExchangeRate = (amount.value * exchangeRate).toFixed(2);
                        result.innerHTML = `${amount.value} ${fromInput.value} = ${totalExchangeRate} ${toInput.value}`;
                        result.style.fontSize = '15px'
                })
                resultBox.style.display = 'block';
        }
}

switchBtn.addEventListener('click', () => {
        currFromValue = fromInput.value;
        currToValue = toInput.value;
        currFromFlagSrc = fromInputFlag.src;
        currToFlagSrc = toInputFlag.src;
        fromInput.value = currToValue;
        toInput.value = currFromValue;
        fromInputFlag.src = currToFlagSrc;
        toInputFlag.src = currFromFlagSrc;
        getExchangeRate();
});

getSymbols();
convertBtn.addEventListener('click', getExchangeRate);
