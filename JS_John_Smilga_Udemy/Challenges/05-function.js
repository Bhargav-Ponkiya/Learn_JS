// function expression
const calculateTotal = function (subTotal, tax) {
  return subTotal + tax;
};

const order1 = calculateTotal(23, 59);
const order2 = calculateTotal(223, 62);
const order3 = calculateTotal(62, 58);

console.log(order1, order2, order3);
