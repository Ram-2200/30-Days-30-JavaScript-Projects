//Javascriptpro_
let weeksBox = document.querySelector('.wrapper .pre-wrapper .weeks');
let hour = document.querySelector('.wrapper .timer .hour');
let minute = document.querySelector('.wrapper .timer .minute');
let second = document.querySelector('.wrapper .timer .second');
let wrapper = document.querySelector('.wrapper');
let toggleBtn = document.querySelector('.wrapper .toggle-btn');

let num = 0;
let weeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
let d = new Date();
let day = d.getDay();

let getTime = () => {
        let d = new Date();
        let hr = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();

        if (hr > 12) {
                hr = hr - 12;
                num = 1;
        }
        min < 10 ? min = "0" + min : min;
        sec < 10 ? sec = "0" + sec : sec;
        hr < 10 ? hr = "0" + hr : hr;

        hour.innerHTML = hr;
        minute.innerHTML = min;
        second.innerHTML = sec;
        let amPm = document.querySelectorAll('.wrapper .am-pm h6')[num];
        amPm.classList.add('curr-time-period');
}

setInterval(getTime, 1000);

let li = '';
weeks.forEach((week) => {
        li += `<span>${week}</span>`;
        weeksBox.innerHTML = li;
})

let currDay = document.querySelectorAll('.weeks span')[day];
currDay.classList.add('curr-day');

toggleBtn.addEventListener('click', () => {
        wrapper.classList.toggle('light');
        if (wrapper.classList.contains('light')) {
                toggleBtn.innerHTML = '<i class="fa-regular fa-moon"></i>';
                toggleBtn.style.backgroundColor = '#272E38';
                toggleBtn.style.color = '#ffffff';
        } else {
                toggleBtn.innerHTML = '<i class="fa-regular fa-sun"></i>';
                toggleBtn.style.backgroundColor = '#ffffff';
                toggleBtn.style.color = '#272E38';
        }
});
