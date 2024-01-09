/* Declaration of Variables */
const them = document.querySelector(".them");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
let code = true;
const boxes = document.querySelectorAll(".box");
const calculator = document.querySelector("div.calculator");
const pad = document.querySelector(".pad");
let displayInput = document.querySelector(".display input");
let displayP = document.querySelector(".display p");
/* This Code For Dark Light mode */
//function to change the style
const changeFocusLight = (code) => {
  if (code) {
    dark.style.cssText = `opacity: 0.3;`;
    light.style.cssText = `opacity: 1;`;
    document.querySelector("body").style.backgroundColor = "#F5F3F4";
    calculator.style.backgroundColor = "white";
    calculator.style.color = "black";
    them.style.backgroundColor = "#F9F9F9";
    pad.style.backgroundColor = "#F9F9F9";
    displayInput.style.color = "black";
    boxes.forEach((box) => {
      box.style.backgroundColor = "#F7F7F7";
    });
  }
};

const changeFocusDark = (code) => {
  if (!code) {
    dark.style.cssText = `opacity: 1`;
    light.style.cssText = `opacity: 0.3`;
    document.querySelector("body").style.backgroundColor = "#2c2e33";
    calculator.style.backgroundColor = "#22252d";
    calculator.style.color = "white";
    them.style.backgroundColor = "#292d36";
    pad.style.backgroundColor = "#292d36";
    displayInput.style.color = "white";
    boxes.forEach((box) => {
      box.style.backgroundColor = "#272b33";
    });
  }
};

light.addEventListener("click", function () {
  changeFocusLight(code);
  code = false;
});

dark.addEventListener("click", function () {
  changeFocusDark(code);
  code = true;
});

/*End OF Dark Light mode */

/* Start this code for calculate */

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    if (box.getAttribute("data-set") == "ac") {
      inputAc();
    } else if (box.getAttribute("data-set") == "-1") {
      displayP.textContent = displayInput.value;
      displayInput.value = eval(displayInput.value);
      displayInput.value = plusM(Number(displayInput.value));
    } else if (box.getAttribute("data-set") == "%") {
      displayP.textContent = displayInput.value;
      displayInput.value = eval(displayInput.value);
      displayInput.value = present(+displayInput.value);
    } else if (box.getAttribute("data-set") == "/") {
      setValue("/");
    } else if (box.getAttribute("data-set") == "*") {
      setValue("*");
    } else if (box.getAttribute("data-set") == "-") {
      setValue("-");
    } else if (box.getAttribute("data-set") == "+") {
      setValue("+");
    } else if (box.getAttribute("data-set") == "=") {
      displayP.textContent = displayInput.value;
      displayInput.value = eval(displayInput.value);
    } else if (box.getAttribute("data-set") == "r") {
      displayInput.value = displayInput.value.slice(
        0,
        displayInput.value.length - 1
      );
      displayInput.focus();
    } else {
      displayInput.value += box.getAttribute("data-set");
      displayInput.focus();
    }
  });
});

window.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    displayP.textContent = displayInput.value;
    displayInput.value = eval(displayInput.value);
  }
});

//functions of calculations
function setValue(sil) {
  displayInput.value += `${sil}`;
  displayInput.focus();
}

function inputAc() {
  displayInput.value = "";
  displayP.textContent = "0";
}

function plusM(num) {
  return -1 * +num;
}

function present(num) {
  return +num / 100;
}
