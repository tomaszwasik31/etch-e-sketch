const container = document.querySelector("#container");

const reset = document.querySelector(".btn-reset");

let squares = 16;
drawSquares(squares);

function drawSquares(squares) {
  for (i = 1; i <= squares * squares; i++) {
    const content = document.createElement("div");
    content.classList.add("box");
    container.appendChild(content);
  }
}

const boxes = document.querySelectorAll(".box");

boxes.forEach(hoverBlack);

function hoverBlack(boxes) {
  boxes.addEventListener("mouseover", () => {
    boxes.classList.add("black");
  });
}



reset.addEventListener("click", () => {
    document.querySelectorAll(".box").forEach(el => el.remove());
  squares = prompt("Number of squares?");
  drawSquares(squares);
});

// ** Alternative **
// box.forEach(box => {
//   box.addEventListener("mouseover", () => {
//     box.classList.add("black");
//   });
// });

//reset btn
