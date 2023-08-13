// fetch('assets\\jsons\\humbrol.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data[1]);
//     // Perform further operations with the JSON data
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


// fetch('assets/jsons/humbrol.json')
//   .then(response => response.json())
//   .then(data => {
//     const jsonData = data;
//     const outputDiv = document.getElementById("itemOutput");

//     console.log(jsonData);

//     for (const key in jsonData) {
//       const value = jsonData[key];
//       const itemElement = document.createElement("p");
//       itemElement.textContent = `${key} : ${value}`;
//       outputDiv.appendChild(itemElement);
//     }

//     // Perform further operations with the JSON data
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// var jsonDataMain

// fetch('assets\\jsons\\humbrolPiants.json')
// .then(response => response.json())
// .then(data => {
//   const jsonData = data;
//   jsonDataMain = jsonData
//   const outputDiv = document.getElementById("itemOutput");

//   console.log(jsonData["1"]["name"]);

//   for (const key in jsonData) {
//     const value = jsonData[key];
//     const itemElement = document.createElement("p");
//     itemElement.textContent = `${key} : ${value}`;
//     outputDiv.appendChild(itemElement);
//   }

//   // Perform further operations with the JSON data
//   })
//     .catch(error => {
//     console.error('Error:', error);
// });

// console.log(jsonDataMain["1"]["name"]);

// fetch('assets\\jsons\\humbrolPiants.json')
// .then(response => response.json())
// .then(data => {
//   const jsonData = data;
//   jsonDataMain = jsonData
//   const outputDiv = document.getElementById("itemOutput");

//   // console.log(jsonData["1"]["name"]);

//   for (const key in jsonData) {
//     const value = jsonData[key];
//     const itemElement = document.createElement("p");
//     itemElement.textContent = `${value["name"]} : ${value["id"]} : ${value["have"]}`;
//     outputDiv.appendChild(itemElement);
//   }
  
//   // Perform further operations with the JSON data
//   })
//     .catch(error => {
//     console.error('Error:', error);
// });



// let jsonData;

// function fetchData() {
//   return fetch('assets\\jsons\\humbrolPiants.json')
//     .then(response => response.json())
//     .then(data => {
//       jsonData = data;
//       accessJsonData();
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }

// function modifyJsonData() {
//   const inputField = document.getElementById("inputField");
//   const submitButton = document.getElementById("submitButton");
//   // const outputDiv = document.getElementById("outputDiv");

//   submitButton.addEventListener("click", function() {
//     const inputValue = inputField.value;
//     // outputDiv.textContent = inputValue;

//     console.log(jsonData[inputValue]["have"] = true);
//     console.log(jsonData); // Updated JSON data
  
//     // accessJsonData(); // Call accessJsonData() to redisplay the data
//     displayInputData()
//   });
  
// }

// function displayInputData(){
//   const outputDiv = document.getElementById("itemOutput");
//   outputDiv.innerHTML = ""; // Clear previous display
//   modifyJsonData();

//   for (const key in jsonData) {
//     const value = jsonData[key];
//     if (jsonData[key]["have"] === true) {
//       const itemElement = document.createElement("p");
//       itemElement.textContent = `${value["id"]} : ${value["name"]} : have : ${value["have"]}`;
//       outputDiv.appendChild(itemElement);
//     }
//   }
// }

// function displayAll(){
//   const outputDiv = document.getElementById("itemOutputAll");
//   outputDiv.innerHTML = ""; // Clear previous display
//   modifyJsonData();

//   for (const key in jsonData) {
//     const value = jsonData[key];
//     const itemElement = document.createElement("p");
//     itemElement.textContent = `${value["id"]} : ${value["name"]} : have : ${value["have"]}`;
//     outputDiv.appendChild(itemElement);
//   }
// }

// function accessJsonData() {
//   const outputDiv = document.getElementById("itemOutput");
//   outputDiv.innerHTML = ""; // Clear previous display
//   modifyJsonData();

//   displayInputData()
//   // displayAll()

//   // for (const key in jsonData) {
//   //   const value = jsonData[key];
//   //   const itemElement = document.createElement("p");
//   //   itemElement.textContent = `${value["id"]} : ${value["name"]} : have : ${value["have"]}`;
//   //   outputDiv.appendChild(itemElement);
//   // }

// }

// fetchData();


let jsonData;

function fetchData() {
  return fetch('assets\\jsons\\humbrolPiants.json')
    .then(response => response.json())
    .then(data => {
      jsonData = data; // Store the data in a variable
      // Call other functions that need to work with the data
      // displayAll();
      displayUserData();
      
      processData();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


function modifyJsonData() {
  const inputField = document.getElementById("inputField");
  const submitButton = document.getElementById("submitButton");
  // const outputDiv = document.getElementById("outputDiv");
  
  submitButton.addEventListener("click", function() {
    const inputValue = inputField.value;
    // outputDiv.textContent = inputValue;
    
    jsonData[inputValue]["have"] = true;
    // console.log(jsonData); // Updated JSON data
    
    // accessJsonData(); // Call accessJsonData() to redisplay the data
    displayUserData()
  });

  return jsonData
  
}

function displayAll(){
  const outputDiv = document.getElementById("itemOutputAll");
  outputDiv.innerHTML = ""; // Clear previous display
  
  for (const key in jsonData) {
    const value = jsonData[key];
    const itemElement = document.createElement("p");
    itemElement.textContent = `${value["id"]} : ${value["name"]} : have : ${value["have"]}`;
    outputDiv.appendChild(itemElement);
  }
}

function displayUserData(){
  const outputDiv = document.getElementById("itemOutput");
  outputDiv.innerHTML = ""; // Clear previous display
  modifyJsonData()
  
  for (const key in jsonData) {
    const value = jsonData[key];
    if (jsonData[key]["have"] === true) {
      const itemElement = document.createElement("p");
      itemElement.innerHTML = `<br>${value["id"]} : ${value["name"]}<br>`;
      outputDiv.appendChild(itemElement);      
    }
  }
}

function processData() {
  // Work with the data here
  jsonData = modifyJsonData();
  console.log(jsonData);
}

fetchData();