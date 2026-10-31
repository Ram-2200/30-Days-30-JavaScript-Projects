//Javascriptpro_
let emoji = document.querySelector('.container .emoji');
let joke = document.querySelector('.container .joke');
let getJokeBtn = document.querySelector('.container .btns .refresh');
let copyBtn = document.querySelector('.container .btns .copy');
let twitterBtn = document.querySelector('.container .btns .twitter');
let copyIcon = document.querySelector('.container .btns  .copy i');
let copyText = document.querySelector('.container .btns  .copy span');

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
        joke.innerHTML = 'Loading....'
        fetch(url).then((res) => res.json()).then((data) => {
                joke.innerHTML = data.joke;
        })
        getEmoji();
}


let getEmoji = () => {
        let emojis = ['&#128514;', '&#129315;']
        let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.innerHTML = randomEmoji;
}

let copyJoke = () => {
        navigator.clipboard.writeText(joke.textContent);
        copyIcon.style.display = 'none';
        copyText.style.display = 'block';
        setTimeout(() => {
                copyIcon.style.display = 'block';
                copyText.style.display = 'none';
        }, 500)
}

let twittJoke = () => {
        let tweetUrl = `https://twitter.com/intent/tweet?url=${joke.textContent}`;
        window.open(tweetUrl, "_blank");
}

twitterBtn.addEventListener('click', twittJoke)
copyBtn.addEventListener('click', copyJoke)
getJokeBtn.addEventListener('click', getJoke)
getJoke();
getEmoji();