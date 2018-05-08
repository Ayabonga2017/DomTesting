function TextBillTotals(){

  var smsTotal = 0;
  var callsTotal = 0;



    function Count(value){
      var billTypeEntered = value;
      if (billTypeEntered === "sms"){
          smsTotal += 0.75;
      }

      else if (billTypeEntered === "call"){
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
      Count,
      callstotals,
      total
    };

}
