// Javascipt ES6 //

// String literal //
let fullName = "John Doe";
let age = 30
let address = "Manado";
// menampilkat kalimat //
let kalimat1 = " halo nama saya " + fullName + ", Umur saya " + age + " tahun dan tinggal di " + address;
console.log(kalimat1);

let kalimat2 =`halo nama saya ${fullName}, umur saya ${age} Tahun,dan saya tinggal di ${address}`
console.log(kalimat2);

// Arrow  function //

function sayGreetings1(fullName) {
  return `hello my name is ${fullName}`;
}
console.log(sayGreetings1("John Doe"))

const sayGreetings2 = () => `hello my name is ${fullName}`;
console.log(sayGreetings2("John Doe"))

// default parameter //
const sayGreetings3 = (fullName) =>{
    if (!fullName){
        fullName = "john doe"
    }

    if (!age){
        age = 30
    }
    
    if (!address){
       address = "manado"
    }
}
 console.log(`halo nama saya ${fullName} umur saya ${age} Tahun, dan saya tinggal di ${address}`)