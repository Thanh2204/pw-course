//Ex1
const car = { make: "Toyota", model: "Corolla", year: 2021 };

console.log(car.year);

//Ex2
const person= {
    name: "John",
    address:{
        street:"123 Main St",
        city: "New York",
        country: "USA" 
    }
}

console.log(person.address.street);

//Ex3

const student = {
    name: "Alice",
    grades: {
        math: 90,
        english: 85,
    }
}

console.log(student["grades"]["math"]);

//Ex4
const settings = {
    volume: 10,
    brightness: 70,
}

settings.brightness = 80;

console.log(settings);

//Ex5

const bike ={};

bike.color = "red";

console.log(bike);

//Ex6

const employee={
    name: "Thanh",
    age: 22,
}

delete employee.age;

console.log(employee);


//Ex7
const school = {
    classA: ["An", "Binh", "Cuong"],
    classB: ["Dao", "Huong", "Giang"],
};

