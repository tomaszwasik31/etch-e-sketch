const container = document.querySelector("#container");
const reset = document.querySelector(".btn-reset");

let squares = 16;
drawSquares(squares);

// add div's with class box
function drawSquares(squares) {
  for (i = 1; i <= squares * squares; i++) {
    const content = document.createElement("div");
    content.classList.add("box");
    container.appendChild(content);
  }
  // adjust css
  container.style.cssText = `
    display: inline-grid;
    grid-template-columns: repeat(${squares}, auto)`;
  //hover function added
  const boxes = document.querySelectorAll(".box");
  hover(boxes);
}
//add class on hover
function hover(boxes) {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  boxes.forEach((boxes) => {
    boxes.addEventListener("mouseover", () => {
      boxes.style.cssText = `background-color: #${randomColor}`;
    });
  });
}

//reset btn
reset.addEventListener("click", () => {
  document.querySelectorAll(".box").forEach((el) => el.remove());
  //validation with escape
  squares = prompt("Number of squares?");
  if (squares > 100) {
    alert("Number of squares to high. Please insert number <100");
    return;
  }
  drawSquares(squares);
});

// ** Alternative **

// function hover(boxes) {
//   boxes.addEventListener("mouseover", () => {
//     boxes.classList.add("black");
//   });
// }
// boxes.forEach(hover);

//reset btn
