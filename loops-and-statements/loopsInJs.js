// In js there are multiple loops such as for, while, do-while, for-each, for-in, for-of

// for loop 
    console.log("Print table of 2 :")
    for(let i = 1; i<=10; i++){
        console.log(2*i);
    }

// while loop
    console.log("Print table of 3 :")
    let i = 1;
    while (i<=10){
        console.log(3*i);
        i++;
    }

// do-while
    console.log("Print table of 4 :")
    let j = 1;
    do{
        console.log(4*j);
        j++;
    }while(j<=10)

// for in loop iterate over the properties of object it allows to access each key or property name of an object. It also work to iterate over the properties of an array but not recomanded.
    const car = {
        carName : "BMW",
        modal : "BT-652",
        year : 2020
    }
    for(let keys in car){
        console.log(`${keys} : ${car[keys]}`);
    }

    // for in loop not recomanded for array
    const arr = [4, 5, 6, 8];
    for(let ele in arr){
        console.log(arr[ele]);
    }

// for each and for of loop suitable for array
    const str = "Amit Jana"
    for(let ele of str){
        console.log(ele);
    }
    for(let key of Object.keys(car)){
        console.log(`${key} : ${car[key]}`)
    }

    const arr2 = ["hi ", "my ", "name ", "is ", "Amit jana"]
    arr2.forEach((ele)=>{
        console.log(ele);
    })
