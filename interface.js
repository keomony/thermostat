"use strict";

$(document).ready(function(){
  var thermostat = new Thermostat();
  updateEnergyUsage();
  function updateEnergyUsage(){
    $('#energy_display').text(thermostat.energyUsage());
  }
  jQuery('#up').click(function(){
    thermostat.up();
  });
  $('#down').click(function(){
    thermostat.down();
  });
  $('#reset').click(function(){
    thermostat.reset();
  });
  $(document).click(function(){
    updateTemperature();
    updateEnergyUsage();
  });
  $('#powerSavingMode').click(function(){
    thermostat.changePowerSaving();
    updatePowerSaving();
  });
  function updateTemperature() {
    $('#temp_display').text(thermostat.temperature);
  }
  function updatePowerSaving() {
    $('#psm_display').text(onOrOff());
  }
  function onOrOff() {
    return thermostat.isPowerSaving ? 'ON' : 'OFF';
  }


});
