interface Movie {
    title: string;
    director: string;
    year: number;
}

const movie: Movie = {
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010
};

const { title, director, year } = movie;

for (const key in movie) {
    console.log(key);
    console.log(movie[key as keyof Movie]);
}
