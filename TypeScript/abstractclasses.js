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
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Kisi.prototype.KisiBilgileriniGoster = function () {
        console.log(this.ad + " " + this.soyad);
    };
    return Kisi;
}());
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel(Ad, Soyad, email) {
        var _this = _super.call(this) || this;
        _this.ad = Ad;
        _this.soyad = Soyad;
        _this.gsm = "dasdas";
        _this._email = email;
        return _this;
    }
    Personel.prototype.Ara = function (isim) {
        return new Personel(isim, this.soyad, this._email);
    };
    Personel.prototype.getGsm = function () {
        return this.gsm;
    };
    return Personel;
}(Kisi));
var ali = new Personel("Ali", "Yilmaz", "dsada");
console.log(ali);
ali.KisiBilgileriniGoster();
console.log(ali.Ara("Ali") + " gsm:" + ali.getGsm());
