const car = {
  make: "2023",
  model: 34,
  year: 2938,
  colors: ["red", "yellow", "powder-blue"],
  hybrid: false,
  drive() {
    console.log("driving");
  },
  stop() {
    console.log("stopping");
  },
};

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();
