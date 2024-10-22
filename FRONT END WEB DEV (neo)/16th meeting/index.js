// Synchronous Javascript //

// Asynchronous javascript //

// single thread //
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4");

// setTimeout(() => {
//     console.log("Proses 1")
// }, 3000);
// setTimeout(() => {
//     console.log("Proses 2")
// }, 3000);
// setTimeout(() => {
//     console.log("Proses 3")
// }, 3000);
// setTimeout(() => {
//     console.log("Proses 4")
// }, 3000);

// setTimeout(() => {
//     console.log("Proses 1");
//     setTimeout(() => {
//         console.log("Proses 2");
//         setTimeout(() => {
//             console.log("Proses 3");
//             setTimeout(() => {
//                 console.log("Proses 4");
//             }, 3000);
//         }, 3000);
//     }, 3000);
// }, 3000);
// synchronous tidak hanya single melainkan multi //

let condition = true
const newPromise = new Promise ((resolve, reject) => {
    if (condition){
        resolve("berhasil");
    }
    else{
        reject("gagal");
    }
})

// use promise //
//1. then - catch //
// newPromise
//    .then((result) => (result))
//    .then((result2) => console.log(result2))
//    .catch((error) => console.log(error));

//2. async - await //
// wajib menggunakan fungsi //

// const consumePromise = async () => {
//     let result = await newPromise;
//     console.log(result);
// };

// consumePromise()

// menggunalkan promise yang telah tersedia

//1. fetch //

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => {
//     const names = json.map(user => user.name);
//     console.log(names);
//   });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    const names = json.map(user => user.name);
    console.log(names);
  })
  .catch((error) => console.error('Error:', error));

  const axios = require('axios')

//2. menggunakan axios //

axios.get("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    const names = json.map(user => user.name);
    console.log(names);
  })
  .catch((error) => console.error('Error:', error));


