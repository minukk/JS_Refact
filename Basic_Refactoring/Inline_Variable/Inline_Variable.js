function isPrice(anOrder) {
  let basePrice = anOrder.basePrice;
  return (basePrice > 1000);
}

function isPriceRefact01(anOrder) {
  let isBasePrice = anOrder.basePrice > 1000;
  return isBasePrice;
}

function isPriceRefact02(anOrder) {
  return anOrder.basePrice > 1000;
}