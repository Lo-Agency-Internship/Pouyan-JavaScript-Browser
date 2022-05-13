// ----------------create a hex value named colorElement-----------------------
// ----------------------------------------------------------------------------
hexValues = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
colorElement = "";
function createHexColor() {
  for (let index = 0; index < 6; index++) {
    let colorElementParts = hexValues[Math.floor(Math.random() * hexValues.length)];
    colorElement = colorElement + colorElementParts;
  }
  colorElement = "#" + colorElement;
  return colorElement;
}
// -----put the result of the function into "chosenColor" variable----and show it on web page----
// ----------------------------------------------------------------------------------------------
let chosenColor = createHexColor();
document.getElementById("color").innerHTML = chosenColor;

// ----------select body element and chage its style to our chosen color---------------------
// ------------------------------------------------------------------------------------------
function changeColor() {
  document.querySelector("body").style.background = chosenColor;
}

changeColor();
