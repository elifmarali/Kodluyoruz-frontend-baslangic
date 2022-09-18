// let h2 = document.getElementsByTagName("h2");
// console.log(h2.title.innerHTML);

let title = document.getElementById("title");
console.log(title.innerHTML); //id si title olan elementin içeriğini yazdrıma

title.innerHTML = "deneme"; // title içerisindeki HTML değerinin deneme ile değiştirdilk
console.log("yeni güncel h2 değeri= ", title.innerHTML);

let link = document.querySelector("ul#list>li>a");
link.innerHTML += " değişti";
console.log(link.innerHTML);
link.style.color = "red";
link.classList.add("btn");
