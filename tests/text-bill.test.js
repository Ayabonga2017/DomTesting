
  describe("textBillTotals function", function(){

    it("should be able to count two calls", function(){

      var billcall = textBillTotals();

      billcall.callCount('call');
      billcall.callCount('call');

      assert.equal(5.50, billcall.total());

    });

  it("should be able to count 5 sms's", function(){

     var totalbillsms = textBillTotals();
    //
      totalbillsms.smsCount("sms");
        totalbillsms.smsCount("sms");
          totalbillsms.smsCount("sms");
            totalbillsms.smsCount("sms");
              totalbillsms.smsCount("sms");
    //
    assert.equal(3.75, totalbillsms.smstotals());
    //
    });

    it("should be able to count sms's and calls", function(){
    //
      var totalbillsms = textBillTotals();
        var billcall = textBillTotals();
    //
    totalbillsms.smsCount("sms");
    billcall.callCount("call");
    //
      assert.equal(0.75, totalbillsms.smstotals());
      assert.equal(2.75, billcall.callstotals());
    //
     });



  })
