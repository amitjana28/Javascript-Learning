// In javascript there are various of operators such as arithmatic, assignment, relational, comparision, logical, unary, ternary, bitwise, Comma, string, bigInt

let a = 45;
let b = 3;

// Arithmatic operators are +, -, *, /, **, %
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a**b);
    console.log(a/b);
    console.log(a%b);

// Logical operators are && (both true then true), || (any true then true), ! (change value), ?? (return right operand if left is null or undeined else return left operand)
    let canVote = function(name, age, voterId){
        if(age>=18 && voterId){
            console.log(`${name} can vote.`);
        } else {
            console.log(`${name} can't vote.`)
        }
    }

    canVote("Amit", 24, true);
    canVote("Rahul", 22, false);
    canVote("kunal", 10, false);

    console.log('Rahul' ?? 'Amit');

    /* short ciruit in js say we are using 
    - && where both true then true now assume if first condition is false then its a short circuit and next will not checked.
    - || where any true then true now assume if first condition is true then its a short circuit and second will not checked.
    */

    /* what if we pass non boolean charecters then how it will work
    falsy : 0, false, null, undefined, NaN , ""(Empty string)
    truty : rest all non boolean except falsy are truthy
    */ 

// String operators + for concatination and comparision operators for check lexicographical comparision
    let firstName = "Amit";
    let lastName = "Jana";
    let age = "24";
    let num = 24;
    
    console.log(firstName+lastName);
    console.log(firstName<lastName);
    console.log(firstName>lastName);

    console.log(age == num);
    console.log(age === num);

// in operator is used to return boolean value is property exist in an object or element exist in array and instanceof operators used to return boolean value if an object is an instance of a particular class or constructor
    let arr = ["BMW", "Audi", "TATA"];
    let car = {
        carName : "BMW",
        manfData : new Date('15/January/2009'),
        ownerName : "Amit",
    }

    console.log(2 in arr); // give true as 2nd index is there in arr
    console.log(3 in arr); // give false as 3rd index is not in arr
    console.log("Audi" in arr); // give false as "Audi" is not a index
    console.log(car.carName in car); // give false as car.carname is not a 
    console.log("ownerName" in car); // give true as "ownerName" is a property in car object
    console.log("Amit" in car); // Amit is a value not property in car object


    console.log(arr instanceof Array); // give true as arr is a instance of Array
    console.log(car instanceof Object); // give true as car is a instance of Object 

// comma operator evaluate the expresion from left to right and return rightmost value
    let sum = (4+5, 8+2, 9-4);
    console.log(sum)

    let x = 84;
    let ans = (x+=3, x-=4, x%=2);
    console.log(ans)

// ternary operator return first value if statement true else return second value
    let number = 45;
    let isEven = (number%2==0) ? console.log(`${number} is even`) : console.log(`${number} is odd`);