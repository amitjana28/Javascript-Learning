// There are many statements in js such as if-else, if-else-if, switch, break, continue, return

// if-else
    let isEven = (num) => {
        if(num%2 == 0){
            console.log("Its a Even")
        } else {
            console.log("Its a odd");
        }
    }

    isEven(45);
    isEven(62);
    isEven(0);

// if-else-if
    let isOdd = (num) => {
        if("number" != typeof(num)){
            console.log("It is Not a number")
        } else if (num == 0) {
            console.log("Its a zero");
        } else if (num%2==0) {
            console.log("Its a even")
        } else {
            console.log("Its a odd")
        }
    }

    isOdd("Hi");
    isOdd(0);
    isOdd(65);
    isOdd(32);

// switch statements and break(use to break the execution and came out)
    let day = "hi";

    switch(day%7){
        case 1 : console.log("Monday");
        break;
        case 2 : console.log("Tuesday");
        break;
        case 3 : console.log("Wednesday");
        break;
        case 4 : console.log("Thursday");
        break;
        case 5 : console.log("friday");
        break;
        case 6 : console.log("Saturday");
        break;
        case 0 : console.log("Sunday");
        break;
        default : console.log("Not a day, day should be number")
    }

// continue use to skip the statement part and continue executing the rest below code will print number from 0 to 30 skipping multiple of 3
    let result = [];
    for(let i = 1; i<30; i++){
        if(i%3==0)
            continue;
        result.push(i);
    }

    console.log(result)

// return will return some value in a function
    let sum = (a,b)=>{
        return a+b;
    }

    console.log(sum(45,85));
