// short-hand query  and id selector
const $ = e => document.querySelector(e);
const getId = e => document.getElementById(e);

// grab elements
const formBtn = $("form .button");
let hiName = $("#hiName");
const email = getId("email");
const names = getId("name");
let getName, setName, nameArr, lastName;


let formGet = (e) => {
    emailPattern = /\S+@\S+\.\S+/;
    nameArr = names.value.split(" ");//split the input name into an array
    lastName = nameArr[nameArr.length - 1];//extract the last name
    localStorage.setItem('name', lastName);//store the last inputed name in a local storage

    //custom form validation
    if (emailPattern.test(email.value) && email.value !== "" && !names.value.includes('+')) {
        email.setCustomValidity("");
        names.setCustomValidity('')
    } else if (names.value.includes('+')) {
        names.setCustomValidity('pls input correct format')
    } else {
        names.setCustomValidity('')
        email.setCustomValidity("pls include '@' in your email");
    }
}

window.onload = event => {
    // get name from local storage and display on home page
    getName = localStorage.getItem('name');
    hiName.textContent = `HI ${getName}!`;
}

formBtn.addEventListener('click', formGet);
