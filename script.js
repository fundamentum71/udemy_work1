//let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDb = {
	//count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

//if (numberOfFilms < 10) {
//	alert('Вы посмотрели не так много фильмов');
//} else if (numberOfFilms > 30) {
//	alert('Вы киноман!');
//} else if (numberOfFilms <= 30 || numberOfFilms >= 10) {
//	alert('Вы классный зритель!');
//} else {
//	alert('Произошла ошибка');
//}

let a, b, yes;
do {
	do {
		a = prompt('Назовите последний один из просмотренных фильмов?', '');
	} while (a == '' || a.length > 3);
	do {
		b = prompt('На сколько вы оцените его?', '');
	} while (b == '' || b.length > 4);

	personalMovieDb.movies[a] = b;
	yes = confirm('Qestion?');
	if (!yes) {
		break;
	}
} while (yes || a || b);

console.log(personalMovieDb);

//switch (numberOfFilms) {
//	case numberOfFilms < 10:
//		alert('Просмотрено довольно мало фильмов');
//		break;
//	case numberOfFilms > 30:
//		alert('Вы киноман!');
//		break;
//	case numberOfFilms >= 10 || numberOfFilms <= 30:
//		alert('Вы классный зритель!');
//		break;
//	default:
//		alert('Произошла ошибка!');
//}
