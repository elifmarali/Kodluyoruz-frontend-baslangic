/* 2.Örnek: Vize ve final notları belli olan bir öğrencinin yıl sonunda dersten geçip geçmediğini hesaplayalım:

Şartlar:

Öğrencinin vize notunun %30'unu final notunun %70'ini alalım.
Vize ve final notunun toplamından doğan not ortalaması eğer 0-30 aralığındaysa KALDINIZ (FF) yazdıralım.
31-49 aralığındaysa DC - KOŞULLU yazdıralım.
50- 84 aralığındaysa CC - GEÇTİNİZ! yazdıralım.
85-100 aralığı2.Örnek: Vize ve final notları belli olan bir öğrencinin yıl sonunda dersten geçip geçmediğini hesaplayalım:

Şartlar:

Öğrencinin vize notunun %30'unu final notunun %70'ini alalım.
Vize ve final notunun toplamından doğan not ortalaması eğer 0-30 aralığındaysa KALDINIZ (FF) yazdıralım.
31-49 aralığındaysa DC - KOŞULLU yazdıralım.
50- 84 aralığındaysa CC - GEÇTİNİZ! yazdıralım.
85-100 aralığındaysa Notunuz AA yazdıralım.
*/

let vizeNotu = parseInt(prompt("vize notunuzu giriniz"));
let finalNotu = parseInt(prompt("final notunuzu giriniz"));
let ort = parseInt(vizeNotu * 0.3 + finalNotu * 0.7);

let button = document.createElement("button");
button.setAttribute("id", "button");
button.innerHTML = "Sonucu görmek için tıklayınız...";
var bodyDiv = document.querySelector("body");
bodyDiv.appendChild(button);
button.addEventListener("click", function () {
  if (ort >= 0 && ort <= 30) {
    document.querySelector("#gecmeKalmaBilgisi").innerHTML =
      "Maalesef" + ort + " ile kaldınız :(";
  } else if (ort >= 31 && ort <= 49) {
    document.querySelector("#gecmeKalmaBilgisi").innerHTML =
      "DC harf notu ile ve " + ort + " ortalama ile geçtiniz";
  } else if (ort >= 50 && ort <= 84) {
    document.querySelector("#gecmeKalmaBilgisi").innerHTML =
      "CC harf notu ile ve " + ort + " ortalama ile geçtiniz";
  } else if (ort >= 85 && ort <= 100) {
    document.querySelector("#gecmeKalmaBilgisi").innerHTML =
      "Tebriklerr... AA harf notu ile ve " + ort + " ortalama ile geçtiniz ";
  }
  document.write(document.querySelector("#gecmeKalmaBilgisi").innerHTML);
});

document.querySelector("#gecmeKalmaBilgisi").classList.add("ortalamaStyle");
document.querySelector("#button").classList.add("ortalamaStyle", "buttonColor");
console.log(document.querySelector("#gecmeKalmaBilgisi").classList);
