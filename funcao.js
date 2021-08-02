rotate = 0;

document.addEventListener("DOMContentLoaded", function () { // Usando eventListener, e quando a página for carregada...

  document.getElementById("noventa").addEventListener("click", function () { //Quando houver um clique no botão next..

    if (rotate == 360) { rotate = 0 } //Verificamos se o valor da variável rotate é 360, se for zeramos o valor.

    rotate = rotate + 90; //Fazemoz um incremento de 30, ou seja se antes tinha 0 e incrementamos 30 temos o valor de 30, na próxima execução se temos 30 e incrementamos mais 30, vamos para 60 e assim por diante.

    document.getElementById("img").style.transform = "rotate(" + rotate + "deg)"; //Acessamos o elemento img e através do style.transform atribuimos o rotate com o valor atual de nossa variável.
  });

  document.getElementById("centoitenta").addEventListener("click", function () { //Quando houver um clique no botão voltar..

    if (rotate == -360) { rotate = 0 } //Verificamos se o valor da variável rotate é -360, se for zeramos o valor.

    rotate = rotate + 180;//Fazemoz um incremento de -30, ou seja se antes tinha 0 e incrementamos -30 temos o valor de -30, na próxima execução se temos -30 e incrementamos mais -30, vamos para -60 e assim por diante. isto fará nosso elemento voltar.

    document.getElementById("img").style.transform = "rotate(" + rotate + "deg)"; //Acessamos o elemento img e através do style.transform atribuimos o rotate com o valor atual de nossa variável.
  });

  document.getElementById("zencetenta").addEventListener("click", function () {

    if (rotate == -360) { rotate = 0 } //Verificamos se o valor da variável rotate é -360, se for zeramos o valor.

    rotate = rotate + 270;//Fazemoz um incremento de -30, ou seja se antes tinha 0 e incrementamos -30 temos o valor de -30, na próxima execução se temos -30 e incrementamos mais -30, vamos para -60 e assim por diante. isto fará nosso elemento voltar.

    document.getElementById("img").style.transform = "rotate(" + rotate + "deg)"; //Acessamos o elemento img e através do style.transform atribuimos o rotate com o valor atual de nossa variável.
 
  });

  document.getElementById("aumentar").addEventListener("click", function () {
    width = 900%

    document.getElementById("img").style.transform 

  });

});


