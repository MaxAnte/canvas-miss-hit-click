const WIDTH = 400;
const HEIGHT = 200;
const DPI_WIDTH = WIDTH * 2;
const DPI_HEIGHT = HEIGHT * 2;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.style.width = WIDTH + "px";
canvas.style.height = HEIGHT + "px";
canvas.width = DPI_WIDTH;
canvas.height = DPI_HEIGHT;
let drawType = true;

function draw(e) {
  if (!e.target.matches("#canvas")) return;
  var pos = getMousePos(canvas, e);
  console.log(pos);

  posx = pos.x;
  posy = pos.y;
  if (drawType == true) {
    ctx.fillStyle = "#008000";
  } else {
    ctx.fillStyle = "#ff0000";
  }
  ctx.fillRect(posx, posy, 8, 8);
}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: ((evt.clientX - rect.left) / (rect.right - rect.left)) * canvas.width,
    y: ((evt.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height
  };
}

function changeDrawMode() {
  if (event.target.matches(".hit")) {
    drawType = true;
    event.target.classList.add("is-active");
    document.getElementsByClassName("miss")[0].classList.remove("is-active");
  }
  if (event.target.matches(".miss")) {
    drawType = false;
    event.target.classList.add("is-active");
    document.getElementsByClassName("hit")[0].classList.remove("is-active");
  }
}

window.addEventListener("click", draw, false);
window.addEventListener("click", changeDrawMode, false);
