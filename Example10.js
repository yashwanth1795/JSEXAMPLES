const n=parseInt(process.argv[2]);
let fact=1;
if(isNaN(n)||n<0){
    console.log("enter the number:");

}
else{
    for(let i=1;i<=n;i++){
        fact*=i;

    }
    console.log('fact of ${n} is ${fact}');

}