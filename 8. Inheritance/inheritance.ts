class Smartphone {
    ram: string;
    storage: string;
    processor: string;

    constructor(ram: string, storage: string, processor: string) {
        this.ram = ram;
        this.storage = storage;
        this.processor = processor;
    }

    call(): void {
        console.log("Calling...");
    }

    text(): void {
        console.log("Texting...");
    }
}

class AndroidPhone extends Smartphone {
    googlePlayStore: boolean;

    constructor(ram: string, storage: string, processor: string, googlePlayStore: boolean) {
        super(ram, storage, processor);
        this.googlePlayStore = googlePlayStore;
    }

    call(): void {
        console.log("AndroidPhone calling...");
    }
}

class iPhone extends Smartphone {
    faceID: boolean;

    constructor(ram: string, storage: string, processor: string, faceID: boolean) {
        super(ram, storage, processor);
        this.faceID = faceID;
    }

    call(): void {
        console.log("iPhone calling...");
    }
}

const androidPhone = new AndroidPhone("8GB", "128GB", "Snapdragon 888", true);
androidPhone.call();

const iphoneX = new iPhone("6GB", "256GB", "A15", true);
iphoneX.call();
