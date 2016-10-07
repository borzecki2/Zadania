//Zadanie 1
var k = [3, 4, ,4];
console.log(k);
var g = ["ja", "ty", "on"];
console.log(g);
var e = ["ja", 3, "wy"];
console.log(e);

//Zadanie 2
var owoc = ["mango", "avocado", "figi", "daktyle"];
console.log(owoc[0]);
console.log(owoc[3]);
for (var i = owoc.length -1; i >= 0; i--) {
    console.log(owoc[i])
}

//Zadanie 3
var k = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for (var i = sum; i < 10; i++) {
    console.log(k[i]);
}

//Zadanie 4
var z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sumParzystych = 0
for (i = 0; i < z.length; i++) {
    if (z [i] % 2 == 0) {
    console.log(z [i] + "to jest liczba parzysta");
    sumParzystych = sumParzystych + z[i];  
} 
}
console.log(sumParzystych);

//Zadanie 5
var x = [31, 63, 27, 69, 114, 84, 24, 97, 114, 48]
var max = 0;
for (var i = 0; i < x.length; i++) {
     max = Math.max.apply(Math, x);  
    console.log(max);
}

//Zadanie 6
var y = [25, 63, 27, 69, 114, 84, 27, 97, 114, 25];
var firstIndex = 0;
for (i = 0; i < y.length; i++) {
    for (var j = i + 1; j < y.length; j++) {
        if (y [i] == y[j]) {
         firstIndex == i;
        break;    
}     
}
}
console.log(firstIndex);

//Zadanie 7
var tablica = [1, 2, 3, 4];
  for (i = 0; i < tablica.length; i++) break;{
      for (j = tablica.length - 1; j >= 0; j--) {
          console.log(tablica[j]);          
      }
  }

