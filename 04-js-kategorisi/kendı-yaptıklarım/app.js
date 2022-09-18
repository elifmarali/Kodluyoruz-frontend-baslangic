function myFunction() {
  var w = window.open(); //click oldugu an bos bir sayfaya yonlendirir
  w.document.open();
  w.document.write("<h1>Hello World!</h1>");
  w.document.close();
}

document.getElementById("domain").innerHTML = "Dom manipulasyonu yaptik";

document.getElementById("btnClick").addEventListener("click", clicked);//btnclick'i getElementById ile sectik 
//addEventListener ile izlemeye basladik
function clicked() {
  alert("Butona tiklandi!!!!");
}
