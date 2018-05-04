document.addEventListener('DOMContentLoaded', function(){
//get a reference to the calculate button
var calculateBtnElem = document.querySelector(".calculateBtn");
// Referencing the button by a class

//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

var CalculateBtn= CalculateBtn();

  function Dom(){

  var billString = billStringElement.value;

    var roundedBillTotal = billString.toFixed(2);

    billTotalElement.innerHTML = roundedBillTotal;

    if(billString >=20 && billString<30) {
      billTotalElement.classList.add("warning")
        billTotalElement.classList.remove("danger")

    }
    else if (billString >=30) {
    billTotalElement.classList.add("danger")
    }

}
calculateBtnElem.addEventListener('click', Dom);
});
