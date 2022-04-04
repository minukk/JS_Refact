function disabilityAmount(anEmployee) {
  if (isNotEligibleForDisability()) return 0;

  function isNotEligibleForDisability() {
    return ((anEmployee.seniorty < 2) 
      || (anEmployee.monthDisabled > 12) 
      || (anEmployee.isPartTime));
  }
}