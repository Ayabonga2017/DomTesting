
  describe("textBillTotals function", function(){

    it("should be able to count calls", function(){

      var billcall = textBillTotals();

      billcall.callCount();

      assert.equal(2.75, billcall.callstotals());

    });

    it("should be able to count sms's", function(){

      var totalbillsms = textBillTotals();

      totalbillsms.smsCount();

      assert.equal(0.75, totalbillsms.smstotals());

    });

    it("should be able to count sms's and calls", function(){

      var totalbillsms = textBillTotals();
          var billcall = textBillTotals();

      totalbillsms.smsCount();
      billcall.callCount();

      assert.equal(0.75, totalbillsms.smstotals());
      assert.equal(2.75, billcall.callstotals());

    });
    it("should be able to count both totalCost", function(){


      var totalbill = textBillTotals();
      totalbill.total();


      assert.equal(3.5, totalbill.sctotal());

    });


  })
