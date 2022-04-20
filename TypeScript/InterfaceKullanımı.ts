interface Ikisi
{
    ad:string;
    soyad:string;
    tcNo:string;
    Yazdır():void
}

interface IPersonel 
{
    brans:string;
    maas:number
}
class A{
    sayi:number;
    private mesaj:string
    setMesaj(mesaj:string):void{
       this.mesaj=mesaj;
       
    }
    getMesaj():string{
        return this.mesaj;
    }
   }

class Calisan implements Ikisi,IPersonel
{
    brans: string;
    maas: number;
    ad: string;
    soyad: string;
    tcNo: string;
    Yazdır(): void {
        console.log(this.ad+" "+this.soyad+ " "+ this.brans+ "");
    }
    constructor(ad:string,soyad:string)
    {
        this.ad = ad
        this.soyad = soyad
    }

}

let alim:IPersonel = new Calisan("ali","yilmaz")

let veli:Ikisi = new Calisan("ali","veli")

let ayse:Calisan = new Calisan("Ayşe","Demir")

ayse.brans = "pazarlama"


console.log(typeof(ayse))


