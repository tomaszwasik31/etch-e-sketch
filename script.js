const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("box");

for (i = 1; i <= 16*16; i++) {
  const content = document.createElement("div");
  content.classList.add("box");
  container.appendChild(content);
}
