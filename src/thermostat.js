"use strict";

class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.powerSavingMode = true;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE_WHEN_POWER_SAVING_MODE_IS_OFF = 32;
    this.MAXIMUM_TEMPERATURE_WHEN_POWER_SAVING_MODE_IS_ON = 25;
    this.HIGH_ENERGY_USAGE_THRESHOLD_TEMPERATURE = 25;
    this.MEDIUM_ENERGY_USAGE_THRESHOLD_TEMPERATURE = 18;
  }

  currentTemperature() {
    return this.temperature;
  }

  up() {
    if (this.currentTemperature() < this.maximumTemperature())
      this.temperature++;
  }

  down() {
    if (this.currentTemperature() > this.minimumTemperature())
      this.temperature--;
  }

  reset() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  currentEnergyUsage() {
    return this.currentTemperature() >
      this.HIGH_ENERGY_USAGE_THRESHOLD_TEMPERATURE
      ? "high-usage"
      : this.currentTemperature() <
        this.MEDIUM_ENERGY_USAGE_THRESHOLD_TEMPERATURE
      ? "low-usage"
      : "medium-usage";
  }

  maximumTemperature() {
    return this.isPowerSavingModeOn()
      ? this.MAXIMUM_TEMPERATURE_WHEN_POWER_SAVING_MODE_IS_ON
      : this.MAXIMUM_TEMPERATURE_WHEN_POWER_SAVING_MODE_IS_OFF;
  }

  minimumTemperature() {
    return this.MINIMUM_TEMPERATURE;
  }

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  turnOffPowerSaving() {
    this.powerSavingMode = false;
  }

  turnOnPowerSaving() {
    this.powerSavingMode = true;
  }
}
