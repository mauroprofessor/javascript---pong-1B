function setup() {
  createCanvas(600, 400);
}

let xBolinha = 300
let yBolinha = 200
let diametro = 20
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6


function draw() {
  background(51);
  
  circle(xBolinha,yBolinha,diametro);
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
  
  if (xBolinha > 600){velocidadeXBolinha *= -1;}
  if (xBolinha < 0){velocidadeXBolinha *= -1;}
  
  if (yBolinha > 400){velocidadeYBolinha *= -1;}
  if (yBolinha < 0){velocidadeYBolinha *= -1;}
  
 
}
