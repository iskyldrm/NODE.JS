function EkranaYaz(isim) {
    console.log(isim)
}

EkranaYaz("isak yıldırım")

var sayi =  15;

//sayi = "ali veli";

EkranaYaz(sayi)

var cevap:Boolean

var sayi1:number
var sehir:string

var dogum:Date

cevap = true
sayi=12
sehir="adana"
dogum= new Date()
EkranaYaz(dogum)

/* diziler */

var sayiiar = [1,2,3,4,5,6,7,8,9];
let sehirler = ["adana","ankara","bursa","ıstanbul","ızmır"]

sayiiar.push(12);

// sayiiar.forEach(element => {
//         console.log(element)
// });

function Topla(sayi1:number,sayi2:number):number 
{
    
    return sayi1+sayi2
}

console.log(Topla(9,9))
console.log("-----------------------")

/* TUPLE */

var complex2:[number,string] = [12,"adana"]
var complexDizi = [2,"adana"]
complexDizi.forEach(function (deger) {
    return console.log(deger)
})

console.log("-----------------------")

/* Enum */

enum Renkler{
    mavi,
    siyah,
    kirmizi,
    beyaz
}

let renk:Renkler = Renkler.kirmizi

console.log(renk)

/* Any,Void,Null */

console.log("-----------------------")

let xyz:any = "ali"
xyz = 15


///* Union */************************************************************* */

let code:(string|number)
code = 123;
code = "ali";

function displaycode(code:(string|number) )
{

    if (typeof(code) === "number") 
    {
        console.log("numberdır")
    }

    if (typeof(code) === "string") 
    {
        console.log("stringdir")
    }
}

function UnionToplama(x:(string|number),y:(string|number)):(string|number)
{

    if(typeof(x)==="number" && typeof(y)==="number")
        return x+y;
    if(typeof(x)==="string" && typeof(y)==="string")
        return x+y;
}

console.log(UnionToplama(3,5));
console.log(UnionToplama("3","5"));







