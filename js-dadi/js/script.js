
// 1- generare numero random per giocare

let num_player = Math.floor(Math.random() * 6) +1;
console.log(num_player)

// 2- generare numero random per pc

let num_pc = Math.floor(Math.random() * 6) +1;
console.log(num_pc)

// 3- vince chi ha il numero più alto

if (num_player > num_pc){
    console.log("hai vinto")
}

else if (num_player < num_pc){
    console.log("hai perso")
}

else{
    console.log("patta")
}