"use strict";
/// <reference path="namespace4string.ts" />
exports.__esModule = true;
exports.Ogrenci = void 0;
var namespace4string_1 = require("./namespace4string");
var Ogrenci = /** @class */ (function () {
    function Ogrenci(ad, soyad) {
        this.ad = namespace4string_1.stringHelper.BuyukHarfeCevir(ad);
        this.soyad = namespace4string_1.stringHelper.BuyukHarfeCevir(soyad);
    }
    return Ogrenci;
}());
exports.Ogrenci = Ogrenci;
var ali = new Ogrenci("ali", "yılmaz");
console.log(ali.ad);
