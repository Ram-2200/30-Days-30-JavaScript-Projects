//Javascriptpro_
//Dont forget to follow me on github,instagram and codepen.
let backBtn = document.querySelector('.container .back-btn');
let scientificBtnsBox = document.querySelector('.container .scientific-btns');
let input = document.querySelector('.container .input-box .input-value');
let result = document.querySelector('.container .input-box .result');
let container = document.querySelector('.container');
let allBtns = document.querySelectorAll('.container .btn');

let backSpace = () => {
        input.value = input.value.substr(0, input.value.length - 1);
}


for (let item of allBtns) {
        item.addEventListener('click', (e) => {
                let btnText = e.target.innerHTML;
                if (btnText == '×') {
                        btnText = '*';
                }

                if (btnText == '÷') {
                        btnText = '/';
                }

                input.value += btnText;
        })
}

let calculate = () => {
        result.value = eval(input.value);
}

let sin = () => {
        result.value = Math.sin(result.value);
}

let cos = () => {
        result.value = Math.cos(result.value);
}

let tan = () => {
        result.value = Math.tan(result.value);
}

let fact = () => {
        var i, number, x;
        x = 1
        number = result.value;
        for (i = 1; i <= number; i++) {
                x = x * i;
        }
        i = i - 1;
        result.value = x;
}

let pi = () => {
        input.value = 3.14;
}

let log = () => {
        result.value = Math.log(result.value);
}

let root = () => {
        result.value = Math.sqrt(result.value, 2);
}

let e = () => {
        input.value = 2.71;
}

let pow = () => {
        result.value = Math.pow(result.value, 2);
}

backBtn.addEventListener('click', () => {
        scientificBtnsBox.classList.toggle('active');
});
