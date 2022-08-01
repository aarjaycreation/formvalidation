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
    // validation();
    // function call
    // senddata();
    // validateRegister();
    validateInputs();
  });
//function for validation


const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.Error');

  errorDisplay.innerText = message;
  inputControl.classList.add('Error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.Error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('Error');
};



const validateInputs = () => {
  // const usernameValue = username.value.trim();
  // const emailValue = email.value.trim();
  // const passwordValue = password.value.trim();
  // const password2Value = password2.value.trim();
  //  get element  values 
  let FirstName = document.getElementById("FirstName").value;
  let LastName = document.getElementById("LastName").value;
  let Email = document.getElementById('Email').value;
  let PhoneNumber = document.getElementById('PhoneNumber').value;
  let Qualification = document.getElementById('Qualification').value;
  let checkboxes = document.querySelector('input[name = hobbies]:checked');
  let Comment = document.getElementById('Comment').value;
  // get error element 
  let CommentError = document.getElementById('CommentError');
  let QualificationError = document.getElementById('QualificationError');
  let HobbyError = document.getElementById('HobbyError');
  let PhoneNumberError = document.getElementById('PhoneNumberError');
  let EmailError = document.getElementById('EmailError');
  let LastNameError = document.getElementById('LastNameError');
  let FirstNameError = document.getElementById('FirstNameError');
  let Error = document.getElementById("error");
  // validate regex
  let validFirstName = /^[a-zA-Z\s]+$/;
  let validLastName = /^[a-zA-Z\s]+$/;
  let validEmail =   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let validPhone = /^[0]?[789]\d{9}$/;
// first 
  if(!validFirstName.test(FirstName)) {
      setError(FirstNameError, '*Enter Valid First Name');
  } else {
      setSuccess(FirstNameError);
  }
  // last 
  if(!validLastName.test(LastName)) {
    setError(LastNameError, '*Enter Valid Last Name');
  } else {
      setSuccess(LastNameError);
  }
// email
  if(!validEmail.test(Email)) {
    setError(EmailError, '*Enter Valid Email Address');
  } else {
      setSuccess(EmailError);
  }
  // phone 
  if(!validPhone.test(PhoneNumber)) {
    setError(PhoneNumberError, '*Enter Valid Mobile Number');
  } else {
      setSuccess(PhoneNumberError);
  }
  // hobbies
  if(checkboxes == null) {
    setError(HobbyError, '*Enter Choose Your Hobbies');
  } else {
      setSuccess(HobbyError);
  }
  // check Qualification 
  if(Qualification === "Qualification*") {
    setError(QualificationError, '*Please Choose Your Qualification');
  } else {
      setSuccess(QualificationError);
  }
  // check comment 
  if(Comment == '') {
    setError(CommentError, '*Please Write Your Comment');
  } else {
      setSuccess(CommentError);
  }


  // // all validation clear than run code
  // {
  //   // function call
    
  //   senddata();
  //   Error.innerText = "data added successfully";
  //   Error.style.color = "#4BB543";
  //   Error.style.textTransform = "uppercase";
  //   Error.style.fontWeight = "500";
  //   Error.style.height = "3rem";
  //   Error.style.width = "60%";
  //   Error.style.border = "2px dotted #4BB543";
  //   Error.style.display = "flex";
  //   Error.style.justifyContent = "center";
  //   Error.style.alignItems = "center";
  //   Error.style.marginLeft = "20%";
  //   return true;
   
  // }
  // if(LastName == "") {
  //     setError(email, 'Email is required');
  // } else if (!isValidEmail(emailValue)) {
  //     setError(email, 'Provide a valid email address');
  // } else {
  //     setSuccess(email);
  // }

  // if(passwordValue === '') {
  //     setError(password, 'Password is required');
  // } else if (passwordValue.length < 8 ) {
  //     setError(password, 'Password must be at least 8 character.')
  // } else {
  //     setSuccess(password);
  // }

  // if(password2Value === '') {
  //     setError(password2, 'Please confirm your password');
  // } else if (password2Value !== passwordValue) {
  //     setError(password2, "Passwords doesn't match");
  // } else {
  //     setSuccess(password2);
  // }

};
































































