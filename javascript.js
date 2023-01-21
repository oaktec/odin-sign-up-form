const pwInput = document.querySelector(".password");
const pwConfirmInput = document.querySelector(".password-confirm");
const pwErrorContainer = document.querySelector(".pw-error-container");

pwInput.addEventListener("input", pwInputCallback);
pwConfirmInput.addEventListener("input", pwInputCallback);
pwInput.addEventListener("focusout", checkPwInputs);
pwConfirmInput.addEventListener("focusout", checkPwInputs);

function pwInputCallback (e) {
    if (pwInput.value === pwConfirmInput.value) {
        pwInput.classList.remove("pw-error");
        pwConfirmInput.classList.remove("pw-error");
        pwErrorContainer.classList.remove("pw-error");
        pwInput.setCustomValidity("");
    }
}

function checkPwInputs (e) {
    if (pwInput.value !== pwConfirmInput.value) {
        pwInput.classList.add("pw-error");
        pwConfirmInput.classList.add("pw-error");
        pwErrorContainer.classList.add("pw-error");
        pwInput.setCustomValidity("Passwords must match");
    }
}