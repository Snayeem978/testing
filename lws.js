const takeOrder = (customer, callback) => {
  console.log(`taking order from ${customer}`);
  callback(customer);
};

const processOrder = (customer, callback) => {
  console.log(`processing order from ${customer}`);
  setTimeout(() => {
    console.log("cookiing completed");
    console.log(`processing order for${customer}`);
    callback(customer);
  }, 2000);
};
const completeOrder = () => {
  console.log("completed Order");
};
takeOrder("karim", (customer) => {
  processOrder(customer, (customer) => {
    completeOrder();
  });
});
console.log("haicchu");
