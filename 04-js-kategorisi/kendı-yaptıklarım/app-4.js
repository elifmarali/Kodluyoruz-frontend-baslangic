//add
const div = document.getElementById("add");
div.classList.add("fancy", "add", "addMethod");
const className = div.classList;
document.getElementById("pAdd").innerHTML =
  "Class eklendikten sonra liste:" + className;
//remove
div.classList.remove("addMethod");
console.log(div);
document.getElementById("pRemove").innerHTML =
  "Class silindikten sonra liste:" + className;
//item
const firstClassName = div.classList.item(0);
document.getElementById("pItem").innerHTML = "İlk class:" + firstClassName;
//contains
const result = div.classList.contains("add");
document.querySelector("#pContainsTrue").innerHTML =
  "add class'ını içeriyor mu? -->" + result;
const result2 = div.classList.contains("addMethod");
document.querySelector("#pContainsFalse").innerHTML =
  "addMethod class'ını içeriyor mu? -->" + result2;
//replace
document.querySelector("#pReplaceFırst").innerHTML =
  "#pReplace olmadan önceki sınıf isimleri -->" + className;
div.classList.replace("add", "newClass");
document.querySelector("#pReplaceSec").innerHTML =
  "#pReplaceden sonraki sınıf isimleri -->" + className;
//toggle
const pToggle = document.getElementById("pToggle");
const button = document.querySelector("#toggleButton");
button.addEventListener("click", function () {
  pToggle.classList.toggle("colorp");
});

//length
document.getElementById("length").innerHTML =
  "Class names list: " +
  className +
  "****************                       class name length:" +
  div.classList.length;

let btn_1 = document.createElement("button");
btn_1.setAttribute("class", "addButton");
btn_1.innerText = "Butona Tıkla!";

let addDiv = document.querySelector("div#add");
addDiv.appendChild(btn_1);

btn_1.classList.remove("addButton");
btn_1.classList.add("addButton");
btn_1.classList.replace("addButton", "secButton");

let itemDom = document.querySelector("#pItem");
/* let itemAlert = document.createElement("alert");
itemAlert.innerHTML = itemDom.classList.item(0); */
document.querySelector("#pItem").classList.add("pItem", "Item", "item");
alert(itemDom.classList.item(0));

let classListControl = document
  .querySelector("#pContains")
  .classList.contains("classList");

document.querySelector("#pContains").innerHTML =
  "pContains adlı element classList isimli bir sınıf içeriyor mu?:" +
  classListControl;
