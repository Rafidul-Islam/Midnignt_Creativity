console.log("Hello");
let items = document.getElementsByTagName("li");
// Learning getElementsByTagName, getElementsByClassName gives HTML Collection


//Event Bubbling Concept
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");

const changeColor = (element, e) => {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  element.style.backgroundColor = `rgb(${r},${g}, ${b})`;
  e.stopPropagation();
};

div3.onclick = (e) => changeColor(div3, e);
div1.onclick = () => changeColor(div1);
