const MAX_GRID_WIDTH_HEIGHT = 100;
const MIN_GRID_WIDTH_HEIGHT = 1;
const DEFAULT_GRID_WIDTH_HEIGHT = 16;

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

function getGridDimensions() {
  while (true) {
    let selectedDimension = prompt(
      "How many blocks wide and long should the grid be?",
      DEFAULT_GRID_WIDTH_HEIGHT
    );

    // NaN if a non-number is provided
    selectedDimension = parseInt(selectedDimension);

    if (typeof selectedDimension !== "number" || isNaN(selectedDimension)) {
      alert(
        "That is not a valid number. Please pick a number between 1 and 100."
      );
      continue;
    }

    if (selectedDimension > MAX_GRID_WIDTH_HEIGHT) {
      alert(
        `Too large. Pick a width/height under ${MAX_GRID_WIDTH_HEIGHT} blocks.`
      );
      continue;
    } else if (selectedDimension < MIN_GRID_WIDTH_HEIGHT) {
      alert(
        `Too small. Pick a width/height of at least ${MIN_GRID_WIDTH_HEIGHT}.`
      );
      continue;
    } else if (!selectedDimension) {
      return DEFAULT_GRID_WIDTH_HEIGHT;
    }
    return selectedDimension;
  }
}

const gridGenBtn = document.querySelector("#grid-generator");
gridGenBtn.addEventListener("click", () => {
  let chosenDimension = getGridDimensions();

  createGrid(chosenDimension);
});

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
  const gridBoxes = document.querySelectorAll(".grid-element");
  gridBoxes.forEach((box) => (box.style.backgroundColor = "#ececec"));
  gridBoxes.forEach((box) => (box.style.border = "solid 1px #e5e5e5"));
});

createGrid();
