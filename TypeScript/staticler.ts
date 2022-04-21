class Daire {
    static Pi = 3.14;
    static AlanHesabı(yaricap:number):number
    {
        return this.Pi*yaricap*yaricap
    }
    yarıCap:number;
   
    constructor(yaricap) {
        this.yarıCap = yaricap
    }
}

console.log(Daire.AlanHesabı(9))

let mat = new Daire(8);

// statik class idye bir şey yok burada. statik metodlar yada fieldlar olabilir. ve bu statiklere dışardan 
//ulaşılamaz sadece daire.statikler yapılarak kullanılabiklir.
//statik olmayanlar ise örneği alınarak kulanılablir.