class Artist {
    private _id: number;
    private _name: string;

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
    }

    display(): void {
        console.log(`Artist Id: ${this._id} Artist Name: ${this._name}`);
    }

    public get getId(): number {
        return this._id;
    }
    public get getName(): string {
        return this._name;
    }

    public set setId(id: number) {
        this._id = id;
    }
    public set setName(name: string) {
        this._name = name;
    }
}

class Album {
    private _id: number;
    private _name: string;
    private _genre: string;
    private _releaseDate: string;

    constructor(id: number, name: string, genre: string, releaseDate: string) {
        this._id = id;
        this._name = name;
        this._genre = genre;
        this._releaseDate = releaseDate;
    }

    display(): void {
        console.log(`${this._id} ${this._name} ${this._genre} ${this._releaseDate}`);
    }

    public get getId(): number {
        return this._id;
    }
    public get getName(): string {
        return this._name;
    }
    public get getGenre(): string {
        return this._genre;
    }
    public get getReleaseDate(): string {
        return this._releaseDate;
    }

    public set setId(id: number) {
        this._id = id;
    }
    public set setName(name: string) {
        this._name = name;
    }
    public set setGenre(genre: string) {
        this._genre = genre;
    }
    public set setReleaseDate(releaseDate: string) {
        this._releaseDate = releaseDate;
    }
}

class RecordLabel {
    private _id: number;
    private _name: string;
    private _country: string;
    private _address: string;

    constructor(id: number, name: string, country: string, address: string) {
        this._id = id;
        this._name = name;
        this._country = country;
        this._address = address;
    }

    display(): void {
        console.log(`${this._id} ${this._name} ${this._country} ${this._address}`);
    }

    public get getId(): number {
        return this._id;
    }
    public get getName(): string {
        return this._name;
    }
    public get getCountry(): string {
        return this._country;
    }
    public get getAddress(): string {
        return this._address;
    }

    public set setId(id: number) {
        this._id = id;
    }
    public set setName(name: string) {
        this._name = name;
    }
    public set setCountry(country: string) {
        this._country = country;
    }
    public set setAddress(address: string) {
        this._address = address;
    }
}

const artist = new Artist(1, "Taylor Swift");
artist.setName = "Adele";
artist.setId = 2;
console.log(artist.getName);
console.log(artist.getId);
artist.display();

const album = new Album(1, "25", "Pop", "2015-11-20");
album.setId = 2;
album.setName = "21";
album.setGenre = "Soul";
album.setReleaseDate = "2011-01-24";
console.log(album.getName);
console.log(album.getId);
console.log(album.getGenre);
console.log(album.getReleaseDate);
album.display();

const recordLabel = new RecordLabel(1, "Records", "USA", "New York");
recordLabel.setId = 2;
recordLabel.setName = "Warner Music Group";
recordLabel.setCountry = "UK";
recordLabel.setAddress = "London";
console.log(recordLabel.getName);
console.log(recordLabel.getId);
console.log(recordLabel.getCountry);
console.log(recordLabel.getAddress);
recordLabel.display();
