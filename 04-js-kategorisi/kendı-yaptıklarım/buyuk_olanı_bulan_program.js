let x = parseInt(prompt("x değerinizi giriniz"));
let y = parseInt(prompt("y değerinizi giriniz"));
if (x == y) {
  console.log(`x= ${x} değeri y= ${y} degerine eşittir`);
} else if (x < y) {
  console.log(`x= ${x} değeri y= ${y} degerinden küçüktür`);
} else {
  console.log(`x= ${x} değeri y= ${y} degerine büyüktür`);
}
