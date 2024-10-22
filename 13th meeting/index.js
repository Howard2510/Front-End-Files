// Rest poarameter and Spread operator //

// 1. Rest parameter //
// digunakan pada saat membuat fungsi yang memiliki banyak parameter //

// tanpa melibatkan rest parameter //
const func1 = (param1, param2, param3, param4, param5) =>
console.log(param1, param2, param3, param4, param5);

func1("A", "B", "C", "D", "E");

// dengan melibatkan rest parameter //
const func2 = (params) =>{
  console.log(...params);
}
func2("A", "B", "C", "D", "E");

// mini exercise //
const penjumlahan = (a, b, c, d, e, f) => {
    let arr = [a, b, c, d, e, f]
    let hasil = 0;
    arr.forEach((item) => (hasil =+ item));
    return hasil;
}
console.log(penjumlahan(1, 2, 3, 4, 5, 6))

// 2. spread operator //
// digunakan pada array dan object untuk memecahnya menjadi elemen kecil //

let numbers = [1, 2, 3, 4, 5]
console.log(numbers);
console.log(...numbers);

// duplikasi array //

let numbers2 = [...numbers];
console.log[numbers2];

// menggabungkan array //

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8, 9]

let number3 = arr1.concat(arr2, arr3); 
let number4 = [...arr1, ...arr2, ...arr3];

// object //

const john = {
    fullName: "John Doe",
    age: 30,
};

// 1. duplikasi object //
const john2 = {...john, address: "Manado"};

// 2. Menggabungkan object //
let obj1 = {a: 1, b: 2}
let obj2 = {a: 3, b: 4}
let obj3 = {a: 5, b: 6}

let combinedobj = {...obj1, ...obj2, ...obj3};
