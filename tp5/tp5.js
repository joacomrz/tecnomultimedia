//Hola profe! Hice este código pensando como el esqueleto gigante de mi historia te atrapaba y tenías que esquivar todos los
//huesos que el te tira, un bullet hell!! no hay condición de WIN es un reto a ver que tanto puntaje se puede lograr.
//quise comentar todo lo posible para ayudar un poco a entenderlo
//VIDEO YOUTUBE EXPLICATIVO: https://www.youtube.com/watch?v=S8aEJxwImL8&ab_channel=sewrath

let jugador;
let balas = [];
let tablero;
let GameOver = false;
let velocidadBala = 2;
let tamanoBala = 15;
let intervaloMinSpawn = 1; // Intervalo mínimo de fotogramas entre apariciones de balas(no lo use porque el juego me parecía muy fácil con esta opción)
let intervaloMaxSpawn = 1;
let siguienteAparicionFrame = 0;
let puntaje = 0;
let tamanoMaximoBala = 70;
let frecuenciaMaximaSpawn = 200;
let imagenBala; 
let imagenJugador; 
let imagenFondo; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  jugador = new Jugador();
  tablero = new Tablero();
  siguienteAparicionFrame = frameCount + int(random(intervaloMinSpawn, intervaloMaxSpawn));
  imagenBala = loadImage("img/hueso.png");
  imagenJugador = loadImage("img/jugador.png");
  imagenFondo = loadImage("img/fondo.png");
}

function draw() {
  background(imagenFondo);

  if (!GameOver) {
    jugador.x = mouseX;
    jugador.mostrar();
    tablero.mostrar();

    // Comprobar colisiones con las balas
    for (let i = balas.length - 1; i >= 0; i--) {
      balas[i].mover();
      balas[i].mostrar();
      if (dist(jugador.x, height - 20, balas[i].x, balas[i].y) < tamanoBala / 2) {
        GameOver = true;
        break;
      }
    }

    if (frameCount >= siguienteAparicionFrame) {
      // Agregar balas enemigas con un retraso de aparición aleatorio
      for (let i = 0; i < 20; i++) { // Aumenta el número de balas, mientras más alto el número más balas (más de 20 es imposible)
        let enemigoX = random(width);
        let retrasoAparicion = int(random(intervaloMinSpawn, intervaloMaxSpawn));
        balas.push(new Bala(enemigoX, 0, velocidadBala, tamanoBala, retrasoAparicion));
      }

      siguienteAparicionFrame = frameCount + int(random(intervaloMinSpawn, intervaloMaxSpawn));
    }

    velocidadBala += 0.005; // Aumento gradual de la velocidad de las balas

    if (tamanoBala < tamanoMaximoBala) {
      tamanoBala += 0.05; // Aumento gradual del tamaño de las balas, limitado a tamanoMaximoBala
    }

    if (puntaje < 200) {
      // Limitar la frecuencia de aparición a medida que el puntaje aumenta
      intervaloMinSpawn = 1 - int(puntaje / 10);
      intervaloMaxSpawn = frecuenciaMaximaSpawn;
    }

    puntaje++; // Esto incrementa la puntuación
  } else {
    textSize(32);
    fill(255, 0, 0);
    text("TE HAN MATADO", width / 2 - 100, height / 2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
