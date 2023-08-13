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


// let jsonData;

// function fetchData() {
//   return fetch('assets\\jsons\\humbrolPiants.json')
//     .then(response => response.json())
//     .then(data => {
//       jsonData = data; // Store the data in a variable
//       // Call other functions that need to work with the data
//       displayAll();
//       displayUserData();
      
//       processData();
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }


// function modifyJsonDataTrue() {
//   const inputField = document.getElementById("inputField");
//   const submitButton = document.getElementById("submitButton");
//   // const outputDiv = document.getElementById("outputDiv");
  
//   submitButton.addEventListener("click", function() {
//     const inputValue = inputField.value;
//     // outputDiv.textContent = inputValue;

//     for (const key in jsonData) {
//       const cleanedName = jsonData[key].name.replace(/\s/g, "");
//       const cleanedInputValue = inputValue.replace(/\s/g, "");
//       if (cleanedName.toLowerCase() === cleanedInputValue.toLowerCase()) {
//         jsonData[key].have = true;
//         break;
//       }
//     }
    
//     try {

//       // Code that might throw an error
//       jsonData[inputValue]["have"] = true;
//       throw new Error("Something went wrong BOB");
//     } catch (error) {
//       // Swallow the error and do nothing
//     }
//     // console.log(jsonData); // Updated JSON data
    
//     // accessJsonData(); // Call accessJsonData() to redisplay the data
//     displayUserData()
//     displayAll()
//   });
// }

// function modifyJsonDataFalse() {
//   const inputField = document.getElementById("inputFieldFalse");
//   const submitButton = document.getElementById("submitButtonFalse");
//   // const outputDiv = document.getElementById("outputDiv");
  
//   submitButton.addEventListener("click", function() {
//     const inputValue = inputField.value;
//     // outputDiv.textContent = inputValue;

//     for (const key in jsonData) {
//       const cleanedName = jsonData[key].name.replace(/\s/g, "");
//       const cleanedInputValue = inputValue.replace(/\s/g, "");
//       if (cleanedName.toLowerCase() === cleanedInputValue.toLowerCase()) {
//         jsonData[key].have = true;
//         break;
//       }
//     }
    
//     try {

//       // Code that might throw an error
//       jsonData[inputValue]["have"] = false;
//       throw new Error("Something went wrong BOB");
//     } catch (error) {
//       // Swallow the error and do nothing
//     }
//     // console.log(jsonData); // Updated JSON data
    
//     // accessJsonData(); // Call accessJsonData() to redisplay the data
//     displayUserData()
//     displayAll()
//   });
// }

// function displayAll(){
//   const outputDiv = document.getElementById("itemOutputAll");
//   outputDiv.innerHTML = ""; // Clear previous display
//   modifyJsonDataTrue()
//   modifyJsonDataFalse()
  
//   for (const key in jsonData) {
//     const value = jsonData[key];
//     const itemElement = document.createElement("p");
//     if (value["have"] === true) {
//       itemElement.innerHTML = `<br>${value["id"]} : ${value["name"]} : <span style="color: green;">HAVE</span>`;
//     } else {
//       itemElement.innerHTML = `<br>${value["id"]} : ${value["name"]} : <span style="color: red;">NEED</span>`;
//     }    
//     outputDiv.appendChild(itemElement);
//   }
// }

// function displayUserData(){
//   const outputDiv = document.getElementById("itemOutput");
//   outputDiv.innerHTML = ""; // Clear previous display
//   modifyJsonDataTrue()
//   modifyJsonDataFalse()
  
//   for (const key in jsonData) {
//     const value = jsonData[key];
//     if (jsonData[key]["have"] === true) {
//       const itemElement = document.createElement("p");
//       itemElement.innerHTML = `<br>${value["id"]} : ${value["name"]}<br>`;
//       outputDiv.appendChild(itemElement);      
//     }
//   }
// }

// function processData() {
//   // Work with the data here
//   modifyJsonDataTrue();
//   modifyJsonDataFalse()
//   console.log(jsonData);
// }

// fetchData();


let jsonData;

