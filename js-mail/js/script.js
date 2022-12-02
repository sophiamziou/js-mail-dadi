// 1- creo un array con le varie mail 

let mail = ["sofia@gmail.com", "leonardo@gmail.com", "alessia@gmail.com", "boolean@gmail.com", "fabrizio@gmail.com"]

// 2- permetto all'utente di inserire la mail 

let ins_mail = (prompt("inserisci la tua mail"))

// 3- controllo che sia nella lista 

let check_mail = false;

for(let i = 0; i< mail.length; i++){

    if (ins_mail == mail[i]){
        check_mail = true;
    }
}
    
if(check_mail){
    console.log ('email trovata');
}
else{
    console.log ('email non trovata');
}
