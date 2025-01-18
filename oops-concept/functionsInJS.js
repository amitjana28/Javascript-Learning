// In js there are many type of functions normal function, function expression, Arrow function, Anonymous function

// normal function : a and b are parameters
function sum(a,b) {
    return a+b;
}
console.log(sum(10,20));

// function expression : a & b are parameters
let sub = function(a,b) {
    return a-b;
}
console.log(sub(30,16));

// arrow function : a & b are parameters
let mul = (a,b)=>{
    return a*b;
}
console.log(mul(15,20));

// anonymus functions are function without a name they are used as a argument to other function
setTimeout(function(){
    console.log("this is a anonymus function");
},10000)

// Callback function are function that are used as a argumnet to other function and is executed after complition of actual function
function num(n,callback){
    return callback(n);
}

const double = (n)=>n*2;

console.log(num(5,double));