function fetchData() {
  return fetch('assets\\jsons\\humbrolPiants.json')
    .then(response => response.json())
    .then(data => {
      jsonData = data;
      displayAll();
      displayUserData();
      displayUserDataModel();
      processData();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function modifyJsonDataTrue() {
  const inputField = document.getElementById("inputField");
  const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", function() {
    const inputValue = inputField.value;

    for (const key in jsonData) {
      const cleanedName = jsonData[key].name.replace(/\s/g, "");
      const cleanedInputValue = inputValue.replace(/\s/g, "");
      if (cleanedName.toLowerCase() === cleanedInputValue.toLowerCase()) {
        jsonData[key].have = true;
        break;
      }
    }

    try {
      jsonData[inputValue]["have"] = true;
      throw new Error("Something went wrong BOB");
    } catch (error) {
      // Swallow the error and do nothing
    }

    displayUserData();
    displayAll();
    displayUserDataModel()
    displayNeedOnly()
  });
}

function modifyJsonDataFalse() {
  const inputField = document.getElementById("inputFieldFalse");
  const submitButton = document.getElementById("submitButtonFalse");

  submitButton.addEventListener("click", function() {
    const inputValue = inputField.value;

    for (const key in jsonData) {
      const cleanedName = jsonData[key].name.replace(/\s/g, "");
      const cleanedInputValue = inputValue.replace(/\s/g, "");
      if (cleanedName.toLowerCase() === cleanedInputValue.toLowerCase()) {
        jsonData[key].have = true;
        break;
      }
    }

    try {
      jsonData[inputValue]["have"] = false;
      throw new Error("Something went wrong");
    } catch (error) {
      // Swallow the error and do nothing
    }

    displayUserData();
    displayAll();
  });
}

function displayAll() {
  const outputDiv = document.getElementById("itemOutputAll");
  outputDiv.innerHTML = "";

  for (const key in jsonData) {
    const value = jsonData[key];
    const itemElement = document.createElement("p");
    if (value["have"] === true) {
      itemElement.innerHTML = `<br>${value["id"]} : ${value["name"]} : <span style="color: green;">HAVE</span>`;
    } else {
      itemElement.innerHTML = `<br>${value["id"]} : ${value["name"]} : <span style="color: red;">NEED</span>`;
    }
    outputDiv.appendChild(itemElement);
  }
}

function displayUserData() {
  const outputDiv = document.getElementById("itemOutput");
  outputDiv.innerHTML = "";

  for (const key in jsonData) {
    const value = jsonData[key];
    if (jsonData[key]["have"] === true) {
      const itemElement = document.createElement("p");
      itemElement.innerHTML = `<br>${value["id"]} : ${value["name"]}<br>`;
      outputDiv.appendChild(itemElement);
    }
  }
}

function displayUserDataModel() {
  const outputDiv = document.getElementById("itemOutputModelsNeed");
  outputDiv.innerHTML = "";

  const removeButton = document.getElementById("removeButtonModel");
  removeButton.addEventListener("click", function() {
    outputDiv.innerHTML = "";
    for (const key in jsonData) {
      const value = jsonData[key];
      value["need"] = false
      value["get"] = false
    }
    displayNeedOnly()
  });

  // for (const key in jsonData) {
  //   const value = jsonData[key];
  //   if (jsonData[key]["need"] === true) {
  //     const itemElement = document.createElement("p");
  //     itemElement.innerHTML = `<br>${value["id"]} : ${value["name"]}<br>`;
  //     outputDiv.appendChild(itemElement);
  //   }
  // }

//   for (const key in jsonData) {
//     const value = jsonData[key];
//     const itemElement = document.createElement("p");
//     if (jsonData[key]["have"] === true){
//     if (value["have"] === value["need"]) {
//       itemElement.innerHTML = `<br>${value["id"]} : ${value["name"]} : <span style="color: green;">HAVE</span>`;
//     } else {
//       itemElement.innerHTML = `<br>${value["id"]} : ${value["name"]} : <span style="color: red;">NEED</span>`;
//     }
//   }
//   outputDiv.appendChild(itemElement);
// }

    for (const key in jsonData) {
    const value = jsonData[key];
    if (jsonData[key]["need"] === true) {
      const itemElement = document.createElement("p");
      // itemElement.innerHTML = `<br>${value["id"]} : ${value["name"]}<br>`;
      if (value["have"] === value["need"]) {
        itemElement.innerHTML = `<br>${value["id"]} : ${value["name"]} : <span style="color: green;">HAVE</span>`;
        jsonData[key]["get"] = false
      }
      else{
        itemElement.innerHTML = `<br>${value["id"]} : ${value["name"]} : <span style="color: red;">NEED</span>`;
        jsonData[key]["get"] = true
      }
      outputDiv.appendChild(itemElement);
    }
  }
}

function comparData() {
  const inputField = document.getElementById("inputFieldModel");
  const submitButton = document.getElementById("submitButtonModel");  const removeButton = document.getElementById("submitButtonModel");

  submitButton.addEventListener("click", function() {
    console.log("Button clicked");
    const inputValue = inputField.value;

    for (const key in jsonData) {
      const cleanedName = jsonData[key].name.replace(/\s/g, "");
      const cleanedInputValue = inputValue.replace(/\s/g, "");
      if (cleanedName.toLowerCase() === cleanedInputValue.toLowerCase()) {
        jsonData[key].need = true;
        break;
      }
    }

    try {
      jsonData[inputValue]["need"] = true;
      throw new Error("Something went wrong");
    } catch (error) {
      // Swallow the error and do nothing
    }

    displayUserDataModel();
    // for (const key in jsonData){
    //   if (jsonData[key]["have"] !== jsonData[key]["need"]) {
    //     displayNeedOnly()
    //   }
    // }
    displayNeedOnly()
    console.log(jsonData);
  });
}

function displayNeedOnly() {
  const outputDiv = document.getElementById("itemOutputModelsNeedOnly");
  outputDiv.innerHTML = "";

  for (const key in jsonData) {
    const value = jsonData[key];
    if (jsonData[key]["get"] === true) {
      const itemElement = document.createElement("p");
      itemElement.innerHTML = `<br>${value["id"]} : ${value["name"]} : <span style="color: red;">NEED</span>`;
      outputDiv.appendChild(itemElement);
    }
  }
}


function processData() {
  modifyJsonDataTrue();
  modifyJsonDataFalse();
  comparData();
  console.log(jsonData);
}

fetchData();
