class Button {
  constructor(x, y, image, textoInicial) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.text = textoInicial;
  }

  display() {
    tint(255, 200);
    image(this.image, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    noTint();

    fill(255);
    textSize(22);
    textAlign(CENTER, CENTER);
    text(this.text, this.x, this.y);
  }

  isMouseOver() {
    return mouseX > this.x - this.width / 2 &&
      mouseX < this.x + this.width / 2 &&
      mouseY > this.y - this.height / 2 &&
      mouseY < this.y + this.height / 2;
  }
}
