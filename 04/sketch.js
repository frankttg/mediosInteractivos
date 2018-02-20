
var boton1x = 40;
var boton1y = 40;
var boton1tam = 50;

var boton2x = 100;
var boton2y = 40;
var boton2tam = 50;

var boton3x = 380;
var boton3y = 35;
var boton3tam = 50;

var boton4x = 570;
var boton4y = 35;
var boton4tam = 50;

var boton5x = 500;
var boton5y = 60;
var boton5tam = 75;

var errasex = 800;
var errasey = 40;
var errasetam = 45;



var herramienta = 0;
var colorSelect = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(240, 136, 38 );

}

function draw() {
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

 
    

		if (colorSelect == 0) {
			fill(35, 195, 55);
		}
		if (colorSelect == 1) {
			fill(0, 100, 255);
		}
    if (colorSelect == 3) {
      fill(255);
    }

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
    
     function mouseReleased(){
       if (herramienta == 2) {
      saveCanvas( 'miImagen', '.jpg');
			background(240, 136, 38 );
		}
       
     }