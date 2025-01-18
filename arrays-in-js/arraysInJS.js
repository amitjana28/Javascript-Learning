// Arrays in JS is a data structure that can store multiple value in a single variable in a contigoues location.

let arr = ["Amit Jana", 24, 'M', false];
console.log(arr)

let arr2 = new Array(10, 20, "Hi", true);
console.log(arr2)

// Accessing arrays
    console.log(arr2[2],arr[0])

// Length of array
    console.log(arr2.length)

// Update array element
    arr2[2] = "Rahul";
    console.log(arr2)

// Add element at end and starting of array using push(to add last index) and unshift(to add starting index)
    arr2.unshift('Hello');
    arr2.push(69)
    console.log(arr2)

// Remove and returnelement from first, last and specific index of array using pop(last index), shift(start index) and splice(specific index)
    arr2.shift() // this remove hello which is at 0th index
    arr2.pop() // this remove 69 which is at last index
    arr2.splice(1,2); // this remove (20 and rahul) two element because starting index is 1 and 2 is the number of element want to remove
    console.log(arr2)

// we can inc or dec the array length
    console.log(arr2)
    console.log(arr2.length)
    arr2.length = 10;
    console.log(arr2)
    console.log(arr2.length)
    console.log(arr[8])
    arr2.length = 1
    console.log(arr2)

// array concat
    arr2 = arr2.concat(arr);
    console.log(arr2)

// array to string conversion
    console.log(typeof arr2)
    arr2 = arr2.toString()
    console.log(typeof arr2)

//  Recognaizing array isArray and instanceOf
    console.log(Array.isArray(arr))
    console.log(arr2 instanceof Array)

// Array join as a string
    let strArray = ['Hi', "Amit", "Good", "Morning", "!"]
    let completeStr = strArray.join(' ');
    console.log(completeStr)

// delete element from array
    delete strArray[strArray.length-1]
    console.log(strArray)

// Slice array 
    let subArray = arr.slice(1,4);
    console.log(subArray)

// Some to check that some of the element should satisfy the condistion and return aboolean
    let numArr = [3,7,13,16,4];
    console.log(numArr.some((n)=>
        n%2==0
    ))

// Reduce return a single element
    console.log(numArr.reduce((n,sum)=>{
        sum+=n;
        return sum;
    }))

// map method map the function with each element of the array and return a new array 
    let dblArr = numArr.map((n)=>n*2);
    console.log(dblArr)

//  Reverese is use to reverse the array
    console.log(dblArr.reverse())

// Sort is use to sort the array
    console.log(dblArr.sort((a,b)=>a-b))

// every check all element satisfy condition and return boolean value
    console.log(dblArr.every((n)=>n%2==0))

// filter return a array by filtering the array wrt condition
    console.log(dblArr.filter((n)=>n>10))

// Find index helps to find the index of element
    console.log(dblArr.findIndex((n)=>n>10))

// find helps to find value that satisfy condition
    console.log(dblArr.find((n)=>n>10))

// fill method use to fill element 
    console.log(dblArr)
    dblArr.fill(45,1,3);
    console.log(dblArr)