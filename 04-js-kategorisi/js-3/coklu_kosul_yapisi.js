/* let userName = prompt("adınızı giriniz");
let yas = prompt("yasınız:");
let info = document.querySelector("#info");
if (userName && yas >= 18) {
  info.innerHTML = "ehliyet alabilir";
} else if (!userName) {
  info.innerHTML = "Kullanıcı adınız yok";
} else if (!(age >= 18)) {
  info.innerHTML = "Yasınız 18 yasından küçüktür";
}
 */

/* let hava = "güneşli";
switch (hava) {
  case "yagmurlu":
    console.log("semsiyeni yanına almayı unutma");
    break;
  case "güneşli":
    console.log("Hafif giyin");
    break;
  case "bulutlu":
    console.log("Disari cik");
    break;
  case "Karlı":
    console.log("Kalin giyin");
    break;
  case "Firtinali":
    console.log("Bir süre disari cikma");
    break;
  default:
    console.log("Bilinmeyen hava durumu :", hava);
}
 */
let islem = function (a, b, operator) {
  switch (operator) {
    case "topla":
      return a + b;
      break;
    case "cikar":
      return a - b;
      break;
    case "carp":
      return a * b;
      break;
    case "bol":
      return a / b;
      break;
  }
};
console.log(islem(23, 14, "topla")); // 37
console.log(islem(10, 3, "cikar"));
