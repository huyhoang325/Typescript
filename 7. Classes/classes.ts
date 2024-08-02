class Author {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    display() {
        console.log(`${this.id}, ${this.name}`);
    }
}

class Book {
    id: number;
    title: string;
    genre: string;
    publishedDate: string;

    constructor(id: number, title: string, genre: string, publishedDate: string) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.publishedDate = publishedDate;
    }

    display() {
        console.log(`${this.id}, ${this.title}, ${this.genre}, ${this.publishedDate}`);
    }
}

class Publisher {
    id: number;
    name: string;
    location: string;
    establishedYear: number;

    constructor(id: number, name: string, location: string, establishedYear: number) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.establishedYear = establishedYear;
    }

    display() {
        console.log(`${this.id}, ${this.name}, ${this.location}, ${this.establishedYear}`);
    }
}

const author = new Author(1, "George Orwell");
author.display();

const book = new Book(1, "1984", "Dystopian", "1949");
book.display();

const publisher = new Publisher(1, "Secker & Warburg", "London", 1935);
publisher.display();
