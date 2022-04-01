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

class NumberRange {
  constructor(min, max) {
    this._data = { min, max };
  }

  get min() { return this._data.min; }
  get max() { return this._data.max; }
}

function readingOutsideRange(station, range) {
  return station.readings.filter(r => r.temp < range.min || r.temp > range.max);
}

const range = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);

alerts = readingsOutsideRange(staion, range);