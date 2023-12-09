class Tablero {
  constructor(juego) {
    this.juego = juego;
  }

  mostrar() {
    if (this.juego) {
      fill(255, 0, 0);
      textSize(50);
      let anchuraTexto = textWidth("Puntaje: " + this.juego.puntaje);
      text("Puntaje: " + this.juego.puntaje, width / 1.8 - anchuraTexto / 2, 70);
    }
  }
}
