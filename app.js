$(document).ready(function() {
  var thermostat = new Thermostat()
  
  $("#plus").click(function() {
    thermostat.up()
    updateTemperature()
    $('#temperature').text(thermostat.currentTemperature());
  });

  $("#minus").click(function() {
    thermostat.down()
    updateTemperature()
    $('#temperature').text(thermostat.currentTemperature());
  });

  $("#reset").click(function() {
    thermostat.reset()
    updateTemperature()
    $('#temperature').text(thermostat.currentTemperature());
  });

  $("#psm-on").click(function() {
    thermostat.turnOnPowerSaving()
    updateTemperature()
    $('#power-saving-status').text("on");
    $('#temperature').text(thermostat.currentTemperature());
  });

  $("#psm-off").click(function() {
    thermostat.turnOffPowerSaving()
    updateTemperature()
    $('#power-saving-status').text("off");
  });

  const updateTemperature = () => {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.currentEnergyUsage());
  }
});