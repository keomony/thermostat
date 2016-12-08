"use strict";

var Thermostat = function (){
  this.MINIMUM_TEMPERATURE = 10;
  this.POWER_SAVING_MAX_TEMP = 25;
  this.ABSOLUTE_MAX_TEMP = 32;
  this.DEFAULT_TEMP = 20
  this.isPowerSaving = true;
  this.temperature = this.DEFAULT_TEMP;
}

Thermostat.prototype.up = function(){
  if(this.temperature < this.maximum_temperature()){
    this.temperature += 1;
  }
}

Thermostat.prototype.down = function(){
  if (this.temperature > this.MINIMUM_TEMPERATURE ) {
    this.temperature -=1;
  }
}

Thermostat.prototype.maximum_temperature = function(){
  if (this.isPowerSaving){
    return this.POWER_SAVING_MAX_TEMP;
  } else {
    return this.ABSOLUTE_MAX_TEMP;
  }
}

Thermostat.prototype.changePowerSaving = function(){
  this.isPowerSaving = !this.isPowerSaving;
}

Thermostat.prototype.reset = function(){
  this.temperature = this.DEFAULT_TEMP;
}
