"use strict";
exports.__esModule = true;
exports.stringHelper = void 0;
var stringHelper;
(function (stringHelper) {
    function BuyukHarfeCevir(mesaj) {
        return mesaj.toUpperCase();
    }
    stringHelper.BuyukHarfeCevir = BuyukHarfeCevir;
    function Substring(str, baslangıc, bitis) {
        return str.substring(baslangıc, bitis);
    }
    stringHelper.Substring = Substring;
    var A = /** @class */ (function () {
        function A() {
        }
        return A;
    }());
    stringHelper.A = A;
})(stringHelper = exports.stringHelper || (exports.stringHelper = {}));
