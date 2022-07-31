let form = document.getElementById("taskForm");
let FirstName = document.getElementById("FirstName");
let LastName = document.getElementById("LastName");
let Email = document.getElementById("Email");
let PhoneNumber = document.getElementById("PhoneNumber");
let Qualification = document.getElementById("Qualification");
let Gender = document.querySelector("input[name = gender]:checked");
let checkboxes = document.getElementsByName("hobbies");
let Comment = document.getElementById("Comment");

// for error
let CommentError = document.getElementById("CommentError");
let QualificationError = document.getElementById("QualificationError");
let HobbyError = document.getElementById("HobbyError");
let PhoneNumberError = document.getElementById("PhoneNumberError");
let EmailError = document.getElementById("EmailError");
let LastNameError = document.getElementById("LastNameError");
let FirstNameError = document.getElementById("FirstNameError");
let Error = document.getElementById("error");

// validate regex
let validFirstName = /^[a-zA-Z\s]+$/;
let validLastName = /^[a-zA-Z\s]+$/;
let validEmail =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let validPhone = /^[0]?[789]\d{9}$/;

// whan click the submit button
document.querySelector("form#taskForm").addEventListener("submit", (event) => {
  event.preventDefault();
  validation();
  // function call
  // sendData();
});

// clear all error
removeErrors = () => {
  errors = document.getElementsByClassName("Error");
  for (let item of errors) {
    item.innerHTML = "";
  }
};

//function for validation
validation = () => {
  let checkHobbies = document.querySelector("input[name = hobbies]:checked");
  removeErrors();
  // first name
  if (FirstName.value == "") {
    FirstNameError.innerText = "*Please Enter First Name";
    location.href = '#FirstName'
  }

  // check valid first name
  else if (!validFirstName.test(FirstName.value)) {
    FirstNameError.innerText = "Please Enter Valid First Name";
    location.href = '#FirstName'
  }

  // last name
  else if (LastName.value == "") {
    LastNameError.innerText = "Please Enter Last Name";
    location.href = '#LastName'
  }

  // check valid last name
  else if (!validLastName.test(LastName.value)) {
    LastNameError.innerText = "Please Enter Valid Last Name";
    location.href = '#LastName'
  }

  // check email
  else if (Email.value == "") {
    EmailError.innerText = "Please Enter Email Address";
    location.href = '#Email'
  } 
  else if (!validEmail.test(Email.value)) {
    EmailError.innerText = "Please Enter Valid Email Address";
    location.href = '#Email'
  }

  // check PhoneNumber
  else if (PhoneNumber.value == "") {
    PhoneNumberError.innerText = "Please Enter Phone Number";
    location.href = '#PhoneNumber'
  } 
  else if (!validPhone.test(PhoneNumber.value)) {
    PhoneNumberError.innerText = "Please Enter Valid Phone Number";
    location.href = '#PhoneNumber'
  }

  // check hobbies
  else if (checkHobbies == null) {
    HobbyError.innerText = "Please Choose Hobbies";
    location.href = '#hobbies'
  }

  // check Qualification  !this.form.checkbox.checked
  else if (Qualification.value === "Qualification*") {
    QualificationError.innerText = "Please Choose Your Qualification";
    location.href = '#Qualification'
  }

  // check comment
  else if (Comment.value == "") {
    CommentError.innerText = "Please Write Your Comment";
    location.href = '#Comment'
  }

  // all validation clear than run code
  else {
    // function call
    sendData();
  }
};
//function for send data in body #showdata
sendData = () => {
  let chk = [];

  //  for print checkbox values
  for(let key in checkboxes){
    if (checkboxes[key].checked == true) {
      chk.push(checkboxes[key].value);
    }
  }
  

  document.querySelector("#showData").innerHTML += `
  <div class="result">
  <h4>Result</h4>
  <!-- first name  -->
  <div class="d-flex gap-4">
    <p>FirstName :-</p>
    <div>${FirstName.value}</div>
  </div>
  <!-- last name  -->
  <div class="d-flex gap-4">
    <p>LastName :-</p>
    <div>${LastName.value}</div>
  </div>
  <!-- email -->
  <div class="d-flex gap-4">
    <p>Email :-</p>
    <div>${Email.value}</div>
  </div>
  <!-- phone  -->
  <div class="d-flex gap-4">
    <p>Phone Number :-</p>
    <div>${PhoneNumber.value}</div>
  </div>
  <!-- qualification -->
  <div class="d-flex gap-4">
    <p>Qualification :-</p>
    <div>${Qualification.value}</div>
  </div>
  <!-- Gander -->
  <div class="d-flex gap-4">
    <p>Gander :-</p>
    <div>${Gender.value}</div>
  </div>
  <!-- Hobbies -->
  <div class="d-flex gap-4">
    <p>Hobbies :-</p>
    <div>${chk.toString()}</div>
  </div>
  <!-- comment  -->
  <div class="d-flex gap-4">
    <p>Comment :-</p>
    <div>${Comment.value}</div>
  </div>
</div> 
`;
  form.reset();
};
