// client 1
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const base = aRading.baseCharge;
const taxableCharge = aReading.taxableCharge;

// client 3
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year);
}

function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));
  return result;
}
