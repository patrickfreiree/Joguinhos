//código do carro e moto
let yCarros = [40, 90, 140, 260];
let xCarros = [600, 600, 600, 600];
let velocidadeCarros = [4, 3, 1.6, 3.6];
let comprimentoCarros = [50];
let alturaCarros = [40];

let yMotos = [300, 310, 100];
let xMotos = [600, 600, 600];
let velocidadeMotos = [3, 4, 6];
let comprimentoMotos = [40];
let alturaMotos = [50];

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    image(
      imagemCarros[i],
      xCarros[i],
      yCarros[i],
      comprimentoCarros,
      alturaCarros
    );
  }

  for (let i = 0; i < imagemMotos.length; i = i + 1) {
    image(imagemMotos[i], xMotos[i], yMotos[i], comprimentoMotos, alturaMotos);
  }
}

function movimentaCarro() {
  
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    xCarros[i] -= velocidadeCarros[i];
  }

  for (let i = 0; i < imagemMotos.length; i = i + 1) {
    xMotos[i] -= velocidadeMotos[i];
  }
}

function posicaoInicial() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    if (passouTodaTela1(xCarros[i])) {
      xCarros[i] = 700;
    }
  }

  for (let i = 0; i < imagemMotos.length; i = i + 1) {
    if (passouTodaTela2(xMotos[i])) {
      xMotos[i] = 1010;
    }
  }
}

function passouTodaTela1(xCarro) {
  return xCarro < -50;
}

function passouTodaTela2(xMoto) {
  return xMoto < -40;
}
