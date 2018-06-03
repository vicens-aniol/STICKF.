var charStickMan;
var stickManAnim = [
  "resources/blue_stickman/1.png",
  "resources/blue_stickman/2.png",
  "resources/blue_stickman/3.png",
]
var stickManNum = 0;
var stickManProperties = {
  height: window.innerHeight*0.2,
  width: window.innerHeight*0.2*124/367,
};
function inicialize() {
  canvas = document.getElementById('mainCanvas');
  ctx = canvas.getContext("2d");
  console.log("%cInicialized", "font-weight:200; font-size:13px; color: #0C6600;");
  console.log("%cCanvas: ", "color: #1700FF" , canvas);
  console.log("%cContext: ", "color: #C22323" , ctx);
  window.addEventListener('resize', resizeCanvas, false);
  //canvas.style.background = "#2E86C1";
  loadImages();
  var initialLoop = setInterval(function() { principalInit();/*stop++;*/}, 1000/60);
}

  function loadImages() {
      charStickMan = new Image();
  }

// Images Function Loadings
    function drawStickMan() {
      charStickMan.src = stickManAnim[stickManNum];
      ctx.drawImage(charStickMan,canvas.width*0.5 - stickManProperties.width/2, canvas.height*0.5 - stickManProperties.height/2, stickManProperties.width, stickManProperties.height);
    }
// Loops
function principalInit() {
deleteCanvas();
drawStickMan();
stickManProperties = {
  height: window.innerHeight*0.2,
  width: window.innerHeight*0.2*124/367,
}
// start();
}
function deleteCanvas() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// console.log(canvas.height);
}
function resizeCanvas() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}
