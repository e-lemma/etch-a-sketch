const SIZE_OF_GRID = 16 * 16;

function createGrid() {
  const container = document.querySelector(".container");

  for (let i = 0; i < SIZE_OF_GRID; i++) {
    const div = document.createElement("div");
    div.textContent = "x";
    div.classList.add("grid-element");
    container.appendChild(div);
  }
}

createGrid();
