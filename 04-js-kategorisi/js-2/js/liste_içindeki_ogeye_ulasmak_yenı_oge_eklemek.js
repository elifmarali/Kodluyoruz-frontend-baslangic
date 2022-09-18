//liste_içindeki_ogeye_ulasmak_yenı_oge_eklemek
//son ögeye erişmek
let last_item = document.querySelector("ul#list>li:last-child");
console.log(last_item);
//ilk ögeye erişmek
let first_item = document.querySelector("ul#list>li:first-child");
console.log(first_item);

//ilk ögenin içeriğini değiştirme
console.log(first_item.innerHTML);
first_item.innerHTML = "degıstııııı";
last_item.innerHTML = "son öge değişti";

//yeni öge eklemek
let ulDom = document.querySelector("ul#list");
let liDom = document.createElement("li");
liDom.innerHTML = "yeni oluşturduğum liste elemanı";
ulDom.append(liDom); //yeni olusturdugum ogeyi listenin sonuna ekledim ve ekranda gozuktu

//en basa oge eklemek icin
let liDomBas = document.createElement("li");
liDomBas.innerHTML = "listenin basina eleman ekliyoruz";
ulDom.prepend(liDomBas); //listenin basina ekler
