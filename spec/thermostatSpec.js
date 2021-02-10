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
});
