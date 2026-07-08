const movies = "a38759433da8160e11e7287ca0823446";

const movieContainer = document.getElementById("movie-container");
let currentPage = 1;
function loadMovies(page) {

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${movies}&certification_country=US&certification.lte=PG-13&sort_by=popularity.desc&page=${page}`)
        .then(response => response.json())
        .then(data => {

            data.results.forEach(movie => {

                const card = document.createElement("a");

                card.href = `movie.html?id=${movie.id}`;

                card.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                         alt="${movie.title}">
                `;

                movieContainer.appendChild(card);

            });

        });
}
loadMovies(currentPage);
window.addEventListener("scroll", () => {

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {

        currentPage++;

        loadMovies(currentPage);

    }

});
async function searchMovies() {

    const query = document.getElementById("searchInput").value;

    if (!query) return;

    const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${movies}&query=${query}`
    );

    const data = await response.json();

    displayMovies(data.results);
}


function displayMovies(results) {

    movieContainer.innerHTML = "";

    results.forEach(movie => {

        const card = document.createElement("a");

        card.href = `movie.html?id=${movie.id}`;

        card.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                 alt="${movie.title}">
        `;

        movieContainer.appendChild(card);

    });

}
