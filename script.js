// -----create a hex value named colorElement-----
// --------------------------------------------------
hexValues = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
colorElement = "";
function createHexColor() {
  for (let index = 0; index < 6; index++) {
    let colorElementParts =
      hexValues[Math.floor(Math.random() * hexValues.length)];
    colorElement = colorElement + colorElementParts;
  }
  colorElement = "#" + colorElement;
  return colorElement;
}
// -----put the result of the function into "chosenColor" variable---
// ----and show it on web page-----------------------
let chosenColor = createHexColor();
document.getElementById("color").innerHTML = chosenColor;

// --select body element and chage its style to our chosen color---
// --------------------------------------------------
function changeColor() {
  document.querySelector("body").style.background = chosenColor;
}

changeColor();

// -----------------project2--------------------
// =============================================

const allItems = document.getElementsByClassName("item");
let allBigItems = document.getElementsByClassName("bigItem");

function searchedText() {
  let Text = document.getElementById("searchBarText").value;
  Text = Text.toLowerCase();
  for (let item = 0; item < allItems.length; item++) {
    if (allItems[item].innerHTML === Text) {
      allBigItems[item].classList.remove("hidden");
    } else {
      allBigItems[item].classList.add("hidden");
    }
  }
}

function filter(filterName) {
  if (filterName === "All") {
    for (let item = 0; item < allItems.length; item++) {
      allBigItems[item].classList.remove("hidden");
    }
  } else {
    for (let item = 0; item < allItems.length; item++) {
      if (allItems[item].innerHTML === filterName) {
        allBigItems[item].classList.remove("hidden");
      } else {
        allBigItems[item].classList.add("hidden");
      }
    }
  }
}

// -----------------MODAL-----------------------
// =============================================

const allImages = document.querySelectorAll(".img");

const modalElement = document.getElementById("modalMain");

const body = document.getElementById("body");

let modalImages = [];

allImages.forEach((item) => {
  modalImages.push(item.src);
});

// ------------------------------------
// ----- main function for showing pics

function modal(i) {

  // ------------------------
  // -- show selected Image
  document.getElementById("modalImage").src = modalImages[i];
  modalElement.style.display = "flex";
  document.getElementById("body").style.overflow = "hidden";
  // ------------------------
  // ----- left arrow for prev img

  let leftArroww = document.getElementById("leftArrow");
  leftArroww.addEventListener("click", function () {
    i--;
    if (i < 0) {
      i = Number(modalImages.length - 1);
      document.getElementById("modalImage").src = modalImages[i];
      modalElement.style.display = "flexbox";
    } else {
      document.getElementById("modalImage").src = modalImages[i];
      modalElement.style.display = "flexbox";
    }
  });

  // ------------------------
  // ----- right arrow for next img
  let rightArroww = document.getElementById("rightArrow");
  rightArroww.addEventListener("click", function () {
    i++;
    if (i > Number(modalImages.length) - 1) {
      i = 0;
      document.getElementById("modalImage").src = modalImages[i];
      modalElement.style.display = "flex";
    } else {
      document.getElementById("modalImage").src = modalImages[i];
      modalElement.style.display = "flex";
    }
  });
}

// ---------------------------------
// -------main func of close button-
const targetDiv = document.getElementById("modalMain");
const btn = document.getElementById("closeButton");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
    document.getElementById("body").style.overflow = "auto";
  } else {
    targetDiv.style.display = "flex";
    document.getElementById("body").style.overflow = "auto";
  }
};

// -----------------TO DO LIST-----------------------
// =============================================

function addItem() {
  let toDoItem = document.getElementById("toDoItem").value;
  if (toDoItem) {
    let list = document.getElementById("listItem");

    let entry = document.createElement("p");
    entry.innerHTML = "<hr>"
    entry.style ="list-style: none; padding-bottom: 10px"
    entry.appendChild(document.createTextNode(toDoItem));

    list.appendChild(entry);

    let delBtn = document.createElement("button");
    
    delBtn.innerHTML = "DELETE";
    delBtn.onclick = function Delete(e) {
      var target = e.target;
      target.parentNode.remove();
    };
    entry.appendChild(delBtn);
  } else {
    alert("first type a task name!");
  }
}

function clearAll() {
  let list = document.getElementById("listItem");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
