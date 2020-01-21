'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
}

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
 return this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
    this.temperature -= 1; 
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchOffPowerSavingMode = function() {
  return this.powerSavingMode = false;
};

Thermostat.prototype.switchOnPowerSavingMode = function() {
  return this.powerSavingMode = true;
};