const botoes = document.querySelectorAll(".botao");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
  };
}
botoes[i].classList.add("ativo");
TextDecoderStream



const contadores = docments.querySelectorAll(".contador")
const tempoObjetivo1 = new Date("2025-10-05t000:00:00");
const tempoObjetivo2 = new Date("2025-12-05t00:00:00");
const tempoObjetivo3 = new Date("2025-12-30t00:00:00");
const tempoObjetivo4 = new Date("2024-02-01t00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

  function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    