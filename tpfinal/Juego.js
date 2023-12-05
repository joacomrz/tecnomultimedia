class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.balas = [];
    this.tablero = new Tablero();
    this.gameOver = false;
    this.velocidadBala = 2;
    this.tamanoBala = 15;
    this.intervaloMinSpawn = 1;
    this.intervaloMaxSpawn = 1;
    this.siguienteAparicionFrame = 0;
    this.puntaje = 0;
    this.tamanoMaximoBala = 70;
    this.frecuenciaMaximaSpawn = 200;
    this.imagenBala = loadImage("data/hueso.png");
    this.imagenJugador = loadImage("data/jugador.png");
    this.imagenFondo = loadImage("data/fondo.png");
    this.iniciarMinijuego = false;
  }



  setup() {
    createCanvas(windowWidth, windowHeight);
    this.siguienteAparicionFrame = frameCount + int(random(this.intervaloMinSpawn, this.intervaloMaxSpawn));
  }

  update() {
    if (!this.gameOver || this.iniciarMinijuego) {
      this.jugador.x = mouseX;

      if (this.puntaje >= 5000) {
        currentScreen = screens[20];
        this.balas = [];
        this.velocidadBala = 2;
        this.tamanoBala = 15;
        this.intervaloMinSpawn = 1;
        this.intervaloMaxSpawn = 1;
        this.siguienteAparicionFrame = 0;
        this.puntaje = 0;
      }

      
      for (let i = this.balas.length - 1; i >= 0; i--) {
        this.balas[i].mover();
        if (dist(this.jugador.x, height - 20, this.balas[i].x, this.balas[i].y) < this.tamanoBala / 2) {
          currentScreen= screens[19];
        }
      }
      if (currentScreen === screens[19]) {
      this.balas = [];
      this.velocidadBala = 2;
      this.tamanoBala = 15;
      this.intervaloMinSpawn = 1;
      this.intervaloMaxSpawn = 1;
      this.siguienteAparicionFrame = 0;
      this.puntaje = 0;
    }


      if (this.iniciarMinijuego) {
        if (frameCount >= this.siguienteAparicionFrame) {
          for (let i = 0; i < 20; i++) {
            let enemigoX = random(width);
            let retrasoAparicion = int(random(this.intervaloMinSpawn, this.intervaloMaxSpawn));
            this.balas.push(new Bala(enemigoX, 0, this.velocidadBala, this.tamanoBala, retrasoAparicion));
          }

          this.siguienteAparicionFrame = frameCount + int(random(this.intervaloMinSpawn, this.intervaloMaxSpawn));
        }
      } else {
        if (frameCount >= this.siguienteAparicionFrame) {
          for (let i = 0; i < 20; i++) {
            let enemigoX = random(width);
            let retrasoAparicion = int(random(this.intervaloMinSpawn, this.intervaloMaxSpawn));
            this.balas.push(new Bala(enemigoX, 0, this.velocidadBala, this.tamanoBala, retrasoAparicion));
          }

          this.siguienteAparicionFrame = frameCount + int(random(this.intervaloMinSpawn, this.intervaloMaxSpawn));
        }

        this.velocidadBala += 0.002;

        if (this.tamanoBala < this.tamanoMaximoBala) {
          this.tamanoBala += 0.02;
        }

        if (this.puntaje < 200) {
          this.intervaloMinSpawn = 1 - int(this.puntaje / 10);
          this.intervaloMaxSpawn = this.frecuenciaMaximaSpawn;
        }

        this.puntaje++;
      }
    }
  }

  draw() {
    background(this.imagenFondo);
    this.update()
      if (!this.gameOver) {
      this.jugador.mostrar();
      this.tablero.mostrar();

      for (let i = 0; i < this.balas.length; i++) {
        this.balas[i].mostrar();
      }
    } else {
      textSize(32);
      fill(255, 0, 0);
      textAlign(CENTER, CENTER);
      text("TE HAN MATADO(ENTER PARA REINTENTAR)", width / 2, height / 2);
    }
  }

  windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
}
