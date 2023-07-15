String[] texto;
PImage[] imagenes = new PImage[23];
String[] lineas;
PFont titulos;
PFont normal;
int estado;
boolean apreteBotonMenu;
boolean caseclickeado = false;
int conseguirestadoactual() {
  return estado;
}


void setup(){
  size( 600, 600 );
  estado = 0;  
  lineas = loadStrings("lbdmt.txt");
  titulos = loadFont("Ancient-Medium-48.vlw");
  normal = loadFont("BaskOldFace-48.vlw");
  
  imagenes[0] = loadImage("0.png");
  imagenes[1] = loadImage("1.png");
  imagenes[2] = loadImage("2.png");
  imagenes[3] = loadImage("3.png");
  imagenes[4] = loadImage("4d.png");
  imagenes[5] = loadImage("5.png");
  imagenes[6] = loadImage("6.png");
  imagenes[7] = loadImage("7.png");
  imagenes[8] = loadImage("8.png");
  imagenes[9] = loadImage("8b.png");
  imagenes[10] = loadImage("9.png");
  imagenes[11] = loadImage("9b.png");
  imagenes[12] = loadImage("10.png");
  imagenes[13] = loadImage("10b.png");
  imagenes[14] = loadImage("11.png");
  imagenes[15] = loadImage("11b.png");
  imagenes[16] = loadImage("12.png");
  imagenes[17] = loadImage("13.png");
  imagenes[18] = loadImage("14.png");
  imagenes[19] = loadImage("15.png");
  imagenes[20] = loadImage("16.png");
  imagenes[21] = loadImage("borde.png");

  apreteBotonMenu = true;

}

