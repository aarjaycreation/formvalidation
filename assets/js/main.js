let form = document.getElementById('taskForm');
let FirstName = document.getElementById('FirstName');
let LastName = document.getElementById('LastName');
let Email = document.getElementById('Email');
let PhoneNumber = document.getElementById('PhoneNumber');
let Qualification = document.getElementById('Qualification');
let Gender = document.querySelector('input[name = gender]:checked');
let checkboxes = document.getElementsByName('hobbies');
let Comment = document.getElementById('Comment');
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
  // get error element 

  
  let CommentError = document.getElementById('CommentError');
  let QualificationError = document.getElementById('QualificationError');
  let GanderError = document.getElementById('GanderError');
  let HobbyError = document.getElementById('HobbyError');
  let PhoneNumberError = document.getElementById('PhoneNumberError');
  let EmailError = document.getElementById('EmailError');
  let LastNameError = document.getElementById('LastNameError');
  let FirstNameError = document.getElementById('FirstNameError');
  let Error = document.getElementById("error");
  //  get element  values 
  let FirstName = document.getElementById("FirstName").value;
  let LastName = document.getElementById("LastName").value;
  let Email = document.getElementById('Email').value;
  let PhoneNumber = document.getElementById('PhoneNumber').value;
  let Qualification = document.getElementById('Qualification').value;
  let checkboxes = document.querySelector('input[name = hobbies]:checked');
  let Comment = document.getElementById('Comment').value;
  // validate regex
  let validFirstName = /^[a-zA-Z\s]+$/;
  let validLastName = /^[a-zA-Z\s]+$/;
  let validEmail =   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let validPhone = /^[0]?[789]\d{9}$/;
  
  // first name
  if (FirstName == "") {
    FirstNameError.classList.add("is-invalid");
    FirstNameError.innerText = "please enter first name";
    return false;
  }
  // check valid first name
  else if(!validFirstName.test(FirstName)) {
    FirstNameError.classList.add("is-invalid");
    FirstNameError.innerText = "please enter valid first name";
    return false;
  }

  // last name
  else if (LastName == "") {
    LastNameError.classList.add("is-invalid");
    LastNameError.innerText = "please enter valid first name";
    return false;
  }

  // check valid last name
  else if (!validLastName.test(LastName)) {
    LastNameError.classList.add("is-invalid");
    LastNameError.innerText = "please enter valid last name";
    return false;
  }
  // check email  
  else if (Email == "") {
    EmailError.classList.add("is-invalid");
    EmailError.innerText = "please enter Email Address";
    return false;
   
  }
  else if (!validEmail.test(Email)) {
    EmailError.classList.add("is-invalid");
    EmailError.innerText = "please enter valid Email Address";
    return false;
   
  }
  // check PhoneNumber
  else if (PhoneNumber == "") {
    PhoneNumberError.classList.add("is-invalid");
    PhoneNumberError.innerText = "please enter phone number";
    return false;
   
  }
  
  else if (!validPhone.test(PhoneNumber)) {
    PhoneNumberError.classList.add("is-invalid");
    PhoneNumberError.innerText = "please enter valid phone number";
    return false;
  } 
    // check hobbies 
    else if (checkboxes == null) {
      HobbyError.classList.add("is-invalid");
      HobbyError.innerText = "please choose hobbies";
      return false;
    }
  // check Qualification  !this.form.checkbox.checked
  else if (Qualification === "Qualification*") {
    QualificationError.classList.add("is-invalid");
    QualificationError.innerText = "please choose your Qualification";
    return false;
    
  }

  // check comment 
  else if (Comment == '') {
    CommentError.classList.add("is-invalid");
    CommentError.innerText = "please write comment";
    return false;
  }
  // all validation clear than run code
  else {
    // function call
    senddata();
  }
 
}
//function for send data in body #showdata
function senddata() {
  let chk = [];
 
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
