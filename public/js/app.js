

const careers = document.querySelector(".careers");

let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let email = document.getElementById("email");
let number = document.getElementById("number");
let loc = document.getElementById("loc");
let position = document.getElementById("position");
let shift = document.getElementById("shift");
let experience = document.getElementById("experience");



careers.addEventListener("submit", function(event){
  event.preventDefault();

  let formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    number: number.value,
    loc: loc.value,
    position: position.value,
    shift: shift.value,
    experience: experience.value
  }


  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json")
  xhr.onload = function() {
    console.log(xhr.responseText);
      if(xhr.responseText == "success"){
        document.getElementById("message").innerHTML = "<span style='color: green;'> Successfully Submitted! </span>";
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        number.value = "";
        loc.value = "";
        position.value = "";
        shift.value = "";
        experience.value = "";
      } else{
        document.getElementById("message").innerHTML = "<span style='color: red;'> Uh oh! There was a problem, please try again. </span>";
      }
  }

  xhr.send(JSON.stringify(formData))
})


