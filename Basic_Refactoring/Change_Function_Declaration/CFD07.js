function isNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

const newEnglnaders = someCustomers.filter(c => isNewEngland(c.address.state));