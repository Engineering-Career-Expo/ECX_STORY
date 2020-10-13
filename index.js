// short-hand query  and id selector
const $ = e => document.querySelector(e);
const getId = e => document.getElementById(e);

// grab elements
const formBtn = $("form .button");
let hiName = $("#hiName");

//from validity functions
let formGet = function (e) {
    const email = getId("email");
    const names = getId("name");
    emailPattern = /\S+@\S+\.\S+/;
    let n = names.split(' ')[1];

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

// let query = {}
// dataArr = location.search.substr(1).split('&')[0]//gets the data from the searchbar url
//     .split('=')
//     .join(',')
//     .split('+')
//     .join(',')
//     .split(',');//this returns an array of the persons name

// //Return a template name property for the empty query object inputing the last name of the person
// location.search.substr(1).split('&')
//     .forEach(item => query[item.split('=')[0]] = dataArr[dataArr.length - 1]);
// let getName, setName;
// setName = localStorage.setItem("name", query.name);
// window.onload = event => {
//     if (window.location.href.match('/landing%20page/landingpage.html' != null)) {
//         getName = localStorage.getItem("name");
//         hiName.textContent = `HI ${getName}!`;
//     } else if (window.location.href.match('/index.html' != null)) {
//         localStorage.removeItem("name");
//         hiName.textContent = `HI There!`;
//     }
// }

formBtn.addEventListener('click', formGet);