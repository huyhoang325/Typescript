var Artist = /** @class */ (function () {
    function Artist(id, name) {
        this._id = id;
        this._name = name;
    }
    Artist.prototype.display = function () {
        console.log("Artist Id: ".concat(this._id, " Artist Name: ").concat(this._name));
    };
    Object.defineProperty(Artist.prototype, "getId", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Artist.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Artist.prototype, "setId", {
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Artist.prototype, "setName", {
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Artist;
}());
var Album = /** @class */ (function () {
    function Album(id, name, genre, releaseDate) {
        this._id = id;
        this._name = name;
        this._genre = genre;
        this._releaseDate = releaseDate;
    }
    Album.prototype.display = function () {
        console.log("".concat(this._id, " ").concat(this._name, " ").concat(this._genre, " ").concat(this._releaseDate));
    };
    Object.defineProperty(Album.prototype, "getId", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "getGenre", {
        get: function () {
            return this._genre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "getReleaseDate", {
        get: function () {
            return this._releaseDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "setId", {
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "setName", {
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "setGenre", {
        set: function (genre) {
            this._genre = genre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "setReleaseDate", {
        set: function (releaseDate) {
            this._releaseDate = releaseDate;
        },
        enumerable: false,
        configurable: true
    });
    return Album;
}());
var RecordLabel = /** @class */ (function () {
    function RecordLabel(id, name, country, address) {
        this._id = id;
        this._name = name;
        this._country = country;
        this._address = address;
    }
    RecordLabel.prototype.display = function () {
        console.log("".concat(this._id, " ").concat(this._name, " ").concat(this._country, " ").concat(this._address));
    };
    Object.defineProperty(RecordLabel.prototype, "getId", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RecordLabel.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RecordLabel.prototype, "getCountry", {
        get: function () {
            return this._country;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RecordLabel.prototype, "getAddress", {
        get: function () {
            return this._address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RecordLabel.prototype, "setId", {
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RecordLabel.prototype, "setName", {
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RecordLabel.prototype, "setCountry", {
        set: function (country) {
            this._country = country;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RecordLabel.prototype, "setAddress", {
        set: function (address) {
            this._address = address;
        },
        enumerable: false,
        configurable: true
    });
    return RecordLabel;
}());
var artist = new Artist(1, "Taylor Swift");
artist.setName = "Adele";
artist.setId = 2;
console.log(artist.getName);
console.log(artist.getId);
artist.display();
var album = new Album(1, "25", "Pop", "2015-11-20");
album.setId = 2;
album.setName = "21";
album.setGenre = "Soul";
album.setReleaseDate = "2011-01-24";
console.log(album.getName);
console.log(album.getId);
console.log(album.getGenre);
console.log(album.getReleaseDate);
album.display();
var recordLabel = new RecordLabel(1, "Records", "USA", "New York");
recordLabel.setId = 2;
recordLabel.setName = "Warner Music Group";
recordLabel.setCountry = "UK";
recordLabel.setAddress = "London";
console.log(recordLabel.getName);
console.log(recordLabel.getId);
console.log(recordLabel.getCountry);
console.log(recordLabel.getAddress);
recordLabel.display();
