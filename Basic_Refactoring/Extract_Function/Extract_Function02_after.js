function printBanner() {
  console.log("***************");
  console.log("****고객 채무****");
  console.log("***************");
}

function printOwing(invoice) {
  let outstanding = 0;

  printBanner();

  for (const o of invoice.orders) {
    outstanding += o.amout;
  }

  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  function printDetails() {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
  }

  printDetails();
}