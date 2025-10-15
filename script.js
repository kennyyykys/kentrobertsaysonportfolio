document.getElementById("changeColorBtn").addEventListener("click", changeColor);

function changeColor() {
  const box = document.getElementById("colorBox");
  const container = document.querySelector(".container");
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Change color & glow
  box.style.backgroundColor = randomColor;
  box.style.boxShadow = `0 0 40px ${randomColor}`;
  setTimeout(() => {
    box.style.boxShadow = `0 0 20px ${randomColor}`;
  }, 300);
}