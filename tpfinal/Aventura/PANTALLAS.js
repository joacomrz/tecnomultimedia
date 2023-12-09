class Screen {
  constructor(question, image, buttonImageA, buttonImageB) {
    this.question = question;
    this.image = loadImage(image);
    this.buttonImageA = buttonImageA;
    this.buttonImageB = buttonImageB;
    this.opcion1 = new Button(width / 2, height / 2, this.buttonImageA, this.text);
    this.opcion2 = new Button((1.5 * width), height / 2, this.buttonImageB, this.text);
  }

  displayBackground() {
    image(this.image, 0, 0, width, height);
  }

  displayText() {
    fill(255);
    textSize(28);
    textAlign(CENTER, TOP);
    text(this.question, width / 2, 20);
  }



  checkButtonClick() {
    if (this.opcion1.isMouseOver()) {
      return this.opcion1;
    } else if (this.opcion2.isMouseOver()) {
      return this.opcion2;
    }
    return null;
  }

  displayButtons() {
    this.opcion1.display();
    this.opcion2.display();
  }
  getNextScreenIndex(clickedButton) {
    if (this === game.screens[0]) {

      if (clickedButton === this.opcion1) {
        return 1;
      } else if (clickedButton === this.opcion2) {
        return 2;
      }
    } else if (this === game.screens[1]) {

      if (clickedButton === this.opcion1) {
        return 0;
      } else if (clickedButton === this.opcion2) {
        return 0;
      }
    } else if (this === game.screens[2]) {

      if (clickedButton === this.opcion1) {
        return 3;
      } else if (clickedButton === this.opcion2) {
        return 0;
      }
    } else if (this === game.screens[3]) {

      if (clickedButton === this.opcion1) {
        return 4;
      } else if (clickedButton === this.opcion2) {
        return 5;
      }
    } else if (this === game.screens[4]) {

      if (clickedButton === this.opcion1) {
        return 0;
      } else if (clickedButton === this.opcion2) {
        return 0;
      }
    } else if (this === game.screens[5]) {

      if (clickedButton === this.opcion1) {
        return 3;
      } else if (clickedButton === this.opcion2) {
        return 6;
      }
    } else if (this === game.screens[6]) {
      if (clickedButton === this.opcion1) {
        return 7;
      } else if (clickedButton === this.opcion2) {
        return 9;
      }
    } else if (this === game.screens[7]) {

      if (clickedButton === this.opcion1) {
        return 8;
      } else if (clickedButton === this.opcion2) {
        return 6;
      }
    } else if (this === game.screens[8]) {

      if (clickedButton === this.opcion1) {
        return 10;
      } else if (clickedButton === this.opcion2) {
        return 8;
      }
    } else if (this === game.screens[9]) {

      if (clickedButton === this.opcion1) {
        return 11;
      } else if (clickedButton === this.opcion2) {
        return 6;
      }
    } else if (this === game.screens[10]) {

      if (clickedButton === this.opcion1) {
        return 12;
      } else if (clickedButton === this.opcion2) {
        return 14;
      }
    } else if (this === game.screens[11]) {

      if (clickedButton === this.opcion1) {
        return 13;
      } else if (clickedButton === this.opcion2) {
        return 13;
      }
    } else if (this === game.screens[13]) {

      if (clickedButton === this.opcion1) {
        return 15;
      } else if (clickedButton === this.opcion2) {
        return 1;
      }
    } else if (this === game.screens[14]) {

      if (clickedButton === this.opcion1) {
        return 16;
      } else if (clickedButton === this.opcion2) {
        return 1;
      }
    } else if (this === game.screens[15]) {

      if (clickedButton === this.opcion1) {
        return 18;
      } else if (clickedButton === this.opcion2) {
        return 1;
      }
    } else if (this === game.screens[10]) {

      if (clickedButton === this.opcion1) {
        return 12;
      } else if (clickedButton === this.opcion2) {
        return 14;
      }
    } else if (this === game.screens[12]) {

      if (clickedButton === this.opcion1) {
        return 17;
      } else if (clickedButton === this.opcion2) {
        return 17;
      }
    } else if (this === game.screens[17]) {

      if (clickedButton === this.opcion1) {
        return 21;
      } else if (clickedButton === this.opcion2) {
        return 21;
      }
    } else if (this === game.screens[14]) {

      if (clickedButton === this.opcion1) {
        return 16;
      } else if (clickedButton === this.opcion2) {
        return 16;
      }
    } else if (this === game.screens[16]) {

      if (clickedButton === this.opcion1) {
        return 0;
      } else if (clickedButton === this.opcion2) {
        return 21;
      }
    } else if (this === game.screens[18]) {

      if (clickedButton === this.opcion1) {
        return 0;
      } else if (clickedButton === this.opcion2) {
        return 0;
      }
    } else if (this === game.screens[20]) {

      if (clickedButton === this.opcion1) {
        return 0;
      } else if (clickedButton === this.opcion2) {
        return 0;
      }
    } else if (this === game.screens[21]) {

      if (clickedButton === this.opcion1) {
        return null;
      } else if (clickedButton === this.opcion2) {
        return null;
      }
    } else if (this === game.screens[20]) {

      if (clickedButton === this.opcion1) {
        return 0;
      } else if (clickedButton === this.opcion2) {
        return 0;
      }
    } else if (this === game.screens[19]) {

      if (clickedButton === this.opcion1) {
        return 0;
      } else if (clickedButton === this.opcion2) {
        return 0;
      }
    }


    return null;
  }
  updateButtonText() {
    if (this === game.screens[0]) {
      this.opcion1.text = "Volver";
      this.opcion2.text = "Entrar";
    } else if (this === game.screens[1]) {
      this.opcion1.text = "Reiniciar";
      this.opcion2.text = "Reiniciar";
    } else if (this === game.screens[2]) {
      this.opcion1.text = "Investigar";
      this.opcion2.text = "Volver";
    } else if (this === game.screens[3]) {
      this.opcion1.text = "Izquierda";
      this.opcion2.text = "Derecha";
    } else if (this === game.screens[4]) {
      this.opcion1.text = "Reiniciar";
      this.opcion2.text = "Reiniciar";
    } else if (this === game.screens[5]) {
      this.opcion1.text = "Volver";
      this.opcion2.text = "Seguir";
    } else if (this === game.screens[6]) {
      this.opcion1.text = "Tomar";
      this.opcion2.text = "Ignorar";
    } else if (this === game.screens[7]) {
      this.opcion1.text = "Seguir";
      this.opcion2.text = "Soltar";
    } else if (this === game.screens[8]) {
      this.opcion1.text = "Seguir";
      this.opcion2.text = "No hay vuelta atrás";
    } else if (this === game.screens[9]) {
      this.opcion1.text = "Seguir";
      this.opcion2.text = "Volver";
    } else if (this === game.screens[10]) {
      this.opcion1.text = "Matar";
      this.opcion2.text = "Ignorar";
    } else if (this === game.screens[11]) {
      this.opcion1.text = "Ignorar";
      this.opcion2.text = "Ignorar";
    } else if (this === game.screens[12]) {
      this.opcion1.text = "Seguir";
      this.opcion2.text = "Que has hecho...";
    } else if (this === game.screens[13]) {
      this.opcion1.text = "Seguir";
      this.opcion2.text = "Irse...";
    } else if (this === game.screens[14]) {
      this.opcion1.text = "Seguir";
      this.opcion2.text = "Irse";
    } else if (this === game.screens[15]) {
      this.opcion1.text = "Tomar a la princesa";
      this.opcion2.text = "Irse";
    } else if (this === game.screens[16]) {
      this.opcion1.text = "Irse";
      this.opcion2.text = "Enfrentarlo";
    } else if (this === game.screens[17]) {
      this.opcion1.text = "Correr";
      this.opcion2.text = "Pelear";
    } else if (this === game.screens[18]) {
      this.opcion1.text = "Reintentar";
      this.opcion2.text = "Reintentar";
    } else if (this === game.screens[19]) {
      this.opcion1.text = "Reintentar";
      this.opcion2.text = "Reintentar";
    } else if (this === game.screens[20]) {
      this.opcion1.text = "Reintentar";
      this.opcion2.text = "Reintentar";
    }
  }

  draw() {
    this.displayBackground();
    this.displayText();
    this.displayButtons();

    if (this.question === "Pregunta 21") {
      game.juego.update(this);
      game.juego.draw();
    }
  }
}
