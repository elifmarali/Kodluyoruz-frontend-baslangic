let price = 111;
let stringPrice = "111";
let hasPassword = true;

console.log("price:", typeof price);
console.log("stringPrice:", typeof stringPrice);
console.log("hasPassword:", typeof hasPassword);

//string biglileri int ve float türüne dönüştürmek
let number1 = "11";
console.log("number1:", number1, "number1-typeof:", typeof number1);
//string ifadenin int değere
let number2 = parseInt(number1);
console.log("number2:", number2, "number2-typeof:", typeof number2);

let number3 = "11px";
console.log("number3:", number3, "number3-typeof:", typeof number3);
let number4 = parseInt(number3);
console.log("number4:", number4, "number4-typeof:", typeof number4);

let number5 = "11px";
console.log("number5:", number5, "number5-typeof:", typeof number5);
let number6 = parseFloat(number3);
console.log("number6:", number6, "number6-typeof:", typeof number6);

//number veri türündeki değeri stringe dönüştürmek
let number7 = 55;
number7 = number7.toString();
console.log(number7, typeof number7);
