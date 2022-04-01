const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

const aReading = acquireReading();
const base = (baseRate(aReading.month - aReading.year) * aReading.quantity);
const texableCharge = Math.max(0, base - taxThreshold(aReading.year));

const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}