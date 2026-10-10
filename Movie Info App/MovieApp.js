//Javascriptpro_
//Dont forget to follow me on github,instagram and codepen.
let resultBox = document.querySelector('.container .result-box');
let inputValue = document.querySelector('.container .search-box input');
let searchBtn = document.querySelector('.container .search-box button');

let key = ''; //omdb api key

let getMovie = () => {
        let movieName = inputValue.value;
        let url = `https:www.omdbapi.com/?t=${movieName}&apikey=${key}`;
        fetch(url).then(res => res.json()).then(data => {
                if (data.Response == 'True') {
                        resultBox.innerHTML = `<div class="img-box">
                     <img src="${data.Poster}" alt="">
                  </div>
                  <h3 class="movie-title">${data.Title}</h3>
                  <div class="rating">
                    <i class="fa-solid fa-star"></i>    
                    <h2>${data.imdbRating}</h2> 
                  </div>
                  <div class="details">
                    <span>${data.Year}</span>
                    <span>|</span>
                    <span>${data.Rated}</span>
                    <span>|</span>
                    <span>${data.Runtime}</span>
                  </div>
                  <div class="Genre">
                       <div>${data.Genre.split(",").join("</div><div>")}</div>     
                  </div>
                  <div class="plot">
                    <h2>Plot</h2> 
                    <span>${data.Plot}</span>
                  </div>
                  <div class="cast">
                    <h2>Cast</h2>  
                    <span>${data.Actors}</span>
                  </div>`;
                } else {
                        resultBox.innerHTML = `<h3 class="message">${data.Error}</h3>`;
                }
        }).catch(() => {
                resultBox.innerHTML = `<h3 class="message">Error Occured!</h3>`;
        })
}

searchBtn.addEventListener('click', () => {
        if (inputValue.value != '') {
                getMovie();
        }
});

getMovie();
