let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1. //
programming.languages.push("Go");
console.log(programming.languages);

// 2. //
programming['difficulty'];
console.log(programming.difficulty);

// 3. //
delete programming.jokes;
console.log(programming);

// 4. //
programming.isFun = true;
console.log(programming);

// 5. //
let updatedLanguages = programming.languages.map((language, index) => {
    return `${index} - ${language}`;
});
console.log(updatedLanguages);