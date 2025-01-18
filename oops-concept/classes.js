/* Classes is an blueprint of objects. class may have many objects.
- Objects are istance of class.
- Encapsulation : Binding up the properties and function together in a single unit is called encapsulation
- Abstraction : Hidding up the implementation and only display the essesntial information is called abstraction. Ex getter, setter, abstract classes and interfaces
- Polymorphisum : Same name but diffferent working
*/
class Person {
    constructor(name,age,gender,profession){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.profession = profession;
    }

    setAddress(street, city, district, state, pincode){
        this.street = street;
        this.city = city;
        this.district = district;
        this.state = state;
        this.pincode = pincode;
    }

    printDetails() {
        if(this.gender === 'F' || this.gender === 'f'){
            console.log(`Her name is ${this.name}. She is ${this.age} years old ${this.profession}`);
            console.log(`Her address is : ${this.street}, ${this.city}, ${this.district}, ${this.state}, Pincode-${this.pincode}`);
        } else{
            console.log(`His name is ${this.name}. He is ${this.age} years old ${this.profession}`);
            console.log(`His address is : ${this.street}, ${this.city}, ${this.district}, ${this.state}, Pincode-${this.pincode}`);

        }
    }
}



let person1 = new Person("Amit Jana", 25, 'M', "Engineer");
person1.setAddress('BD-125, Street 174','Newtown', 'Kolkata', 'West Bangal', 700123);
person1.printDetails();

