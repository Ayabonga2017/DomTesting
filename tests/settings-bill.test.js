
  describe("SetiingBill Widget Testing", function(){

    it("should be able to count 6 calls and return calls total", function(){

      var settingCall = SetiingBill();

      settingCall.callCountsetting("call");
      settingCall.callCountsetting("call");
      settingCall.callCountsetting("call");
      settingCall.callCountsetting("call");
      settingCall.callCountsetting("call");
      settingCall.callCountsetting("call");


      assert.equal(9, settingCall.Callstota());

    });

    it("should be able to count 10 sms's and return the total for those sms's", function(){

      var setinngSms = SetiingBill();
      setinngSms.setSms(0.75);
      setinngSms.smsCountseting("sms");
      setinngSms.smsCountseting("sms");
      setinngSms.smsCountseting("sms");
      setinngSms.smsCountseting("sms");
      setinngSms.smsCountseting("sms");
      setinngSms.smsCountseting("sms");
      setinngSms.smsCountseting("sms");
      setinngSms.smsCountseting("sms");
      setinngSms.smsCountseting("sms");
      setinngSms.smsCountseting("sms");

      assert.equal(7.5, setinngSms.SmStota());

    });

    it("should be able to count 3 sms's and 4 calls", function(){

      var setinngSms = SetiingBill();
          var settingCall = SetiingBill();
      setinngSms.setSms(0.75);
      setinngSms.smsCountseting("sms");
      setinngSms.smsCountseting("sms");
      settingCall.callCountsetting("call");
      setinngSms.smsCountseting("sms");
      settingCall.callCountsetting("call");
      settingCall.callCountsetting("call");
        settingCall.callCountsetting("call");

      assert.equal(2.25, setinngSms.SmStota());
      assert.equal(6, settingCall.Callstota());

    });
  });
