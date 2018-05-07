function radioBillTotal(){

    var smsTotal = 0;
    var callsTotal = 0;



      function Radiosms(value){
        var billItemType = value;
        if (billItemType === "sms"){
            smsTotal += 0.75;
        }
      }

      function Radiocall(value){
          var billItemType = value;
        if (billItemType === "call"){
            callsTotal += 2.75;
      }
    }

      function RadioSmsTotal(){
      return  smsTotal;
      }

      function RadioCallTotal(){
        return callsTotal;
      }

      function RadioTotals() {

      var totalCost= callsTotal + smsTotal;
      return totalCost;

      }



      return {
        RadioSmsTotal,
        Radiocall,
        Radiosms,
        RadioCallTotal,
        RadioTotals,
      }

  }
