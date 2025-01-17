// In js we cna create variable using 3 ways var, let and const

// var is a global scope and function scope variable and can be redeclared, redefined and reassigned.
    var a = 15;
    console.log(a);
    var a = "Hi";
    console.log(a);

    // Here 'a' worked as global scope and we can access anywhere in the script whereas name is a fucntion scope and only accessible 
    //  inside fucntion 
    function printGreetings() {
        var firstName = "Amit";
        console.log(a+" "+ firstName);
    }
    printGreetings();

    /* Below code will give error
        console.log(firstName)
    */

// let is a blocked scope variable and can't be redefined and redeclared only it can be reassigned

    /* below code give us error 
        let b = true;
        let b = 45; 
    */

    let c = 45;
    console.log(c)
    c = false;
    console.log(c)

    {
        let d = true;
        console.log(d);
    }
    // below will give error as d is only accessible in above block
        // console.log(d)

    // Here 'c' worked as global scope and we can access anywhere in the script whereas name is a fucntion scope and only accessible 
    //  inside fucntion 
    function isMarried() {
        let lastName = "Jana";
        console.log(lastName+" is married "+ c);
    }
    isMarried();

// const is a blocked scope and can't be redeclared, reassigned and redefined

    /* below code give us error
        const gender = 'M';
        gender = "F";
    */