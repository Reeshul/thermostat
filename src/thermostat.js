class Thermostat {
  constructor() {
    this.temperature = 20;
  }

  currentTemperature() {
    return this.temperature;
  }

  up() {
    this.temperature++;
  }

  down() {
    if (this.temperature > 10) {
      this.temperature--;
    }
  }
}
