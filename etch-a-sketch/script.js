function setupGrid(size = 16) {
  const newSketchBoard = document.createElement("div")
  newSketchBoard.id = "sketch-container";
  document.body.append(newSketchBoard);
  const maxWidth = 750;
  const pixelWidth = (maxWidth / size) - 2;
  const pixelHeight = pixelWidth;

  let rows = size;

  const c = document.getElementById("sketch-container");

  while (rows > 0) {
    rows--;
    let row = document.createElement("div");
    row.classList.add("sketch-row");
    let columns = size;
    while (columns > 0) {
      columns--;
      const sketchPixel = document.createElement("div");
      sketchPixel.classList.add("sketch-pixel")
      sketchPixel.addEventListener("mouseover", hoverEvent);
      sketchPixel.style.width = pixelHeight + "px";
      sketchPixel.style.height = pixelWidth + "px";
      sketchPixel.style.opacity = 0.1;
      row.appendChild(sketchPixel);
    }
    c.appendChild(row);
  }
}

function hoverEvent(e) {
  const pixel = e.target;
  console.log(pixel.style.opacity);
  pixel.style.opacity = Math.min(1, parseFloat(pixel.style.opacity) + 0.1);
  console.log(pixel.style.opacity);
}

function resetGrid() {
  const message = "enter grid size. Your input will be overriden if it is not in the range [20, 100]";

  const gridSize = Math.max(20, Math.min(100, prompt(message)));
  const previousSketchBoard = document.getElementById("sketch-container");
  document.body.removeChild(previousSketchBoard);

  setupGrid(gridSize);
}

setupGrid(50);

document.getElementById("reset-button").addEventListener("click", resetGrid);
