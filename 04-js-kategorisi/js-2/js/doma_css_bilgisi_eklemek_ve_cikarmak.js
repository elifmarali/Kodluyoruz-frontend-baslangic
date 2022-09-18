//****** css class eklemek veya cikartmak ***********
let h1Dom = document.querySelector("#greeting");
h1Dom.classList.add("text-primary");
h1Dom.classList.add("title");

console.log(h1Dom.classList);
console.log(document.body.innerHTML);
console.log("********************");
//class eklemenin hizli yolu
h1Dom.classList.add("new-info", "sec-info", "third-info"); //birden fazla class eklemek
console.log(document.body.innerHTML);
console.log("********************");
//class silmek
h1Dom.classList.remove("title");
console.log(document.body.innerHTML);
console.log("********************");
h1Dom.classList.remove("new-info", "sec-info"); //birden fazla class silmek
console.log(document.body.innerHTML);
