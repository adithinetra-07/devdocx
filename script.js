const colorInput = document.getElementById("colorInput");
const colorBox = document.getElementById("colorBox");
const hexValue = document.getElementById("hexValue");
const rgbValue = document.getElementById("rgbValue");

colorInput.addEventListener("input", () => {
  const color = colorInput.value;

  // Update background color
  colorBox.style.backgroundColor = color;
  hexValue.textContent = color;

  // Convert HEX → RGB
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  rgbValue.textContent = rgb(${r}, ${g},${b});
});
