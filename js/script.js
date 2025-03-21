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
verificaPalindromo();