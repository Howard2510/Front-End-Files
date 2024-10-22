// Menghitung index berat badan minimal//

//menghitung BMI
function hitungBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi;
}

function indexmassaBMI(bmi) {
    if (bmi < 18.5) {
        return "berat dibawah normal";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "berat badan normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "kelebihan berat";
    } else {
        return "Obesitas";
    }
}

let weight = 111; // berat badan (kilogram)
let height = 1.76; // tinggi badan (meter)

let bmi = hitungBMI(weight, height);
let category = indexmassaBMI(bmi);

console.log("total BMI: " + bmi.toFixed(2));
console.log("kategori berat badan: " + category);
