
// Create a class Car with a constructor that initializes make and year. Create an object of this class.

// class car {
//     constructor(make, year) {
//         this.make = make,
//             this.year = year
//     }
//     showCar() {
//         console.log(this.make, this.year)
//     }
// }

// const carr=new car('toyota', 2010)
// carr.showCar()


// Add a method getAge() in the Car class that returns how old the car is.
class Car {
   cr (make, year) {
        this.make = make,
            this.year = year
            
    }
    showCar() {
        console.log(this.make, this.year)
    }
    getAge(){
let yeare=new Date().getFullYear();
return yeare-this.year
    }
}
 const carr=new Car('tyota', 2000);
console.log(`my toyota car  total year  is ${carr.getAge()}` )

// What will happen if you don’t define a constructor in a class?
// js internally add a epty constructor() 

// Explain the use of super() inside a class constructor. Give an example.
// class Animal{
//     constructor(name){
//         this.name=name
//     }
// }

// class Dog extends Animal{
// constructor(name,beard){
//     super(name),
//     this.beard=beard
// }
// }

// const d=new Dog('tommy','sdfs')
// console.log(d.beard,d.name)
// Show how this behaves inside a class method vs inside an arrow function in a class.
// class Test {
//   constructor(value) {
//     this.value = value;
//   }

//   normalMethod() {
//     console.log("Normal:", this.value);
//   }

//   arrowMethod = () => {
//     console.log("Arrow:", this.value);
//   }
// }

// const obj = new Test(100);
// obj.normalMethod(); // Normal: 100
// obj.arrowMethod();  // Arrow: 100


// Create a Person class with a private property (using #) and a public method to access it.
// class Person{
//     #age
//     name
//     constructor(name,age){
//         this.name=name,
//         this.#age=age
//     }
//     getAge(){
//        return this.#age
//     }
// }

// let r=new Person('sandeep',25)
// console.log(r.#age)
// console.log(r.name)
// console.log(r.getAge())



// Create two classes Animal and Dog. Make Dog inherit from Animal and call the parent constructor.

class Animal{
    constructor(name){
        this.name=name
    }
}


// Write a class Counter that has methods increment() and decrement(), and keeps track of the count.

// Explain what happens if you call a class method without binding this and then use it as a callback.

// Show how you can use static methods inside a class. Give an example.
