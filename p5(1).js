function setup() {
  createCanvas(600, 600);
  background(255,255,255);
  frameRate(30);
}

function draw() {
  
  v=frameCount*10;
line(v,0,600,v);
line(v,600,0,v);
line(600-v,0,0,v);
line(600,v,600-v,600);
}
