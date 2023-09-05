/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = prompt("ESERCIZIO 1: Inserisci un numero da comparare");
let num2 = prompt("ESERCIZIO 1: Inserisci un altro numero da comparare");
// num2 = 30

if (num1 > num2) {
  console.log(num1 + " è maggiore di " + num2);
} else if (num1 === num2) {
  console.log(num1 + " è uguale a " + num2);
} else {
  console.log(num2 + " è maggiore di " + num1);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let num3 = prompt("ESERCIZIO 2: Inserisci un numero da comparare con 5");
if (parseInt(num3) === 5) {
  console.log("your number is equal to 5");
} else {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num4 = prompt("ESERCIZIO 3: Inserisci un numero da dividere per 5");
if (num4 % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let num5 = prompt("ESERCIZIO 4: Inserisci un numero da comparare");
let num6 = prompt("ESERCIZIO 4: Inserisci un numero da comparare");
if (parseInt(num5) + parseInt(num6) === 8) {
  console.log("La loro somma è 8");
}
if (parseInt(num5) === 8 || parseInt(num6) === 8) {
  console.log("uno dei due numeri selezionati è 8");
}
if (
  parseInt(num5) - parseInt(num6) === 8 ||
  parseInt(num6) - parseInt(num5) === 8
) {
  console.log("La sottrazione del numero maggiore al numero minore è 8");
}
//NON HO UTILIZZATO L'ELSE IF PERCHé SONO  CONDIZIONI CHE SI POSSONO VERIFICARE TUTTE CONTEMPORANEAMENTE (ESEMPIO: num5=0;num6=8)

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let shopping = prompt(
  "ESERCIZIO 5: Inserisci una cifra che rappresenta il costo del carrello"
);
let shipping = 10;
let totalShoppingCart = parseInt(shopping) + shipping;
if (parseInt(shopping) > 50) {
  shipping = 0;
  totalShoppingCart = parseInt(shopping);
  console.log("Il costo totale del carrello è di: " + totalShoppingCart);
} else {
  shipping = 10;
  totalShoppingCart = parseInt(shopping) + shipping;
  console.log("Il totale del carrello è di: " + totalShoppingCart);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

shopping = prompt(
  "ESERCIZIO 6: Inserisci una cifra che rappresenta il costo del carrello SCONTATO DEL 20% AL BLACK FRIDAY"
);
shipping = 10;
totalShoppingCart = parseInt(shopping) + shipping;
if (parseInt(shopping) > 50) {
  shipping = 0;
  totalShoppingCart = parseInt(shopping) * 0.8;
  console.log("Il costo totale del carrello è di: " + totalShoppingCart);
} else {
  shipping = 10;
  totalShoppingCart = (parseInt(shopping) + shipping) * 0.8;
  console.log("Il totale del carrello è di: " + totalShoppingCart);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let a = 21;
let b = 2;
let c = 103;

if (a > b && b > c) {
  console.log("l'ordine è: " + a + " , " + b + " , " + c);
} else if (a > c && c > b) {
  console.log("l'ordine è: " + a + " , " + c + " , " + b);
} else if (b > a && a > c)
  console.log("l'ordine è: " + b + " , " + a + " , " + c);
else if (b > c && c > a) {
  console.log("l'ordine è: " + b + " , " + c + " , " + a);
} else if (c > a && a > b) {
  console.log("l'ordine è: " + c + " , " + a + " , " + b);
} else if (c > b && b > a) {
  console.log("l'ordine è: " + c + " , " + b + " , " + a);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const verify1 = 9;
const verify2 = "Marco";
console.log(typeof verify1);
console.log(typeof verify2);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let evenOrOdd = prompt(
  "ESERCIZIO 9: Inserisci un numero per vedere se è pari o dispari"
);
if (parseInt(evenOrOdd) % 2 === 0) {
  console.log("your number is even");
} else {
  console.log("your number is odd");
}

/* ESERCIZIO 10 
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
let val = prompt("ESERCIZIO 10: INSERISCI UN NUMERO PER CAPIRE QUANTO VALE");
if (parseInt(val) > 10) {
  console.log("Maggiore di 10");
} else if (parseInt(val) < 5) {
  console.log("Meno di 5");
} else {
  console.log("Compreso tra 5 e 10");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
console.log("ESERCIZIO 11: Pre Modifica");
console.log(me);
me.city = "Toronto";
console.log("ESERCIZIO 11: Post Modifica");
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log("ESERCIZIO 12:");
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
console.log("ESERCIZIO 13:");
me.skills.pop();
console.log(me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10. */
console.log("ESERCIZIO 14:");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.*/
console.log("ESERCIZIO 15:");
numbers[9] = 100;
console.log(numbers);
