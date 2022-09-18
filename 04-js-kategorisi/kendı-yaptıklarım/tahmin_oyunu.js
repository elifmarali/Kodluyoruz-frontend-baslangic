let randomSayi = Math.floor(Math.random() * 10);
console.log(randomSayi);
var tahmin = parseInt(prompt("Bir sayı gir ve rastgele sayıyı bulmaya çalış!"));
if (tahmin === randomSayi && tahmin != null) alert("Bildin!!!");
else if (tahmin == "") alert("Boş giriş yaptınız!");
else if (tahmin == null) alert("Giriş yapmaktan vazgeçtiniz!");
else {
  alert("Bir daha denee :(, Random sayi: " + randomSayi);
}
