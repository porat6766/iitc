const createUser = async (name, email, password, age) => {
  const user = { username: name, email: email, password: password, age: age };
  const resSaveUser = await fetch("http://localhost:3000/api/users/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  console.log(resSaveUser);
};

export { createUser };
