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
  it("temperature dexrceases when the down function is called", () => {
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
    for (let i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.currentTemperature()).toEqual(25);
  })
});
