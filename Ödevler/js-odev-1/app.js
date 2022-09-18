let user = document.querySelector("#isim");
username = prompt("kullanici isminizi giriniz");
user.innerHTML = username;
user.style.fontSize = "larger";
function tarihSaat() {
  var date = new Date().toLocaleString("tr-TR"); // tarih saati al
  document.getElementById("saat").innerHTML = date; // zaman id'li elemente yazdır
}

// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(tarihSaat, 1000);
