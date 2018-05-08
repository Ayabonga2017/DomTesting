
  describe("TextBillTotals function", function(){

    it("should be able to count two calls", function(){

      var billcall = TextBillTotals();

      billcall.Count('call');
      billcall.Count('call');

      assert.equal(5.50, billcall.total());

    });

  it("should be able to count 5 sms's", function(){

     var totalbillsms = TextBillTotals();
    //
      totalbillsms.Count("sms");
        totalbillsms.Count("sms");
          totalbillsms.Count("sms");
            totalbillsms.Count("sms");
              totalbillsms.Count("sms");
    //
    assert.equal(3.75, totalbillsms.smstotals());
    //
    });

    it("should be able to count sms's and calls", function(){
    //
      var totalbillsms = TextBillTotals();
        var billcall = TextBillTotals();
    //
    totalbillsms.Count("sms");
    billcall.Count("call");
    //
      assert.equal(0.75, totalbillsms.smstotals());
      assert.equal(2.75, billcall.callstotals());
    //
     });



  })
