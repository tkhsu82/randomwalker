//Parameters
var dotCount = 500;
var points = [];

function preload() {
  theImage = loadImage("https://raw.githubusercontent.com/tkhsu82/randomwalker/master/Random_walk_line/img/rem-koolhaas.jpg"); 
}


function setup() {
  
  //get image size
  w = theImage.width;
  h = theImage.height;
  createCanvas(w, h);
  
  //get pixel data
  image(theImage, 0,0);
  var img = get(0, 0, w, h);
  img.loadPixels(); 
  
  px = img.pixels;
  // white background
  background(255);
  
  for(var i = 0; i < dotCount; i++){
   points[i] = new dots(); //call dot class
  }
  
 // createLoop({duration:30,gif:true})
  
}

function draw() {
    
   var fc = frameCount;
  console.log(fc);
  

  for(var i = 0; i < points.length; i++){
    
    points[i].drawPoint(fc);
    points[i].movePoint();
    //points[i].drawLine(fc);
    
    if(fc === 2000){
      noLoop();
    }
  }
}

function dots(){
  this.x = random(0, width);
  this.y = random(0, height);
  this.oldX = this.x;
  this.oldY = this.y;
  this.r = 1;
  this.speedX;
  this.speedY;
  this.off;
  this.m;
  this.stepSize;
  
  
  this.drawPoint = function(fc){
   
    //fill(50);
    noStroke();
    
    //pixel location
    var x1 = floor(this.oldX);
    var y1 = floor(this.oldY);
    var off = (y1 * w + x1) * 4; 
    
    var m = (px[off] + px[off+1] + px[off+2]) / 3; 
    var ellipseSize = map(m, 255, 0, 1, 4);
    //var ellipseColor = map(m, 0, 255, 0, 200);
    ellipse(this.oldX, this.oldY, ellipseSize, ellipseSize);

    fill(m);
    
    
    

  }
  
  this.movePoint = function(){
    
    //make old pt
    this.oldX = this.x;
    this.oldY = this.y;
    
    
    //pixel location
    var x1 = floor(this.oldX);
    var y1 = floor(this.oldY);
    var off = (y1 * w + x1) * 4; 
    
    //average pixel value
    var m = (px[off] + px[off+1] + px[off+2]) / 3; 
    var stepSize = map(m, 0, 255, 5, 30);
    
    this.speedX = random(-stepSize, stepSize);
    this.speedY = random(-stepSize, stepSize);
    
    
    //move old pt
    this.x += this.speedX;
    this.y += this.speedY;
    
    
    
    if(this.x < 0){
      this.x = 0;
    }
    else if(this.x > width){
      this.x = width;
    }
    else if(this.y < 0){
      this.y = 0;
    }
    else if(this.y > height){
      this.y = height;
    }
    
    /*if(this.x < 0||this.x > width || this.y < 0 ||this.y > height){
     this.x = random(0, width);
      this.y = random(0, height);
    }*/
  }
  
  //draw line
  this.drawLine = function(fc){
    
    if (800 < fc && 20 < int(dist(this.oldX, this.oldY, this.x, this.y))){
    stroke(255, 10);
    line(this.oldX, this.oldY, this.x, this.y);}
    
//    else if(3000 < fc){
  //    stroke(0, 5);
    //  line(this.oldX, this.oldY, this.x, this.y);
    //}
            
    else {
      stroke(0, 5);
      line(this.oldX, this.oldY, this.x, this.y);}
      
    
  }
  
}  
