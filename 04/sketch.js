// Primero definimos la posición y el tamaño de los botones. 
var boton1x = 40;
var boton1y = 40;
var boton1tam = 50;

var boton2x = 100;
var boton2y = 40;
var boton2tam = 50;

var boton3x = 160;
var boton3y = 40;
var boton3tam = 50;

var boton4x = 220;
var boton4y = 40;
var boton4tam = 50;

var boton5x = 500;
var boton5y = 60;
var boton5tam = 75;

var errasex = 800;
var errasey = 40;
var errasetam = 45;


// Estas dos variables nos sirven para saber qué color y qué herramienta
// tenemos seleccionada.
var herramienta = 0;
var colorSelect = 0;

function setup() {
	// Usamos windowWidth y windowHeight para saber cual es el tamaño de
	// la ventana del explorador de la persona que esta visitando nuestra 
	// página y creamos un canvas de este tamaño.
	createCanvas(windowWidth, windowHeight);
	background(240, 136, 38 );

}

function draw() {
	// Pintamos los botones en la pantalla para que el usuario sepa donde
	// debe hace click. Aunque en este ejemplo solo de usan rectángulos,
	// estos botones deberían ser representativos de la función para la
	// que sirven. 
	fill(117);
	rect(0, 0, windowWidth, 120);

	fill(230, 87, 83);
	rect(boton1x, boton1y, boton1tam, boton1tam);
	fill(100, 36, 45);
	rect(boton2x, boton2y, boton2tam, boton2tam);
	fill(35, 195, 75);	
  rect(boton3x, boton3y, boton3tam, boton3tam);
	fill(36, 100, 240);
	rect(boton4x, boton4y, boton4tam, boton4tam);
  fill(129, 16, 35);
  ellipse(boton5x,boton5y, boton5tam, boton5tam);
  fill(255);
  stroke(0);
  strokeWeight(3);
  rect(errasex, errasey, 65, errasetam);
  noStroke();



	if (mouseIsPressed) {
		// Definimos el área sensible de los botones y para que sirven.
		// En este caso tenemos dos botones que sirven para cambiar entre
		// dos herramientas.
		if (mouseX > boton1x && mouseX < boton1x + boton1tam &&
			mouseY > boton1y && mouseY < boton1y + boton1tam) {
			herramienta = 0;
		}
		if (mouseX > boton2x && mouseX < boton2x + boton2tam &&
			mouseY > boton2y && mouseY < boton2y + boton2tam) {
			herramienta = 1;
		}
		// Y dos botones que sirven para cambiar entre dos colores.
		if (mouseX > boton3x && mouseX < boton3x + boton3tam &&
			mouseY > boton3y && mouseY < boton3y + boton3tam) {
			colorSelect = 0;
		}
		if (mouseX > boton4x && mouseX < boton4x + boton4tam &&
			mouseY > boton4y && mouseY < boton4y + boton4tam) {
			colorSelect = 1;
		}
    if (mouseX > boton5x && mouseX < boton5x + boton5tam &&
			mouseY > boton5y && mouseY < boton5y + boton5tam) {
			herramienta = 2;
		}
    
    if (mouseX > errasex && mouseX < errasex + errasetam &&
			mouseY > errasey && mouseY < errasey + errasetam) {
			colorSelect = 3;
		}


		// Una vez seleccionado el color, lo usamos para cambiar el
		// color de relleno de la figura que pintamos después.
		if (colorSelect == 0) {
			fill(35, 195, 55);
		}
		if (colorSelect == 1) {
			fill(0, 100, 255);
		}
    if (colorSelect == 3) {
      fill(255);
    }
		// Y una vez seleccionada la herramienta la usamos para pintar
		// en la pantalla.
		if (herramienta == 0) {
			rect(mouseX - 10, mouseY - 10, 45, 45);
			
		}
		if (herramienta == 1) {
			ellipse(mouseX - 10, mouseY - 10, 5, 5);
			line(width / 2, height / 2, mouseX, mouseY);
		}
    
    if (herramienta == 3){
     line(mouseX, mouseY,90,90);
      
    }
	}
}