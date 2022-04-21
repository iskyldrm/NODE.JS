enum IsitmaTipi{
    elektrikli,
    gazli,
    sobalı,
}

interface EvOzellikler
{
    odasayisi:number;
    kat:number;
    metreKare:Number;
    Isitma:IsitmaTipi;

}

class ev implements EvOzellikler
{
    odasayisi: number;
    kat: number;
    metreKare: Number;
    Isitma: IsitmaTipi;
    constructor(odasayisi?:number,kat?:number,metrekare?:number,Isitma?:IsitmaTipi)
    {
        this.odasayisi = odasayisi
        this.kat = kat
        this.metreKare = metrekare
        this.Isitma = Isitma
    }

    EkranaYaz = function () 
    {
        console.log("odasayisi: "+this.odasayisi)    
    }
}

let benimEvim = new ev();
benimEvim.odasayisi = 2
benimEvim.kat=4
benimEvim.metreKare = 420
benimEvim.Isitma = IsitmaTipi.sobalı


//console.log(benimEvim)

benimEvim.EkranaYaz();


class kisi
{
    ad:string
    soyad:string
    TcNo:string
    Gsm:string
    email:string;

    constructor(ad:string,soyad:string)
    {
        this.ad = ad
        this.soyad = soyad
    }
}

class Personel extends kisi
{
    brans:string
    constructor(ad:string,soyad:string,brans:string){
        super(ad,soyad)
        this.brans = brans
    }

}

var ali = new Personel("ali","Yilmaz","Ogretmen")
console.log(ali)


/*Metod Overriding */

class Arac
{
    marka:string;
    constructor(_marka:string)
    {
        this.marka = _marka;
    }

    HareketEt(hiz:number)
    {
        console.log(`${this.marka}, ${hiz} ile gidiyor`);
    }
}

class Bmv extends Arac
{
    constructor(_marka:string)
    {
        super(_marka);
    }
    HareketEt(hiz: number) 
    {
        console.log("BMW hareket ediyor.")
        super.HareketEt(hiz)    
    }
}

let bmv = new Bmv("BMW")
bmv.HareketEt(100);