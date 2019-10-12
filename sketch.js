function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  
  // funções do ator
  mostraAtor();
  movimentaAtor();
  marcaPonto();
  
  //funções do carro
  mostraCarro();
  movimentaCarro();
  voltaPosicaoInicialCarro();
  
  verificaColisao();
  incluiPontos();
  
  
  
}

console.log("### JOGA AEWSS ####")