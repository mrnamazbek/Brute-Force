// submit button ---->>>>>>>>>>>>>
var btn = document.getElementById("btn");
var checked = document.getElementsByClassName("checked");
var btnText = document.getElementById("btnText");

var count = 0;
var usernameValue = document.getElementById("username").value.trim();
var emailValue = document.getElementById("email").value.trim();
var passwordValue = document.getElementById("password").value.trim();
var password2Value = document.getElementById("password2").value.trim();
let ageValue = document.getElementById("age").value;
var genderValue = document.getElementById("gender").value.trim();


let emailDiv = document.getElementById("emailDiv");
let usernameDiv = document.getElementById("usernameDiv");
let genderDiv = document.getElementById("genderDiv");
let ageDiv = document.getElementById("ageDiv");
let passwordDiv = document.getElementById("passwordDiv");
let password2Div = document.getElementById("password2Div");

let signIn = document.getElementById("signIn");
let signUp = document.getElementById("signUp");
let title = document.getElementById("title");
let lostP = document.getElementById("p");

signIn.onclick = () => {
    usernameDiv.style.display = "none";
    genderDiv.style.display = "none";
    ageDiv.style.display = "none";
    password2Div.style.display = "none";
    title.innerHTML = "Sign In";
    signIn.style.backgroundColor = "rgb(0, 255, 8)";
    signUp.style.backgroundColor = "grey";
    lostP.style.display = "none";
    btn.style.backgroundColor = "#2b2d42";
    btnText.style.color = "white";
    btnText.innerHTML = "Enter";
    btn.classList.remove("active");
}
signUp.onclick = () => {
    usernameDiv.style.display = "flex";
    genderDiv.style.display = "flex";
    ageDiv.style.display = "flex";
    password2Div.style.display = "flex";
    title.innerHTML = "Sign Up";
    signUp.style.backgroundColor = "rgb(0, 255, 8)";
    signIn.style.backgroundColor = "grey";
    lostP.style.display = "block";
    btn.style.backgroundColor = "#2b2d42";
    btnText.style.color = "white";
    btnText.innerHTML = "Submit";
    btn.classList.remove("active");
}


// var count = 0;
var form = document.getElementById('form');
var inputs = document.getElementById('inputs');
// console.log(form);
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = emailDiv => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailDiv).toLowerCase());
}


function validateInputs() {
    alert(" " + ageValue + " " + usernameValue + " " + passwordValue + " "+genderValue);

    if (usernameValue === '') {
        setError(usernameDiv, 'Username is required');
    } else {
        setSuccess(usernameDiv);
        count++;
    }

    if (emailValue === '') {
        setError(emailDiv, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(emailDiv, 'Provide a valid emailDiv address');
    } else {
        setSuccess(emailDiv);
        count++;
    }

    if (passwordValue === '') {
        setError(passwordDiv, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(passwordDiv, 'Password must be at least 8 character.');
    } else {
        setSuccess(passwordDiv);
        count++;
    }

    if (password2Value === '') {
        setError(password2Div, 'Please confirm your passwordDiv');
    } else if (password2Value !== passwordValue) {
        setError(password2Div, "Passwords doesn't match");
    } else {
        setSuccess(password2Div);
        count++;
    }
    if (genderValue.toLowerCase() == 'male' || genderValue.toLowerCase() == 'female') {
        setSuccess(genderDiv);
        count++;
    } else {
        setError(genderDiv, 'Not correct!');
    }
    if (ageValue > 11) {
        count++;
    } else {
        setError(ageDiv, 'You are young');
    }

}
btn.onclick = () => {
    if(count== 6) {
        btnText.innerHTML = "Done";
        btn.classList.add("active");
    }else {
        btnText.innerHTML = "Fail";
        btnText.style.color = "red";
    }
}