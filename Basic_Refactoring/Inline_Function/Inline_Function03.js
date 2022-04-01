function reportLines(aCustomer) {
  const lines = [];
  getherCustomerDate(lines, aCustomer);
  return lines;
}

function reportLines(aCustomer) {
  out.push(["name", aCustomer.name]);
  out.push(["location", aCustomer.location]);
}