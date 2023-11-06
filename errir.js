let numberOfFilms = +prompt('Neche kinoya baxisiniz?');
let sualBir = prompt('Axrinci baxdiginiz film nedir?');
let sualIki = prompt('(Squid Game) Bu kinonu neche bal ile qiymetlendirirsiz?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
        logan: sualBir,
        sogan: sualIki

    },
    actors: {

    },
    genres: [],
    privat: false


};

let netice = `Baxdiginiz Kino Sayisi: ${personalMovieDB.count} eded.Axrinci baxdiginiz film ${personalMovieDB.movies.logan} filmidir.Squid Game filmini ${personalMovieDB.movies.sogan} bal ile qiymetlendirirsiz.`

document.getElementById('zekrotNumber2').innerHTML = netice