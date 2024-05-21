const board = document.querySelector(".board");

function gridAppend() {
  for (let i = 0; i < 16; i++) {
    gridVertical = document.createElement("div");
    gridVertical.setAttribute("class", "gridVertical");
    board.appendChild(gridVertical);
  }
}

gridAppend();

function gridAppend2() {
  for (let i = 0; i < 16; i++) {
    for (let i = 0; i < 16; i++) {
      gridHorizontal = document.createElement("div");
      gridHorizontal.setAttribute("class", "gridHorizontal");
      document
        .getElementsByClassName("gridVertical")
        [i].appendChild(gridHorizontal);
    }
  }
}

gridAppend2();
