
// Richiedo l'inserimento di una parola o una frase
let sentence = prompt("Inserisci una parola o una frase");
sentence = lowercaseLettersToArray(sentence);

// Restituisce la stringa inserita in un array di sole lettere in lowercase.
function lowercaseLettersToArray (string) {

    // Restituisce la stringa in minuscolo
    let lowerCase = string.toLowerCase();
    console.log("Stringa inserita in lowercase: " + lowerCase);

    // RegEx che seleziona tutti i caratteri che NON vanno dalla a alla z e dalla À alla ÿ
    // e li sostituisce con nessun carattere, restituendo una stringa fatta solamente da lettere
    // ^ -> negazione
    // a-z, À-ÿ -> range di caratteri
    // g -> ricerca di tutte le iterazioni dei caratteri selezionati

    let onlyLetters = lowerCase.replace(/[^a-zÀ-ÿ]/g, '');
    console.log("Stringa inserita in lowercase e solo lettere: " + onlyLetters);

    // Divide la stringa con solo lettere in un array
    let arrayCharacter = onlyLetters.split("");
    console.log("Stringa inserita in lowercase, solo lettere e divisa in array: " + arrayCharacter);

    return arrayCharacter;
}

// Creo un array invertito all'array ottenuto dalla frase immessa
const reverseArray = [...sentence];
reverseArray.reverse();
console.log("Array iniziale: " + sentence);
console.log("Array al contrario: " + reverseArray);

let tester = false;
for(let i = 0; i<sentence.length; i++) {
    
    if(sentence[i] != reverseArray[i]) {
        tester = true;
    }

    console.log("array al contrario: " + reverseArray[i] + " array iniziale: " + sentence[i]);
    console.log('tester: ' + tester);
}

if(tester) {
    alert("Non è un palindromo");
} else {
    alert("è un palindromo")
}




