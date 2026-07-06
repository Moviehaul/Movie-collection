const movies = "a38759433da8160e11e7287ca0823446";

const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");
const movieDetails = document.getElementById("movie-details");

// Get movie details
fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${movies}`)
.then(response => response.json())
.then(movie => {

    // Get the trailer
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${movies}`)
    .then(response => response.json())
    .then(videoData => {

        const trailer = videoData.results.find(video =>
            video.site === "YouTube" && video.type === "Trailer"
        );

        let trailerHTML = "<p>No trailer available.</p>";

        if (trailer) {
            trailerHTML = `
                <iframe
                    width="700"
                    height="400"
                    src="https://www.youtube.com/embed/${trailer.key}"
                    frameborder="0"
                    allowfullscreen>
                </iframe>
            `;
        }

        movieDetails.innerHTML = `
            <div class="content">

                <div class="left">

                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">

                    <h1>${movie.title}</h1>

                    <h2>⭐ ${movie.vote_average.toFixed(1)}/10</h2>

                    <p>${movie.overview}</p>

                </div>

                <div class="right">

                    ${trailerHTML}

                </div>

            </div>
        `;

        // Set the blurred background
        document.body.style.backgroundImage =
            `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;

    });

});