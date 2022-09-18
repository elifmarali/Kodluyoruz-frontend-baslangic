let email = "elifmarali00@gmail.com";
let firstName = "elif";
let lastName = "marali";

//string karakter sayisi-> length
console.log(email.length);

//ilk karakteri bulmak -> [0]
console.log(firstName[0]);
console.log(firstName.charAt(0));

//buyuk harf =>toUpperCase()   - kucuk harf=>toLowerCase()
firstName = firstName.toUpperCase();
console.log(firstName);
firstName = firstName.toLowerCase();
console.log(firstName);

//string icinde istedigimiz bilgiyi aramak ve yerini bulamk => search
console.log(email.search("@"));
console.log(email[12]);

console.log(email.search("sdhsdh")); //olamyan bir şeyi aratursak -1 sonucunu getirir

//belli  bir yere kadar al -> slice
console.log(email.slice(4, 10));

console.log(email.slice(12));

console.log(email.slice(email.search("@") + 1));

console.log(email.indexOf("."));
console.log(email.slice(email.indexOf("@") + 1, email.indexOf(".")));

//bilgiyi değiştir-> replace
email = email.replace("elifmarali", "yunuskupucu");
console.log(email);

//istediğim bilgi var mı -> includes
console.log("email değişkenin içinde @ var mı?: ", email.includes("@"));
console.log("email değişkenin içinde , var mı?: ", email.includes(","));

//istedigim bilgiyle basladi mi -> startsWidth,istedigim bilgi ile bitti mi -> endsWidth
console.log(email.endsWith("@"));
console.log(email.endsWith(".com"));

//ilk harfi buyuk yapmak
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1)} `;
console.log(fullName);
