//eger kullanıcı adı varsa yazdır yoksa kullanıcı  bilginiz bulunamadı
//yaz

//ternary kullanımı
//kosul ? dogruysa : yanlışsa
let username = prompt("kullanici adinizi yaziniz");
let info = document.querySelector("#info");
info.innerHTML = `${
  username.length > 0 ? username : "kullanıcı ad bilgi girişi yapılmamıştır"
}`;
