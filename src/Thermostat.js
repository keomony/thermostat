"use strict";

var Thermostat = function (){
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_TEMPERATURE = 25;
  this.temperature = 20;
}

Thermostat.prototype.up = function(){
  if(this.temperature < this.MAX_TEMPERATURE){
    this.temperature += 1;
  }
}

Thermostat.prototype.down = function(){
  if (this.temperature > this.MINIMUM_TEMPERATURE ) {
    this.temperature -=1;
  }
}
