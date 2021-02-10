describe("Thermostat", () => {
  it("starts at 20 degrees", () => {
    let thermostat = new Thermostat();
    expect(thermostat.currentTemperature()).toEqual(20);
  })
} )