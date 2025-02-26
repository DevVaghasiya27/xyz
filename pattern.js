// pattern 1

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "*";
//     console.log(str.repeat(i));
// }

// Output

// *
// **
// ***
// ****
// *****

// pattern 2

// for (let i = 5; i>=1; i--){
//     let str = "*";
//     console.log(str.repeat(i))
// }

// Output

// *****
// ****
// ***
// **
// *

// pattern 3

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let space = " ";
//     let str = "*";
//     console.log(space.repeat(n-i) + str.repeat(i));
// }

// pattern 4

// let n = 5;
// for (let i = 5; i>=1; i--){
//     let space = " ";
//     let str = "*";
//     console.log(space.repeat(n-i) + str.repeat(i));
// }

// pattern 5

// let n = 5;
// for (let i = 0; i<n; i++){
//     for(let j= 0; j<=i; j++)
//     process.stdout.write("*");
//     process.stdout.write("\n");
// }

// pattern 6

// let n= 5;
// for (let i = 0; i<n; i++){
//     for(let j = 0; j<n-i; j++){
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n");
// }

// pattern 7

// let n= 5;
// for (let i = 0; i<n; i++){
    
//     for(let j = 0; j<=i; j++){
//         process.stdout.write(" ");
//     }
//     for(let j = n-i; j>0; j--){
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n");
// }

// pattern 8

// let n= 5;
// for (let i = 0; i<n; i++){
    
//     for(let j = n-i; j>0; j--){
//         process.stdout.write(" ");
//     }for(let j = 0; j<=i; j++){
//         process.stdout.write("*");
//     }
    
//     process.stdout.write("\n");
// }

// pattern 9

// let n = 5
// for (let i = 1; i<=n; i++){
//     for(let j = 0; j<i; j++){
//         process.stdout.write("*");
//     }
//     for (let j = 0; j < n - i; j++) {
//         process.stdout.write("  ")
//     }
//     for (let j = 0; j < i; j++) {
//         process.stdout.write("*")
//     }
//     process.stdout.write("\n");
// }
// for (let i = 1; i<n; i++){
//     for(let j = 0; j<n-i; j++){
//         process.stdout.write("*");
//     }
//     for(let j = 1; j<=i; j++){
//         process.stdout.write("  ");
//     }
//     for(let j = n-i; j>0; j--){
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n");
// }

// output
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

// pattern 10

// let n =5;
// for(let i = 0; i<n; i++){
//     for(let j = n-i; j>0; j--){
//         process.stdout.write(" ")
//     }
//     for(let k = 0; k<=i; k++){
//         process.stdout.write("*")
//     }
//     for(let j = 0; j<i; j++){
//         process.stdout.write("*")
//     }
//     process.stdout.write("\n")
// }

// other
// let n =5;
// for(let i = 1; i<=n; i++){
//     for(let j = n-i; j>0; j--){
//         process.stdout.write(" ")
//     }
//     for(let k = 1; k<=2*i-1; k++){
//         process.stdout.write("*")
//     }
//     process.stdout.write("\n")
// }

// output
//     *
//    ***
//   *****
//  *******
// *********

// pattern 11

// let n=5;
// for (let i = 0; i < n; i++) {
//     for (let s = 0; s < i; s++) {
//         process.stdout.write(" ")
//     }
//     for (let j = n; j > i; j--) {
//         process.stdout.write("*")
//     }
//     for (let k = n - 1; k > i; k--) {
//         process.stdout.write("*")
//     }
//     process.stdout.write("\n")
// }

// output
// *********
//  *******
//   *****
//    ***
//     *

// pettern 12

// let n = 5;

// for(let i=0;i<n;i++){
//     for(let j=n-1;j>i;j--){
//         process.stdout.write(" ")
//     }
//     for(let k=0;k<=i;k++){
//         process.stdout.write("*")
//     }
//     for(let k=0;k<i;k++){
//         process.stdout.write("*")
//     }
//     process.stdout.write("\n")
// }
// for(let i = 0; i<n; i++){
//     for(let s = 0; s<i; s++){
//         process.stdout.write(" ")
//     }
//     for(let p=n;p>i;p--){
//         process.stdout.write("*")
//     }
//     for(let j = n-1; j>i; j--){
//         process.stdout.write("*")
//     }
//     process.stdout.write("\n")
// }

