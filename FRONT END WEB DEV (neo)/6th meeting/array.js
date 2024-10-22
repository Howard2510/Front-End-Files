// array method

let array=[1, 2, 3, "Hallo", false, true];
console.log(array);
// 1, toString()
console.log(array.toString());
// 2, join()
console.log(array.join());
console.log(array.join(" "));
console.log(array.join("-"));
// 3, pop()
array.pop();
console.log(array);
// 4, push()
array.push("selamat pagi");
console.log(array);
// 5, shift()
array.shift();
console.log(array);
// 6. unshift()
array.unshift("selamat pagi");
console.log(array);
// 7. splice()
array.splice(3, 1);
console.log(array);
array.splice(3, 0, 4, 5);
console.log(array);
// 8, concut()
let buah = ["pisang", "jeruk", "stroberi"];
let sayur = ["kentang", "wortel", "Kol"];
let biji = ["kacang tanah", "kacang polong"];
let daging = ["ayam", "sapi", "kambing"];
let makanan = buah.concat(sayur, daging);
console.log(makanan);
// 9. slice()
let dagingan = makanan.slice(4, 10);
console.log(daging);
let bijian = makanan.slice(6);
console.log(bijian)