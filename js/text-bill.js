document.addEventListener('DOMContentLoaded', function(){

// get a reference to the textbox where the bill type is to be entered
var billTypeTextElement = document.querySelector(".billTypeText");
//get a reference to the add button
var addToBillBtnElement = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
var billTypeEnteredElement = document.querySelector(".billTypeEntered");
var callsTotalElem = document.querySelector(".callTotalOne" );
var smsTotalElem = document.querySelector(".smsTotalOne" );
var totalCostEleme = document.querySelector(".totalOne");
var textTotalAddBtnElement = document.querySelector(".textTotalAddBtn");
//add an event listener for when e add button is pressed
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var textBillTo =  TextBillTotals();

 function textBillTotal(){

    // get the value entered in the billType textfield
var billTypeEntered= billTypeTextElement.value.trim();
 textBillTo.Count(billTypeEntered)

    callsTotalElem.innerHTML = textBillTo.callstotals();
    smsTotalElem.innerHTML = textBillTo.smstotals();
    totalCostEleme.innerHTML = textBillTo.total();

    //color the total based on the criteria
    // if (totalCost >= 50){
    //     // adding the danger class will make the text red
    //     totalCostEleme.classList.add("danger");
    // }
    // else if (totalCost >= 30){
    //     totalCostEleme.classList.add("warning");
    // }
};

addToBillBtnElement.addEventListener('click', textBillTotal);
});
