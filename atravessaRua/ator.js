//código do ator
let yAtor = 366;
let xAtor = 100;
let colisao = false;
let meuPonto = 0;

function mostraAtor() {
  image(imagemDoAtor, 100, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    
    if(podeSeMover()){
       yAtor += 3;
       }
  
  }
}

function podeSeMover(){
  return yAtor < 366;
}



function verificaColisao() {
  //collideRectCircle(x1, y1 width1, heigth1, cx, cy, diameter)

  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarros,
      alturaCarros,
      xAtor,
      yAtor,
      15
    );

    for (let i = 0; i < imagemMotos.length; i++) {
      colisao = collideRectCircle(
        xMotos[i],
        yMotos[i],
        comprimentoMotos,
        alturaMotos,
        xAtor,
        yAtor,
        15
      );
    }
  }
  if (colisao) {
    voltaPosicaoInicial();
    if (pontosMaiorQueZero){
    meuPonto -= 1
  }
 }
}

function voltaPosicaoInicial() {
  yAtor = 366;
}

function incluiPontos() {
  textSize(25);
  textAlign(CENTER);
  fill(color(255, 225, 60));
  text(meuPonto, width / 5, 28);
}

function marcaPonto() {
  if (yAtor < 15) {
    meuPonto += 1;
    voltaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meuPonto > 0
}
