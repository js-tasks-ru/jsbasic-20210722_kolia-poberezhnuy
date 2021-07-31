function showSalary(users, age) {

  let userFilter = users.filter(filterArr => {
    return age >= filterArr.age;
  });

  let result = userFilter.map((resUser) => {
    return (`${resUser.name}, ${resUser.balance}`);
  });

  return result.join('\n');
}
