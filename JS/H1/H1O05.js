function setup() {
  canvas = createCanvas(450,450);
  background('cornflowerblue');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  noStroke();
  fill('tan');
  rect(25,25,400,400);
  
  translate(0,0);
  fill('peru');
  rect(225,75,150,150);

}
