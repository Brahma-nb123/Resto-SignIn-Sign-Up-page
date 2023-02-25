const showFormButton = document.querySelector('#show-form');
const formOverlay = document.querySelector('.form-overlay');
const closeFormButton = document.querySelector('#close-form');

showFormButton.addEventListener('click', function () {
    formOverlay.style.display = 'block';
});

closeFormButton.addEventListener('click', function () {
    formOverlay.style.display = 'none';
});

// sign up page ..........................
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}
const phoneRadio = document.querySelector("#phone-radio");
const emailRadio = document.querySelector("#email-radio");
const contactInput = document.querySelector("#contact-input");

phoneRadio.addEventListener("click", function () {
    contactInput.disabled = false;
    contactInput.placeholder = "Enter phone number";
    contactInput.pattern = "[0-9]*";
    contactInput.type = "text";
});

emailRadio.addEventListener("click", function () {
    contactInput.disabled = false;
    contactInput.placeholder = "Enter email address";
    contactInput.pattern = "";
    contactInput.type = "email";
});





// const signupButton = document.querySelector("#signup-button");
// const signupModal = document.querySelector("#signup-modal");

// signupButton.addEventListener("click", function () {
//     signupModal.classList.add("show");
//     signupModal.style.display = "block";
// });

// signupModal.addEventListener("click", function (event) {
//     if (event.target === signupModal) {
//         signupModal.classList.remove("show");
//         signupModal.style.display = "none";
//     }
// });
// function hideSignUpForm() {
//     document.getElementById("signup-modal").style.display = "none";
// }


function showSignUpForm() {
    document.getElementById("signUpForm").style.display = "block";
}

function hideSignUpForm() {
    document.getElementById("signUpForm").style.display = "none";
}
