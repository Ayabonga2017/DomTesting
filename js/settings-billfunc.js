function SetiingBill() {

  var smsCost = 0.0;
  var callCost = 1.5;
  var callsTotal = 0.00;
  var smsTotal = 0.00;
  var totalCost = 0.00;

  function setSms(value) {
    if (value !== undefined) {
      smsCost = value;
    }
  }

  function smsCountseting(value) {
    var billItemType = value;
    if (billItemType === "sms") {
      smsTotal += smsCost;
    }
  }

  function callCountsetting(value) {
    var billItemType = value;
    if (billItemType === "call") {
      callsTotal += callCost;

    }
  }

  function SmStota() {
    return smsTotal;
  }

  function Callstota() {
    return callsTotal;
  }

  function totalset() {

    var totalCost = callsTotal + smsTotal;
    return totalCost;

  }

  return {
    SmStota,
    callCountsetting,
    smsCountseting,
    Callstota,
    totalset,
    setSms
  }
}
