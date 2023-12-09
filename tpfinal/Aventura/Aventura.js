
function preload() {
  buttonImageA = loadImage("data/borde.png", img => {
    img.resize(200, 100);
  }
  );
  buttonImageB = loadImage("data/borde.png", img => {
    img.resize(200, 100);
  }
  );
  font = loadFont("data/AncientMedium.ttf");
}
class Aventura {
  constructor(screens) {
    this.aspectRatio = 600 / 600;
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.screens = [];
    this.currentScreen = null;
    this.juego = null;
    this.iniciarMinijuego = false;
    this.font = "data/AncientMedium.ttf";
  }
  setup() {
    this.canvasWidth = Math.min(windowWidth, windowHeight * this.aspectRatio);
    this.canvasHeight = Math.min(windowHeight, windowWidth / this.aspectRatio);
    createCanvas(this.canvasWidth, this.canvasHeight);

    this.screens.push(new Screen("LA CALLE.\n La noche se cierne sobre la ciudad,\n sus calles envueltas en sombras que susurran secretos oscuros.\n Un solitario protagonista, envuelto en su capa,\n avanza con paso firme por el empedrado camino hacia un bar\n que brilla como un faro en medio de la negrura.", "data/1.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("El protagonista ha vuelto a su casa,\n a su rutina aburrida, durmiendo en su cama preparándose para el otro día volver a hacer lo de siempre.\n Antes de dormir se pregunta si su falta de decisión ha afectado su vida de alguna manera u otra, ", "data/0.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("EL BAR\n Los dos valientes caballeros, envueltos en sus armaduras relucientes,\n susurran en voz baja mientras las llamas crepitan en la oscuridad.\nSus palabras se entrelazan con el aire cargado de misterio,\n hablando de un castillo sumido en la sombra\n y una princesa cautiva en su corazón.\n", "data/2.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("EL BOSQUE\n El protagonista se adentra en un bosque como ningún otro,\n donde los árboles se elevan majestuosamente hacia el cielo,\n sus hojas brillando con un resplandor de tonalidades cian.\n La luz que se filtra entre las ramas crea un espectáculo deslumbrante,\n pero el aire denso y tenebroso que lo envuelve añade una sensación de inquietud a su caminar. \n Puedes decidir si ir hacía tú izquierda o derecha, cuál eligirás?", "data/3.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("HAS MUERTO", "data/4d.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("EL CASTILLO\n El protagonista, logra llegar a lo que parece ser un castillo,\n en medio de aquel entorno sombrío, se encuentra con un escalofriante descubrimiento.\n Frente a él yace un cuerpo inmóvil, con la mirada vacía y una espada oxidada clavada en su pecho,\n como un cruel testimonio de un pasado turbulento.", "data/5.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("¿Quieres tomar la espada?", "data/6.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("Has tomado la espada.", "data/7.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("EL CASTILLO\n El protagonista se encuentra ante la entrada de un imponente castillo, \ncuyas altas torres se alzan hacia el cielo como guardianes silenciosos de los secretos que alberga.\n En medio de la oscuridad, descubre un pasadizo estrecho y enigmático\n que se adentra en las profundidades del castillo, prometiendo revelar misterios ocultos.", "data/8.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("EL CASTILLO\n El protagonista se encuentra ante la entrada de un imponente castillo, \ncuyas altas torres se alzan hacia el cielo como guardianes silenciosos de los secretos que alberga.\n En medio de la oscuridad, descubre un pasadizo estrecho y enigmático\n que se adentra en las profundidades del castillo, prometiendo revelar misterios ocultos.", "data/8b.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("A medida que avanzas, encuentras un esqueleto viviente,\n te acercas, cada paso resuena en el suelo de piedra, pero el esqueleto permanece ajeno a su presencia.\n Sin poder ver ni oír, el esqueleto está vivo, pero no detecta tu presencia,\n sus huesos encontrándose en un equilibrio frágil.", "data/9.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("A medida que avanzas, encuentras un esqueleto viviente,\n te acercas, cada paso resuena en el suelo de piedra, pero el esqueleto permanece ajeno a su presencia.\n Sin poder ver ni oír, el esqueleto está vivo, pero no detecta tu presencia,\n sus huesos encontrándose en un equilibrio frágil.", "data/9b.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("Haz destruido al esqueleto,o eso era anteriormente,\n ahora solo queda una pila de huesos tirada en el frío sedimento de piedra.\n Has ignorado completamente al esqueleto,\n empiezas a dudar si siquiera se dio cuenta de tu presencia.", "data/10.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("LA CÁMARA\n  navegando por los oscuros pasadizos del castillo,\n  finalmente emerge en una misteriosa cámara. \n Allí, en el centro del altar, descansa una princesa, dormida en un profundo sueño.\n  Su belleza trasciende el tiempo, sus cabellos carmesí y su piel pálida\n  contrastan con el entorno sombrío.", "data/10b.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("LA CÁMARA\n  navegando por los oscuros pasadizos del castillo,\n  finalmente emerge en una misteriosa cámara. \n Allí, en el centro del altar, descansa una princesa, dormida en un profundo sueño.\n  Su belleza trasciende el tiempo, sus cabellos carmesí y su piel pálida\n  contrastan con el entorno sombrío.", "data/11.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("Surgiendo de las sombras, se materializa un esqueleto de proporciones gigantescas,\n adornado con vestiduras doradas que brillan con la luz tenue de la cámara.\n Sus huesos, de un tamaño que supera cualquier medida humana,\n exudan una presencia amenazante y poderosa.", "data/11b.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("No puedo negar que siento cierta compasión por tu alma atormentada.\n Pero para salvar a la princesa y desatarla de su sueño eterno, no basta con valentía.\n Solo un hombre con paz interna y nobleza de espíritu podrá tomar su mano y liberarla.\n Con una espada de ese calibre, sin habilidad para pelear, necesitarás algo que te destaque sobre el resto. Ya puedes irte, pero no vuelvas humano.", "data/12.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("Lo has enfurecido... Ya no hay escapatoria", "data/13.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("El esqueleto gigante nota al protagonista desarmado y le elogia por su pacifismo\n La presencia del esqueleto gigante se transforma en una figura benevolente y sabia,\n y agradece al protagonista por su compromiso con la paz y el respeto a la vida.\n En un gesto inesperado, el esqueleto gigante otorga al protagonista una bendición especial antes de desvanecerse,\n liberando a la princesa de su sueño eterno.", "data/14.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("Has muerto...", "data/15.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("Has escapado de tu muerte inminente, volviendo del castillo a tu pueblo la luna estaba \n todavía en su máximo esplendor pero tú... Tú ya no erás lo mismo \n desfiaste a la muerte y no volverás a tomar esa chance... No? ", "data/16.png", buttonImageA, buttonImageB));
    this.screens.push(new Screen("Pregunta 21", "data/trp.png", buttonImageA, buttonImageB));

    this.currentScreen = this.screens[0];
    this.juego = new Juego();
    this.juego.setup();
  }

  draw() {
    background(255);
    textFont(font);
    if (this.iniciarMinijuego) {
    } else {
      this.currentScreen.updateButtonText();
      this.currentScreen.draw();
    }
  }

  mouseClicked() {
    let clickedButton = this.currentScreen.checkButtonClick();

    if (clickedButton !== null) {
      if (this.iniciarMinijuego) {
        let nextScreenIndex = this.currentScreen.getNextScreenIndex(clickedButton);
        if (nextScreenIndex !== null) {
          this.currentScreen = this.screens[nextScreenIndex];
        } else {
          console.log("¡Fin del juego!");
        }
      } else {
        let nextScreenIndex = this.currentScreen.getNextScreenIndex(clickedButton);
        if (nextScreenIndex !== null) {
          this.currentScreen = this.screens[nextScreenIndex];

          if (this.currentScreen.question === "Pregunta 21") {
            this.juego.reiniciar();
            this.juego.setup();
            this.juego.iniciarMinijuego = true;
          }
        } else {
          console.log("¡Fin del juego!");
        }
      }
    }
  }
}

let game = new Aventura();

function setup() {
  game.setup();
}

function draw() {
  game.draw();
}

function mouseClicked() {
  game.mouseClicked();
}
