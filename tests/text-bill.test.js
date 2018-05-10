describe("The  Text bill Widget ", function() {

  it("It should return the total of 5 calls that is equal to 'R13.75'", function() {

    var textbillvariable = Textbilltotals();

    textbillvariable.Count("call");
    textbillvariable.Count("call");
    textbillvariable.Count("call");
    textbillvariable.Count("call");
    textbillvariable.Count("call");

    assert.equal(13.75, textbillvariable.callstotals());
  });

  it("It should return the total of 8 sms's that is equal to 'R6.00'", function() {

    var textbillvariable = Textbilltotals();

    textbillvariable.Count("sms");
    textbillvariable.Count("sms");
    textbillvariable.Count("sms");
    textbillvariable.Count("sms");
    textbillvariable.Count("sms");
    textbillvariable.Count("sms");
    textbillvariable.Count("sms");
    textbillvariable.Count("sms");

    assert.equal(6.00, textbillvariable.smstotals());
  });

  it("It should return the total cost of R0 for calls and sms's if there is no call or sms typed ", function() {

    var textbillvariable = Textbilltotals();

    textbillvariable.Count(" ");
    textbillvariable.Count(" ");
    textbillvariable.Count(" ");
    textbillvariable.Count(" ");
    textbillvariable.Count(" ");
    textbillvariable.Count(" ");
    textbillvariable.Count(" ");
    textbillvariable.Count(" ");
    textbillvariable.Count(" ");
    textbillvariable.Count(" ");

    assert.equal(textbillvariable.smstotals(), 0.00);
    assert.equal(textbillvariable.smstotals(), 0.00);
  });
});
