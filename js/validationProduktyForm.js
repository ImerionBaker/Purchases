'use strict'


function validateForm() {

const produktNameInput = document.getElementById('nazwaProduktu');
const descriptionInput = document.getElementById('opisProduktu');
const codeInput = document.getElementById('kodProduktu');

const errorProduktName = document.getElementById('errorNazwaProduktu');
const errorDescriptionInput = document.getElementById('errorOpisProduktu');
const errorCodeInput = document.getElementById('errorKodProduktu');
const errorsSummary = document.getElementById('errorsSummary');
let valid = true;


resetErrors(
    [produktNameInput, descriptionInput, codeInput],
    [errorProduktName, errorDescriptionInput, errorCodeInput],
    errorsSummary
);


if(!checkRequired(produktNameInput.value)){
    valid = false;
    produktNameInput.classList.add("error-input");
    errorProduktName.innerText = "Pole jest wymagane";
} else if (!checkTextlengthRange(produktNameInput.value, 2, 60)){
    valid = false;
    produktNameInput.classList.add("error-input");
    errorProduktName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
}



if(!checkRequired(codeInput.value)){
    valid = false;
    codeInput.classList.add("error-input");
    errorCodeInput.innerText = "Pole jest wymagane";
}else if(!checkNumber(codeInput.value)){
    valid = false;
    codeInput.classList.add("error-input");
    errorCodeInput.innerText = "Pole powinno zawierać tylko liczby"
}else if(!checkTextlengthRange(codeInput.value, 5, 20)){
    valid = false;
    codeInput.classList.add("error-input");
    errorCodeInput.innerText = "Pole powinno zawierać od 5 do 20 znaków"
}
if (!valid) {
    errorsSummary.innerText = "Formularz zawiera błędy";
  }
  return valid;
}





