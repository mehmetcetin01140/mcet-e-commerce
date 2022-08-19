export const orderAmount = (amount) => {
  if (amount < 1000) {
    return amount;
  }
  if (amount > 1000 && amount < 10000) {
    return amount.toString().slice(0, 1) + "." + amount.toString().slice(1);
  }
  if (amount > 10000) {
    return amount.toString().slice(0, 2) + "." + amount.toString().slice(2);
  }
};
export const tax = (taxRate) => {
  if (taxRate < 1000) {
    return taxRate;
  }
  if (taxRate > 1000 && taxRate < 10000) {
    return taxRate.toString().slice(0, 1) + "." + taxRate.toString().slice(1);
  }
  if (taxRate > 10000) {
    return taxRate.toString().slice(0, 2) + "." + taxRate.toString().slice(2);
  }
};
export const decimalSupportedTotalPrice = (totalPrice) => {
  if (totalPrice() < 1000) {
    return totalPrice();
  }
  if (totalPrice() > 1000 && totalPrice() < 10000) {
    return (
      totalPrice().toString().slice(0, 1) +
      "." +
      totalPrice().toString().slice(1)
    );
  }
  if (totalPrice() > 10000) {
    return (
      totalPrice().toString().slice(0, 2) +
      "." +
      totalPrice().toString().slice(2)
    );
  }
};
