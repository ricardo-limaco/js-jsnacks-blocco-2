// richiesta numero utente
let numeroUtente = (isNaN(parseInt(prompt("inserisci numero:"))));


// se è pari stampa il numero
if (numeroUtente % 2 === 0) {
  console.log("numero pari:", numeroUtente);

  // se è dispari stampa numeor successivo
}else {
  console.log("numero dispari + 1:", numeroUtente++)
}