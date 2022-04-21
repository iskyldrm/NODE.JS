
abstract class Kisi 
{
    ad:string;
    soyad:string;
    tcNo:string;
    protected gsm:string;
    KisiBilgileriniGoster():void
    {
        console.log(this.ad + " " + this.soyad)
    }
    abstract Ara(string):Kisi
}



class Personel  extends Kisi
{
    readonly _email:string
    personelKod:string;
    constructor(Ad:string,Soyad:string,email:string) 
    {
        super();
        this.ad = Ad;
        this.soyad = Soyad   
        this.gsm = "dasdas"
        this._email = email
    }
    Ara(isim: any): Kisi {   
        return new Personel(isim,this.soyad,this._email)
    }

    getGsm():string
    {
        return this.gsm
    }
}



let ali:Personel = new Personel("Ali","Yilmaz","dsada");
console.log(ali)

ali.KisiBilgileriniGoster()
console.log(ali.Ara("Ali") + " gsm:" +  ali.getGsm())