function RadioBillTotal() {

  var smsTotal = 0;
  var callsTotal = 0;

  function RadiosmsAndCall(value) {
    var billItemType = value;
    if (billItemType === "sms") {
      smsTotal += 0.75;
    } else if (billItemType === "call") {
      callsTotal += 2.75;
    }
  }

  function RadioSmsTotal() {
    return smsTotal;
  }

  function RadioCallTotal() {
    return callsTotal;
  }

  function RadioTotals() {
    var totalCost = callsTotal + smsTotal;
    return totalCost;

  }

  return {
    RadioSmsTotal,
    RadiosmsAndCall,
    RadioCallTotal,
    RadioTotals,
  }

}
