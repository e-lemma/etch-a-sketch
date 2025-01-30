const MAX_GRID_SIZE = 100;
const MIN_GRID_SIZE = 1;
const DEFAULT_GRID_SIZE = 16;

function createGrid(chosenDimension = 16) {
  const container = document.querySelector(".container");

  // clear container
  container.innerHTML = "";

  for (let i = 0; i < chosenDimension * chosenDimension; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-element");
    div.style.backgroundColor = "#ececec";
    div.style.width = `calc(100% / ${chosenDimension})`;
    addDrawBehavior(div);
    container.appendChild(div);
  }
}

function addDrawBehavior(element) {
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = "green";
    element.style.border = "0px";
  });
}

function getGridSize() {
  while (true) {
    let gridSize = prompt(
      "Enter a grid size (e.g 16 creates a grid of 16x16)",
      DEFAULT_GRID_SIZE
    );

    // NaN if a non-number is provided
    gridSize = parseInt(gridSize);

    if (typeof gridSize !== "number" || isNaN(gridSize)) {
      alert(
        "That is not a valid grid size. Please pick a number between 1 and 100."
      );
      continue;
    }

    if (gridSize > MAX_GRID_SIZE) {
      alert(`Too large. Pick a grid size under ${MAX_GRID_SIZE}.`);
      continue;
    } else if (gridSize < MIN_GRID_SIZE) {
      alert(`Too small. Pick a grid size over ${MIN_GRID_SIZE}.`);
      continue;
    } else if (!gridSize) {
      return DEFAULT_GRID_SIZE;
    }
    return gridSize;
  }
}

const gridGenBtn = document.querySelector("#grid-generator");
gridGenBtn.addEventListener("click", () => {
  let chosenDimension = getGridSize();

  createGrid(chosenDimension);
});

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
  const gridBoxes = document.querySelectorAll(".grid-element");
  gridBoxes.forEach((box) => (box.style.backgroundColor = "#ececec"));
  gridBoxes.forEach((box) => (box.style.border = "solid 1px #e5e5e5"));
});

createGrid();
