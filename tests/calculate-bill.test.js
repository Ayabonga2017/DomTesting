
describe('calculate CalculateBtn Widget', function(){

    it('should calculate total cost of phone calls made', function(){
        assert.equal(CalculateBtn('call,call'), 5.5);
    });

    it('should calculate total cost of smses sent', function(){
        assert.equal(CalculateBtn('sms,sms'), 1.5);
    });


});
