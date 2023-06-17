//video youtube!! https://youtu.be/6tR73AI3Y8Y

float angulo;
PImage efecto;
color bg;
color cuadraos;
void setup() {
  size(800, 400);
 efecto = loadImage("efecto.png");
  noStroke();
  fill(cuadraos);
  bg = color(255);
  cuadraos = color(0);
  
}

void draw() {
  fill(cuadraos);
  background(bg);
  float x = width;
  float d = 60;
  int num = 53;

  translate(width / 1.3, height / 2);
  
  //cuadrados exteriores
  for (float a = 0; a < 360; a += 11.25) { //itera desde 0° a 360°
    rotate(radians(a));
    
    //MODO MANUAL (se puede resetear con r tambien)
     if ( key == 'm' ) {
      angulo = mouseX/5;
    }
    
    pushMatrix();
    
    for (int i = 0; i < num; i+=1) { //genera linea de cuadrados y su rotacion
      scale(0.95);
      rotate(radians(angulo));
      square(x, 0, d);
    }
    //cuadrados interiores
      for (int i = 18; i < 19; i++) {
    float x2 = i * 40;
    square(x2, 0, 60);
      }
          for (int i = 16; i < 17; i++) {
    float x2 = i * 40;
    square(x2, 0, 50);
      }

    popMatrix();
  }
  image(efecto, 200,-250,600,500);
  angulo += 0.01;
   println( frameRate );

  }
  
  void keyPressed() {

    //USAR C PARA CAMBIAR LOS CUADRADOS, ESPACIO PARA EL FONDO Y USAR LA I PARA INVERTIR COLORES 
    if ( key == 'i' ) {
      cuadraos = color(255); 
      bg = color(0);
    }
    
    if ( key == 'c' ) {
      cuadraos = color( random(255), random(255), random(255) ); 
    }
  
  if ( key == ' ' ) {  
    bg = color( random(100, 255), random(100, 255), random(100, 255) ); 

  }
  
  if ( key == 'r' ){
    resetearVariables();
  }
}
void resetearVariables(){
  bg = color( 255 );
  cuadraos = color(0);
  angulo +=0.1;
}
