const MAX_GRID_WIDTH_HEIGHT = 100;
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
    addLingeringHoverEffect(div);
    container.appendChild(div);
  }
}

function addLingeringHoverEffect(element) {
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = "green";
  });
}

function getGridDimensions() {
  while (true) {
    selectedDimension = prompt(
      "How many blocks wide and long should the grid be?"
    );

    if (selectedDimension > MAX_GRID_WIDTH_HEIGHT) {
      alert("Too large. Pick a width/height under 100 blocks.");
      continue;
    } else if (!selectedDimension) {
      return DEFAULT_GRID_WIDTH_HEIGHT;
    }
    return parseInt(selectedDimension);
  }
}

const gridGenBtn = document.querySelector("#grid-generator");
gridGenBtn.addEventListener("click", () => {
  chosenDimension = getGridDimensions();

  createGrid(chosenDimension);
});

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
  const gridBoxes = document.querySelectorAll(".grid-element");
  gridBoxes.forEach((box) => (box.style.backgroundColor = "#ececec"));
});

createGrid();
