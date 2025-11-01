//We create a system that creates user on click & saves it in the localStorage.

//To store Users
const users = JSON.parse(localStorage.getItem("users")) || [];

//Class to create the object
class User {
  constructor(name, age, inst, sem, cg) {
    this.name = name;
    this.age = age;
    this.inst = inst;
    this.sem = sem;
    this.cg = cg;
  }
}

//To get user data
const getUserData = () => {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const inst = document.getElementById("inst").value;
  const sem = document.getElementById("sem").value;
  const cg = document.getElementById("cg").value;

  return { name, age, inst, sem, cg };
};

//To create User
const createUser = () => {
  const userdata = getUserData();
  const { name, age, inst, sem, cg } = userdata;
  const user = new User(name, age, inst, sem, cg);
  users.push(user);
  savetoLocalStorage(users);
};

//Save user to localstorage
const savetoLocalStorage = (users) => {
  users = JSON.stringify(users);
  localStorage.setItem("users", users);
};

//Button Handling
document.getElementById("submit").addEventListener("click", createUser);
