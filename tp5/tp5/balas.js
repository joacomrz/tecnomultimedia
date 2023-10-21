class Bala {
  constructor(x, y, velocidad, tamano, retrasoAparicion) {
    this.x = x;
    this.y = y;
    this.velocidad = velocidad;
    this.tamano = tamano;
    this.retrasoAparicion = retrasoAparicion;
    this.rotacion = random(TWO_PI); // Generar un ángulo de rotación aleatorio. (TWO PI es el equivalente a dos PI, lo cual es 360º)
  }

  mover() {
    if (this.retrasoAparicion <= 0) {
      this.y += this.velocidad;
    } else {
      this.retrasoAparicion--;
    }
  }

  mostrar() {
    if (this.retrasoAparicion <= 0) {
      push(); // Guardar el estado de transformación actual.
      translate(this.x, this.y); // Traducir a la posición de la bala.
      rotate(this.rotacion); // Aplicar la rotación aleatoria.
      image(imagenBala, -this.tamano / 2, -this.tamano / 2, this.tamano, this.tamano);
      pop(); // Restaurar el estado de transformación anterior.
    }
  }
}
