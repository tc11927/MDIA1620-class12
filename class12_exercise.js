const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  /*
We will create an application that lists arrays within an object as looping through objects are useful
We will use for (let key in obj)

This application will allow hosts to give add users to their chat server, assign roles through permissions that are true or untrue

CHALLENGE,
Make a function and command to turn all permissions off and all permissions on

CHALLENGE 2,
Using the role object, make commands to assign different roles by looping through the settings and assing the values of the chosen role
  */

/* NOTES:
first to the normal things
- give add users
-assign roles
  -do through permissions that are true/untrue
Reference back to lessons ^^

Challenge 1:
-Turn all permissions on and off
Learned through lessons, reference code from exercise during class ^^

Challenge 2:
-assign different roles
  -asses the values of the chosen role (list out what it can do)
Reference old classes ^^
(I do not know how to do this, watch some videos)

Add what each function did at the top of the code to understand later on

Push to github

Get comments and help others when finished

*/


let users = []; 
let userRoles = {};

//CHALLENGE 2 ONLY
let role = {
  moderator:{
    darkMode:true,
    sensitivityAmount:false,
    editAccounts:true,
    deleteAccounts:false,
    createChannels:false,
    editChannels:true
  },
  simple:{
    darkMode:true,
    sensitivityAmount:false,
    editAccounts:false,
    deleteAccounts:false,
    createChannels:false,
    editChannels:false
  },
  coAdmin:{
    darkMode:true,
    sensitivityAmount:true,
    editAccounts:true,
    deleteAccounts:false,
    createChannels:true,
    editChannels:true
  }
};


let settings = {
    darkMode:true,
    sensitivityAmount:true,
    editAccounts:true,
    deleteAccounts:true,
    createChannels:true,
    editChannels:true
};

//add a user
function createUsers(){
  readline.question("What is the name?", (_user)=>{
    users.push(_user);
    console.log(`${_user} has been added.`);
    StartApp();
})
};

function giveRole(){
  // assign a role
  console.log("all users:")
  for(let i=0; i<users.length; i++){
    console.log(`They are number ${i+1} and their name is ${users[i]}`);
  }

  readline.question("Enter user number and role (e.g., 1 moderator): ", (input) => {
    let parts = input.split(' ');
    let userIndex = parts[0] - 1;
    let role = parts[1];
    

    if (users[userIndex]) {
      console.log(`${users[userIndex]} is able to use the ${role} permissions!`);
    } else {
      console.log("Invalid user.");
    }
    StartApp();
  }) 
}
  



//CHALLENGE 2 ONLINE
// add new role into the system
function assignRole(){
  readline.question("What role would you like to assign into the system?", newRole => {
    if(role[newRole]) {
      console.log(role[newRole], "already exists!");
    } else {
      role[newRole] = {
        darkMode: false,
        sensitivityAmount: false,
        editAccounts: false,
        deleteAccounts: false,
        createChannels: false,
        editChannels: false
    };
    console.log(`${newRole} has been added successfully!`);
    console.log(newRole + ": ", role[newRole]);
    StartApp();
  }
  })
}

// assign a permission
function assignPermissions() {
  console.log("\nAll Users:");
  users.forEach((user, index) => {
    console.log(`${index + 1}: ${user}`);
  });

  readline.question(
    "Enter user number and role to assign (e.g., 1 moderator): ",
    (input) => {
      let [userIndex, roleName] = input.split(" ");
      userIndex = parseInt(userIndex) - 1; 

      if (users[userIndex] && role[roleName]) {
        userRoles[users[userIndex]] = roleName;
        console.log(`${users[userIndex]} is now assigned the role "${roleName}".`);
      } else {
        console.log("Invalid user or role. Please try again.");
      }
      StartApp();
    }
  );
}

function showPermissions() {
  if (users.length === 0) {
    console.log("No users available.");
  } else {
    users.forEach((user) => {
      const assignedRole = userRoles[user]; 
      if (assignedRole) {
        const permissions = role[assignedRole]; 
        console.log(`\nName: ${user}, Role: ${assignedRole}`);
        console.log("==== Permissions ====");
        for (let permission in permissions) {
          console.log(`${permission}: ${permissions[permission]}`);
        }
      } else {
        console.log(`\nName: ${user}, Role: No role assigned`);
      }
    });
  }
  StartApp();
}

function StartApp() {
    readline.question("What would you like to do? ", (_command) => {
      
      //add other commands here to add
  
    
      if (_command === "quit") {
        StartApp();
      } else if(_command === "add"){
       createUsers();
      } else if (_command === "permissions off/on"){
        allPermissions();
      } else if (_command === "assign role"){
      giveRole();
    } else if (_command === "assign permission"){
      assignPermissions();
    } else if (_command === "new role"){
      assignRole();
    } else if (_command === "show permission"){
      showPermissions();
    }
    });
  }
  
  StartApp();
  