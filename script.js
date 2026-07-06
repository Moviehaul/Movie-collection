const movies = "a38759433da8160e11e7287ca0823446";

const movieContainer = document.getElementById("movie-container");

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movies}&page=1`)
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
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movies}&page=2`)
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
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movies}&page=3`)
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
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movies}&page=4`)
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
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movies}&page=5`)
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
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movies}&page=6`)
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
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movies}&page=7`)
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
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movies}&page=8`)
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
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movies}&page=9`)
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
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movies}&page=10`)
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
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movies}&page=11`)
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
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movies}&page=12`)
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
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movies}&page=13`)
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
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movies}&page=14`)
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
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movies}&page=15`)
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
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movies}&page=16`)
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
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movies}&page=17`)
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
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movies}&page=18`)
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
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movies}&page=19`)
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
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movies}&page=20`)
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
    