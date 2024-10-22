const person = {
    firstName: "Howard",
    lastname: "Matthieu",
    weight: 111, // berat dalam kilogram
    height: 1.76, // tinggi dalam meter
    
    calculateBMI: function () {
      // Menghitung index BMI
      const bmi = this.weight / (this.height * this.height);
      
      // kategori BMI berdasarkan nilai bobot
      let category;
      if (bmi < 18.5) {
        category = "Kurus";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal";
      } else if (bmi >= 25 && bmi < 29.9) {
        category = "Gemuk";
      } else {
        category = "Obesitas";
      }
  
      // Menampilkan BMI dan kategori berat badan
      return `BMI: ${bmi.toFixed(2)} - ${category}`;
    }
  };
  
  // kalkulasi BMI.
  console.log(person.calculateBMI());
  