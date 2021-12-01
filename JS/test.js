function setup() {
  canvas = createCanvas(450,450);
  background('white');
  canvas.parent('processing');
  //noLoop();
}

function maakKerk(kleur) {
  push ();
  fill(kleur);
  rect(0,150,100,300);

  fill(kleur);
  triangle(50,0,0,150,100,150);

  fill('white');
  ellipse(50,200,50);
  pop ();
}

function draw() {

  maakKerk ('red');

  translate (150,0);

  maakKerk ('green');

  translate (150,0);

  maakKerk ('blue');

}