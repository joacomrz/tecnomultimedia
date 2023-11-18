//video explicativo: https://www.youtube.com/watch?v=iACY8dZYOsU&ab_channel=sewrath

let juego;

function setup() {
  juego = new Juego();
  juego.setup();
}

function draw() {
  juego.draw();
}

function windowResized() {
  juego.windowResized();
}

function keyPressed() {
  if (keyCode === ENTER) {
    juego.reiniciar();
  }
}

class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.balas = [];
    this.tablero = new Tablero();
    this.GameOver = false;
    this.velocidadBala = 2;
    this.tamanoBala = 15;
    this.intervaloMinSpawn = 1;
    this.intervaloMaxSpawn = 1;
    this.siguienteAparicionFrame = 0;
    this.puntaje = 0;
    this.tamanoMaximoBala = 70;
    this.frecuenciaMaximaSpawn = 200;
    this.imagenBala = loadImage("img/hueso.png");
    this.imagenJugador = loadImage("img/jugador.png");
    this.imagenFondo = loadImage("img/fondo.png");
  }

  reiniciar() {
    this.jugador = new Jugador();
    this.balas = [];
    this.GameOver = false;
    this.velocidadBala = 2;
    this.tamanoBala = 15;
    this.intervaloMinSpawn = 1;
    this.intervaloMaxSpawn = 1;
    this.siguienteAparicionFrame = frameCount + int(random(this.intervaloMinSpawn, this.intervaloMaxSpawn));
    this.puntaje = 0;
  }

  setup() {
    createCanvas(windowWidth, windowHeight);
    this.siguienteAparicionFrame = frameCount + int(random(this.intervaloMinSpawn, this.intervaloMaxSpawn));
  }

  draw() {
    background(this.imagenFondo);

    if (!this.GameOver) {
      this.jugador.x = mouseX;
      this.jugador.mostrar();
      this.tablero.mostrar();

      // Comprobar colisiones con las balas
      for (let i = this.balas.length - 1; i >= 0; i--) {
        this.balas[i].mover();
        this.balas[i].mostrar();
        if (dist(this.jugador.x, height - 20, this.balas[i].x, this.balas[i].y) < this.tamanoBala / 2) {
          this.GameOver = true;
          break;
        }
      }

      if (frameCount >= this.siguienteAparicionFrame) {
        // Agregar balas enemigas con un retraso de aparición aleatorio
        for (let i = 0; i < 20; i++) {
          let enemigoX = random(width);
          let retrasoAparicion = int(random(this.intervaloMinSpawn, this.intervaloMaxSpawn));
          this.balas.push(new Bala(enemigoX, 0, this.velocidadBala, this.tamanoBala, retrasoAparicion));
        }

        this.siguienteAparicionFrame = frameCount + int(random(this.intervaloMinSpawn, this.intervaloMaxSpawn));
      }

      this.velocidadBala += 0.005;

      if (this.tamanoBala < this.tamanoMaximoBala) {
        this.tamanoBala += 0.05;
      }

      if (this.puntaje < 200) {
        this.intervaloMinSpawn = 1 - int(this.puntaje / 10);
        this.intervaloMaxSpawn = this.frecuenciaMaximaSpawn;
      }

      this.puntaje++;
    } else {
      textSize(32);
      fill(255, 0, 0);
      textAlign(CENTER,CENTER)
      text("TE HAN MATADO(ENTER PARA REINTENTAR)", width / 2, height / 2);
    }
  }

  windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
}
