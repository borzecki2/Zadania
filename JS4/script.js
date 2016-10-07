//Zadanie 1//
var z1 = 5;
var z2 = 9;
if (z1 > z2) {
    console.log( "Wieksza jest z1");    
} else {
    console.log("Wieksza jest z2");
}

    
    //Zadanie2//
var n1 = 5;
var n2 = 9;
var n3 = 22;
if (n1 > n2 && n1 > n3) {
    console.log( "Wieksza jest n1");    
} else if(n2 > n1 && n2 > n3) {
    console.log("Wieksza jest n2");
} else {
    console.log("Wieksza jest n3"); 
}

//Zadanie3//
for (i=0; i<10; i++) {
    console.log("Lubie JavaScript");
    }


//Zadanie 4
var result = 0;
for (var i = 0; i <=10; i++) {
    result = result + i;
    console.log(result);
}

//Zadanie 5
var n = 5;
for (var i = 0; i<=n; i++) {
   if (i % 2 == 0) {
       console.log(i + "to jest liczba parzysta")        
   } else {
       console.log(i + "to jest liczba nieparzysta")
   }
}

//Zadanie 6

for (var i = 0; i < 5; i++) {
    for (var n = 0; n < 5; n++)
        console.log("i=" + i +"n=" + n);
}
    
// Zadanie 7

/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}
