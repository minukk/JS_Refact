class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer() {return this._customer;}
  get quantity() {return this._quantity;}
  get month() {return this._month;}
  get year() {return this._year;}

  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
  
  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this.year));
  }
}

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicCharge = aReading.baseCharge;
// const basicChargeAmount = calculateBaseCharge(aReading);
const taxableCharge = aReading.taxableCharge;
// const taxableCharge = Math.max(0, aReading.baseCharge - taxableCharge(aReading.year));
// const taxableCharge = taxableChargeFn(aReading);

// function taxableChargeFn(aReading) {
//   return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
// }
