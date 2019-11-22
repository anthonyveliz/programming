var ellipseDiam = 100;

var fontSize = 20;

function setup() {
    createCanvas(600, 600)
}

function draw() {
    background('Black');
    
    fill('White');
    ellipse(300, 300, 600 , 600)
    
    fill('Grey')
    ellipse(210, 100, 60, 50)
    
    fill('Grey')
    ellipse(310, 200, 50, 50)
    
    fill('Grey')
    ellipse(510, 300, 70, 70)
    
     fill('Grey')
    ellipse(310, 500, 60, 60)
    
    fill('Grey')
    ellipse(100, 400, 40, 40)
    
       fill('Grey')
    ellipse(200, 300, 90, 90)
    
       fill('Grey')
    ellipse(380, 400, 40, 40)
    
        fill('Green')
    ellipse(60, 60, 40 , 40)
    
        fill('White')
    ellipse(20, 20, 5, 5)
    
    fill('White')
    ellipse(10, 50, 5, 5)
    
      fill('White')
    ellipse(50, 80, 5, 5)
    
      fill('White')
    ellipse(100, 50, 5, 5)
    
      fill('White')
    ellipse(10, 120, 5, 5)
    
    fill('Blue')
    textSize(fontSize);
    text("Earth",60, 60, 40 )
    
    fill('red')
    textSize(fontSize);
    text("Moon", 100, 300)
//    textAlign(CENTER)
    
    
}

function mousePressed() {
    
    fontSize = fontSize + 5;
    
//    ellipseDiamam = ellipseDiamDiam + 5;
//    
    if (fontSize >= 150) {
//        
        fontSize = 100;
    }
}