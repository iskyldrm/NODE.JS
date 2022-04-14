function oyunuBaslat(secim) {
    let kullanıcısecimi = secim.id;
    /*console.log(kullanıcısecimi);*/

    let reastgelesayi = Math.floor(Math.random()*3)
    let bilgisayarSecimi = ["tas","kagıt","makas"][reastgelesayi];
    console.log(bilgisayarSecimi);

    let oyunPuanları = {
        "tas":{"makas":1,"tas":0.5,"kagıt":0},
        "kagıt":{"tas":1,"kagıt":0.5,"makas":0},
        "makas":{"kagıt":1,"makas":0.5,"tas":0}

    }

    let kullanıcıPuanı = oyunPuanları[kullanıcısecimi][bilgisayarSecimi];
    console.log(kullanıcıPuanı);

    let kayitliResimler = {
        "tas": document.getElementById("tas").src,
        "kagıt": document.getElementById("kagıt").src,
        "makas": document.getElementById("makas").src
    };

    document.getElementById("tas").remove();
    document.getElementById("kagıt").remove();
    document.getElementById("makas").remove();

    let kullaniciResmi = document.createElement("img");
    let sonucMesaji = document.createElement("div");
    let bilgisayarResmi = document.createElement("img");

    kullaniciResmi.src = kayitliResimler[kullanıcısecimi];
    bilgisayarResmi.src = kayitliResimler[bilgisayarSecimi];

    document.querySelector(".container").appendChild(kullaniciResmi);
    document.querySelector(".container").appendChild(sonucMesaji);
    document.querySelector(".container").appendChild(bilgisayarResmi);

    if(kullaniciPuani == 0){
        sonucMesaji.innerHTML ="Malesef Kaybettiniz";
        sonucMesaji.style.color="red";
        sonucMesaji.style.fontSize="4rem";
    }
    else if(kullaniciPuani == 0.5){
       sonucMesaji.innerHTML ="Berabere";
       sonucMesaji.style.color="orange";
       sonucMesaji.style.fontSize="4rem";
    }
    else{
       sonucMesaji.innerHTML ="Tebrikler Kazandınız";
       sonucMesaji.style.color="green";
       sonucMesaji.style.fontSize="4rem";
    }

}