function validateRegister(){
  let error = 0;

  //     const formRegister = document.forms["forms__form__register"];
  //     const formRegister_email = formRegister["register__email-input"];
  //     const formRegister_password = formRegister["register__password-input"];
  //     const formRegister_repeatPassword = formRegister["register__repeatPassword-input"];
  //     const formRegister_address = formRegister["register__address-input"];
  //     const formRegister_region = formRegister["register__region-input"];
  //     const formRegister_city = formRegister["register__city-input"];
  //     const formRegister_zip = formRegister["register__zip-input"];
  //     const formRegister_agreeCheckbox =  formRegister["register__agree-checkbox"];
    //  get element  values 
    let FirstName = document.getElementById("FirstName").value;
    let LastName = document.getElementById("LastName").value;
    let Email = document.getElementById('Email').value;
    let PhoneNumber = document.getElementById('PhoneNumber').value;
    let Qualification = document.getElementById('Qualification').value;
    let checkboxes = document.querySelector('input[name = hobbies]:checked');
    let Comment = document.getElementById('Comment').value;
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
    // validate regex
    let validFirstName = /^[a-zA-Z\s]+$/;
    let validLastName = /^[a-zA-Z\s]+$/;
    let validEmail =   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let validPhone = /^[0]?[789]\d{9}$/;

 // check the  input field
 if (FirstName == "") {
  FirstNameError.classList.add("is-invalid");
  FirstNameError.innerText = "please enter first name";
  ++error;
}
// check valid first name
else if(!validFirstName.test(FirstName)) {
  FirstNameError.classList.add("is-invalid");
  FirstNameError.innerText = "please enter valid first name";
  ++error;
}

// check the second input field
else if (LastName == "") {
  LastNameError.classList.add("is-invalid");
  LastNameError.innerText = "please enter valid first name";
  ++error;
}

// check valid last name
else if (!validLastName.test(LastName)) {
  LastNameError.classList.add("is-invalid");
  LastNameError.innerText = "please enter valid last name";
  ++error;
}




      // if(formRegister_email.value == ""){
      //     formRegister_email.classList.add("is-invalid");
      //     document.getElementById("is-invalid-message__email").innerHTML="Complete the field please";
      //     ++error;
      // }else if(!validateEmailRegEx(formRegister_email.value)){
      //     formRegister_email.classList.add("is-invalid");
      //     document.getElementById("is-invalid-message__email").innerHTML="Enter a valid mail please";
      //     ++error;
      // }

      // if(formRegister_password.value == ""){
      //     formRegister_password.classList.add("is-invalid");
      //     document.getElementById("is-invalid-message__password").innerHTML="Complete the field please";
      //     ++error;
      // }else if(!validatePasswordNumber(formRegister_password.value)){
      //     formRegister_password.classList.add("is-invalid");
      //     document.getElementById("is-invalid-message__password").innerHTML="The password must contain a number";
      //     ++error;
      // }else if(!validatePasswordUppercase(formRegister_password.value)){
      //     formRegister_password.classList.add("is-invalid");
      //     document.getElementById("is-invalid-message__password").innerHTML="The password must contain a capital letter";
      //     ++error;
      // }else if(formRegister_password.value.length < 8){
      //     formRegister_password.classList.add("is-invalid");
      //     document.getElementById("is-invalid-message__password").innerHTML="Minimum 8 characters";
      //     ++error;
      // }

      // if(formRegister_repeatPassword.value == ""){
      //     formRegister_repeatPassword.classList.add("is-invalid");
      //     document.getElementById("is-invalid-message__repeatPassword").innerHTML="Complete the field please";
      //     ++error;
      // }else if(formRegister_repeatPassword.value != formRegister_password.value){
      //     formRegister_repeatPassword.classList.add("is-invalid");
      //     document.getElementById("is-invalid-message__repeatPassword").innerHTML="Must be the same as the password";
      //     ++error;
      // }

      // if(formRegister_address.value == ""){
      //     formRegister_address.classList.add("is-invalid");
      //     document.getElementById("is-invalid-message__address").innerHTML="Complete the field please";
      //     ++error;
      // }

      // if(formRegister_region.value == ""){
      //     formRegister_region.classList.add("is-invalid");
      //     document.getElementById("is-invalid-message__region").innerHTML="Select a region please";
      //     ++error;
      // }

      // if(formRegister_city.value == ""){
      //     formRegister_city.classList.add("is-invalid");
      //     document.getElementById("is-invalid-message__city").innerHTML="Complete the field please";
      //     ++error;
      // }

      // if(formRegister_zip.value == ""){
      //     formRegister_zip.classList.add("is-invalid");
      //     document.getElementById("is-invalid-message__zip").innerHTML="Complete the field please";
      //     ++error;
      // }else if(formRegister_zip.value.length != 5){
      //     formRegister_zip.classList.add("is-invalid");
      //     document.getElementById("is-invalid-message__zip").innerHTML="Enter a valid Zip code please";
      //     ++error;
      // }

      // if(!formRegister_agreeCheckbox.checked){
      //     formRegister_agreeCheckbox.classList.add("is-invalid");
      //     document.getElementById("is-invalid-message__policies").innerHTML="Accept the terms please";
      //     ++error;
      // }

  if(error==0) return true;
  return false;
}



// form.addEventListener("focusout", e=>{
//   if(e.target.value != "") e.target.classList.remove("is-invalid");
// });
























function validation() {
 
  // get error element 
  let allError = document.querySelectorAll('.Error')
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

  // check the  input field
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

  // check the second input field
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
    return true;
   
  }
 
}



















form.addEventListener("focusout", e=>{
  if(e.target.value != "") e.target.classList.remove("Error");
});

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
