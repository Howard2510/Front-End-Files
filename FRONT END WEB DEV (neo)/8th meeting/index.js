// javascript loop //
// 1. For loop //

//Array Object//
let students =[
    {
    id: 1,
    firstName: "Queency",
    grade: 100,
},
{
   id: 2,
   firstName:"Alexandra",
   grade: 97,
},
{
   id: 3,
   firstName:"Hillary",
   grade: 95,
}];

// menampilkan semua item
console.log(students);
//menampilkan item satu persatu
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

//2. While //

 let i = 0;
 while (i < students.length) {
 console.log(students[i]);
 i++
 }

