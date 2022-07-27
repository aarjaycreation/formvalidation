let form = document.getElementById("taskForm");
let FirstName = document.getElementById("FirstName");
let LastName = document.getElementById("LastName");
let Email = document.getElementById("Email");
let PhoneNumber = document.getElementById("PhoneNumber");
let Qualification = document.getElementById("Qualification");
let Gender = document.querySelector('input[name = gender]:checked');
let Hobbies = document.querySelector('.messageCheckbox').checked;
let Comment = document.getElementById("Comment");
// let demo = document.getElementById("demo");
// let demo = document.getElementById("demo");
// let demo = document.getElementById("demo");
// let demo = document.getElementById("demo");
// let demo = document.getElementById("demo");
// let demo = document.getElementById("demo");
console.log(Hobbies)
document
  .querySelector("form#taskForm")
  .addEventListener("submit", function (e) {
    // prevent
    e.preventDefault();
    //  console.log(FirstName.value);
    //  console.log(LastName.value);
    // //function
    // validation();
    // function call
    senddata();
  });
//function to call
function senddata() {
  document.querySelector("#showData").innerHTML += `
       
        <div>${FirstName.value}</div>
        <div>${LastName.value}</div>
        <div>${Email.value}</div>
        <div>${PhoneNumber.value}</div>
        <div>${Qualification.value}</div>
        <div>${Gender.value}</div>
        <div>${Hobbies}</div>
        <div>${Comment.value}</div>

        `;
  form.reset();
 
}
//function to call
function validation() {
  let FirstName = document.getElementById("FirstName").value;
  let validFirstName = /^[a-zA-Z\s]+$/;
  let validLastName = /^[a-zA-Z\s]+$/;
  let LastName = document.getElementById("LastName").value;
  let Error = document.getElementById("error");

  // check the  input field
  if (FirstName == "") {
    Error.innerText = "please enter first name";
    Error.style.color = "#CD212A";
    Error.style.textTransform = "uppercase";
    Error.style.fontWeight = "400";
    Error.style.height = "3rem";
    Error.style.width = "60%";
    Error.style.border = "2px dotted red";
    Error.style.display = "flex";
    Error.style.justifyContent = "center";
    Error.style.alignItems = "center";
    Error.style.marginLeft = "75px";
  }
  // check valid first name
  else if (!validFirstName.test(FirstName)) {
    Error.innerText = "please enter valid first name";
    Error.style.color = "#CD212A";
    Error.style.textTransform = "uppercase";
    Error.style.fontWeight = "400";
    Error.style.height = "3rem";
    Error.style.width = "60%";
    Error.style.border = "2px dotted red";
    Error.style.display = "flex";
    Error.style.justifyContent = "center";
    Error.style.alignItems = "center";
    Error.style.marginLeft = "75px";
  }

  // check the second input field
  else if (LastName == "") {
    Error.innerText = "please enter last name";
    Error.style.color = "#CD212A";
    Error.style.textTransform = "uppercase";
    Error.style.fontWeight = "400";
    Error.style.height = "3rem";
    Error.style.width = "60%";
    Error.style.border = "2px dotted red";
    Error.style.display = "flex";
    Error.style.justifyContent = "center";
    Error.style.alignItems = "center";
    Error.style.marginLeft = "75px";
  }

  // check valid last name
  else if (!validLastName.test(LastName)) {
    Error.innerText = "please enter valid last name";
    Error.style.color = "#CD212A";
    Error.style.textTransform = "uppercase";
    Error.style.fontWeight = "400";
    Error.style.height = "3rem";
    Error.style.width = "60%";
    Error.style.border = "2px dotted red";
    Error.style.display = "flex";
    Error.style.justifyContent = "center";
    Error.style.alignItems = "center";
    Error.style.marginLeft = "75px";
  }

  // all validation clear than run code
  else {
    // function call
    senddata();
    Error.innerText = "data added successfully";
    Error.style.color = "#4BB543";
    Error.style.textTransform = "uppercase";
    Error.style.fontWeight = "500";
    Error.style.height = "3rem";
    Error.style.width = "60%";
    Error.style.border = "2px dotted #4BB543";
    Error.style.display = "flex";
    Error.style.justifyContent = "center";
    Error.style.alignItems = "center";
    Error.style.marginLeft = "75px";
  }
}

