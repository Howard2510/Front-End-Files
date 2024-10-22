let people = ["Queency","Hannah","Alexandra","Genoveva"]

// 1. 
for (let i = 0; i < people.length; i++){
    console.log(people[i]);
  }
 
  // 2. 
   people.forEach(person =>{
     console.log(person);
  });

  // 3. 
 people.shift();
 console.log(people);

 // 4.
 people.splice(people.indexOf("Hannah"), 1)
 console.log(people);

 // 5.
 people.unshift("Queency");
 console.log(people);

 // 6.
 people.push("Hillary");
 console.log(people);

 // 7.
 for (let i = 0; i < people.length; i++){
    console.log(people[i]);
    if (people[i] === "Alexandra") {
        break;
    }
  }

  // 8.
  let filteredPeople = people.filter(person => person !== "Genoveva" && person !== "Queency");
console.log(filteredPeople);

// 9. 

people.splice(2, 1);
people.splice(2, 0, "Diana", "Sarah");
console.log(people);

// 10. 
let withNancy = people.concat("Nancy");
console.log(withNancy);
