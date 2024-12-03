const person1 = {
  name: "bhargav",
  age: 23,
  status: "resident",
};

const person2 = {
  name: "john",
  age: "11",
  status: "resident",
};

if (person2.age >= 18 && person2.status === "resident") {
  console.log("u can cast a vote");
} else {
  console.log("u r not eligible to vote");
}
