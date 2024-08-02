var Author = /** @class */ (function () {
    function Author(id, name) {
        this.id = id;
        this.name = name;
    }
    Author.prototype.display = function () {
        console.log("".concat(this.id, ", ").concat(this.name));
    };
    return Author;
}());
var Book = /** @class */ (function () {
    function Book(id, title, genre, publishedDate) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.publishedDate = publishedDate;
    }
    Book.prototype.display = function () {
        console.log("".concat(this.id, ", ").concat(this.title, ", ").concat(this.genre, ", ").concat(this.publishedDate));
    };
    return Book;
}());
var Publisher = /** @class */ (function () {
    function Publisher(id, name, location, establishedYear) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.establishedYear = establishedYear;
    }
    Publisher.prototype.display = function () {
        console.log("".concat(this.id, ", ").concat(this.name, ", ").concat(this.location, ", ").concat(this.establishedYear));
    };
    return Publisher;
}());
var author = new Author(1, "George Orwell");
author.display();
var book = new Book(1, "1984", "Dystopian", "1949");
book.display();
var publisher = new Publisher(1, "Secker & Warburg", "London", 1935);
publisher.display();
