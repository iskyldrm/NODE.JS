
import { kedi, kopek, kus } from './animal';


export type animal = kedi|kopek|kus


function HayvanBesle(hayvan:animal) 
{   
    console.log(hayvan.cins + " beslendi")
}

let kartal:kus = new kus("kartal",20);

HayvanBesle(kartal);