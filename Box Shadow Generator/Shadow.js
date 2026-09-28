//javascriptpro_
let horizontal = document.querySelector('.container .horizontal input');
let vertical = document.querySelector('.container .vertical input');
let blur = document.querySelector('.container .Blur input');
let spread = document.querySelector('.container .Spread input');
let outputBox = document.querySelector('.container .output-box');
let boxColor = document.querySelector('.box-color-input');
let boxShadowColor = document.querySelector('.shadow-color-input');
let inset = document.querySelector('.container .checkbox input');
let shadowCode = document.querySelector('.container .code-box p');

let generateShadow = () => {
        let h = horizontal.value,
                v = vertical.value,
                b = blur.value,
                s = spread.value;

        let shadow = `${h}px ${v}px ${b}px ${s}px ${boxShadowColor.value} ${inset.checked ? "inset" : ""}`;
        outputBox.style.boxShadow = shadow;
        shadowCode.innerHTML = `box-shadow: ${shadow}`;
        outputBox.style.backgroundColor = boxColor.value;
}