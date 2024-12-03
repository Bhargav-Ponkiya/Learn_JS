/*
function fullName(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;
  return fullName.toUpperCase();
}

console.log(fullName("Bhargav", "Ponkiya"));

console.log(fullName("depp", "Jonny"));
*/

// Refactor to object parameter in function: No need to take care about order of function parameter
function fullName({ firstName, lastName }) {
  const fullName = `${firstName} ${lastName}`;
  return fullName.toUpperCase();
}

console.log(fullName("depp", "Jonny"));

// No need to take care about order of argument passing
console.log(fullName({ lastName: "depp", firstName: "Jonny" }));
