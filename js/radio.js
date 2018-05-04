function radioBillTotal(billItemType){

    var smsTotal = 0.75;
    var callsTotal = 2.75;
    var totalCost = 3.5;


      function Radiosms(){
        if (billItemType === "sms"){
            smsTotal += 0.75;
        }
      }

      function Radiocall(){
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

      }

      function RadioSmSnCalltotal(){
        return totalCost.toFixed(2);
      }

      return {
        RadioSmsTotal,
        Radiocall,
        Radiosms,
        RadioCallTotal,
        RadioSmSnCalltotal,
        RadioTotals,
      }

  }
