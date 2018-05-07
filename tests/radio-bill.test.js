
  describe("radioBillTotal function", function(){

    it("should be able to count 3 calls and return calls total", function(){

      var radioVarCall = radioBillTotal();

      radioVarCall.Radiocall("call");
      radioVarCall.Radiocall("call");
      radioVarCall.Radiocall("call");


      assert.equal(8.25, radioVarCall.RadioCallTotal());

    });

    it("should be able to count 2 sms's and return the total for those sms's", function(){

      var radioVarSms = radioBillTotal();

      radioVarSms.Radiosms("sms");
      radioVarSms.Radiosms("sms");

      assert.equal(1.5, radioVarSms.RadioSmsTotal());

    });

    it("should be able to count 2 sms's and 3 calls", function(){

      var radioVarSms = radioBillTotal();
          var radioVarCall = radioBillTotal();

      radioVarSms.Radiosms("sms");
      radioVarCall.Radiocall("call");
      radioVarSms.Radiosms("sms");
      radioVarCall.Radiocall("call");

      assert.equal(1.5, radioVarSms.RadioSmsTotal());
      assert.equal(5.5, radioVarCall.RadioCallTotal());

    });
    it("should be able to count 5 calls plus 3 sms's totalCost", function(){

      var radioVarSms = radioBillTotal();
          var radioVarCall = radioBillTotal();
      var radioVarTotalbill = RadioTotals();


        radioVarCall.Radiocall("call");
        radioVarSms.Radiosms("sms");
          radioVarCall.Radiocall("call");
          radioVarSms.Radiosms("sms");
            radioVarCall.Radiocall("call");
            radioVarSms.Radiosms("sms");
              radioVarCall.Radiocall("call");
                radioVarCall.Radiocall("call");

      assert.equal(16, radioVarTotalbill.RadioTotals());

    });


  })
