
export namespace stringHelper{

    export function BuyukHarfeCevir(mesaj:string):string 
    {
        return mesaj.toUpperCase();
        
    }

    export function Substring(str:string,baslangıc:number,bitis:number):string 
    {
        return str.substring(baslangıc,bitis)
        
    }

    export class A{
        A:string;
    }

    export interface B
    {
        B:string;
    }

}