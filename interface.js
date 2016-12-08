"use strict";

$(document).ready(function(){
  var thermostat = new Thermostat();
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
  })
  function updateTemperature() {
    $('#temp_display').text(thermostat.temperature);
  }
});
