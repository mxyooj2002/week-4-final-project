//`https://www.omdbapi.com/?i=apikey=a70d036d
const movieEl = document.querySelector(".movie")
const searchInput = document.getElementById("search")

async function movieApi() {
//console.log(searchInput)   
const movieAPI = await fetch(`https://www.omdbapi.com/?apikey=a70d036d&s=${searchInput.value}`)
const movieData = await movieAPI.json()

if (movieData.Search) {
    movieEl.innerHTML = movieData.Search.map((movie) => movieHtml(movie)).join("")
}





console.log(movieData)
}

movieApi()

async function onSearchChange(event) {
  

}

onSearchChange()

function movieHtml(movie) {
return `
    <div class="movie">
        <div class="movie__wrapper">
            <img src="${movie.Poster}" alt="" class="movie__poster">
            <div class="movie__popup"></div>
            <div class="movie__popup--tag link__hover--effect">More Info</div>                                    
        <p class="movie__title"><b>${movie.Title}</b></p>
    </div>
    </div>`
}

 

 

function movieInfo(imdbID) {
localStorage.setItem("idmbID", imdbID)

}


