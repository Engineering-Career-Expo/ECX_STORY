// short-hand query  and id selector
const $ = e => document.querySelector(e);
const getId = e => document.getElementById(e);

// grab elements
const form = $("form");
let hiName = $("#hiName");
const email = getId("email");
const names = getId("name");
let getName, setName, nameArr, lastName;

let formGet = e => {
  e.preventDefault();
  emailPattern = /\S+@\S+\.\S+/;
  nameArr = names.value.split(" "); //split the input name into an array
  lastName = nameArr[nameArr.length - 1]; //extract the last name
  localStorage.setItem("name", lastName); //store the last inputed name in a local storage

  //custom form validation
  if (
    emailPattern.test(email.value) &&
    email.value !== "" &&
    !names.value.includes("+")
  ) {
    email.setCustomValidity("");
    names.setCustomValidity("");

    // setup netlify form
    let formData = new FormData(form);
    fetch("/", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        window.location.pathname = "/landing-page/landingpage.html";
        console.log("Form successfully submitted");
      })
      .catch(error => alert(error));
  } else if (names.value.includes("+")) {
    names.setCustomValidity("pls input correct format");
  } else {
    names.setCustomValidity("");
    email.setCustomValidity("pls include '@' in your email");
  }
};

hiName.innerHTML = `Hi ${localStorage.getItem("name")}!`;
form.addEventListener("submit", formGet);
