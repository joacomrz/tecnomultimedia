class Tablero {
  mostrar() {
    fill(255, 0, 0);
    textSize(50);
    let anchuraTexto = textWidth("Puntaje: " + juego.puntaje);
    text("Puntaje: " + juego.puntaje, width / 1.8 - anchuraTexto / 2, 70);
  }
}
