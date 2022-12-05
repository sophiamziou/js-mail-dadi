// 1- creo un array con le varie mail 

let mail = ["sofia@gmail.com", "leonardo@gmail.com", "alessia@gmail.com", "boolean@gmail.com", "fabrizio@gmail.com"]

// 2- permetto all'utente di inserire la mail 


const check_email = document.getElementById("check");

check_email.addEventListener('click', function(){

    let ins_mail = document.getElementById("exampleInputEmail1").value;

    // 3- controllo che sia nella lista 

    let check_mail = false;

    for(let i = 0; i< mail.length; i++){

        if (ins_mail == mail[i]){
            check_mail = true;
        }
    }

    if(check_mail){
        let valid_mail = "email trovata"
        document.getElementById('email_answer').innerHTML = valid_mail
    }

    else{
        let undefined_mail = "email non trovata"
        document.getElementById('email_answer').innerHTML = undefined_mail
    }

});

// riprova button
function Refresh(){
    window.parent.location = window.parent.location.href;
}




