if (summer()) {
  summerCharge();
} else {
  regularCharge();
}

function summer() {
  return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)
}

function summerCharge() {
  charge = quantity * plan.summerRate;
}

function regularCharge() {
  charge = quantity * plan.regularRate + plan.regularServiceCharge;
}