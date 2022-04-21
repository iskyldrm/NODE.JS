// foksiyonlarda paramterelere default değer verme

function tsTopla(sayi1:number,sayi2:number=2000):number
{

    return sayi1+sayi2
}

console.log(tsTopla(200))
console.log(tsTopla(200,222))

//Undifend parametre yani vermesende olur diyebilmek için parametrenin başına? eklemek gerekir

function tsTopla2(x:number,y?:number):number
    {
    try {
            if (typeof(y) == "number") 
            {
            var toplam = 0
            toplam = x+y
            return toplam
            }
            else
            {
                return x;
            }
        
        }
        catch (error) 
        {
            
        }
    
    }

    console.log(tsTopla2(6,8))

console.log("--------------------------")
function tsTopla3(x:number,y:number,...digerleri:number[]) 
{         
    let geneltoplam=x+y;         
    let toplam=digerleri.forEach(function (deger) 
    {             geneltoplam+=deger;         
    })         
    console.log(geneltoplam); 
} 
tsTopla3(1,2,3,4,5)
console.log("--------------------------")

//Arrow Function


let sumum = (x:number,y:number):number =>{return x+y;}

console.log(sumum(6,8)) 


