      // var charTimmy;
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
      // charTimmy = new Image();
      // charTimmy.src = "resources/timmy_little.png";
  }

// Images Function Loadings
        // function drawTimmy() {
        //   ctx.drawImage(charTimmy, 100,100,150,97.8880675818);
        // }
// Loops
function principalInit() {
deleteCanvas();
// drawTimmy();
// start();
}
function deleteCanvas() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}
function resizeCanvas() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}
