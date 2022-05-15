class Movie {
    constructor(id, movieName, directorName, category) {
        this.id = id;
        this.MovieName = movieName;
        this.DirectorName = directorName;
        this.Category = category;
    }


}

//const movie = new Movie(1, "Titanic", "James Cameron", "Drama");

//console.log(movie);

class WebUI {

    static getMovies() {
        const sampleMovies = [
            {
                id: 1,
                movieName: "The Matrix",
                director:"Wachovski",
                category: "Action"
            },
            {
                id: 2,
                movieName: "Lord of the rings",
                director:"Peter Jackson",
                category: "Action"
            },
            {
                id: 3,
                movieName: "Titanic",
                director:"James Cameron",
                category: "Drama"
            }
        ]

        for (var i = 0; i < sampleMovies.length; i++) {
            WebUI.addMovie(sampleMovies[i])
        }

    }

    static addMovie(movie) {
        const movieTable = document.getElementById("movieTable");
        const tr = document.createElement("tr");

        //backtick AltGr+,
        tr.innerHTML = `
                    <td>${movie.id}</td>
                    <td>${movie.movieName}</td>
                    <td>${movie.director}</td>
                    <td>${movie.category}</td>
`
        movieTable.appendChild(tr);
        
    }
}


window.onload = function () {
    WebUI.getMovies();

    document.getElementById('submit').onclick = function () {
        const movieName = document.getElementById("movieName").value;
        const director = document.getElementById("directorName").value;
        const category = document.getElementById("categoryName").value;

        const movie = new Movie(4, movieName, director, category);
        console.log(movie);
        WebUI.addMovie(movie);
       
    }
}



