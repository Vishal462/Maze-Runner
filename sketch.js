var button1, input1, text1, age1, ageinput1, age;
var bg;
function preload(){
  bg = loadImage("assets/bg.png");
}
function setup(){
  createCanvas(800,400);
  text1 = createElement("h2");
  text1.html("NAME");
  text1.position(320,180);
  input1 = createInput("");
  input1.position(400,210);
}

function draw() {
  background(bg);  
  drawSprites();

}