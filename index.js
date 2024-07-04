//`https://www.omdbapi.com/?i=apikey=a70d036d

async function Movies() {
const movieAPI = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=a70d036d&s=`)
const movieData = await movieAPI.json()
const movieEl = document.querySelector(".movie")

console.log(movieData)
movieEl.innerHTML = movieData.map(movieInfo => 
`<div class="movie">
     = <div class="movie__wrapper">
        <img src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" alt="" class="movie__poster">
        <div class="movie__popup"></div>
        <div class="movie__popup--tag link__hover--effect">More Info</div>                                    
    </div>
    <p class="movie__title"><b>Guardians of The Galaxy</b></p>
    </div>`).join("")

}

Movies()

function onSearchChange(event) {

}