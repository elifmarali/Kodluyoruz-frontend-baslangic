let divDom = document.querySelector("div#liste");
// add() : HTML öğesine bir veya daha fazla class ekler.
divDom.classList.add("main", "red");
console.log(divDom);

divDom.classList.add("info");
divDom.classList.add("first-inf", "sec-inf", "third-inf");
// remove() : HTML öğesinden bir veya daha fazla class'ı siler.
divDom.classList.remove("third-inf");
divDom.classList.remove("first-inf", "sec-inf");

// item() : HTML de class'ı verilen index sırasına göre döndürür. Eğer index, class length'inden (sayısından) daha büyük veya length'ine eşit olursa undefined döner.
console.log(divDom.classList.item(1));

//contains() : Element verilen class'ı içeriyorsa true, içermiyorsa false döner. Bu sayede bir işlem yaptırmadan önce kontrol edebiliriz.
console.log(
  "div elemntimizin sınıf listesinde red var mıdır?:",
  divDom.classList.contains("red")
);
console.log(
  "div elementimizin sınıf listesinde elf sınıfı var mıd?:",
  divDom.classList.contains("elf")
);

divDom.classList.toggle("red");
console.log(divDom);
//Toggle() : classList.add() ve classList.remove() yöntemini aynı anda çağırmak yerine classList.toggle() yöntemini kullanılabilir.

//replace() : Bir CSS sınıfını başka bir sınıfla değiştirmek için kullanılır.
divDom.classList.replace("main", "master");
console.log("divDom yeni hali:", divDom);
//length() : Bir öğede bulunan sınıf sayısını bilmemizi sağlar.
console.log(divDom.classList.length);
console.log(divDom.id.length);
