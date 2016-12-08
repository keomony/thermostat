"use strict";

$(document).ready(function(){
  var thermostat = new Thermostat();
  jQuery('#up').click(function(){
    thermostat.up();
    $('#temp_display').text(thermostat.temperature);
  });
  $('#down').click(function(){
    thermostat.down();
    $('#temp_display').text(thermostat.temperature);
  });
});
