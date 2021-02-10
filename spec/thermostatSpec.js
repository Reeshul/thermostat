describe("Thermostat", () => {
  it("starts at 20 degrees", () => {
    let thermostat = new Thermostat();
    expect(thermostat.currentTemperature()).toEqual(20);
  })
  it("temperature increases when the up function is called", () => {
    let thermostat = new Thermostat();
    console.log(thermostat.currentTemperature);
    thermostat.up()
    console.log(thermostat);
    console.log(thermostat.currentTemperature);
    expect(thermostat.currentTemperature()).toEqual(21);
  })
} )