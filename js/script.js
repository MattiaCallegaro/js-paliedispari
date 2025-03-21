//permetto all'utente di inserire una parola
//creo una funzione per verificare che sia palindroma

//inserisco una funzione
function verificaPalindromo() {

    //faccio inserire una parola
    const parola = prompt("Inserisci una parola");
    //verifico che l'utente inserisca la parola
    if(!parola){
        alert("Attenzione! Inserisci una parola")
        return;
    }
    //creo una costante per invertire le parole
    const palindromo= parola.split('').reverse().join('');
    //controllo quali sono originali e quali invertite
    if(parola.toLocaleLowerCase()=== palindromo.toLocaleLowerCase()){
        alert(`"${parola} " è una parola palindroma!`)
    }
    else{
        alert(`"${parola} " non è una parola palindroma!`)
    }

}
//avvio la funzione
verificaPalindromo();




//Creo una funzione per generare il numero casuale
function generaNumeroCasuale() {
    return Math.floor(Math.random() * 5) + 1;
}
//Creo una funzione controllo
function controlloPariDispari(num){
    return num % 2 === 0 ? "Pari" : "Dispari";
}
//faccio inserire pari o dispari
const scegli= prompt("Sciegli: pari o dispari ?").toLowerCase();
//scelta
if (scelta !== "pari") {
    if (scelta !== "dispari") {
        console.log("Scelta non valida!");
        return false;
    }
}
//inserisci un numero
const numeroUtente=parseInt(prompt("Inserisci un numero da 1 a 5"));
//controllo numero
if(isNaN(numeroUtente)){
    console.log("Numero non valido!");
    return false;
}
if (numeroUtente < 1) {
    console.log("Numero non valido!");
    return false; 
}
if (numeroUtente > 5) {
    console.log("Numero non valido!");
    return false;
}
const numeroComputer = generaNumeroCasuale();
const somma = numeroUtente + numeroComputer;
const risultato = verificaPariDispari(somma);



