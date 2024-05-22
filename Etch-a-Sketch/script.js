const board = document.querySelector("#board");

function gridAppend() {
  for (let i = 0; i < 255; i++) {
    div = document.createElement("div");
    div.setAttribute("class", "grid");
    board.appendChild(div);
  }
}

gridAppend();

const grids = document.querySelectorAll("div");


/* Iterate over every div element whilst adding event listeners to it*/
for (let i = 0; i < grids.length; i++) {
    grids[i].addEventListener('mouseover', function (e) {
      e.target.classList.add('hover');
    });
  }