void draw(){
    int estadoactual = conseguirestadoactual();
  println("Estado actual: " + estadoactual);
  switch(estado){
    case 0:
    noStroke();
      image(imagenes[20], 0, 0);
      textFont(titulos, 48);
      
      textSize( 91 );
      textAlign( CENTER, CENTER );
      fill( 188,160,84, frameCount );
      text( "La Bella\n Durmiente", 300, 115 );
      fill( 255, frameCount );
      text( "La Bella\n Durmiente", 300, 120 );
        image(imagenes[21],80, 0);
      dibujarBoton(200, 350, 200, 100, imagenes[21], "EMPEZAR");
      
      break;
    case 1:
      image(imagenes[1], 0, 0);
      
      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 0; i < min(6, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * i));
      }
      dibujarBoton(200, 350, 200, 100, imagenes[21], "ENTRAR");

      
      break;  
      
      
      case 2:
      image(imagenes[2], 0, 0);
      
      textSize( 20 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 6; i < min(12, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-6)));
      }
      dibujarBoton(50, 250, 200, 100, imagenes[21], "IR");
      dibujarBoton(350, 250, 200, 100, imagenes[21], "VOLVER");
      break;    
      
      case 3:
      image(imagenes[3], 0, 0);
      
      textSize( 20 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 17; i < min(25, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-18)));
      }
      dibujarBoton(50, 250, 200, 100, imagenes[21], "IZQUIERDA");
      dibujarBoton(350, 250, 200, 100, imagenes[21], "DERECHA");
      break;    
      
      case 4:
      image(imagenes[0], 0, 0);
      
      textSize( 20 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 13; i < min(17, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-13)));
      
      }
      dibujarBoton(200, 350, 200, 100, imagenes[21], "REINTENTAR");
      break;     
      case 5:
      image(imagenes[4], 0, 0);
      
      textSize( 20 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      text("...", 310, 50 + 20 );
      dibujarBoton(200, 350, 200, 100, imagenes[21], "REINTENTAR");
      
      break;      
      case 6:
      image(imagenes[6], 0, 0);
      
      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 25; i < min(31, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-25)));
      }
      dibujarBoton(50, 250, 200, 100, imagenes[21], "TOMAR LA\nESPADA");
      dibujarBoton(350, 250, 200, 100, imagenes[21], "NO TOMAR\nLA ESPADA");  
      break; 
      case 7:
      image(imagenes[8], 0, 0);
      
      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 32; i < min(37, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-32)));
      }
      dibujarBoton(200, 350, 200, 100, imagenes[21], "CONTINUAR");
      break; 
      case 8:
      image(imagenes[10], 0, 0);
      
      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 37; i < min(41, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-37)));
      }
      dibujarBoton(50, 250, 200, 100, imagenes[21], "MATARLO");
      dibujarBoton(350, 250, 200, 100, imagenes[21], "IGNORARLO");
      break; 
      case 9:
      image(imagenes[12], 0, 0);
      
      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 43; i < min(45, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-43)));
      }
      dibujarBoton(200, 350, 200, 100, imagenes[21], "CONTINUAR");
      break; 
      case 10:
      image(imagenes[14], 0, 0);
      
      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 47; i < min(52, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-47)));
      }
      dibujarBoton(200, 350, 200, 100, imagenes[21], "ACERCARSE");
      break; 
      case 11:
      image(imagenes[16], 0, 0);
      
      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 52; i < min(55, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-52)));
      }
      dibujarBoton(200, 350, 200, 100, imagenes[21], "CONTINUAR");
      break; 
      case 12:
      image(imagenes[17], 0, 0);
      
      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      text("...", 310, 50 + 20 );
      dibujarBoton(200, 350, 200, 100, imagenes[21], "...");
      break; 
      case 13:
      image(imagenes[19], 0, 0);
      
      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 56; i < min(62, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-56)));
      }
      dibujarBoton(200, 350, 200, 100, imagenes[21], "REINTENTAR");
      break; 
      
      case 14:
      image(imagenes[10], 0, 0);
      
      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 45; i < min(47, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-45)));
      }
      dibujarBoton(200, 350, 200, 100, imagenes[21], "CONTINUAR");
      break; 
      
      case 15:
      image(imagenes[14], 0, 0);
      
      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 47; i < min(52, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-47)));
      }
      dibujarBoton(200, 350, 200, 100, imagenes[21], "ACERCARSE");
      break; 
      
      case 16:
      image(imagenes[16], 0, 0);
      
      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 52; i < min(55, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-52)));
      }
      dibujarBoton(200, 350, 200, 100, imagenes[21], "CONTINUAR");
      break; 

      case 17:
      image(imagenes[16], 0, 0);
      
      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 63; i < min(65, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-63)));
      }
      dibujarBoton(50, 250, 200, 100, imagenes[21], "PARA\nAPODERARME");
      dibujarBoton(350, 250, 200, 100, imagenes[21], "DEFENSA\nPROPIA");
      break; 
      
      case 18:
      image(imagenes[16], 0, 0);
      
      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 67; i < min(72, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-67)));
      }
      dibujarBoton(200, 350, 200, 100, imagenes[21], "REINTENTAR");
      break; 
      case 19:
      image(imagenes[16], 0, 0);
      
      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 72; i < min(75, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-72)));
      }
      dibujarBoton(200, 350, 200, 100, imagenes[21], "REINTENTAR");
      break; 
      
      case 20:
      image(imagenes[9], 0, 0);
      
      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 32; i < min(37, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-32)));
      }
      dibujarBoton(200, 350, 200, 100, imagenes[21], "CONTINUAR");
      break; 
      case 21:
      image(imagenes[11], 0, 0);
      
      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 37; i < min(41, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-37)));
      }
      dibujarBoton(200, 350, 200, 100, imagenes[21], "IGNORARLO");
      break; 
      
      case 22:
      image(imagenes[11], 0, 0);
      
      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 45; i < min(47, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-45)));
      }
      dibujarBoton(200, 350, 200, 100, imagenes[21], "CONTINUAR");
      break; 
      case 23:
      
      image(imagenes[13], 0, 0);

      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 47; i < min(52, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-47)));
      }
      dibujarBoton(200, 350, 200, 100, imagenes[21], "ACERCARSE");
      break; 
      case 24:
      
      image(imagenes[15], 0, 0);

      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 75; i < min(80, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-75)));
      }
      dibujarBoton(200, 350, 200, 100, imagenes[21], "CONTINUAR");
      break; 
      case 25:
      
      image(imagenes[18], 0, 0);

      textSize( 40 );
      textAlign( CENTER, CENTER );
      fill( 255 );
      image(imagenes[21],0, 0,600,200);     
      textFont(normal, 18);
      for (int i = 80; i < min(86, lineas.length); i++) {
      text(lineas[i], 310, 50 + (20 * (i-80)));
      }
      dibujarBoton(200, 350, 200, 100, imagenes[21], "ÉXITO!\n(VOLVER A EMPEZAR)");
      break; 


    default:
      println("Fuera de la aventura");
      break;
  }
  


}

