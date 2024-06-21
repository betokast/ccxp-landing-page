const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const min = document.getElementById("minuto");
const seg = document.getElementById("segundo");

const lancamento = "17 dec 2024";

function countdown() {
  const dataLanca = new Date(lancamento);
  const dataAtual = new Date();

  const segTotal = (dataLanca - dataAtual) / 1000;

  const finalDias = Math.floor(segTotal / 60 / 60 / 24);
  const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
  const finalMinutos = Math.floor(segTotal / 60) % 60;
  const finalSegundos = Math.floor(segTotal) % 60;

  dia.innerHTML = `${formatoTempo(finalDias)}D`;
  hora.innerHTML = `${formatoTempo(finalHoras)}H`;
  min.innerHTML = `${formatoTempo(finalMinutos)}M`;
  seg.innerHTML = `${formatoTempo(finalSegundos)}S`;
}

function formatoTempo(tempo) {
  return tempo < 10 ? `0${tempo}` : tempo;
}

countdown();

setInterval(countdown, 1000)