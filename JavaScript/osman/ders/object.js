// // // Object (Nesne) "Key : Value" yapısıyla çalışır.
// // // Key : Value yapısına Property denir.

// // //Object Oluşturma Yolları
// // let item = {};
// // let item1 = new Object();
// // let item2 = Object.create(null); //Boş obje herhangi bir değer almaz
// // let item3 = Object.create(Object.prototype) //Standar obje kalıtımıdır.
// // let item4 = Object.create(item) // Daha önce oluşturduğumuz item objesini aldı.Onun içinde ne varsa bunda da var .
                    

// // let car = {
// //     name :"BMW",
// //     model :"i320"
// // } // car isminde bir obje oluşturduk . İçinde name ve model adında 2 adet KEY var.
// // console.log(car.name); // Bize BMW çıktısını verir yani objenin içindeki proplara ulaşabiliriz.

// // // objeye Yeni key ekleme
// // car.km = 50000; // KM isminde bir KEY ekledik içinede 50000 değerinde bir value ekledik.
// // console.log(car.km)
// // console.log(car)

// // // Objeden prop kaldırma
// // delete car.km; // Objeden KM propunu kaldırdık
// // console.log(car)

// // // objenin sadece keylerine ulaşma
// // console.log(Object.keys(car)) //1.yol

// // keys = Object.keys(car) //2.yol
// // console.log(keys)

// // //Objenin Value lerine ulaşma
// // console.log(Object.values(car)) //1.Yol

// // values = Object.values(car) //2.yol
// // console.log(values)

// // car.name ="Mercedes";
// // console.log(car)

// //Objenin içine Fonksiyon Ekleme
// let info = {
//  name : "Osman",
//  secondName : "Baş",
//  job : "Student",
//  age : 26,
//  city : "İstanbul",
//  introduce : function() {
//      console.log(`My name is ${this.name} ${this.secondName}, 
//      I'm ${this.age} yo. I live in ${this.city} `)
//  }
// }
// info.introduce();

// // let info2 = {
// //     name : "Furkan",
// //  secondName : "Taşcı",
// //  job : "Student",
// //  age : 20,
// //  city : "İstanbul",
// //  introduce2 : () => {
// //      return `My name is ${this.name} ${this.secondName}, 
// //      I'm ${info2.age} yo. I live in ${info2.city} `
// //  }
// // }
// // console.log(info2.introduce2());

// //Objeye sonradan Fonksiyon Ekleme
// info.myHobbies = function(){
//     console.log("Müzik , Spor , Video Oyunları")
// }

// info.myHobbies();

// //Objenin içindeki Fonksiyonu kaldırma
//  delete info.myHobbies;

// console.log(info)

//Javascript Object Constructor 
//Fonksiyon yöntemiyle OBJE oluşturma. Artık "new" anahtar kelimesiyle 
// belirttiğimiz şablonda bir obje oluşturabiliriz.

function human(isim,yas){
    this.isim = isim;
    this.yas = yas;
}
const Berkay = new human("Berkay",23);
console.log(Berkay);