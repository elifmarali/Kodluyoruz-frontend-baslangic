//id leri cagirirken
let idItem = document.getElementById("walterwhite");
console.log(idItem);
console.log(idItem.innerHTML);

//siniflari cagirirken
let classItem = document.getElementsByClassName("alternate");
console.log(classItem);

for (let i = 0; i < 2; i++) {
  console.log(classItem[i]);
}
for (let i = 0; i < 2; i++) {
  console.log((classItem[i].style.color = "red"));
}

//etiket adi ile ogelere erismek
var liste = document.querySelector("ul");

//liste icerisine yeni oge eklemek

let urun = document.querySelector("#veri");
let ekle = document.querySelector("#ekle");

ekle.addEventListener("click", function () {
  var li = document.createElement("li");
  li.textContent = veri.value;
  liste.appendChild(li);
  veri.value = "";
});
