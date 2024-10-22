// 1.calculateAge & yearUntilRetirement //
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUnitRetirement = (object) => {
    let age = calculateAge(object.year);
    let retirement = 60 - age;
    
    if (retirement > 0){
      console.log(`${object.firstName} retires in ${retirement} years`);
    } else {
        console.log(`${object.firstName} is already retired`)
    }
};

yearUnitRetirement({year: 1987, firstName:"John"})

// 2. addNumber //
const addNumber = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    let sum = 0;
    
    // Mengubah ke map function
    numbers.map(number => sum += number);

    return sum;
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3. calculateArea //
const phi = 3.14;

let calculateArea = (obj) => phi * Math.pow(obj.radius, obj.power);

let radius = 21;
const area21 = calculateArea({radius: radius, power: 2});

radius = 7;
const area7 = calculateArea({radius: radius, power: 2});

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4. makeAjaxRequest //
const makeAjaxRequest = (url, method = "GET") => {
    console.log(`${url}, ${method}`);
}
makeAjaxRequest('https://example.com');