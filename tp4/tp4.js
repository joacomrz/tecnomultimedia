//VIDEO EXPLICATIVO : https://youtu.be/cxGN2Erh4C0


let estadoJuego = "menu";

let jugador;
let obstaculos = [];
let objetosVoladores = [];
let puntaje = 0;
let ultimoFrameObstaculo = 0;
let ultimoFrameObjetoVolador = 0;
const intervaloSpawnObstaculo = 200;
const intervaloSpawnObjetoVolador = 300;
const espaciadoMinimoObstaculo = 40;
const espaciadoMaximoObstaculo = 140;
let espaciadoObstaculoActual = intervaloSpawnObstaculo;
let estaAgachado = false;
let imagenFondo;
let posXFondo = 0;
let imagenJugador;
let imagenObjetoVolador;
let imagenObstaculo;
let imagenMenu;

function setup() {
  createCanvas(windowWidth, windowHeight);
  jugador = new Jugador();
  obstaculos.push(new Obstaculo());
  noStroke();
  imagenFondo = loadImage("img/fondo.png");
  imagenJugador = loadImage("img/jugador.png");
  imagenObjetoVolador = loadImage("img/estrella.png");
  imagenObstaculo = loadImage("img/pincho.png");
  imagenMenu = loadImage("img/menu.png");
}

function draw() {
  if (estadoJuego === "menu") {
    image(imagenMenu, 0, 0, width, height);
  } else if (estadoJuego === "jugar") {
    posXFondo -= 5;
    for (let x = posXFondo; x < width; x += imagenFondo.width) {
      image(imagenFondo, x, 0, imagenFondo.width, height);
    }
    for (let i = obstaculos.length - 1; i >= 0; i--) {
      obstaculos[i].mover();
      obstaculos[i].mostrar();
      if (obstaculos[i].fueraDePantalla()) {
        obstaculos.splice(i, 1);
      }
    }
    for (let i = objetosVoladores.length - 1; i >= 0; i--) {
      objetosVoladores[i].mover();
      objetosVoladores[i].mostrar();
      if (objetosVoladores[i].fueraDePantalla()) {
        objetosVoladores.splice(i, 1);
      }
    }
    jugador.actualizar();
    jugador.mostrar();
    if (keyIsDown(83)) {
      estaAgachado = true;
      jugador.reducirHitbox();
    } else {
      estaAgachado = false;
      jugador.restablecerHitbox();
    }
    for (let obstaculo of obstaculos) {
      if (jugador.colisiona(obstaculo)) {
        console.log("El jugador chocó contra un obstáculo");
        finDelJuego();
      }
    }
    for (let objetoVolador of objetosVoladores) {
      if (jugador.colisiona(objetoVolador)) {
        console.log("El jugador chocó contra un objeto volador");
        finDelJuego();
      }
    }
    if (frameCount - ultimoFrameObstaculo >= espaciadoObstaculoActual) {
      obstaculos.push(new Obstaculo());
      ultimoFrameObstaculo = frameCount;
    }
    if (frameCount - ultimoFrameObjetoVolador >= intervaloSpawnObjetoVolador) {
      objetosVoladores.push(new ObjetoVolador());
      ultimoFrameObjetoVolador = frameCount;
    }
    puntaje++;
    if (puntaje % 1000 === 0 && espaciadoObstaculoActual > espaciadoMinimoObstaculo) {
      espaciadoObstaculoActual -= 40;
      if (espaciadoObstaculoActual < espaciadoMinimoObstaculo) {
        espaciadoObstaculoActual = espaciadoMinimoObstaculo;
      }
    }
    fill(255)
    stroke(255)
    textSize(64);
    text(puntaje, 940, windowHeight - 600);
    noStroke()
  } else if (estadoJuego === "finDelJuego") {
    textSize(64);
    textAlign(CENTER, CENTER);
    fill(255, 0, 0);
    text('FIN DEL JUEGO', width / 2, height / 2);
    textSize(32);
    fill(255);
    text('Presiona "R" para Reiniciar', width / 2, height / 1.5);
  }
}

function finDelJuego() {
  estadoJuego = "finDelJuego";
}

function keyPressed() {
  if (estadoJuego === "menu") {
    if (key == ' ' || key == 'ArrowUp') {
      estadoJuego = "jugar";
    }
  } else if (estadoJuego === "jugar") {
    if ((key == ' ' || key == 'ArrowUp') && !estaAgachado) {
      jugador.saltar();
    }
  } else if (estadoJuego === "finDelJuego") {
    if (key == 'r' || key == 'R') {
      reiniciarJuego();
    }
  }
}

function reiniciarJuego() {
  estadoJuego = "menu";
  obstaculos = [];
  objetosVoladores = [];
  puntaje = 0;
  espaciadoObstaculoActual = intervaloSpawnObstaculo;
  posXFondo = 0;
  jugador = new Jugador();
  loop();
}

class Jugador {
  constructor() {
    this.tamano = 50;
    this.tamanoBase = this.tamano;
    this.x = 50;
    this.y = height - this.tamano;
    this.velocidadY = 0;
    this.gravedad = 1.5;
  }

  saltar() {
    if (this.y == height - this.tamano) {
      this.velocidadY = -20;
    }
  }

  colisiona(obstaculo) {
    let jugadorIzquierda = this.x;
    let jugadorDerecha = this.x + this.tamano;
    let jugadorArriba = this.y;
    let jugadorAbajo = this.y + this.tamano;

    let obstaculoIzquierda = obstaculo.x;
    let obstaculoDerecha = obstaculo.x + obstaculo.w;
    let obstaculoArriba = obstaculo.y;
    let obstaculoAbajo = obstaculo.y + obstaculo.h;

    if (
      jugadorIzquierda < obstaculoDerecha &&
      jugadorDerecha > obstaculoIzquierda &&
      jugadorArriba < obstaculoAbajo &&
      jugadorAbajo > obstaculoArriba
    ) {
      return true;
    }

    return false;
  }

  reducirHitbox() {
    this.tamano = this.tamanoBase - 20;
  }

  restablecerHitbox() {
    this.tamano = this.tamanoBase;
  }

  actualizar() {
    this.velocidadY += this.gravedad;
    this.y += this.velocidadY;
    this.y = constrain(this.y, 0, height - this.tamano);
  }

  mostrar() {
    image(imagenJugador, this.x, this.y, this.tamano, this.tamano);
  }
}

class Obstaculo {
  constructor() {
    this.w = 35;
    this.h = 35;
    this.x = width;
    this.y = height - this.h;
  }

  mover() {
    this.x -= 5;
  }

  fueraDePantalla() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }

  mostrar() {
    image(imagenObstaculo, this.x, this.y, this.w, this.h);
  }
}

class ObjetoVolador {
  constructor() {
    this.w = 30;
    this.h = 30;
    this.x = width;
    this.y = height * 0.925;
  }

  mover() {
    this.x -= 5;
  }

  fueraDePantalla() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }

  mostrar() {
    image(imagenObjetoVolador, this.x, this.y, this.w, this.h);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
