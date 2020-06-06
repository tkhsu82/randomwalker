



var points = [];
var dotCount = 1;

function preload() {
  theImage = theImage = loadImage('img/art.jpg');
}


function setup() {
  w = theImage.width;
  h = theImage.height;
  createCanvas(w, h);
  
  
  image(theImage, 0,0);
  var img = get(0, 0, w, h);
  img.loadPixels();
  px = img.pixels;
  
  background(255);
  
  for(var i = 0; i < dotCount; i++){
   points[i] = new dots();
  }
}

function draw() {
  

  for(var i = 0; i < points.length; i++){
    
    
    points[i].drawPoint();
    points[i].movePoint();
    points[i].drawLine();
  }
}

function dots(){
  this.x = random(0, width);
  this.y = random(0, height);
  this.oldX = this.x;
  this.oldY = this.y;
  this.r = 1;
  this.speedX = 0;
  this.speedY = 0;
  this.off = 0;
  this.m = 0;
  this.stepSize = 0;
  
  this.drawPoint = function(){
   
    fill(0, 0, 0);
    noStroke();
    ellipse(this.oldX, this.oldY, this.r, this.r);
  }
  
  this.movePoint = function(){
    this.oldX = this.x;
    this.oldY = this.y;
    
    
    var x1 = floor(this.oldX);
    var y1 = floor(this.oldY);
    var off = (y1 * w + x1) * 4;
    var m = (px[off] + px[off+1] + px[off+2]) / 3;
    var stepSize = map(m, 0, 255, 1, 30);
    
    
    this.speedX = random(-stepSize, stepSize);
    this.speedY = random(-stepSize, stepSize);
    
    this.x += this.speedX;
    this.y += this.speedY;
    
    
    if(this.x < 0||this.x > width || this.y < 0 ||this.y > height){
     this.x = random(0, width);
      this.y = random(0, height);
    }
  }
  
  this.drawLine = function(){
    stroke(0, 50);
    line(this.oldX, this.oldY, this.x, this.y);
  }
  
  
  
}  

  
  
