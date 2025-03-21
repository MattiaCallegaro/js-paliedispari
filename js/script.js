//permetto all'utente di inserire una parola
//creo una funzione per verificare che sia palindroma

//inserisco una funzione
function verificaPalindromo() {

    //faccio inserire una parola
    const parola = prompt("Inserisci una parola");
    
    if(!parola){
        alert("Attenzione! Inserisci una parola")
        return;
    }
    
    const palindromo= parola.split('').reverse().join('');

}
verificaPalindromo();