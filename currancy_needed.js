const prompt = require ("prompt-sync")({sigint: true})

let exit;

do{
let amount = prompt("Enter Amount: ")
amount = Number.parseInt(amount)

console.log(`Minimum Number Of Note & Coin Needed For amount ${amount} is:`)

if(isNaN(amount))
{console.log("Enter Amount in Number")
    break;
}

let note_of_500 = Math.floor(amount/500);
console.log("Number of note of 500 needed", note_of_500);

amount = amount % 500;

let note_of_200 = Math.floor(amount/200);
console.log("Number of note of 200 needed", note_of_200);

amount = amount % 200;

let note_of_100 = Math.floor(amount/100);
console.log("Number of note of 100 needed", note_of_100);

amount = amount % 100;

let note_of_50 = Math.floor(amount/50);
console.log("Number of note of 50 needed", note_of_50);

amount = amount % 50;

let note_of_20 = Math.floor(amount/20);
console.log("Number of note of 20 needed", note_of_20);
amount = amount % 20;

let note_of_10 = Math.floor(amount/10);
console.log("Number of note of 10 needed", note_of_10);

amount = amount % 10;

let coin_of_5 = Math.floor(amount/5);
console.log("Number of coin of 5 needed", coin_of_5);

amount = amount % 5;

let coin_of_2 = Math.floor(amount/2);
console.log("Number of coin of 2 needed", coin_of_2);

amount = amount % 2;

console.log("Number of coin of 1 needed", amount);

exit = prompt("Do you want Enter amount again? : ")
}
while(exit == "Y")