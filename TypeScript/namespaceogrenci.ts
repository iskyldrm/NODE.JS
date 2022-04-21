/// <reference path="namespace4string.ts" />

import { stringHelper } from "./namespace4string";

export class Ogrenci
{
    tcNo:string;
    ad:string;
    soyad:string


    constructor(ad:string,soyad:string) 
    {
        this.ad = stringHelper.BuyukHarfeCevir(ad)    
        this.soyad = stringHelper.BuyukHarfeCevir(soyad)
    }
}

let ali = new Ogrenci("ali","yılmaz")

console.log(ali.ad)