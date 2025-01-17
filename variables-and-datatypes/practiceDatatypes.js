// Two types of datatypes in js priitive and non primitives

// Primitives : Numbers, boolean, String, null, undefined, symbols, infinite, BigInt
    let a = 45;
    let b = 625.65;
    let c = -489;
    let d = -895.652;
    console.log('a is '+ typeof(a) + ', b is ' + typeof(b)+ ', c is '+ typeof(c)+ ' and d is '+typeof(d));

    a = true;
    b = false;
    c = null;
    d;
    console.log('a is '+ typeof(a) + ', b is ' + typeof(b)+ ', c is '+ typeof(c)+ ', and d is '+typeof(d));

    a = Infinity;
    b = "Hello world"
    c = 45421616412612121061216412n;
    d = Symbol('Symbol are represents as unique and immutable values, often used as object keys.')
    console.log('a is '+ typeof(a) + ', b is ' + typeof(b)+ ', c is '+ typeof(c)+ ' and d is '+ typeof(d));

// Non primitives are arrays , objects and functions
    let arr = [4, 'HI', true, '65'];
    let obj = {
        firstName : 'Amit',
        lastName : "Jana",
        age : 45,
        isMarried : false,
    }
    let sum = (a,b)=>{
        return a+b;
    }

    
    console.log('arr is '+ typeof(arr) + ', obj is ' + typeof(obj)+ ' and sum is '+typeof(sum));