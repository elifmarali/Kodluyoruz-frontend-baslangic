let user = "elif";
const DOMAIN = "kodluyoruz.org";

let email = user + "@" + DOMAIN;

console.log("merhaba ", user, " sitemize hosgeldin ", " mail adresin: ", email);

let info = `merhaba ${user} sitemize hosgeldin.. 
mail adresin: ${email} 
mail adresinizin uzunlugu: ${email.length}
kisa isminiz:${user[2]}`;
console.log(info);

console.log(`borcunuz= ${2 + 5 * 3} TL`);

console.log(`gunun saat bilgisi: ${new Date().getHours()}`);
