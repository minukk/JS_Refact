function disabilityAmount(anEmployee) {
  if (anEmployee.seniorty < 2 || anEmployee.monthDisabled > 12) return 0;
  if (anEmployee.isPartTime) return 0;
}