const station = { 
  name: "jin",
  readings: [
    { temp: 47, time: "2022-02-10 09:10"},
    { temp: 53, time: "2022-03-10 09:10"},
    { temp: 58, time: "2022-02-13 09:10"},
    { temp: 53, time: "2022-04-16 09:10"},
    { temp: 51, time: "2022-02-12 09:10"},
  ]
};

function readingsOutsideRange(station, min, max) {
  return station.readings.filter(r => r.temp < min || r.temp > max);
}

alerts = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);