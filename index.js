const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const body = document.querySelector("body");
body.appendChild(canvas);

//resizing
const toResize = () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerHeight;
};

window.addEventListener("resize", toResize);

//painting app
let clicked = false;

//>draw fc
const toDraw = () => {
  //   ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
};

//>start line
const startPoint = (e) => {
  ctx.lineCap = "round";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);
  ctx.lineTo(e.clientX, e.clientY);
  toDraw();

  //>fill between 2 points
  const fillPoint = (e) => {
    ctx.lineTo(e.clientX, e.clientY);

    toDraw();
  };
  canvas.addEventListener("mousemove", fillPoint);

  //>END LINE
  const endPoint = () => {
    //remove mousemove event listener
    canvas.removeEventListener("mousemove", fillPoint);

    ctx.closePath();

    //remove mouseup event listener
    canvas.removeEventListener("mouseup", endPoint);
  };
  canvas.addEventListener("mouseup", endPoint);
};

canvas.addEventListener("mousedown", startPoint);
