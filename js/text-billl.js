function Textbilltotals() {

  var calltex = 0;
  var smstex = 0;


  function Count(billType) {
// update the correct textbillcost
    if (billType === "call") {
      calltex += 2.75;
      calltex.toFixed(2);
    } else if (billType === "sms") {
      smstex += 0.75;
      smstex.toFixed(2);
    }

    var totalcost = calltex + smstex;
    return totalcost.toFixed(2);
  }

  function callstotals() {

    return calltex.toFixed(2);
  }

  function smstotals() {

    return smstex.toFixed(2);
  }


  return {
    Count,
    callstotals,
    smstotals
  }

}
