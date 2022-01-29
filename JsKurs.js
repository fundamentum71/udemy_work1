let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	while (
		numberOfFilms == '' ||
		numberOfFilms == null ||
		isNaN(numberOfFilms)
	) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();

const personalMovieDb = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

detectPersonalLevel();

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Назовите последний один из просмотренных фильмов?', '');
		b = prompt('На сколько вы оцените его?', '');
		if (
			a != null &&
			b != null &&
			a != '' &&
			b != '' &&
			a.length < 50 &&
			b.length < 50
		) {
			personalMovieDb.movies[a] = b;
			console.log('done');
		} else {
			console.log('Error');
			i--;
		}
	}
}

rememberMyFilms();

function writeYourGenres() {
	for (let i = 1; i < 4; i++) {
		const a = prompt(`Ваш любимый жанр номер ${i}`, ``);
		if (a != null && a != '' && a.length < 50) {
			personalMovieDb.genres[i - 1] = a;
			console.log('done');
		} else {
			console.log('Error');
			i--;
		}
	}
}

writeYourGenres();

function detectPersonalLevel() {
	if (personalMovieDb.count < 10) {
		alert('Вы посмотрели не так много фильмов');
	} else if (personalMovieDb.count > 30) {
		alert('Вы киноман!');
	} else if (personalMovieDb.count <= 30 || personalMovieDb.count >= 10) {
		alert('Вы классный зритель!');
	} else {
		alert('Произошла ошибка');
	}
}

function showMydb() {
	if (personalMovieDb.privat == false) {
		console.log(personalMovieDb);
	}
}

showMydb();
