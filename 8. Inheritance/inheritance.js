var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Smartphone = /** @class */ (function () {
    function Smartphone(ram, storage, processor) {
        this.ram = ram;
        this.storage = storage;
        this.processor = processor;
    }
    Smartphone.prototype.call = function () {
        console.log("Calling...");
    };
    Smartphone.prototype.text = function () {
        console.log("Texting...");
    };
    return Smartphone;
}());
var AndroidPhone = /** @class */ (function (_super) {
    __extends(AndroidPhone, _super);
    function AndroidPhone(ram, storage, processor, googlePlayStore) {
        var _this = _super.call(this, ram, storage, processor) || this;
        _this.googlePlayStore = googlePlayStore;
        return _this;
    }
    AndroidPhone.prototype.call = function () {
        console.log("AndroidPhone calling...");
    };
    return AndroidPhone;
}(Smartphone));
var iPhone = /** @class */ (function (_super) {
    __extends(iPhone, _super);
    function iPhone(ram, storage, processor, faceID) {
        var _this = _super.call(this, ram, storage, processor) || this;
        _this.faceID = faceID;
        return _this;
    }
    iPhone.prototype.call = function () {
        console.log("iPhone calling...");
    };
    return iPhone;
}(Smartphone));
var androidPhone = new AndroidPhone("8GB", "128GB", "Snapdragon 888", true);
androidPhone.call();
var iphoneX = new iPhone("6GB", "256GB", "A15", true);
iphoneX.call();
