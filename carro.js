//posições e atividades do carro
// posições de eixo X
let xCarros = [600,600,600,600,600,600];

//velocidade dos carros
let yCarros = [40,95,150,210,270,318];
let comprimentoCarro = 50;
let alturaCarro = 40;

//Velocidade dos carros
let velocidadeCarros = [2,2.5,3.2,5,3,2.3];


function mostraCarro(){
  for(let i =0; i < imagemCarros.length; i++){
     image(imagemCarros[i],xCarros[i],yCarros[i],50,40);
  }
}

function movimentaCarro(){
  for(let i = 0; i < xCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if(passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
     
    }
  }
}

function passouTodaTela(xCarro){
  return xCarro < -50;
}



