// JavaScript Document

function Vizszintes () {

var x=0; // idelem függőleges érték 
var y=0; // idelem vízszintes érték 
var q=0; // számláló

var a=0; 
var b=0;

var ido = window.setTimeout ("Vizszintes(); " , 5) ; 
var idelem = document.getElementById("kocka1") ;


q++;
idelem.style.marginTop = x+20;
idelem.style.marginLeft = y+30;

if (q<201) { 
a++; 
y=+a;
bq=200; }

else if (bq>=200 && bq<=400) { 
bq++; 
b++; 
y=200-b; 
}

else {q=0; a=0; b=0; y=0;} 

// Időzítő funkció, az ismétléshez
ido = window.setTimeout("Vizszintes(); " , 5) ;
}