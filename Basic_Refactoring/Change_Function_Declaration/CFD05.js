function inNewEngland(aCustomer) {
  const stateCode = aCustomer.address.state;
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

const newEnglnaders = someCustomers.filter(c => inNewEngland(c));