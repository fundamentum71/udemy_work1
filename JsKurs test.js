const personalMovieDb = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		numberOfFilms.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		while (
			numberOfFilms.count == '' ||
			numberOfFilms.count == null ||
			isNaN(numberOfFilms.count)
		) {
			numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt(
				'Назовите последний один из просмотренных фильмов?',
				''
			);
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
	},

	writeYourGenres: function () {
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
	},

	detectPersonalLevel: function () {
		if (personalMovieDb.count < 10) {
			alert('Вы посмотрели не так много фильмов');
		} else if (personalMovieDb.count > 30) {
			alert('Вы киноман!');
		} else if (personalMovieDb.count <= 30 || personalMovieDb.count >= 10) {
			alert('Вы классный зритель!');
		} else {
			alert('Произошла ошибка');
		}
	},

	toggleVisibleMyDb: function () {
		if (personalMovieDb.privat) {
			personalMovieDb.privat = false;
		} else {
			personalMovieDb.privat = true;
		}
	},

	showMydb: function () {
		if (personalMovieDb.privat == false) {
			console.log(personalMovieDb);
		}
	},
};

personalMovieDb.start();

personalMovieDb.detectPersonalLevel();

personalMovieDb.rememberMyFilms();

personalMovieDb.writeYourGenres();

personalMovieDb.toggleVisibleMyDb();

personalMovieDb.showMydb();

personalMovieDb.genres.forEach((item, i) => {
	console.log(`Любимый жанр ${i + 1} - это ${item}`);
});
