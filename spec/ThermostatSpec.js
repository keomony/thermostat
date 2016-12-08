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

});
