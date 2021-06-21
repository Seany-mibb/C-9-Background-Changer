var btn_red;
var btn_green;
var btn_blue;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

  //create a button for red
  btn_red = createButton("Red");
  btn_red.position(150,200);
  btn_red.mousePressed(red_bg);

  //create a button for green
  btn_green = createButton("Green");
  btn_green.position(150,100);
  btn_green.mousePressed(green_bg);

  //create a button for blue
  btn_blue = createButton("Blue");
  btn_blue.position(150,250);
  btn_blue.mousePressed(blue_bg);
}

function draw() {
  background(r,g,b);
}

function red_bg(){
  r = 255;
  b = 0;
  g = 0;
}

function green_bg(){
  r = 0;
  b = 0;
  g = 255;
}

function blue_bg(){
  r = 0;
  b = 255;
  g = 0;
}



