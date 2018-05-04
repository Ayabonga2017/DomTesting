
  describe("radioBillTotal function", function(){

    it("should be able to count 3 calls and return calls total", function(){

      var billcall = radioBillTotal();

      billcall.Radiocall();

      assert.equal(2.75, billcall.RadioCallTotal());

    });

    it("should be able to count 5 sms's and return the total for those sms's", function(){

      var totalbillsms = radioBillTotal();

      totalbillsms.Radiosms();

      assert.equal(0.75, totalbillsms.RadioSmsTotal());

    });

    it("should be able to count sms's and calls", function(){

      var totalbillsms = radioBillTotal();
          var billcall = radioBillTotal();

      totalbillsms.Radiosms();
      billcall.Radiocall();

      assert.equal(0.75, totalbillsms.RadioSmsTotal());
      assert.equal(2.75, billcall.RadioCallTotal());

    });
    it("should be able to count 5 calls plus 3 sms's totalCost", function(){


      var totalbill = radioBillTotal();
      totalbill.RadioTotals();


      assert.equal(3.5, totalbill.RadioSmSnCalltotal());

    });


  })
