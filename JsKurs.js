let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDb = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

if (personalMovieDb.count < 10) {
	alert('Вы посмотрели не так много фильмов');
} else if (personalMovieDb.count > 30) {
	alert('Вы киноман!');
} else if (personalMovieDb.count <= 30 || personalMovieDb.count >= 10) {
	alert('Вы классный зритель!');
} else {
	alert('Произошла ошибка');
}

for (let i = 0; i < 2; i++) {
	const a = prompt('Назовите последний один из просмотренных фильмов?', '');
	b = prompt('На сколько вы оцените его?', '');
	if (
		a != null &&
		a != null &&
		a != '' &&
		a != '' &&
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

console.log(personalMovieDb);
