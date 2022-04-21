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
var IsitmaTipi;
(function (IsitmaTipi) {
    IsitmaTipi[IsitmaTipi["elektrikli"] = 0] = "elektrikli";
    IsitmaTipi[IsitmaTipi["gazli"] = 1] = "gazli";
    IsitmaTipi[IsitmaTipi["sobal\u0131"] = 2] = "sobal\u0131";
})(IsitmaTipi || (IsitmaTipi = {}));
var ev = /** @class */ (function () {
    function ev(odasayisi, kat, metrekare, Isitma) {
        this.EkranaYaz = function () {
            console.log("odasayisi: " + this.odasayisi);
        };
        this.odasayisi = odasayisi;
        this.kat = kat;
        this.metreKare = metrekare;
        this.Isitma = Isitma;
    }
    return ev;
}());
var benimEvim = new ev();
benimEvim.odasayisi = 2;
benimEvim.kat = 4;
benimEvim.metreKare = 420;
benimEvim.Isitma = IsitmaTipi.sobalı;
//console.log(benimEvim)
benimEvim.EkranaYaz();
var kisi = /** @class */ (function () {
    function kisi(ad, soyad) {
        this.ad = ad;
        this.soyad = soyad;
    }
    return kisi;
}());
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel(ad, soyad, brans) {
        var _this = _super.call(this, ad, soyad) || this;
        _this.brans = brans;
        return _this;
    }
    return Personel;
}(kisi));
var ali = new Personel("ali", "Yilmaz", "Ogretmen");
console.log(ali);
/*Metod Overriding */
var Arac = /** @class */ (function () {
    function Arac(_marka) {
        this.marka = _marka;
    }
    Arac.prototype.HareketEt = function (hiz) {
        console.log("".concat(this.marka, ", ").concat(hiz, " ile gidiyor"));
    };
    return Arac;
}());
var Bmv = /** @class */ (function (_super) {
    __extends(Bmv, _super);
    function Bmv(_marka) {
        return _super.call(this, _marka) || this;
    }
    Bmv.prototype.HareketEt = function (hiz) {
        console.log("BMW hareket ediyor.");
        _super.prototype.HareketEt.call(this, hiz);
    };
    return Bmv;
}(Arac));
var bmv = new Bmv("BMW");
bmv.HareketEt(100);