void dibujarBoton(int x, int y, int width, int height, PImage image, String texto) {
      if( dist(mouseX,mouseY,x+90,y)<=120 ){
        fill( 188,160,84, 100 );
      }else{
        fill( 188,160,84,50 );
      }
  rect(x, y, width, height);
  image(image, x - 10, y - 10, width + 20, height + 20);
  textSize(30);
  fill(255);
  text(texto, x + width / 2, y + height / 2);
}

void mousePressed() {
  if (estado == 0) {
    if (dist(mouseX, mouseY, 300, 400) <= 100) {
      estado = 1;
    }
  } else if (estado == 1) {
    if (dist(mouseX, mouseY, 300, 400) <= 100) {
      estado = 2;
    }
  } else if (estado == 2) {
    if (mouseX < width/2) {
      estado = 3;
    } else if (mouseX > width/2) {
      estado = 4;
    }
  } else if (estado == 3) {
    if (mouseX < width/2) {
      estado = 5;
    } else if (mouseX > width/2) {
      estado = 6;
    }
  } else if (estado == 4 || estado == 5 || estado == 13 || estado == 18 || estado == 19 || estado == 25) {
    if (dist(mouseX, mouseY, 300, 400) <= 100) {
      estado = 0;
    }
  } else if (estado == 6) {
    if (mouseX < width/2) {
      estado = 7;
    } else if (mouseX > width/2) {
      estado = 20;
    }
  } else if (estado == 7) {
    if (dist(mouseX, mouseY, 300, 400) <= 100) {
      estado = 8;
    }
  } else if (estado == 8) {
    if (mouseX < width/2) {
      estado = 9;
    } else if (mouseX > width/2) {
      estado = 14;
    }
  } else if (estado == 9) {
    if (dist(mouseX, mouseY, 300, 400) <= 100) {
      estado = 10;
    }
  } else if (estado == 10) {
    if (dist(mouseX, mouseY, 300, 400) <= 100) {
      estado = 11;
    }
  } else if (estado == 11) {
    if (dist(mouseX, mouseY, 300, 400) <= 100) {
      estado = 12;
    }
  } else if (estado == 12) {
    if (dist(mouseX, mouseY, 300, 400) <= 100) {
      estado = 13;
    }
  } else if (estado == 14) {
    if (dist(mouseX, mouseY, 300, 400) <= 100) {
      estado = 15;
    }
  } else if (estado == 15) {
    if (dist(mouseX, mouseY, 300, 400) <= 100) {
      estado = 16;
    }
  } else if (estado == 16) {
    if (dist(mouseX, mouseY, 300, 400) <= 100) {
      estado = 17;
    }
  } else if (estado == 17) {
    if (mouseX < width/2) {
      estado = 19;
    } else if (mouseX > width/2) {
      estado = 18;
    }
  }
  else if (estado == 20) {
    if (dist(mouseX, mouseY, 300, 400) <= 100) {
      estado = 21;
    }
}
  else if (estado == 21) {
    if (dist(mouseX, mouseY, 300, 400) <= 100) {
      estado = 22;
    }
}
  else if (estado == 22) {
    if (dist(mouseX, mouseY, 300, 400) <= 100) {
      estado = 23;
    }
}
  else if (estado == 23) {
    if (dist(mouseX, mouseY, 300, 400) <= 100) {
      estado = 24;
    }
}
  else if (estado == 24) {
    if (dist(mouseX, mouseY, 300, 400) <= 100) {
      estado = 25;
    }
}
}
