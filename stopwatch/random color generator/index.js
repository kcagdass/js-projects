const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const colorContainer = document.createElement("div");
  colorContainer.classList.add("color-container");
  containerEl.appendChild(colorContainer);
}

const colorContainerEls = document.querySelectorAll(".color-container");
generateColors();
function generateColors() {
colorContainerEls.forEach((colorContainerEl) => {
const newColorCode = randomColor();
colorContainerEl.style.backgroundColor = "#" + newColorCode;
colorContainerEl.innerHTML = "#" + newColorCode;
})
}


function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLenght = 6;
  let colorCode = "";

  for (let index = 0; index < colorCodeLenght; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum ,randomNum +1);
    
  }
  return colorCode;
}

