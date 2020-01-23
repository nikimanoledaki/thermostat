
var thermostat = new Thermostat();

$(document).ready(function() {
  $("#temperature").text(thermostat.currentTemperature())
  updateTemperature();
});

$("#temperature-up").click(function() {
  $("#temperature").text(thermostat.up());
  updateTemperature();
});

$("#temperature-down").click(function() {
  $("#temperature").text(thermostat.down());
  updateTemperature();
});

$("#temperature-reset").click(function() {
  $("#temperature").text(thermostat.resetTemperature());
  updateTemperature();
});

$("#powersaving-on").click(function() {
  thermostat.switchOnPowerSavingMode;
  $("#power-saving-status").text("on");
  updateTemperature();
});

$("#powersaving-off").click(function() {
  thermostat.switchOffPowerSavingMode;
  $("#power-saving-status").text("off");
  updateTemperature();
});

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  if(thermostat.isUsage() === 'low-usage') {
    $('#temperature').css('color', 'green')
  } else if (thermostat.isUsage() === 'medium-usage') {
    $('#temperature').css('color', 'orange')
  } else {
    $('#temperature').css('color', 'red')
  }
};

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=4567243b4fdb4880a5da284238f6b4e5&units=metric", function(data) {
    $('#city-temperature').text(data.main.temp);
  });
});
