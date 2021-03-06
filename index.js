

const canvas = document.querySelector("#myCanvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth =100;

let isDrawing = false; 
let lastx=0;
let lasty=0;
let hue = 0;
let direction = true;

function draw(e){
if(!isDrawing) return ;

console.log(e);
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(lastx,lasty);
ctx.lineTo(e.offsetX, e.offsetY);
ctx.stroke();
[lastx, lasty] = [e.offsetX, e.offsetY];
hue++;

if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 300 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) =>{
     isDrawing = true;
     [lastx, lasty] = [e.offsetX , e.offsetY];
    });
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing =false);