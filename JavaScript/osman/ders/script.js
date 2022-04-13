

// document.querySelector(".parent").addEventListener("click",function(e)
// {
//     console.log("parent");
//     e.stopPropagation();
// })

// document.querySelector(".child").addEventListener("click",function(e)
// {
//     console.log("child");
//     e.stopPropagation();
// })

// document.addEventListener("click",function (e) {
//     console.log("document");
//     e.stopPropagation();
// })


// //FOKSİYON

// function hello(){
//     alert("Merhaba")
// }


function Gonder(id,mesaj){
    let gonder = document.querySelector(`#${id}`)
    gonder.innerHTML = mesaj;
}

Gonder("demo","metodn");