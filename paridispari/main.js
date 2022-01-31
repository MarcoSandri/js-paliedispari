// Richiesta della scommessa pari o dispari
let pariDispari = prompt("Pari o dispari?");
console.log(pariDispari);


// Controllo se l'utente ha inserito pari o dispari
while(pariDispari != "pari" && pariDispari != "dispari") {
    pariDispari =  prompt("Non è stato inserito pari o dispari! Inserire solamente 'pari' o 'dispari'");
}


// Richiedo un numero da 1 a 5
let numeroUtente = parseInt(prompt("Inserire un numero da 1 a 5"));
console.log(numeroUtente);

// Controllo il numero inserito
while(numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente)) {
    numeroUtente = prompt("Non hai inserito un numero da 1 a 5! Inserisci un numero da 1 a 5!")
}


let numeroComputer = Math.floor(Math.random() * 5) + 1;
console.log(numeroComputer);
alert("Il numero del computer è " + numeroComputer);

let somma = numeroUtente + numeroComputer;
console.log(somma);
if((somma % 2 == 0 && pariDispari == "pari") || (somma % 2 == 1 && pariDispari == "dispari")) {
    alert('Hai vinto!');
} else {
    alert('Hai perso!');
}