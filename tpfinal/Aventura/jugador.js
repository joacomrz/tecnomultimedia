class Jugador {
  constructor(juego) {
    this.juego = juego;
    this.x = width / 2;
  }

  mostrar() {
    image(this.juego.imagenJugador, this.x - 20, height - 40, 40, 40);
  }
}
