getFromLocal();
const container = document.querySelector(".container");
const miktar = document.getElementById("miktar");
const ucret = document.getElementById("ucret");
const select = document.querySelector(".movie");
const koltuklar = document.querySelectorAll(".koltuk:not(.reserved)")

container.addEventListener("click",function(e) {
  if (e.target.classList.contains("koltuk") && !e.target.classList.contains("reserved"))
  {
      e.target.classList.toggle("selected") 
      tutarHesapla();
  }
     
});

select.addEventListener("change", function (e) {
    tutarHesapla();
});

function tutarHesapla() {
    const seciliKoltuklar = container.querySelectorAll(".koltuk.selected");
    const seciliKoltukDiisi = [];
    const koltukDizisi = [];

    seciliKoltuklar.forEach(function(koltuk){
        seciliKoltukDiisi.push(koltuk);
    })
    koltuklar.forEach(function(koltuk){
        koltukDizisi.push(koltuk);
    })

    let seciliKoltukIndexleri = seciliKoltukDiisi.map(function (koltuk) {
        return seciliKoltukDiisi.indexOf(koltuk)
    })

    console.log(seciliKoltukIndexleri);

    let seciliKoltukUzunluk = seciliKoltuklar.length;
    miktar.innerText = seciliKoltukUzunluk;
    ucret.innerText = seciliKoltukUzunluk * select.value;
    saveToLocalStorage(seciliKoltukIndexleri);
}

function saveToLocalStorage(index) {
    localStorage.setItem("siciliKoltuklar",JSON.stringify(index))
    localStorage.setItem("seciliFilmIndexi",select.selectedIndex)
}

function getFromLocal() {
    const seciliKoltuklar = JSON.parse(localStorage.getItem("siciliKoltuklar"))
    const seciliFilm = localStorage.getItem("seciliFilmIndexi")

    if (seciliKoltuklar != null && seciliKoltuklar >0) {
        koltuklar.forEach(koltuk,index)
        if (seciliKoltuklar.indexOf(index)>-1) {
            koltuk.classList.add("selected")
        }
    }
}
