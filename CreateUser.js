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

//To validate User Data
const validateUserInfo = (name, age, inst, sem, cg) => {
  name = name.trim().toLowerCase();
  age = age.toString();
  inst = inst.trim().toLowerCase();
  sem = Math.ceil(sem).toString();
  cg = cg.toString();

  return {
    name: name,
    age: age,
    inst: inst,
    sem: sem,
    cg: cg,
  };
};

//To get user data
const getUserData = () => {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const inst = document.getElementById("inst").value;
  const sem = document.getElementById("sem").value;
  const cg = document.getElementById("cg").value;

  const user = validateUserInfo(name, age, inst, sem, cg);
  return user;
};

//To create User
const createUser = () => {
  const userdata = getUserData();
  console.log(userdata);
  const { name, age, inst, sem, cg } = userdata;
  const user = new User(name, age, inst, sem, cg);
  users.push(user);
  console.log(user);
  savetoLocalStorage(users);
};

//Save user to localstorage
const savetoLocalStorage = (users) => {
  users = JSON.stringify(users);
  localStorage.setItem("users", users);
  clearForm();
};

//To clear the form
const clearForm = () => {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("inst").value = "";
  document.getElementById("sem").value = "";
  document.getElementById("cg").value = "";
};

//Button Handling
document.getElementById("submit").addEventListener("click", createUser);
