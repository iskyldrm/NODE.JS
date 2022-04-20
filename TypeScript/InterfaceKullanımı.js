var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
var Calisan = /** @class */ (function () {
    function Calisan(ad, soyad) {
        this.ad = ad;
        this.soyad = soyad;
    }
    Calisan.prototype.Yazdır = function () {
        console.log(this.ad + " " + this.soyad + " " + this.brans + "");
    };
    return Calisan;
}());
var alim = new Calisan("ali", "yilmaz");
var veli = new Calisan("ali", "veli");
var ayse = new Calisan("Ayşe", "Demir");
ayse.brans = "pazarlama";
console.log(typeof (ayse));
