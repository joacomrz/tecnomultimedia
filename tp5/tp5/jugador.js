class Jugador {
  constructor() {
    this.x = width / 2;
  }

  mostrar() {
    // Mostrar la imagen del jugador
    image(imagenJugador, this.x - 20, height - 40, 40, 40); // Ajustar la posición y el tamaño
  }

}
