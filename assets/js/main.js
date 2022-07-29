let form = document.getElementById('taskForm');
let FirstName = document.getElementById('FirstName');
let LastName = document.getElementById('LastName');
let Email = document.getElementById('Email');
let PhoneNumber = document.getElementById('PhoneNumber');
let Qualification = document.getElementById('Qualification');
let Gender = document.querySelector('input[name = gender]:checked');
let checkboxes = document.getElementsByName('hobbies');

// whan click the submit button 
document.querySelector("form#taskForm")
  .addEventListener("submit", function (e) {
    // prevent
    e.preventDefault();
    validation();
    // function call
    // senddata();
  });
//function for validation
function validation() {
  let form = document.getElementById('taskForm');
  let FirstName = document.getElementById("FirstName").value;
  let LastName = document.getElementById("LastName").value;
  let Email = document.getElementById('Email').value;
  let PhoneNumber = document.getElementById('PhoneNumber').value;
  let Qualification = document.getElementById('Qualification').value;
  let checkboxes = document.querySelector('input[name = hobbies]:checked');
  let Comment = document.getElementById('Comment').value;
  let validFirstName = /^[a-zA-Z\s]+$/;
  let validLastName = /^[a-zA-Z\s]+$/;
  let validEmail =   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let validPhone = /^[0]?[789]\d{9}$/;
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
    Error.style.marginLeft = "20%";
    // page swift
   location.href = '#error';
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
    Error.style.marginLeft = "20%";
    // page swift
    location.href = '#error';
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
    Error.style.marginLeft = "20%";
    // page swift
    location.href = '#error';
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
    Error.style.marginLeft = "20%";
    // page swift
    location.href = '#error';
  }
  // check email  
  else if (Email == "") {
    Error.innerText = "please enter Email Address";
    Error.style.color = "#CD212A";
    Error.style.textTransform = "uppercase";
    Error.style.fontWeight = "400";
    Error.style.height = "3rem";
    Error.style.width = "60%";
    Error.style.border = "2px dotted red";
    Error.style.display = "flex";
    Error.style.justifyContent = "center";
    Error.style.alignItems = "center";
    Error.style.marginLeft = "20%";
    // page swift
    location.href = '#error';
  }
  else if (!validEmail.test(Email)) {
    Error.innerText = "please enter valid Email Address";
    Error.style.color = "#CD212A";
    Error.style.textTransform = "uppercase";
    Error.style.fontWeight = "400";
    Error.style.height = "3rem";
    Error.style.width = "60%";
    Error.style.border = "2px dotted red";
    Error.style.display = "flex";
    Error.style.justifyContent = "center";
    Error.style.alignItems = "center";
    Error.style.marginLeft = "20%";
    // page swift
    location.href = '#error';
  }
  // check PhoneNumber
  else if (PhoneNumber == "") {
    Error.innerText = "please enter phone number";
    Error.style.color = "#CD212A";
    Error.style.textTransform = "uppercase";
    Error.style.fontWeight = "400";
    Error.style.height = "3rem";
    Error.style.width = "60%";
    Error.style.border = "2px dotted red";
    Error.style.display = "flex";
    Error.style.justifyContent = "center";
    Error.style.alignItems = "center";
    Error.style.marginLeft = "20%";
    // page swift
    window.location.href = '#error';
  }
  else if (!validPhone.test(PhoneNumber)) {
    Error.innerText = "please enter valid phone number";
    Error.style.color = "#CD212A";
    Error.style.textTransform = "uppercase";
    Error.style.fontWeight = "400";
    Error.style.height = "3rem";
    Error.style.width = "60%";
    Error.style.border = "2px dotted red";
    Error.style.display = "flex";
    Error.style.justifyContent = "center";
    Error.style.alignItems = "center";
    Error.style.marginLeft = "20%";
    // page swift
   location.href = '#error';
  } 
  // check Qualification  !this.form.checkbox.checked
  else if (Qualification === "Qualification") {
    Error.innerText = "please choose your Qualification";
    Error.style.color = "#CD212A";
    Error.style.textTransform = "uppercase";
    Error.style.fontWeight = "400";
    Error.style.height = "3rem";
    Error.style.width = "60%";
    Error.style.border = "2px dotted red";
    Error.style.display = "flex";
    Error.style.justifyContent = "center";
    Error.style.alignItems = "center";
    Error.style.marginLeft = "20%";
    // page swift
    location.href = '#error';
  }
  // check hobbies 
  else if (checkboxes == null) {
    Error.innerText = "please choose hobbies";
    Error.style.color = "#CD212A";
    Error.style.textTransform = "uppercase";
    Error.style.fontWeight = "400";
    Error.style.height = "3rem";
    Error.style.width = "60%";
    Error.style.border = "2px dotted red";
    Error.style.display = "flex";
    Error.style.justifyContent = "center";
    Error.style.alignItems = "center";
    Error.style.marginLeft = "20%";
    // page swift
      window.location.href = '#error';
  }
  // check comment 
  else if (Comment == '') {
    Error.innerText = "please write comment";
    Error.style.color = "#CD212A";
    Error.style.textTransform = "uppercase";
    Error.style.fontWeight = "400";
    Error.style.height = "3rem";
    Error.style.width = "60%";
    Error.style.border = "2px dotted red";
    Error.style.display = "flex";
    Error.style.justifyContent = "center";
    Error.style.alignItems = "center";
    Error.style.marginLeft = "20%";
    // page swift
    location.href = '#error';
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
    Error.style.marginLeft = "20%";
  }
}

//function for send data in body #showdata
function senddata() {
  let chk = [];
  let Comment = document.getElementById('Comment');
  //  for print checkbox values 
    for(i= 0; i < checkboxes.length; i++)
    {
      if(checkboxes[i].checked == true){
        chk.push(checkboxes[i].value);
      }
    }
    document.querySelector("#showData").innerHTML += `
                                                      <div class="result">
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
  }
