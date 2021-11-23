function setup() {
  canvas = createCanvas(450,450);
  background('lavender');
  canvas.parent('processing');
  noLoop();
  colorMode(RGB, 255, 255, 255, 1);
  fill(178, 34, 34,.5);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  noStroke();
  translate(125,125);
  rect(100,100,200,200);
  push();
  rotate(45);
  rect(141,0,200,200);
  pop();
  fill(255,225,0);
  rect(100,100,50,50)
}
