const MAX_GRID_SIZE = 100;
const MIN_GRID_SIZE = 1;
const DEFAULT_GRID_SIZE = 16;

const DEFAULT_COLOR = "red";
const VALID_COLORS = ["red", "green", "blue", "rainbow"];
const DEFAULT_BACKGROUND = "#ececec";
const DEFAULT_BORDER = "solid 1px #e5e5e5";

function createGrid(chosenDimension = 16) {
  const container = document.querySelector(".container");

  // clear container
  container.innerHTML = "";

  for (let i = 0; i < chosenDimension * chosenDimension; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-element");
    div.style.backgroundColor = DEFAULT_BACKGROUND;
    div.style.width = `calc(100% / ${chosenDimension})`;
    addDrawBehavior(div, currentColor);
    container.appendChild(div);
  }
}

function getColorChoice() {
  while (true) {
    let color = prompt(
      "Choose a color: Red, Green, Blue, or Rainbow!"
    ).toLowerCase();
    if (VALID_COLORS.includes(color)) {
      return color;
    }
    alert("Please choose either Red, Green, Blue, or Rainbow");
  }
}

function addDrawBehavior(element) {
  element.addEventListener("mouseover", (e) => {
    if (e.buttons === 1) {
      if (currentColor === "rainbow") {
        element.style.backgroundColor =
          "#" +
          Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0");
      } else {
        element.style.backgroundColor = currentColor;
        element.style.border = "0px";
      }
    }
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

    if (isNaN(gridSize)) {
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

let currentColor = DEFAULT_COLOR;
let currentGridSize = DEFAULT_GRID_SIZE;

const gridGenBtn = document.querySelector("#grid-generator");
gridGenBtn.addEventListener("click", () => {
  currentGridSize = getGridSize();

  createGrid(currentGridSize);
});

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
  const gridBoxes = document.querySelectorAll(".grid-element");
  gridBoxes.forEach(
    (box) => (
      (box.style.backgroundColor = DEFAULT_BACKGROUND),
      (box.style.border = DEFAULT_BORDER)
    )
  );
});

const colorSelectBtn = document.querySelector("#color-selector");
colorSelectBtn.addEventListener("click", () => {
  currentColor = getColorChoice();
});

createGrid();