// output
//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *

// pattern 13

// let n=5;
// for(i=1; i<=n; i++){
//     for(j=1; j<=n;j++){
       
//         if (i == 1 || i == n){ process.stdout.write("*");}
//         else {
//            if (j == 1 || j == 5) {
//             process.stdout.write("*");
//            } else {
//             process.stdout.write(" ");
//            }
//         }
//     }
//     process.stdout.write("\n")
// }

// output

// *****
// *   *
// *   *
// *   *
// *****

// pattern 14

// let n=5;
// for(i=1; i<=n; i++){
//     for(j=1; j<=n;j++){
       
//         if (i == 1 || i == n || i==j || j==n+1-i){ process.stdout.write("*");}
//         else {
//            if (j == 1 || j == 5) {
//             process.stdout.write("*");
//            } else {
//             process.stdout.write(" ");
//            }
//         }
//     }
//     process.stdout.write("\n")
// }

// output
// *****
// ** **
// * * *
// ** **
// *****

// pattern 15

// let n =5;
// for(let i = 1; i<=n; i++){
//     for(let j = n-i; j>0; j--){
//         process.stdout.write(" ")
//     }
//     for(let k = 1; k<=i; k++){
//         if(k==1 || k==i || i==n){process.stdout.write("*")}
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     process.stdout.write("\n")
// }

// output
//     *
//    **
//   * *
//  *  *
// *****

// pattern 16

// let n =5;
// for(let i = 1; i<=n; i++){
//     for(let j = 1; j<=i; j++){
//         if(j==1 || j==i || i==n){process.stdout.write("*")}
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     process.stdout.write("\n")
// }

// output
// *
// **
// * *
// *  *
// *****

// pattern 17

// let n =5;
// for(let i = 1; i<=n; i++){
//     for(let j = n-i; j>0; j--){
//         process.stdout.write(" ")
//     }
//     for(let k = 1; k<=2*i-1; k++){
//         if(k%2==0){process.stdout.write(" ")}
//         else{
//             process.stdout.write("*")
//         }
//     }
//     process.stdout.write("\n")
// }

// output
//      *
//     * *
//    * * *
//   * * * *
//  * * * * *

// pattern 18

// let n =5;
// for(let i = 1; i<=n; i++){
//     for(let j = n-i; j>0; j--){
//         process.stdout.write(" ")
//     }
//     for(let k = 1; k<=2*i-1; k++){
//         if(k==1 ||k==2*i-1 || i==n){
//         process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     process.stdout.write("\n")
// }

// output
//     *
//    * *
//   *   *
//  *     *
// *********

// pattern 19

// let n=5;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${j}`)
//     }
//     process.stdout.write("\n")
// }

// output
// 1
// 12
// 123
// 1234
// 12345

// pattern 20

// let n=5;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${i}`)
//     }
//     process.stdout.write("\n")
// }

// output
// 1
// 22
// 333
// 4444
// 55555

// pattern 21

// let n=5, num=1;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${num} `)
//         num++;
//     }
//     process.stdout.write("\n")
// }

// output
// 1 
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// pattern 22

// let n = 5;
// let string = "";
// for(let i=1; i<=n; i++){
//     for(let j=0; j<i; j++){
//         string += String.fromCharCode(j + 65);
//     }
//     string += "\n";
// }
// process.stdout.write(`${string}`)

// output

// A
// AB
// ABC
// ABCD
// ABCDE

// pattern 23

// let n = 5;
// let string = "";
// for(let i=0; i<n; i++){
//     for(let j=0; j<=i; j++){
//         string += String.fromCharCode(i + 65);
//     }
//     string += "\n";
// }
// process.stdout.write(`${string} `)

// output

// A
// BB
// CCC
// DDDD
// EEEEE

