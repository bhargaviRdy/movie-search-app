const POPULAR_API = "https://api.themoviedb.org/3/discover/movie?api_key=12c713a5fea488b7e00ffd0f5315f814&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
var popularMovies = [];
var queryResults = [];
var res = document.querySelector("#results");

function displayMovies(movies) {
    res.innerHTML = "";
    movies.forEach(movie => {
        var imgSrc = "https://image.tmdb.org/t/p/w1280" + movie.poster_path;
        res.innerHTML += ` 
        <div class="movie">
        <img class="poster" src=${imgSrc} alt="poster">

        <span class="title">${movie.title}</span>
        <span class="overview">${movie.overview}</span>
        <span class="rating">${movie.vote_average}</span>

    </div>
        `
    })
}

async function loadPopular() {
    await fetch(POPULAR_API)
        .then((res) => res.json())
        .then((data) => {
            popularMovies = data.results;
            displayMovies(popularMovies);
        });
}
loadPopular();

let userInput = document.querySelector("#moviename");
var res = document.querySelector(".results");

const QUERY_API = "https://api.themoviedb.org/3/search/movie?api_key=12c713a5fea488b7e00ffd0f5315f814&language=en-US&page=1&include_adult=false&query=";


userInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) { getMovieData(userInput.value) }
})

async function getMovieData(movie) {
    await fetch(QUERY_API + movie)
        .then(response =>
            response.json()
        )
        .then(data => {
            queryResults = data.results
            displayMovies(queryResults)
        })
        .catch((error) => {
            console.log("error occured: " + error);
        });
}



