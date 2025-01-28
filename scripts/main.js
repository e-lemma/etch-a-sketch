const SIZE_OF_GRID = 16 * 16;

function createGrid() {
  const container = document.querySelector(".container");

  for (let i = 0; i < SIZE_OF_GRID; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-element");
    addLingeringHoverEffect(div);
    container.appendChild(div);
  }
}

function addLingeringHoverEffect(element) {
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = "green";
  });
}

createGrid();
