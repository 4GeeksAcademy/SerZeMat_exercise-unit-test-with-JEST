// app.js file content
console.log("Hello World")

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}
console.log(sum(14,9));

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs['USD'];
    return valueInDollar;
}

//En función flecha nos quedaría:
//const fromEuroToDollar = (valueInEuro) => valueInEuro * oneEuroIs['USD'];
//console.log(fromEuroToDollar(1));

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs['USD'];
    let valueInYen = valueInEuro * oneEuroIs['JPY'];
    return parseFloat(valueInYen.toFixed(2));
}

//En función felcha nos quedaría:
//const fromDollarToYen = (valueInDollar) => 
//parseFloat(((valueInDollar/oneEuroIs['USD']) * oneEuroIs['JPY']).toFixed(2));
//console.log(fromDollarToYen(1));

const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs['JPY'];
    let valueInPound= valueInEuro * oneEuroIs['GBP'];
    return parseFloat(valueInPound.toFixed(4));
}

//Su función flecha nos quedaría:
//const fromYenToPound = (valueInYen) => 
//parseFloat(((valueInYen/oneEuroIs['JPY']) * oneEuroIs['GBP']).toFixed(4));
//console.log(fromYenToPound(1));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };