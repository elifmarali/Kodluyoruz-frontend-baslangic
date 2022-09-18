//boolean veri türü ile çalışmak
//0 ve 1 i anlkamak
let isActive = false;
console.log(isActive);
isActive = true;
console.log(isActive);

let userName;
let isUserName = Boolean(userName);
console.log(isUserName);
console.log('"11="' + Boolean("11"));
console.log('"0="' + Boolean("0"));
console.log('""' + Boolean(""));

userName = "user";
console.log("userName var mı?:", Boolean(userName));
console.log("0=" + Boolean(0));
console.log("-0=" + Boolean(-0));

console.log(Boolean(1n));
console.log(Boolean(-1n));
console.log(Boolean(Infinity));
console.log(Boolean({}));
console.log(Boolean(Symbol()));
