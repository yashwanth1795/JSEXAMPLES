//   const readline=require("readline");
//   const r1=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout

//   });
//   r1.question("enter the number:",function(answer){
// const number=parseInt(answer);
// if(number>0){
//     console.log("positive number");

// }else if(number==0){
//     console.log("zero");
// }else{
//     console.log("negative number");
// }
// r1.close()
// });
const number = parseInt(prompt("Enter a number: "));
if (number > 0) {
    console.log("The number is positive");
}
else if (number == 0) {
  console.log("The number is zero");
}
else {
     console.log("The number is negative");
}