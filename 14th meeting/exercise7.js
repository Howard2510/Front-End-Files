// 1.//
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUnitRetirement = ({ year, firstName }) => {
    let age = calculateAge(year);
    let retirement = 60 - age;
    
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired`);
    }
};

yearUnitRetirement({year: 1987, firstName: "John"});

//2.//
const addNumber = (...numbers) => {
    let sum = 0;
    numbers.map(number => sum += number);
    return sum;
};

//3.//
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));
const makeAjaxRequest = (url, { method = "GET" } = {}) => {
    console.log(`${url}, ${method}`);
};

makeAjaxRequest('https://example.com');

//4.//
const phi = 3.14;  // pastikan phi dideklarasikan di luar atau di dalam fungsi calculateArea

let calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

let radius = 21;
const area21 = calculateArea({radius: radius, power: 2});

radius = 7;
const area7 = calculateArea({radius: radius, power: 2});

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);
