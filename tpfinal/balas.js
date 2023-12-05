class Bala {
  constructor(x, y, velocidad, tamano, retrasoAparicion) {
    this.x = x;
    this.y = y;
    this.velocidad = velocidad;
    this.tamano = tamano;
    this.retrasoAparicion = retrasoAparicion;
    this.rotacion = random(TWO_PI);
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
      push();
      translate(this.x, this.y);
      rotate(this.rotacion);
      image(juego.imagenBala, -this.tamano / 2, -this.tamano / 2, this.tamano, this.tamano);
      pop();
    }
  }
}
