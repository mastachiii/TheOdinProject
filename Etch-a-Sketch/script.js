const button = document.querySelector("button");
button.addEventListener("click", (Event) => {
  numbers = prompt("divs");
  if (numbers > 100) {
    alert("You can only make a grid thats below 100");
  } else {
    function gridAppend() {
      for (let i = 0; i < numbers; i++) {
        div = document.createElement("div");
        div.setAttribute("class", "grid");
        board.appendChild(div);
        for (let i = 0; i < numbers; i++) {
          divTwo = document.createElement("div");
          divTwo.setAttribute("class", "gridTwo");
          div.appendChild(divTwo);
        }
      }
    }

    gridAppend();
  }

  const grids = document.querySelectorAll(".gridTwo");

  /* Iterate over every div element whilst adding event listeners to it*/
  for (let i = 0; i < grids.length; i++) {
    grids[i].addEventListener("mouseover", function (e) {
      e.target.classList.add("hover");
    });
  }
});

const board = document.querySelector("#board");

function getRandomColor() {
  return "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
}

const rainbow = document.querySelector("#rainbow");

rainbow.addEventListener("click", (Event) => {
  numbers = prompt("divs");
  if (numbers > 100) {
    alert("You can only make a grid thats below 100");
  } else {
    function gridAppend() {
      for (let i = 0; i < numbers; i++) {
        div = document.createElement("div");
        div.setAttribute("class", "grid");
        board.appendChild(div);
        for (let i = 0; i < numbers; i++) {
          divTwo = document.createElement("div");
          divTwo.setAttribute("class", "gridTwo");
          div.appendChild(divTwo);
        }
      }
    }

    gridAppend();
  }
  const grids = document.querySelectorAll(".gridTwo");

  for (let i = 0; i < grids.length; i++) {
    inc = i;
    grids[i].addEventListener("mouseover", function (e) {
      color = getRandomColor();
      e.target.style.background = color;
      for (let i = 0; i < 10; i++) {
        console.log(inc);
      }
    });
  }
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", function (e) {
  gridOne = document.querySelectorAll(".grid");
  gridTwo = document.querySelectorAll(".gridTwo");

  for (let i = 0; i < gridOne.length; i++) {
    gridOne[i].remove();
  }
  for (let i = 0; i < gridTwo.length; i++) {
    gridTwo[i].remove();
  }
});

// function gridAppend() {
//   for (let i = 0; i < numbers; i++) {
//     div = document.createElement("div");
//     div.setAttribute("class", "grid");
//     board.appendChild(div);
//     for (let i = 0; i < numbers; i++) {
//       divTwo = document.createElement("div");
//       divTwo.setAttribute("class", "gridTwo");
//       div.appendChild(divTwo);
//     }
//   }
// }

// gridAppend();

// const grids = document.querySelectorAll(".gridTwo");

// /* Iterate over every div element whilst adding event listeners to it*/
// for (let i = 0; i < grids.length; i++) {
//   grids[i].addEventListener("mouseover", function (e) {
//     e.target.classList.add("hover");
//   });
// }
