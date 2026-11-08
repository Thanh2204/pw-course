const { title } = require("node:process");

//BAI 1
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  occupation: "Software Engineer",
};

const { firstName, lastName, age, occupation } = person;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(occupation);

//BAI 2
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "White",
};

const { brand, model, year, color } = car;
console.log(brand);
console.log(model);
console.log(year);
console.log(color);

//BAI3
const user = {};

const { name1 = "guest" } = user;
console.log(name1);

//BAI4
const product = {
  //
};

const { price = 0 } = product;
console.log(price);

//BAI5
const book = {
  title: "Book title",
};

const { title: bookTitle } = book;
console.log(bookTitle);

//BAI6
const movie = {
  director: "Thanh",
};

const { director: filmDirector } = movie;
console.log(filmDirector);

//BAI7

const person1 = {
  address: {
    street: "Le Duc Tho",
    city: "Ho Chi Minh",
    country: "VietNam",
  },
};

const {
  address: { street },
} = person1;
console.log(street);

//BAI8
const products = {
  details: {
    brand: "levents",
    modelnew: "pants",
    color: "black",
  },
};

const {
  details: { modelnew },
} = products;
console.log(modelnew);
