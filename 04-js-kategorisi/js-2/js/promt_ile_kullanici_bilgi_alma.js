let fullName = prompt("Lutfen tam adinizi giriniz");
console.log(fullName);
let greeting = document.querySelector("#greeting");
greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`;

function istek() {
  var kelime = prompt("Bir değer giriniz", "lütfen sadece kelime giriniz..");
  document.write(kelime);
}
istek();
var a = prompt("Bir değer giriniz", "lütfen sadece kelime giriniz..");
console.log(a);
