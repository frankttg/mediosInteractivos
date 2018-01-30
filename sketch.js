function setup() {
  createCanvas(600, 360)
  background(202, 195, 185);

  strokeWeight(4); //rectángulo rojo
  stroke(0);
  fill(121, 6, 23);
  rect(500, 250, 55, 50);

  strokeWeight(1); //elipse morada
  stroke(0);
  fill(110, 82, 149);
  ellipse(236, 110, 85, 85);

  strokeWeight(1); //elipse grís
  stroke(0);
  fill(111, 121, 106);
  ellipse(420, 180, 140, 140);

  strokeWeight(0); //triángulo amarillo translúcido
  noStroke();
  fill(190, 159, 56, 205);
  beginShape();
  vertex(402, 17);
  vertex(430, 160);
  vertex(310, 120);
  endShape(CLOSE);

  strokeWeight(1.5); //arcos
  stroke(0);
  noFill();
  arc(130, 230, 120, 125, PI, PI);
  arc(80, 154, 120, 125, 11 / 4, TWO_PI + 1 / 4);
  arc(20, 88, 120, 130, PI, PI);

  strokeWeight(4); //esquina
  stroke(0);
  fill(102, 98, 84);
  beginShape();
  vertex(0, 30);
  vertex(38, 0);
  vertex(58, 0);
  vertex(0, 45);
  endShape();


  strokeWeight(5); //líneas base
  stroke(0);
  fill(250, 250, 250);
  line(240, 0, 408, 170);

  strokeWeight(4);
  stroke(0);
  fill(250, 250, 250);
  beginShape();
  vertex(14, 19);
  vertex(20, 28);
  vertex(15, 32);
  vertex(9, 23);
  endShape(CLOSE);
  beginShape();
  vertex(9, 25);
  vertex(13, 35);
  vertex(8, 39);
  vertex(2, 30);
  endShape(CLOSE);
  beginShape();
  vertex(3, 31);
  vertex(7, 40);
  vertex(2, 44);
  vertex(-4, 36);
  endShape(CLOSE);

  strokeWeight(3);
  stroke(0);
  line(0, 17, 400, 17);
  line(25, 0, 25, 360);
  line(210, 0, 275, 280);
  line(430, 0, 600, 250);
  line(460, 0, 481, 30);
  line(0, 75, 75, 0);

  line(0, 170, 135, 25);
  line(532, 280, 570, 280);
  line(145, 0, 145, 16);
  strokeWeight(4); //línea roja
  stroke(189, 21, 29);
  line(143, 0, 143, 14);

  strokeWeight(2);
  stroke(0);
  line(135, 110, 373, 110);
  line(195, 220, 395, 220);
  line(0, 67, 67, 0);
  line(0, 85, 85, 0);
  line(532, 275, 570, 275);
  line(0, 178, 142, 27);
  line(0, 186, 147, 31);
  line(267, 0, 270, 17);



}