function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch');
}

function draw() {
  background(60, 60, 60);

  //Player
  stroke(255,255,255);
  fill(0,0,255);
  rect(1200 - 300, windowHeight - 400, 200, 300);

  //Enemy
  stroke(255,255,255);
  fill(255,0,0);
  rect(0+300, 0+50, 66, 110);

}
