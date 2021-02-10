class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
    this.DEFAULT_TEMPERATURE = 20
    this.MAXIMUM_TEMPERATURE = 32;
    this.MAXIMUM_TEMPERATURE_WHEN_POWER_SAVING_MODE_IS_ON = 25;
  }

  currentTemperature() {
    return this.temperature;
  }

  up() {
    if (this.temperature < this.maximumTemperature()) this.temperature++;
  }

  down() {
    if (this.temperature > 10) this.temperature--;
  }

  reset() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  maximumTemperature() {
    return this.isPowerSavingModeOn()
      ? this.MAXIMUM_TEMPERATURE_WHEN_POWER_SAVING_MODE_IS_ON
      : this.MAXIMUM_TEMPERATURE;
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
