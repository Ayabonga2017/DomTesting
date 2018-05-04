
  describe("radioBillTotal function", function(){

    it("should be able to count 3 calls and return calls total", function(){

      var radioVarCall = radioBillTotal();

      radioVarCall.Radiocall();

      assert.equal(2.75, radioVarCall.RadioCallTotal());

    });

    it("should be able to count 5 sms's and return the total for those sms's", function(){

      var radioVarSms = radioBillTotal();

      radioVarSms.Radiosms();

      assert.equal(0.75, radioVarSms.RadioSmsTotal());

    });

    it("should be able to count sms's and calls", function(){

      var radioVarSms = radioBillTotal();
          var radioVarCall = radioBillTotal();

      radioVarSms.Radiosms();
      radioVarCall.Radiocall();

      assert.equal(0.75, radioVarSms.RadioSmsTotal());
      assert.equal(2.75, radioVarCall.RadioCallTotal());

    });
    it("should be able to count 5 calls plus 3 sms's totalCost", function(){


      var radioVarTotalbill = radioBillTotal();
      radioVarTotalbill.RadioTotals();


      assert.equal(3.5, radioVarTotalbill.RadioSmSnCalltotal());

    });


  })
