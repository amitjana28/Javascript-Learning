//  JS uses throw to create custom errors and try-catch to handle them, preventing the program to crash. finally is a code block that executes after try and catch block regardless of error occured

try{
    myError("This is my Error");
} catch(err){
    console.log("This is an error")
    // console.log(err);
} finally {
    console.log(24+65);
}


try{
    throw new Error("This is my error");
} catch(e){
    console.log(e);
}

// How to create custome errors
class MyCustomeError extends Error{
    constructor(msg){
        super(msg);
        this.name = "CustomeError";
    }
}

function testCustomeError( txt ){
    if("string" != typeof(txt)){
        throw new MyCustomeError("testCustomeError(String) : Parameter should be string");
    }
    return txt;
}

console.log(testCustomeError(45))

