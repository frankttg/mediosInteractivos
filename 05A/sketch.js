var ano;
var mes;
var día;

var hora;
var minuto;
var segundo;

var s;
var m;
var h;

function setup() { 
  createCanvas(600, 400);
  angleMode(DEGREES);
  
} 

function draw() { 
  background(69);
	
  
  fill(120,69,19);
  strokeWeight(2);

  
  push();
  s = map(segundo, 0, 59, 0, 359);
  translate(width/2, height/2);
  ellipse(0,0,150,150);
	rotate(s);
  line(0,0,0,-160);
  pop();
  
  push();
  m = map(minuto, 0, 59, 0, 359);
  translate(width/2, height/2);
  rotate(m);
  line(0,0,0,-140);
  pop();
  
  if (hora>12){
   hora = hora -12; 
  }
  
  push();
  h = map(hora, 0, 12, 0, 359);
  translate(width/2, height/2);
  rotate(h);
  line(0,0,0,-120);
  pop();
  
  textSize(20);
	fill(0);
	text('' + hora, 260, 245);
	
	textSize(20);
	fill(0);
	text(''+ minuto, 288, 245);
	
	textSize(20);
	fill(0);
	text(''+ segundo, 316, 245);
  
  
  
	hora= hour();
	minuto = minute();
	segundo = second();
	
	ano=year();
	mes=month();
  dia=day();
	
	
	
}