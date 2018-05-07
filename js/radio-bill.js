var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill

var callsTotalElemen = document.querySelector(".callTotalTwo" );
var smsTotalElemen = document.querySelector(".smsTotalTwo" );
var totalCostElem = document.querySelector(".totalTwo");
var textTotalAddBtnElement = document.querySelector(".textTotalAddBtn");
//add an event listener for when e add button is pressed
var RadioCallTotal() = 0;
var smsTotal1 = 0;

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen0
var bills = radioBillTotal();

function RadioTotal(){

var totalBill=bills.RadioSmSnCalltotal();
    // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value
      // billItemType will be 'call' or 'sms'
  }
    // update the correct total

    callsTotalElemen.innerHTML = RadioCallTotal().toFixed(2);
    smsTotalElemen.innerHTML = RadioSmsTotal().toFixed(2);

    totalCostElem.innerHTML = totalBill.toFixed(2);

    //color the total based on the criteria
    if (totalBill >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalBill >= 30){
        totalCostElem.classList.add("warning");
    }
};

radioBillAddBtnElement.addEventListener('click', RadioTotal);
