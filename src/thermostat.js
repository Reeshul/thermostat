class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MAX_TEMP = 32
    this.MAX_POWER_SAVING_TEMP = 25
    this.powerSavingMode = true
  }

  currentTemperature() {
    return this.temperature;
  }

  maximumTemperature() {
    return this.isPowerSavingModeOn() ? this.MAX_POWER_SAVING_TEMP : this.MAX_TEMP
  }

  isPowerSavingModeOn() {
    return this.powerSavingMode === true
  }

  up() {
    if ( this.temperature < this.maximumTemperature() ) {
      this.temperature++;
    }
  }

  down() {
    if (this.temperature > 10) {
      this.temperature--;
    }
  }

  // IF power saving mode is off
  // then MAX TEMP is 32 degrees

  turnOffPowerSaving() {
    this.powerSavingMode = false;
  }

  turnOnPowerSaving() {
    this.powerSavingMode = true;
  }

  // owerSavingModeOn() {
  //   this.turnOffPowerSaving() ? false : true
  // }
}
