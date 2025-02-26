let number = Math.floor(Math.random() * 100) + 1;
let chances = 0;

let n;

do {
    n = prompt("Enter your Guess: ")
    n = Number.parseInt(n)
    chances++
    if(n == number){
        break;
    }else if (n < number) {
        alert("incorrect please try agian! Your guess is smaller then the Number")
    } else {
        alert("incorrect please try agian! Your guess is bigger then the Number")
    }
} while (n != number)
if (chances == 1) {
    alert("You have guess it correct your score is 100 and the actual number is " + number)
} else {
    alert("You have guess it correct your score is " + (100 - chances) + " and the actual number is " + number)
}