//1-prompt ile aldigin bilgiye gore asagidaki yapip kullanarak notun bilgisini #info yayazdir
/*
AA 90-100
BA 85-89
BB 80-84
CB 75-79
CC 70-74
DC 65-69
DD 60-64
FD 50-59
FF 0-49

2- Kullanicin girdigi verinin istedigimiz deger araliginda olup olmadigini kontrol etsin
3- ff bilgisinde uzgun suratikonu cikart digerlerine ise gulucuk 
4-ff class bilgisi text-danger, digerlerinde ise text primary olsun
*/
let info = document.querySelector("#info");
let exampleGrade = parseInt(prompt("Puani giriniz..."));
let textInfo;
if (exampleGrade >= 0 && exampleGrade <= 100) {
  if (exampleGrade >= 90) {
    textInfo = "AA";
  } else if (exampleGrade >= 85) {
    textInfo = "BA";
  } else if (exampleGrade >= 80) {
    textInfo = "BB";
  } else if (exampleGrade >= 75) {
    textInfo = "CB";
  } else if (exampleGrade >= 70) {
    textInfo = "CC";
  } else if (exampleGrade >= 65) {
    textInfo = "DC";
  } else if (exampleGrade >= 60) {
    textInfo = "DD";
  } else if (exampleGrade >= 50) {
    textInfo = "FD";
  } else if (exampleGrade < 50) {
    textInfo = "FF";
  }
} else {
  textInfo = "girdiğiniz not değeri 0-100 aralığında bulunmamaktadır.";
}

if (textInfo.indexOf("FF") != 0) {
  textInfo += " :)";
  info.classList.add("text-primary");
} else {
  textInfo += " :(";
  info.classList.add("text-danger");
}

info.innerHTML = `${textInfo}`;
