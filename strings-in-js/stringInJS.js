let s1 = "Hello";
let s2 = new String("World");

// length of string
    console.log(s2.length)

// string concatnation
    let s3 = s1+" "+s2;
    console.log(s3)

// string substring, uppercase and lowercase
    console.log(s3.substring(4,9))
    console.log(s1.toUpperCase())
    console.log(s1.toLowerCase())

// string search and replace
    let index = s3.indexOf('World');
    console.log(index)
    s3 = s3.replace('H','Y');
    console.log(s3.trim())

