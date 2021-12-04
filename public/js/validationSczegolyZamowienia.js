"use strict";

function validateForm() {
  const orderCostInput = document.getElementById("cost");
  const discountForOrderInput = document.getElementById("discount");
  const numberOfOrdersInput = document.getElementById("amount");
  const commentsInput = document.getElementById("comments");

  const errorOrderCost = document.getElementById("errorCenaZamowienia");
  const errorDiscountForOrder = document.getElementById(
    "errorZnizkaNaZamowienie"
  );

  const errorNumberOfOrders = document.getElementById("errorIloscZamowien");
  const errorComments = document.getElementById("errorKomientarzyZamowien");
  console.log(errorComments);
  const errorsSummary = document.getElementById("errorsSummary");
  let valid = true;

  resetErrors(
    [orderCostInput, discountForOrderInput, numberOfOrdersInput, commentsInput],
    [errorOrderCost, errorDiscountForOrder, errorNumberOfOrders, errorComments],
    errorsSummary
  );

  if (!checkRequired(orderCostInput.value)) {
    valid = false;
    orderCostInput.classList.add("error-input");
    errorOrderCost.innerText = "Pole jest wymagane";
  } else if (!checkNumberRange(orderCostInput.value, 5, 500000)) {
    valid = false;
    orderCostInput.classList.add("error-input");
    errorOrderCost.innerText =
      "Pole powino być liczbą w zakresie od 5 do 500000";
  } else if (!checkNumber(orderCostInput.value)) {
    valid = false;
    orderCostInput.classList.add("error-input");
    errorOrderCost.innerText = "Pole powino być liczbą";
  }

  if (!checkRequired(numberOfOrdersInput.value)) {
    valid = false;
    numberOfOrdersInput.classList.add("error-input");
    errorNumberOfOrders.innerText = "Pole jest wymagane";
  } else if (!checkNumberRange(numberOfOrdersInput.value, 1, 200)) {
    valid = false;
    numberOfOrdersInput.classList.add("error-input");
    errorNumberOfOrders.innerText =
      "Pole powino być liczbą w zakresie od 1 do 200";
  } else if (!checkNumber(numberOfOrdersInput.value)) {
    valid = false;
    numberOfOrdersInput.classList.add("error-input");
    errorNumberOfOrders.innerText = "Pole powino być liczbą";
  }
  // if(!checkNumberRange(discountForOrderInput.value, 0,100) && discountForOrderInput){
  //     discountForOrderInput.classList.add("error-input");
  //     errorDiscountForOrder.innerText = "Pole powino być liczbą w zakresie od 1 do 100";
  // }
  // if(!checkTextlengthRange(commentsInput.value, 0, 2000)){
  //     commentsInput.classList.add("error-input");
  //     errorComments.innerText = "Pole może zawierać maksymalnie 2000 znaków"
  // }

  if (!valid) {
    errorsSummary.innerText = "Formularz zawiera błędy";
  }
  return valid;
}
