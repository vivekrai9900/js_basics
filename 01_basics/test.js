"use strict";  //treat this code as strict mode


//alert(3+3); //alert is not defined in node.js



//for documentation visit js ecma 

/*  
type of null is object and tyoe of undefined is undefined


*/



const num= 3;


// console.log(typeof num)

let newNum = Boolean(num)  //typecasting

// console.log(typeof newNum)


//"33" => 33
//"33abc" => NaN


//string interpolation

const name = "vivek"
const repoCOunt= 100


//console.log(`My name is ${name} and my repo count is ${repoCOunt}`)

//using backticks

// new way of defining a string 

//benifits are that we get to perform many operations on string and also we can use multiline strings

const gameName = new String("PUBG");

//console.log(gameName.toLowerCase());
//console.log(gameName[0])


//defining numbers 

const num1 =300

// console.log(num1)

const num2= new Number(300)

// console.log(num2)
// console.log(num1.toFixed(2))
// console.log(num2.toFixed(2))


// math library

//console.log (Math.random()) //gives random number between 0-1

//console.log(Math.floor((Math.random()*10)+1))




//date


const date = new Date();


//arrays

const arr = [1,2,3,4,5]


//objects

const obj= {firstName:"vivek", lastName:"Rai"}
const obj1= {email:"raivivek9900@gmail.com", age: 21}


const obj3 = {...obj,...obj1}  //spread operator 

// console.log(obj3);


//destructuring objects


const course ={
    course: "c++",
    coursePrice:"999",
    courseInstructure:"abc"
}


const {courseInstructure: instructure} = course;


// console.log(instructure);


//functions



