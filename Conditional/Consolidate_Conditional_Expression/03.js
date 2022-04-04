function disabilityAmount(anEmployee) {
  if (anEmployee.seniorty < 2 || anEmployee.monthDisabled > 12 || anEmployee.isPartTime) return 0;
}