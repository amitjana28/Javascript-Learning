//  Objects in javascript are a collection of data in a key value pair. There are two primary way to create objects in JS : Object Literal and Object constructors

// Object creation
    // Object Literals 
        let obj = {
            fName : "Amit",
            lName : "Jana",
            age : 24,
            gender : 'M',

            canVote : (age, name)=>{
                if(age>=18){
                    console.log(`${name} you can Vote.`)
                } else {
                    console.log(`Sorry! ${name} you can't Vote.`)
                }
            }
        }

        obj.canVote(obj.age, obj.fName+" "+obj.lName);

    // Object Constructor
        let car = new Object();
        car.name = "BMW";
        car.manfYear = 2004;
        car.owner = "Amit Jana"

        console.log(car)

// Object operations
        // Accessing object properties
            console.log(car.name)
            console.log(car["owner"])
        
        // Modify prooperty
            car.owner = "Rahul Jana"
            console.log(car["owner"])
        
        // Adding new property
            car.color = 'Silver';
            console.log(car) 

        // Removing property
            delete car.manfYear;
            console.log(car)
        
        // Check if property exist
            console.log("owner" in car)
            console.log(car.hasOwnProperty("manfYear"))

        // Iterate through object using for in loop
            for(let keys in car){
                console.log(keys+" : "+car[keys])
            }

        // Object length
            console.log(Object.keys(car).length)