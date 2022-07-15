const container = document.querySelector("#container");

for (i = 1; i <= 16 * 16; i++) {
  const content = document.createElement("div");
  content.classList.add("box");
  container.appendChild(content);
}

const box = document.querySelectorAll(".box");

box.forEach(hoverBlack);

function hoverBlack(box) {
  box.addEventListener("mouseover", () => {
    box.classList.add("black");
  });
}
// ** Alternative **
// box.forEach(box => {
//   box.addEventListener("mouseover", () => {
//     box.classList.add("black");
//   });
// });
