'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('when initializing', function() {
    it('the starting temperature is 20 degrees', function() {
      expect(thermostat.currentTemperature()).toEqual(20);
    });
  });

  describe('Changing temperature', function() {
    it('by increasing it', function() {
      thermostat.up();
      expect(thermostat.currentTemperature()).toEqual(21);
    });

    it('by decreasing it', function() {
      thermostat.down();
      expect(thermostat.currentTemperature()).toEqual(19);
    });

    it('has a minimum of 10 degrees', function() {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.currentTemperature()).toEqual(10);
    });
  });

  describe('Power Saving Mode', function() {
    it('is on by default', function() {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('can be switched off', function() {
      thermostat.switchOffPowerSavingMode();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('can be switched on again', function() {
      thermostat.switchOffPowerSavingMode();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchOnPowerSavingMode();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  });

  describe('Maximum temperature is', function() {
    it('25 degrees if power saving mode is on', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.currentTemperature()).toEqual(25);
    });

    it('32 degrees if power saving mode is off', function() {
      thermostat.switchOffPowerSavingMode();
      for (var i = 0; i < 14; i++) {
        thermostat.up();
      }
      expect(thermostat.currentTemperature()).toEqual(32);
    });
  });

  describe('Temperature', function() {
    it('can be reset to 20', function() {
      thermostat.resetTemperature();
      expect(thermostat.currentTemperature()).toBe(20);
    });
  });

  describe('Says usage, which is', function() {
    it('low when < 18', function() {
      for (var i = 0; i < 3; i++) {
      thermostat.down();
      }
      expect(thermostat.isUsage()).toBe("low-usage");
    });

    it('medium when < 25', function() {
      for (var i = 0; i < 3; i++) {
      thermostat.up();
      }
      expect(thermostat.isUsage()).toBe("medium-usage");
    });

    it('medium when < 25', function() {
      for (var i = 0; i < 6; i++) {
      thermostat.up();
      }
      expect(thermostat.isUsage()).toBe("high-usage");
    });
  });
});

// < 18 is low-usage
// < 25 is medium-usage
// anything else is high-usage.