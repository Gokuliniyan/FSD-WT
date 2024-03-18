var number = 18 ;
var name = "Sanjay" ;
var percentage = 6.5 ;
var flag = true ;

console.log(number,typeof number);
console.log(name, typeof name);
console.log(percentage,typeof percentage);
console.log (flag,typeof flag);

const arr=[10,"Sanjay",percentage,false,{mentor: "Sanjay"}];
console.log(arr);

const obj = {
    mentor : " sanjay",
    Batchsize : 50,
    Isstarted : true,
    arr : [1,2,"d"]
};
console.log(obj);
//copy by value
var num1 = 18;
var num2 = num1;
num2=15;
console.log("num1", num1);
console.log("num2",num2);
//copy by reference
let stuArr = ["Gokul","Iniyan","Sanjay"];
let stuArrCopy = stuArr;
stuArrCopy[0]="Lee";
console.log("student array",stuArr);
console.log("student Copy",stuArrCopy);

//Object iteration
//way 1 --> Dot notation (Mostly used)
console.log(obj.mentor);
//way 2 --> Map Iteration 
console.log(obj["mentor"]);