// pattern 24

// let n = 5;
// let num = 65;
// let string = "";
// for(let i=0; i<n; i++){
//     for(let j=0; j<=i; j++){
//         string += String.fromCharCode(i + num);
//         num++;
//     }
//     string += "\n";
    
// }
// process.stdout.write(`${string}`)

// output

// A
// CD
// FGH
// JKLM
// OPQRS

// pattern 25

// let n=5;
// let string = "";
// for(i = 1; i<=n; i++){
//     for(j=0; j<n-i+1; j++){
//         string +=String.fromCharCode(j+ 65)
//     }
//     string += "\n";
// }
// process.stdout.write(`${string}`)

// // output
// ABCDE
// ABCD
// ABC
// AB
// A

// pattern 26

// let n=5;
// string = "";
// for(i = 1; i<=n; i++){
//     for(j=0; j<n-i+1; j++){
//         string +=String.fromCharCode(n-1-j+ 65)
//     }
//     string += "\n";
// }
// process.stdout.write(`${string}`)

// output
// EDCBA
// EDCB
// EDC
// ED
// E

// pattern 27

// let n = 5;
// let string = "";
// for(let i=1; i<=n; i++){
//     for(let j=0; j<i; j++){
//         string += String.fromCharCode(n-j-1 + 65);
//     }
//     string += "\n";
// }
// process.stdout.write(`${string}`)

// output
// E
// ED
// EDC
// EDCB
// EDCBA

// pattern 28

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < n - i; j++) {
//         string += " ";
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//         string += String.fromCharCode(k + 65);
//     }
//     string += "\n";
// }
// process.stdout.write(`${string}`)

// output

//     A
//    ABC
//   ABCDE
//  ABCDEFG
// ABCDEFGHI

// pattern 29

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < n - i; j++) {
//         string += " ";
//     }
//     for (let k = 0; k < i; k++) {
//         string += String.fromCharCode(k + 65);
//     }
//     for(let j=i; j>1; j--){
//         string += String.fromCharCode(j + 63);
//     }
//     string += "\n";
// }
// process.stdout.write(`${string}`)

// output
//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA

// pattern 30

// let n=5;
// for(let i=1; i<=n;i++){
//     for(let j=0; j<=n; j++){
//         if(i==j|| j== n-i+1){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")
//         }
//     }process.stdout.write("\n")
// }

// output

//  *   *
//   * *
//    *
//   * *
//  *   *

// pettern 31


// let n= 5;
// for (let i = 0; i<=n; i++){
//     for(let j = 0; j<n-i; j++){
//         process.stdout.write("* ");
//     }if(i!=5){
//         process.stdout.write("\n");
//     }
// }
// for (let i = 2; i<=n; i++){
//     for(let j = 0; j<i; j++){
//         process.stdout.write("* ");
//     }
//     process.stdout.write("\n");
// }

// output

// *****
// ****
// ***
// **
// *
// **
// ***
// ****
// *****

// pettern 31

// let n=5;
// for(let i=1; i<=n;i++){
//     for(let j=1; j<=n; j++){
//         let sum = i+j;
//         if(sum%2==0){
//             process.stdout.write("1")
//         }else{
//             process.stdout.write("0")
//         }
//     }process.stdout.write("\n")
// }

// output

// 10101
// 01010
// 10101
// 01010
// 10101

// pattern 32

// let n=5;
// for(let i=1; i<=n; i++){
//     for (let j=1; j<=i; j++){
//         if(j%2==0){
//             process.stdout.write("0")
//         }else{
//             process.stdout.write("1")
//         }
//     }process.stdout.write("\n")
// }

// output
// 1
// 10
// 101
// 1010
// 10101

// pattern 33

// let n=5, k=1;
// for(let i=1; i<=n; i++){
//     for (let j=1; j<=i; j++){
//         if(k%2==0){
//             process.stdout.write("0")
//         }else{
//             process.stdout.write("1")
//         }
//         k++;
//     }process.stdout.write("\n")
// }

// output           
// 1
// 01
// 010
// 1010
// 10101