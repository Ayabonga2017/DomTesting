function textBillTotals(billTypeEntered){

  var smsTotal = 0.75;
  var callsTotal = 2.75;
  var totalCost = 3.5;


    function smsCount(){
      if (billTypeEntered === "sms"){
          smsTotal += 0.75;
      }
    }

    function callCount(){
      if (billTypeEntered === "call"){
          callsTotal += 2.75;
    }
  }

    function smstotals(){
    return  smsTotal;
    }

    function callstotals(){
      return callsTotal;
    }

    function total() {

    var totalCost= callsTotal + smsTotal;

    }

    function sctotal(){
      return totalCost.toFixed(2);
    }

    return {
      smstotals,
      callCount,
      smsCount,
      callstotals,
      sctotal,
      total,
    }

}
