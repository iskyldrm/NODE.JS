function EkranaYaz(isim) {
    console.log(isim);
}
EkranaYaz("isak yıldırım");
var sayi = 15;
//sayi = "ali veli";
EkranaYaz(sayi);
var cevap;
var sayi1;
var sehir;
var dogum;
cevap = true;
sayi = 12;
sehir = "adana";
dogum = new Date();
EkranaYaz(dogum);
/* diziler */
var sayiiar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sehirler = ["adana", "ankara", "bursa", "ıstanbul", "ızmır"];
sayiiar.push(12);
// sayiiar.forEach(element => {
//         console.log(element)
// });
function Topla(sayi1, sayi2) {
    return sayi1 + sayi2;
}
console.log(Topla(9, 9));
console.log("-----------------------");
/* TUPLE */
var complex2 = [12, "adana"];
var complexDizi = [2, "adana"];
complexDizi.forEach(function (deger) {
    return console.log(deger);
});
console.log("-----------------------");
/* Enum */
var Renkler;
(function (Renkler) {
    Renkler[Renkler["mavi"] = 0] = "mavi";
    Renkler[Renkler["siyah"] = 1] = "siyah";
    Renkler[Renkler["kirmizi"] = 2] = "kirmizi";
    Renkler[Renkler["beyaz"] = 3] = "beyaz";
})(Renkler || (Renkler = {}));
var renk = Renkler.kirmizi;
console.log(renk);
/* Any,Void,Null */
console.log("-----------------------");
var xyz = "ali";
xyz = 15;
