
/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

//Initial variables
var messagePlaceholder = document.getElementById("message-to-the-user");
var welcomeMessage = "Benvenuto";
var accessDeniedMessage =
  "Spiacenti, l'indirizzo email inserito non è nella lista utenti autorizzati";
var notValidEmailMessage = "L'indirizzo email inserito non è valido"

//Define authorized users' list
var authorizedEmailsList = [
  "pippo@gmail.com",
  "pluto@hotmail.com",
  "paperino@outlook.it",
];
console.log(authorizedEmailsList);

//Ask user his email
var userEmail = prompt(
  "Inserisci il tuo indirizzo email",
  "pippo@gmail.com"
).trim();

//Verify if user is authorized
var isUserAuthorized = false;
var authorizedEmail;
for (var i = 0; i < authorizedEmailsList.length; i++) {
  authorizedEmail = authorizedEmailsList[i];

  if (userEmail === authorizedEmail) {
    isUserAuthorized = true;
  }
}

// Validation
//Print an appropriate message
if (!userEmail) {
  alert("Inserisci il tuo indirizzo email per accedere al sito");
  messagePlaceholder.innerHTML = notValidEmailMessage;
}
else {
  if (!isUserAuthorized) {
    messagePlaceholder.innerHTML = accessDeniedMessage;
  } else {
    messagePlaceholder.innerHTML = welcomeMessage + " " + userEmail;
  }
}