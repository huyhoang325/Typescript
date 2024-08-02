var movie = {
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010
};
var title = movie.title, director = movie.director, year = movie.year;
for (var key in movie) {
    console.log(key);
    console.log(movie[key]);
}
