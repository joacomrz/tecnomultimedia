class Jugador {
  constructor() {
    this.x = width / 2;
  }

  mostrar() {
    image(juego.imagenJugador, this.x - 20, height - 40, 40, 40);
  }
}
