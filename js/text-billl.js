function textBillTotals(billTypeEntered){

  var smsTotal = 0;
  var callsTotal = 0;



    function smsCount(value){
      var billTypeEntered = value;
      if (billTypeEntered === "sms"){
          smsTotal += 0.75;
      }
    }

    function callCount(value){
      var billTypeEntered = value;
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
    return totalCost;

    }


    return {
      smstotals,
      callCount,
      smsCount,
      callstotals,
      total,
    }

}
