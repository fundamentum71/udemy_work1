let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDb = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const a = prompt('Назовите последний один из просмотренных фильмов?', '');
const b = prompt('На сколько вы оцените его?', '');
const c = prompt('Назовите последний один из просмотренных фильмов?', '');
const d = prompt('На сколько вы оцените его?', '');
//personalMovieDb.movies['lastFilms'];
personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);
