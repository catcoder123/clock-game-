var sc, mn, hr;
var hour, minute, second;


function setup() {
  createCanvas(800,400);
hr = hour();
mn = minute();
sc = second();

}

function draw() {
  background(255,255,255);  
  angleMode(DEGREES);
scAngle = map(sc, 0, 60, 0, 360);
hrAngle = map(hr,12);
arc(50, 50, 80, 80, 0, PI + QUARTER_PI);
push();
rotate(scAngle)
stroke(255, 0, 0);
strokeWeight(7);
line(0,0,100,0);
pop();
translate(0, 0);
}