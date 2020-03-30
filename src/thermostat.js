'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.MAXIMUM_TEMPERATURE = 25;
}

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return this.temperature;
  } else {
  return this.temperature += 1;
  }
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return this.temperature;
  } else {
  return this.temperature -= 1; 
  }
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function() {
  return this.temperature === this.MAXIMUM_TEMPERATURE;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchOffPowerSavingMode = function() {
  this.MAXIMUM_TEMPERATURE = 32;
  return this.powerSavingMode = false;
};

Thermostat.prototype.switchOnPowerSavingMode = function() {
  this.MAXIMUM_TEMPERATURE = 25;
  return this.powerSavingMode = true;
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
  return this.temperature
};

Thermostat.prototype.isUsage = function() {
  if (this.temperature < 18 ) {
    return "low-usage";
  } else if (this.temperature < 25 ) {
    return "medium-usage";
  } else
    return "high-usage";
};
