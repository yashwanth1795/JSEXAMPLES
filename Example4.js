// let today=new Date();
// console.log("Date:",today);

// let students=["Yashwanth","karthik","prajwal"];
// students.push("susanth");
// console.log(students)
// students.unshift("mani");
// console.log(students)
// students.splice(2,1,"sathsih");
// console.log(students)



// for(let student of students){
//     console.log(student);
// }


// console.log("while loop-roll numbers:");
// let rn=101;
// while(rn<=103){
//     console.log("Roll no:",rn);
//     rn++;
// }
// console.log("doo while loop -hostel floors");

// let floor=1;
// do{
//     console.log("Hostel floor:",floor);
//     floor++;

// }while(floor<=3);


// console.log("Round 4.7:", Math.round(4.7));   
// console.log("Round 4.3:", Math.round(4.3));    
// console.log("Ceil 4.1:", Math.ceil(4.1));      
// console.log("Floor 4.9:", Math.floor(4.9));    
// console.log("Truncate 4.9:", Math.trunc(4.9)); 
// console.log("Absolute of -25:", Math.abs(-25)); 
// console.log("2^3:", Math.pow(2, 3));           
// console.log("Square root of 49:", Math.sqrt(49)); 
let studentMap=new Map();

studentMap.set("101",{name:"Yashwanth",dept:"CSE"});
studentMap.set("102",{name:"karthik",dept:"ECE"});
studentMap.set("103",{name:"bhommika",dept:"EEE"});
console.log("Student 101:",studentMap.get("101").name);

