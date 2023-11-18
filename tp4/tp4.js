// video explicativo https://youtu.be/pt2NMjkE1LI

// ENTREGA 1 DESAPROBADA PORQUE UTILICE CLASES

let estadoJuego = "menu";

let jugadorX;
let jugadorY;
let jugadorTamano;
let jugadorVelocidadY;
let jugadorGravedad;
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
let jugadorTamanoBase = 50;
let jugadorTamanoActual = jugadorTamanoBase;

function setup() {
  createCanvas(windowWidth, windowHeight);
  jugadorX = 50;
  jugadorY = height - 50;
  jugadorTamano = jugadorTamanoBase;
  jugadorVelocidadY = 0;
  jugadorGravedad = 1.5;
  obstaculos.push({ x: width, y: height - 35, w: 35, h: 35 });
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
      moverObstaculo(obstaculos[i]);
      mostrarObstaculo(obstaculos[i]);
      if (fueraDePantalla(obstaculos[i])) {
        obstaculos.splice(i, 1);
      }
    }
    for (let i = objetosVoladores.length - 1; i >= 0; i--) {
      moverObjetoVolador(objetosVoladores[i]);
      mostrarObjetoVolador(objetosVoladores[i]);
      if (fueraDePantalla(objetosVoladores[i])) {
        objetosVoladores.splice(i, 1);
      }
    }
    actualizarJugador();
    mostrarJugador();
    if (keyIsDown(83)) {
      estaAgachado = true;
      reducirHitbox();
    } else {
      estaAgachado = false;
      restablecerHitbox();
    }
    for (let obstaculo of obstaculos) {
      if (colisiona(jugadorX, jugadorY, jugadorTamano, jugadorTamano, obstaculo.x, obstaculo.y, obstaculo.w, obstaculo.h)) {
        console.log("El jugador chocó contra un obstáculo");
        finDelJuego();
      }
    }
    for (let objetoVolador of objetosVoladores) {
      if (colisiona(jugadorX, jugadorY, jugadorTamano, jugadorTamano, objetoVolador.x, objetoVolador.y, objetoVolador.w, objetoVolador.h)) {
        console.log("El jugador chocó contra un objeto volador");
        finDelJuego();
      }
    }
    if (frameCount - ultimoFrameObstaculo >= espaciadoObstaculoActual) {
      obstaculos.push({ x: width, y: height - 35, w: 35, h: 35 });
      ultimoFrameObstaculo = frameCount;
    }
    if (frameCount - ultimoFrameObjetoVolador >= intervaloSpawnObjetoVolador) {
      objetosVoladores.push({ x: width, y: height * 0.925, w: 30, h: 30 });
      ultimoFrameObjetoVolador = frameCount;
    }
    puntaje++;
    if (puntaje % 1000 === 0 && espaciadoObstaculoActual > espaciadoMinimoObstaculo) {
      espaciadoObstaculoActual -= 40;
      if (espaciadoObstaculoActual < espaciadoMinimoObstaculo) {
        espaciadoObstaculoActual = espaciadoMinimoObstaculo;
      }
    }
    fill(255);
    stroke(255);
    textSize(64);
    text(puntaje, 940, windowHeight - 600);
    noStroke();
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
      saltar();
    }
  } else if (estadoJuego === "finDelJuego") {
    if (key == 'r' || key == 'R') {
      reiniciarJuego();
    }
  }
}

function keyReleased() {
  if (key == 's' || key == 'S') {
    restablecerHitbox();
  }
}

function reiniciarJuego() {
  estadoJuego = "menu";
  obstaculos = [];
  objetosVoladores = [];
  puntaje = 0;
  espaciadoObstaculoActual = intervaloSpawnObstaculo;
  posXFondo = 0;
  jugadorX = 50;
  jugadorY = height - 50;
  jugadorTamano = jugadorTamanoBase;
  jugadorVelocidadY = 0;
  loop();
}

function saltar() {
  if (jugadorY == height - jugadorTamano) {
    jugadorVelocidadY = -20;
  }
}

function colisiona(x1, y1, w1, h1, x2, y2, w2, h2) {
  return (
    x1 + w1 > x2 &&
    x1 < x2 + w2 &&
    y1 + h1 > y2 &&
    y1 < y2 + h2
  );
}

function reducirHitbox() {
  if (jugadorTamanoActual === jugadorTamanoBase && jugadorY === height - jugadorTamano) {
    jugadorTamanoActual -= 20;
    jugadorY = height - jugadorTamanoActual; // Ajusta la posición hacia abajo
    jugadorTamano = jugadorTamanoActual; // Actualiza el tamaño de colisión
  }
}

function restablecerHitbox() {
  if (jugadorTamanoActual < jugadorTamanoBase) {
    jugadorTamanoActual = jugadorTamanoBase;
    jugadorY = height - jugadorTamanoActual; // Ajusta la posición hacia abajo
    jugadorTamano = jugadorTamanoActual; // Actualiza el tamaño de colisión
  }
}

function actualizarJugador() {
  jugadorVelocidadY = jugadorVelocidadY + jugadorGravedad;
  jugadorY = jugadorY + jugadorVelocidadY;
  jugadorY = constrain(jugadorY, 0, height - jugadorTamano);
}

function mostrarJugador() {
  image(imagenJugador, jugadorX, jugadorY, jugadorTamanoActual, jugadorTamanoActual);
}

function moverObstaculo(obstaculo) {
  obstaculo.x -= 5;
}

function mostrarObstaculo(obstaculo) {
  image(imagenObstaculo, obstaculo.x, obstaculo.y, obstaculo.w, obstaculo.h);
}

function fueraDePantalla(obstaculo) {
  return obstaculo.x < -obstaculo.w;
}

function moverObjetoVolador(objetoVolador) {
  objetoVolador.x -= 5;
}

function mostrarObjetoVolador(objetoVolador) {
  image(imagenObjetoVolador, objetoVolador.x, objetoVolador.y, objetoVolador.w, objetoVolador.h);
}

function fueraDePantalla(objetoVolador) {
  return objetoVolador.x < -objetoVolador.w;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
