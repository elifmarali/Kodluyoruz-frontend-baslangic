//kullanıcı bilgisi varsa ekrana ismi yazdır
let username = prompt("Kullanıcı adınızı giriniz");
if (username.length > 0) {
  console.log("Kullanıcımızın kullanıcı adı:" + username);
} else {
  console.log(
    "Kullanıcımızın kullanmış olduğu bir kullanıcı adı bulunmamaktadır"
  );
}
