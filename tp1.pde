

String estado;
int c;
boolean botonapretado = false;
PImage fondo;
String guepardo;
String datos;
String habitat;
int transparencia = 0;
PImage estado1;
PImage estado1d;
PImage estado2;
PImage ch1;
PImage ch2;
PImage ch3;
PImage ch4;
PImage ch5;
PImage savana;
PImage savana2;
PImage bg3;
PImage bg4;
PImage bgnoche;
float x = -50;
float y = height/2;
float tamaño = 50;
float x2 = -400;

void setup() {
  size( 640, 480 );
  textAlign( CENTER, CENTER );
  textSize( 50 );
  fill(200);
  fondo = loadImage("bg.png");
  estado1 = loadImage("estado1.png");
  estado2 = loadImage("estado2.png");
  ch1 = loadImage("ch1.png");
  ch2 = loadImage("ch2.png");
  ch3 = loadImage("ch3.png");
  ch4 = loadImage("ch4.png");
  ch5 = loadImage("ch5.png");
  savana = loadImage("bg2.jpg");
  savana2 = loadImage("savana.png");
  bg3 = loadImage("bg3.png");
  bg4 = loadImage("bg4.png");
  bgnoche = loadImage("bgnoche.png");
  estado1d = loadImage("estado1d.png");
  estado = "menu";
  guepardo = "El Guepardo";
  datos = "DATOS SOBRE EL GUEPARDO";
  habitat = "EL HABITAT DEL GUEPARDO";
  noStroke();
  frameRate( 60 );
}
void draw() {
  //
  //MAQUINA DE ESTADOS --
  //
  if ( estado.equals("menu") ) {
    background(0);
    image(fondo, 0, 0, 640+100, 480+100);
    fill(66, 57, 40);

    if (mouseX > 220 && mouseX < 420 && mouseY > 300 && mouseY < 400)
      guepardo = "Empezar";
    else guepardo = "El Guepardo";

    if (mouseX > 220 && mouseX < 420 && mouseY > 300 && mouseY < 400)
      image(estado2, 160, 200);
    else  image(estado1, 160, 200);

    textSize(100);
    text( guepardo, width/1.96, height/3.96);
    fill(209, 139, 16);
    text( guepardo, width/2, height/4);


    fill(255, 255, 255, 0);

    rect(220, 300, 200, 100);

    //PANTALLA 1
  } else if (estado.equals("p1") ) {
    background(50);
    image(fondo, 0, 0, 640+100, 480+100);


    fill(11, 77, 76);
    x += 5;
    tamaño += 20;
    ellipse(x, y, tamaño, tamaño);
    fill(255, 255, 255);
    image(ch3, -20, 190);

    textSize(35);

    transparencia += 2;
    fill(255, transparencia);

    text("Es un felino de gran tamaño:\n mide entre 110 y 150 cm de longitud,\n tiene una cola de entre 55 a 80 cm.\n Su altura a la cruz es de 74 a 90 cm\n\n pesa entre 35 y 60 kg", 320, 260);

    textSize(50);
    if (x + textWidth(datos)/2 >= width/1.03)
      x = width/1.03 - textWidth(datos)/2;

    text(datos, x, y);
    //el timer
    c++;  //suma 1 per frame
    if ( c >=400 ) {  // 60fps * 10seg = 600
      estado = "p2";
      c = 0;  //RESET DE VARIABLE CONTADOR
      x = -200;
      //
    }
  }
  //PANTALLA 2
  else if (estado.equals("p2") ) {
    textSize(50);

    image(savana, 0, 0, 800, 500);
    image (ch2, 200, 100);

    x += 2;
    fill(11, 77, 76);
    text(habitat, x, y);
    textSize(30);
    fill(11, 77, 76);
    text("Los guepardos o chitas\n se encuentran distribuidos\n desde bosques secos,\n matorrales, pastizales y desiertos.\n De manera histórica,\n se encontraba distribuido\n en gran parte de África y el\n suroeste de Asia.", 252, 272);
    fill(255, 255, 255);
    text("Los guepardos o chitas\n se encuentran distribuidos\n desde bosques secos,\n matorrales, pastizales y desiertos.\n De manera histórica,\n se encontraba distribuido\n en gran parte de África y el\n suroeste de Asia.", 250, 270);


    //
    c++;  //suma 1 per frame
    if ( c >= 600 ) {
      estado = "p3";
      c = 0;  //RESET DE VARIABLE CONTADOR
      x = -200;
      transparencia = 0;
    }
    //
  }
  //PANTALLA 3
  else if (estado.equals("p3") ) {
    background(150);
    image(savana2, 0, 0, 740, 530);

    x += 2;
    image(ch5, x, 150);
    textSize(40);
    transparencia += 1;

    fill(11, 77, 76, transparencia);
    text("El guepardo es el animal\n terrestre más veloz del mundo:\n corre a una velocidad\n máxima de entre 95 y 115 km/h)", 303, 123);
    fill(255, transparencia);
    text("El guepardo es el animal\n terrestre más veloz del mundo:\n corre a una velocidad\n máxima de entre 95 y 115 km/h)", 300, 120);

    c++;  //suma 1 per frame
    if ( c >=400 ) {
      estado = "p4";
      c = 0;  //RESET DE VARIABLE CONTADOR
      x = -200;
      transparencia = 0;
      y = -400;
    }
  } else if (estado.equals("p4") ) {
    background(150);
    image(bg3, 0, 0, 840, 530);
    image(ch4, 250, 230, 640-200, 480-150);
    textSize(30);

    y += 5;
    if (y > 202) {
      y = 202;
    }
    fill(11, 77, 76);
    text("No es un animal especialmente social\n y suele ser solitario.\n Sin embargo, no es extraño encontrar\n pequeñas manadas compuestas\n por hasta 5 o 6 guepardos,\n estas suelen ser las que tienen mayores\n posibilidades de sobrevivir\n al colaborar en la caza.", 322, y);
    fill(254, 255, 255);
    text("No es un animal especialmente social\n y suele ser solitario.\n Sin embargo, no es extraño encontrar\n pequeñas manadas compuestas\n por hasta 5 o 6 guepardos,\n estas suelen ser las que tienen mayores\n posibilidades de sobrevivir\n al colaborar en la caza.", 320, y);

    c++;  //suma 1 per frame
    if ( c >= 600 ) {
      estado = "p5";
      c = 0;  //RESET DE VARIABLE CONTADOR
      x = 640;
      transparencia = 0;
      y = -400;
    }
  } else if (estado.equals("p5") ) {
    background(255);
    image(bg4, 0, 0, 840, 530);
    image(ch1, -110, 70);
    textSize(25);
    x -= 5;
    if (x < 350)
      x = 351;
    fill(11, 77, 76);
    text("A pesar de ser un depredador,\n es un animal especialmente vulnerable,\n lo que conlleva que tan solo 1 de cada 10 guepardos\n recién nacidos lleguen a la etapa adulta.", x, 103);
    fill(254, 255, 255);
    text("A pesar de ser un depredador,\n es un animal especialmente vulnerable,\n lo que conlleva que tan solo 1 de cada 10 guepardos\n recién nacidos lleguen a la etapa adulta.", x, 100);

    x2 += 5;
    if (x2 > 470)
      x2 = 471;
    fill(11, 77, 76);
    text("El guepardo\n no se precipita durante la caza.\n Calcula y espera tacticamente", x2, 253);
    fill(254, 255, 255);
    text("El guepardo\n no se precipita durante la caza.\n Calcula y espera tacticamente", x2, 250);

    c++;  //suma 1 per frame
    if ( c >= 600 ) {
      estado = "p6";
      c = 0;  //RESET DE VARIABLE CONTADOR
      x = 640;
      transparencia = 0;
      y = -400;
    }
  } else if (estado.equals("p6") ) {
    background(255);

    image(bgnoche, 0, 0, 640+100, 480+100);
    fill(66, 57, 40);

    if (mouseX > 220 && mouseX < 420 && mouseY > 300 && mouseY < 400)
      guepardo = "REINICIAR";
    else guepardo = "Gracias por ver!";

    if (mouseX > 220 && mouseX < 420 && mouseY > 300 && mouseY < 400)
      image(estado2, 160, 200);
    else image(estado1d, 160, 200);

    textSize(100);
    text( guepardo, width/1.96, height/3.96);
    fill(209, 139, 16);
    text( guepardo, width/2, height/4);
    fill(255, 255, 255);
    textSize(20);
    text ("descansa guepardo...", 330, 450);
    
  } else {
    text( "no es ningun \n estado preseteado", width/2, height/2 );
  }
  println( estado );
}

void mousePressed() {
  if ( estado.equals("menu") ) {
    if (mouseX > 220 && mouseX < 420 && mouseY > 300 && mouseY < 400) {
      botonapretado = !botonapretado;
      estado = "p1";
    }
  }
  if ( estado.equals("p6") ) {
    if (mouseX > 220 && mouseX < 420 && mouseY > 300 && mouseY < 400) {
      botonapretado = !botonapretado;
      estado = "p1";
    }
  }
}
