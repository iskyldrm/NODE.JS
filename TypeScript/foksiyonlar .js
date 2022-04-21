// foksiyonlarda paramterelere default değer verme
function tsTopla(sayi1, sayi2) {
    if (sayi2 === void 0) { sayi2 = 2000; }
    return sayi1 + sayi2;
}
console.log(tsTopla(200));
console.log(tsTopla(200, 222));
//Undifend parametre yani vermesende olur diyebilmek için parametrenin başına? eklemek gerekir
function tsTopla2(x, y) {
    try {
        if (typeof (y) == "number") {
            var toplam = 0;
            toplam = x + y;
            return toplam;
        }
        else {
            return x;
        }
    }
    catch (error) {
    }
}
console.log(tsTopla2(6, 8));
console.log("--------------------------");
function tsTopla3(x, y) {
    var digerleri = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        digerleri[_i - 2] = arguments[_i];
    }
    var geneltoplam = x + y;
    var toplam = digerleri.forEach(function (deger) {
        geneltoplam += deger;
    });
    console.log(geneltoplam);
}
tsTopla3(1, 2, 3, 4, 5);
console.log("--------------------------");
//Arrow Function
var sumum = function (x, y) { return x + y; };
console.log(sumum(6, 8));
