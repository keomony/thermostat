describe('Thermostat',function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  it('should start at 20 degrees',function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it("should increase the temperature", function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('should decrease the temperature',function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('should be unable to go below 10 degrees', function(){
    for (var i = 0; i < 14; i++ ){
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(10);
  });

  it('should be unable to go above 25 degrees',function(){
    for(var i=0; i< 6; i++){
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(25);
  });

});
