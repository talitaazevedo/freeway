let xAtor = 90;
let yAtor = 366;
let colisao = false;

let meusPontos = 0;


function mostraAtor(){
  
  image(imagemAtor,xAtor,yAtor,30,30);

}

function movimentaAtor(){
  
  if(keyIsDown(UP_ARROW)){
    yAtor -=3;
   
  }
  
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){ yAtor +=3;}
  
  
  }
    
}

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i],comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if(colisao){
        voltaAtorPosicaoInicial();
      somColisao.play();
      if(removePontos()){
        meusPontos -=1;
              
      }
        
      
      
    }
    
  }

}
function voltaAtorPosicaoInicial(){
  yAtor = 366;

}



function incluiPontos(){
  textSize(25);
  textAlign(CENTER);  
  fill(255,240,60);
  text(meusPontos, width / 4, 27);
  



}


function marcaPonto(){
  if(yAtor < 15){
    meusPontos+=1;
    voltaAtorPosicaoInicial();
    somPonto.play();
  
  }


}

function removePontos(){
 return meusPontos > 0;


}


function podeSeMover(){
  return yAtor < 366;


}
