"use strict";

function validateForm() {
  const orderDateInput = document.getElementById('dataZamowienia');
  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const deliveryAddressInput = document.getElementById('deliveryAdres');

  const errorOrderDate = document.getElementById('errorDataZamowienia');
  const errorFirstName = document.getElementById('errorFirstName');
  const errorLastName = document.getElementById('errorLastName');
  const errorDeliveryAddress = document.getElementById('errorDeliveryAdres');
  const errorsSummary = document.getElementById('errorsSummary');
  let valid = true;

      


  resetErrors(
    [orderDateInput, firstNameInput, lastNameInput, deliveryAddressInput],
    [errorOrderDate, errorFirstName, errorLastName, errorDeliveryAddress],
    errorsSummary
  );

  let nowDate = new Date(),
    month = '' + (nowDate.getMonth() + 1),
    day = '' + nowDate.getDate(),
    year = nowDate.getFullYear();
  if(month.length < 2)
    month = '0' + month;
  if(day.length < 2)
    day = '0' + day;
  const nowString = [year,month,day].join('-');  


  if (!checkRequired(orderDateInput.value)) {
    valid = false;
    orderDateInput.classList.add("error-input");
    errorOrderDate.innerText = "Pole jest wymagane";
  }else if(!checkDate(orderDateInput.value)){
    valid = false;
    orderDateInput.classList.add("error-input");
    errorOrderDate.innerText = "Pole powinno zawierać datę w formacie yyyy-mm-dd (np. 2000-01-01)";
  }else if(checkDateIfAfter(orderDateInput.value, nowString)){
    valid = false;
    orderDateInput.classList.add("error-input");
    errorOrderDate.innerText = "Data nie może być z przyszłości "
  }

  if (!checkRequired(firstNameInput.value)) {
    valid = false;
    firstNameInput.classList.add("error-input");
    errorFirstName.innerText = "Pole jest wymagane";
  } else if (!checkTextlengthRange(firstNameInput.value, 2, 60)) {
    valid = false;
    firstNameInput.classList.add("error-input");
    errorFirstName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
  }

  if (!checkRequired(lastNameInput.value)) {
    valid = false;
    lastNameInput.classList.add("error-input");
    errorLastName.innerText = "Pole jest wymagane";
  } else if (!checkTextlengthRange(lastNameInput.value, 2, 60)) {
    valid = false;
    lastNameInput.classList.add("error-input");
    errorLastName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
  }

  if (!checkRequired(deliveryAddressInput.value)) {
    valid = false;
    deliveryAddressInput.classList.add("error-input");
    errorDeliveryAddress.innerText = "Pole jest wymagane";
  } else if (!checkTextlengthRange(deliveryAddressInput.value, 2, 60)) {
    valid = false;
    deliveryAddressInput.classList.add("error-input");
    errorDeliveryAddress.innerText = "Pole powinno zawierać od 2 do 60 znaków";
  }

  if (!valid) {
    errorsSummary.innerText = "Formularz zawiera błędy";
  }

  return valid;
}
