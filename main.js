const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclik = () => {
    if (item.id == "claro") {
      display.innerText = "";
    } else if (item.id == "retroceso") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "igual") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "igual") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const alternadorTemaBtn = document.querySelector(".alternador-tema");
const calculadora = document.querySelector(".calculadora");
const alternadorIcon = document.querySelector(".alternador-icon");
let isDark = true;
alternadorTemaBtn.ouclick = () => {
  calculadora.classList.toggle("dark");
  alternadorTemaBtn.classList.toggle("activo");
  isDark = !isDark;
};
