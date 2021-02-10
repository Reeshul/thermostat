describe("Thermostat", () => {
  let thermostat;
  beforeEach(() => {
    thermostat = new Thermostat();
  });
  it("starts at 20 degrees", () => {
    expect(thermostat.currentTemperature()).toEqual(20);
  });
  it("temperature increases when the up function is called", () => {
    thermostat.up();
    expect(thermostat.currentTemperature()).toEqual(21);
  });
  it("temperature decrceases when the down function is called", () => {
    thermostat.down();
    expect(thermostat.currentTemperature()).toEqual(19);
  });
  it("temperature does not drop below 10 degrees", () => {
    for (let i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.currentTemperature()).toEqual(10);
  });
  it("temperature is not more than 25 degrees when power saving mode on", () => {
    thermostat.turnOnPowerSaving();
    for (let i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.currentTemperature()).toEqual(25);
  });
  it("temperature is not more than 32 degrees when power saving mode off", () => {
    thermostat.turnOffPowerSaving();
    for (let i = 0; i < 13; i++) {
      thermostat.up();
    }
    expect(thermostat.currentTemperature()).toEqual(32);
  });
  it("power saving mode is on by default", () => {
    expect(thermostat.isPowerSavingModeOn()).toEqual(true);
  });
  it("power saving mode can be turned off", () => {
    thermostat.turnOffPowerSaving();
    expect(thermostat.isPowerSavingModeOn()).toEqual(false);
  });
  it("temperature can be reset to 20 degrees using a reset function", () => {
    for (let i = 0; i < 4; i++) {
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.currentTemperature()).toEqual(20);
  });
  it("can detect high energy usage when temperature is more than 25 degrees", () => {
    thermostat.turnOffPowerSaving();
    for (let i = 0; i < 6; i++) {
      thermostat.up();
    }
    console.log(thermostat.currentTemperature())
    expect(thermostat.currentEnergyUsage()).toEqual("high-usage");
  });
  it("can detect medium energy usage when temperature is between than 18 and 25 degrees", () => {
    for (let i = 0; i < 5; i++) {
      thermostat.up();
    }
    expect(thermostat.currentEnergyUsage()).toEqual("medium-usage");
  });
  it("can detect low energy usage when temperature is less than 18 degrees", () => {
    for (let i = 0; i < 3; i++) {
      thermostat.down();
    }
    expect(thermostat.currentEnergyUsage()).toEqual("low-usage");
  });
});
