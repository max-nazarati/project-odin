function setupGrid(size = 16) {
  const previousSketchBoard = document.querySelector("#sketch-container");
  document.body.removeChild(previousSketchBoard);
  const newSketchBoard = document.createElement("div")
  newSketchBoard.id = "sketch-container";
  document.body.append(newSketchBoard);
  const maxWidth = 960;
  const pixelWidth = (maxWidth / size) - 2;
  const pixelHeight = pixelWidth;

  let rows = size;

  const c = document.querySelector("#sketch-container");

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
      row.appendChild(sketchPixel);
    }
    c.appendChild(row);
  }
}

function hoverEvent(e) {
  e.target.style.backgroundColor = "darkgrey";
}

setupGrid(50);
