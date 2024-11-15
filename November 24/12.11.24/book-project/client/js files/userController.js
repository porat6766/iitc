const createUser = async (name, email, password, age) => {
  const user = { username: name, email: email, password: password, age: age };
  const resSaveUser = await fetch("http://localhost:3000/api/users/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (resSaveUser.status === 201) {
    return true;
  } else {
    return false;
  }
};

const loginUser = async (email, password) => {
  const user = { email, password };
  const getLog = await fetch("http://localhost:3000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (getLog.status === 200) {
    const res = await getLog.json();
    console.log(res.data);
    saveInCookie(res.data);
    return true;
  } else {
    return false;
  }
};

const saveInCookie = (token) => {
  document.cookie = `token=${token}; path=/;`;
};

export { createUser, loginUser };
