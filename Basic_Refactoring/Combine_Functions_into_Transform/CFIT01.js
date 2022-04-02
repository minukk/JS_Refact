function base(aReading) {}
function taxableCharge(aReading) {}

function enrichReading(argReading) {
  const aReading = _.cloneDeap(argReading);
  aReading.baseCharge = base(aReading);
  aReading.taxableCharge = taxableCharge(aReading);
  return aReading;
}