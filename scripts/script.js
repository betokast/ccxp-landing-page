const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const min = document.getElementById("minuto");
const seg = document.getElementById("segundo");
const lancamento = "17 dec 2024";
let ingressos = [];

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

setInterval(countdown, 1000);

// Função para o highlight dos cards
function highlightCard(selector) {
  let element = document.querySelector(selector);
  element.classList.toggle('card-highlight');}


// Função para identificar tecla pressionada
function checkKeyboardCode() {
  document.addEventListener('keydown', (event) => {
    let nome = event.key;
    let code = event.code;
    alert(`Tecla pressionada ${nome} \r\n Key Code: ${code}`);
  }, false);
}

// Função para reagir a uma tecla pressionada
function addKeyboardEventListener() {
  document.addEventListener('keydown', (event) => {
    var ingresso1 = document.getElementById("quinta");
    var ingresso2 = document.getElementById("sexta");
    var ingresso3 = document.getElementById("sabado");
    var ingresso4 = document.getElementById("domingo");

    var code = event.code;
    if(code == 'Digit1' || code == 'Numpad1') {
      ingresso1.classList.toggle("card-highlight");
      ingresso2.classList.remove("card-highlight");
      ingresso3.classList.remove("card-highlight");
      ingresso4.classList.remove("card-highlight");
    }

    if(code == 'Digit2' || code == 'Numpad2') {
      ingresso1.classList.remove("card-highlight");
      ingresso2.classList.toggle("card-highlight");
      ingresso3.classList.remove("card-highlight");
      ingresso4.classList.remove("card-highlight");
    }

    if(code == 'Digit3' || code == 'Numpad3') {
      ingresso1.classList.remove("card-highlight");
      ingresso2.classList.remove("card-highlight");
      ingresso3.classList.toggle("card-highlight");
      ingresso4.classList.remove("card-highlight");
    }

    if(code == 'Digit4' || code == 'Numpad4') {
      ingresso1.classList.remove("card-highlight");
      ingresso2.classList.remove("card-highlight");
      ingresso3.classList.remove("card-highlight");
      ingresso4.classList.toggle("card-highlight");
    }
  }, false);
}

//Função para incluir ou remover seleção para os cards
function selectedCard(selector) {
  let element = document.querySelector(selector);
  element.classList.toggle("card-selected");
  if(ingressos.includes(selector)) {
    ingressos.pop(selector);
  } else {
    ingressos.push(selector);
  }
}

//Função para mostrar a confirmação dos cards selecionados ao clicar no botão Garanta o seu!
function showSelectedCards() {
  if(ingressos.length > 0) {
    alert("Ingressos Selecionados:" + ingressos);
  }
}

// checkKeyboardCode();
addKeyboardEventListener();