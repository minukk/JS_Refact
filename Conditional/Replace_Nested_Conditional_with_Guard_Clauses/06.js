function adjustedCapital(anInstrument) {
  let result = 0;
  if (anInstrument.capital <= 0 
    || anInstrument.interestRate <= 0 
    || anInstrument.duration <= 0) return result;

  result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustementFactor;

  return result;
}