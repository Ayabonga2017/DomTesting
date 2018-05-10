describe("RadioBillTotal function", function() {

  it("should be able to count 3 calls and return calls total", function() {

    var radioVarCall = RadioBillTotal();

    radioVarCall.RadiosmsAndCall("call");
    radioVarCall.RadiosmsAndCall("call");
    radioVarCall.RadiosmsAndCall("call");

    assert.equal(8.25, radioVarCall.RadioCallTotal());
  });

  it("should be able to count 2 sms's and return the total for those sms's", function() {

    var radioVarSms = RadioBillTotal();

    radioVarSms.RadiosmsAndCall("sms");
    radioVarSms.RadiosmsAndCall("sms");

    assert.equal(1.5, radioVarSms.RadioSmsTotal());
  });

  it("should be able to count 2 sms's and 3 calls", function() {

    var radioVarSms = RadioBillTotal();
    var radioVarCall = RadioBillTotal();

    radioVarSms.RadiosmsAndCall("sms");
    radioVarCall.RadiosmsAndCall("call");
    radioVarSms.RadiosmsAndCall("sms");
    radioVarCall.RadiosmsAndCall("call");

    assert.equal(1.5, radioVarSms.RadioSmsTotal());
    assert.equal(5.5, radioVarCall.RadioCallTotal());
  });
});
