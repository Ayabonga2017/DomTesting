var typeText = document.querySelector(".billTypeText");
//get a reference to the add button
var theAddBillBtn = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the textbillcost bill
var totalCostsT = document.querySelector(".totalOne");
// Variables that will track the textbillcost of calls and sms
var callsTotalElemT = document.querySelector(".callTotalOne");
var smsTotalElemT = document.querySelector(".smsTotalOne");

//add an event listener for when the add button is pressed
var billtotal = Textbilltotals();
theAddBillBtn.addEventListener('click',
  function() {

    var billTypeEntered = typeText.value.trim();
    var textbillcost = billtotal.Count(billTypeEntered);
    var textsms = billtotal.smstotals();
    var textcalls = billtotal.callstotals();
    callsTotalElemT.innerHTML = textcalls;
    smsTotalElemT.innerHTML = textsms;
    totalCostsT.innerHTML = textbillcost;


    if (textbillcost < 30.00) {
      totalCostsT.classList.remove("warning");
      totalCostsT.classList.remove("danger");
    }

    if (textbillcost > 30.00 && 50.00 > textbillcost) {

      totalCostsT.classList.remove("danger");
      totalCostsT.classList.add("warning");
    }

    if (textbillcost > 50.00) {
      totalCostsT.classList.remove("warning");
      totalCostsT.classList.add("danger");
    }

  }

);
