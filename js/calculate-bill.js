

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

function calculateBtnClicked(){
 var str= billStringElement.value
 var calculateBtns= CalculateBtn(str);

    //round to two decimals
    var roundedBillTotal =calculateBtns;
    billTotalElement.innerHTML = roundedBillTotal;

    if(roundedBillTotal >=20 && roundedBillTotal<30) {
      billTotalElement.classList.add("warning")
        billTotalElement.classList.remove("danger")

    }
    else if (roundedBillTotal >=30) {
    billTotalElement.classList.add("danger")
    }

};
calculateBtnElement.addEventListener('click', calculateBtnClicked);
