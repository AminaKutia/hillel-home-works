function createUser(name, age) {
  if (!name) {
    throw new Error('Name is required');
  }

  return {
    name,
    age,
    isAdult: age >= 18
  };
}

function filterAdults(users) {
  return users.filter(user => user.age >= 18);
}

function getUserNames(users) {
  return users.map(user => user.name);
}

module.exports = { createUser, filterAdults, getUserNames };