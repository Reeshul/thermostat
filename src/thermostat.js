class Thermostat {
  constructor() {
    this.temperature = 20;
  }

  currentTemperature() {
    return this.temperature;
  }

  up() {
    if (this.temperature < 25) {
      this.temperature++;
    }
  }

  down() {
    if (this.temperature > 10) {
      this.temperature--;
    }
  }
}
