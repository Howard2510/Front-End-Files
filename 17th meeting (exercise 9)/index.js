// 1. Promise //

function helloworld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  }
  
  async function messages() {
    const msg = await helloworld();
    console.log(msg);
  }
  
  messages();

  // 2. Fetch //

function ambilDataUser() {
    fetch("https://reqres.in/api/users")
      .then((response) => {
        return response.json(); 
      })
      .then((data) => {
        const users = data.data; 
        console.log(users); 
        users.forEach((user) => {
          console.log(`${user.first_name} ${user.last_name}`); 
        });
      });
  }
  ambilDataUser();

  // 3. Async and awaits //

async function ambilDataUser() {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      const users = data.data;
      console.log(users); 
      users.forEach((user) => {
        console.log(`${user.first_name} ${user.last_name}`); 
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  ambilDataUser();

  // 4. Axiom //

  async function ambilDataUser() {
    try {
      let response = await axios.get("https://reqres.in/api/users");
      let users = response.data; 
      
      users.data.forEach(user => {
        console.log(`FirstName: ${user.first_name}, LastName: ${user.last_name}`);
      });
    } catch (error) {
      console.error("Error fetching data:", error); 
    }
  }
  
  ambilDataUser();
  
  

