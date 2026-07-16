const { disconnect } = require("node:cluster");

const traChuoi = function(name) {
    return (`Hello ${name}`)
}

const value = function(price, quantity, discount) {
    return price*quantity*discount;
}

//Lambda function

const traChuoi= (name) => (`Hello ${name}`);

const gia = (price, quantity, discount) => price*quantity*discount;