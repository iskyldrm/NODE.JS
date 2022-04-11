

//4 çeşit tanımlama vardır

//1.yöntem
var yas = 30;

console.log(yas);

console.log("\n")


//2yöntem

for (let index = 0; index < 11; index++) {
    
    if (index%2==0) {
        console.log(typeof(index));
    }
    
}

//3.yöntem
var tarih = new Date();
console.log(tarih);

let x = 16 + "tarih";
console.log(x);

//array
const araclar = ["toyota","Bmv","Auid","Volvo"];

console.log(araclar);

araclar.forEach(element => {
    console.log(element);
    
});


