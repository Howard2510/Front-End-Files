// Array exercise//

let people = ["Greg","Mary","Devon","James"]

// 1. //
 for (let i = 0; i < people.length; i++){
   console.log(people[i]);
 }

 // 2. //
  people.forEach(person =>{
    console.log(person);
 });

 // 3. //
 people.shift();
 console.log(people);

// // 4. //
 people.splice(people.indexOf("james"), 1)
 console.log(people);

// 5. //
people.unshift("Matt");
console.log(people);

// 6. //
people.push("Howard")
console.log(people);

// 7. //
for (let i = 0; i < people.length; i++){
    console.log(people[i]);
    if (people[i] === "mary") {
        break;
    }
  }

// 8. //
let filteredPeople = people.filter(person => person !== "mary" && person !== "Matt");
console.log(filteredPeople);

// 9. //
people.splice(2, 1);
people.splice(2, 0, "Elizabeth", "Artie");
console.log(people);

// 10. //
let withBob = people.concat("Bob");
console.log(withBob);
