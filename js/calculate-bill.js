var calculateBtnElement = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

calculateBtnElement.addEventListener('click', function() {
  var billStrings = billStringElement.value;
  var roundedBillTotal = CalculateBtn(billStrings);
  billTotalElement.innerHTML = roundedBillTotal;

  if (roundedBillTotal >= 30) {
    billTotalElement.classList.add("danger")
  } else if (roundedBillTotal >= 20) {
    billTotalElement.classList.add("warning")
  }

  if (roundedBillTotal < 30) {
    billTotalElement.classList.remove("danger")
  }
  if (roundedBillTotal < 20) {
    billTotalElement.classList.remove("warning")
  }
});
