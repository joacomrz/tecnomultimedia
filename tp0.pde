PImage pandita;

void setup() {
  size( 800, 400 );

  
  pandita = loadImage("pandita.png");
}

void draw() {
  background(175, 216, 252 );

  
  noStroke();
  
  //fondo
  fill(72, 102, 6);
  ellipse(100, 200, 200, 200);
  ellipse(50, 150, 200, 200);
  ellipse(400, 150, 200, 200);
  ellipse(300, 200, 200, 200);
  ellipse(200, 50, 200, 200);
  ellipse(400, 0, 200, 200);
  ellipse(300, 400, 200, 200);
  
  fill(138, 99, 71);
  quad(50,400, 10, 400, 50, 0, 100, 0);

  
  //orejas
  fill(207-10, 156-10, 117-10);
  quad(200, 43, 370+10, 30-10, 300, 252, 120, 100);
  fill(207-20, 156-20, 117-20);
  quad(200, 43, 370, 30, 300, 252, 120, 100);
  fill(207-40, 156-40, 117-40);
  quad(200, 43, 370-10, 30+10, 300, 252, 120, 100);
  
  fill(207-10, 156-10, 117-10);
  quad(60, 150, 200, 252, 150, 40, 25, 20);
  fill(207-20, 156-20, 117-20);
  quad(60+10, 150+10, 200+10, 252+10, 150+10, 40+10, 25+10, 20+10);
  fill(207-40, 156-40, 117-40);
  quad(60+20, 150+20, 200+20, 252+20, 150+20, 40+20, 25+20, 20+20);
  
  //cuerpo
  fill(46, 10, 9);
  ellipse(200, 350, 330, 350);
  ellipse(150, 400, 290, 300);
  fill(46-5, 10-5, 9-5);
  ellipse(200, 350, 290, 250);
  
  //ojitas del cuerpo
  fill(79-20, 125-20, 67-20);
  ellipse(350, 280, 60, 100);
  ellipse(260, 320, 80, 40);
  ellipse(210, 380, 30, 65);
  fill(79, 125, 67);
  ellipse(300, 300, 100, 50);
  ellipse(230, 350, 50, 65);
  
//cara
  fill(207, 156, 117);
  ellipse(200, 150, 300, 250);
  ellipse(200-50, 150, 200, 220);
  ellipse(200+50, 150, 200, 220);
  fill(46, 10, 9);
  ellipse(200, 200, 310, 170);
  fill(93, 45, 33);
  ellipse(200, 200-10, 310-10, 170-10);
  fill(114, 48, 32);
  ellipse(200, 200-20, 310-20, 170-20);
  fill(165, 103, 65);
  ellipse(200, 200-30, 310-30, 170-30);
  fill(166, 106, 69);
  ellipse(200, 200-30, 310-30, 170-30);
  fill(179, 117, 80);
  ellipse(200, 200-40, 310-40, 170-40);
  fill(193, 134, 92);
  ellipse(200, 200-50, 310-50, 170-50);

  
  //partes blancas de la cara
  fill(218, 217, 208, 180);
  quad(125, 80-20, 160, 84-25, 165, 120-10, 140, 90-20);
  quad(275, 80-20, 240, 84-25, 235, 120-10, 260, 90-20);
  
    fill(218, 217, 208, 180);
   ellipse(200, 180, 120, 140);
   
  fill(218, 217, 208);
  ellipse(200, 195, 120, 120);
  ellipse(200, 220, 120, 120);
  
  fill(218, 217, 208);
  ellipse(200, 200, 150, 100);
  ellipse(200, 180, 100, 100);
  
  fill(160, 121, 72, 180);
  ellipse(200, 230, 100, 100);
  
  fill(218, 217, 208, 180);
  ellipse(200-30, 230, 60,60);
  ellipse(200+30, 230, 60,60);
  
  fill(218, 217, 208);
  ellipse(200+105, 200, 40-10, 60-10);
  ellipse(200+105, 210, 35-10, 60-10);
  ellipse(200+105, 180, 50-10, 90-10);
  ellipse(200+100, 160, 55-10, 80);
  ellipse(200+102, 230, 15, 16);
  
  fill(218, 217, 208);
  ellipse(200-105, 200, 40-10, 60-10);
  ellipse(200-105, 210, 35-10, 60-10);
  ellipse(200-105, 180, 50-10, 90-10);
  ellipse(200-100, 160, 55-10, 80);
  ellipse(200-102, 230, 15, 16);

  
  //ojitos
  fill(216, 172, 144, 200);
  ellipse(200-70, 115, 60, 60);
  fill(30, 30, 30);
  ellipse(200-70, 120, 40, 35);
  fill(87, 49, 31);
  ellipse(200-70, 120, 30, 25);
  fill(255, 255, 255);
  ellipse(200-75, 118, 10, 10);
  
  fill(216, 172, 144, 200);
  ellipse(200+70, 115, 60, 60);
  fill(30, 30, 30);
  ellipse(200+70, 120, 40, 35);
  fill(87, 49, 31);
  ellipse(200+70, 120, 30, 25);
  fill(255, 255, 255);
  ellipse(200+65, 118, 10, 10);
  
  //nariz y boca
   fill(30, 30, 30);
  ellipse(200, 170, 54, 35);
  ellipse(200, 210, 100, 35);
  ellipse(200, 215, 60, 35);
  fill(218, 217, 208);
   ellipse(200+40, 195, 65, 35);
   ellipse(200-40, 195, 65, 35);
   //lengua
   fill(184, 92, 82);
   ellipse(200, 225, 40, 40);
   fill(30, 30, 30);
   ellipse(200, 210, 30, 15);
   //nariz
  fill(0, 0, 0);
  ellipse(200, 180, 40, 40);
  ellipse(200, 175, 50, 35);
  
  image( pandita, 400, 0 );
}